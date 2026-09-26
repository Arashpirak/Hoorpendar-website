// Turns the province boundaries in data-src/ into SVG paths and pin positions (PLAN.md section 6).
// Runs before every build; the result is committed so the browser never loads a map library.
// Usage: node scripts/build-map.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { geoContains, geoMercator } from 'd3-geo';
import type { Feature, MultiPolygon, Polygon, Position } from 'geojson';
import { cities } from '../content/cities.ts';
import { projects } from '../content/projects.ts';
import { PIN_GAP, pinRadius } from '../lib/map.ts';

const WIDTH = 1000;
const PAD = 12;
// Simplification tolerance and output precision, in map units (1 unit ≈ 1 CSS px at full width).
const TOLERANCE = 0.6;
const round = (n: number) => Math.round(n * 10) / 10;

type Province = Feature<Polygon | MultiPolygon, { shapeName: string }>;

const faNames: Record<string, string> = {
  Alborz: 'البرز', Ardabil: 'اردبیل', Bushehr: 'بوشهر', 'Chaharmahal and Bakhtiari': 'چهارمحال و بختیاری',
  'East Azerbaijan': 'آذربایجان شرقی', Fars: 'فارس', Gilan: 'گیلان', Golestan: 'گلستان', Hamadan: 'همدان',
  Hormozgan: 'هرمزگان', Ilam: 'ایلام', Isfahan: 'اصفهان', Kerman: 'کرمان', Kermanshah: 'کرمانشاه',
  Khuzestan: 'خوزستان', 'Kohgiluyeh and Boyer-Ahmad': 'کهگیلویه و بویراحمد', Kurdistan: 'کردستان',
  Lorestan: 'لرستان', Markazi: 'مرکزی', Mazandaran: 'مازندران', 'North Khorasan': 'خراسان شمالی',
  Qazvin: 'قزوین', Qom: 'قم', 'Razavi Khorasan': 'خراسان رضوی', Semnan: 'سمنان',
  'Sistan and Baluchestan': 'سیستان و بلوچستان', 'South Khorasan': 'خراسان جنوبی', Tehran: 'تهران',
  'West Azerbaijan': 'آذربایجان غربی', Yazd: 'یزد', Zanjan: 'زنجان',
};

const seas = [
  { id: 'caspian', name: { fa: 'دریای خزر', en: 'Caspian Sea' }, at: [51.3, 37.75] },
  { id: 'persian-gulf', name: { fa: 'خلیج فارس', en: 'Persian Gulf' }, at: [51.4, 27.0] },
  { id: 'gulf-of-oman', name: { fa: 'دریای عمان', en: 'Gulf of Oman' }, at: [58.7, 24.75] },
] as const;

// --- Load and clean the boundaries -------------------------------------------------------------

const source = JSON.parse(readFileSync('data-src/iran-adm1.geojson', 'utf8')) as {
  features: Province[];
};

// The file follows RFC 7946 (counter-clockwise exteriors); d3-geo expects the opposite.
const rewind = (poly: Position[][]) => poly.map((ring) => ring.slice().reverse());
const polygonsOf = (f: Province): Position[][][] =>
  f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;

// Some provinces come in more than one feature (for example Caspian islets); merge them by name.
const byName = new Map<string, Position[][][]>();
for (const f of source.features) {
  const list = byName.get(f.properties.shapeName) ?? [];
  list.push(...polygonsOf(f).map(rewind));
  byName.set(f.properties.shapeName, list);
}

// Lesser Tunb is missing from the simplified data (PLAN.md 6.1); add it to Hormozgan as a small outline.
const lesserTunb: Position[] = Array.from({ length: 9 }, (_, i) => {
  const a = (-i / 8) * 2 * Math.PI; // clockwise
  return [55.143 + 0.012 * Math.cos(a), 26.238 + 0.008 * Math.sin(a)];
});
byName.get('Hormozgan')!.push([lesserTunb]);

const provinces: Province[] = [...byName].map(([shapeName, coordinates]) => ({
  type: 'Feature',
  properties: { shapeName },
  geometry: { type: 'MultiPolygon', coordinates },
}));

for (const p of provinces) {
  if (!faNames[p.properties.shapeName]) throw new Error(`No Persian name for ${p.properties.shapeName}`);
}

// --- Projection ---------------------------------------------------------------------------------

// Frame slightly larger than Iran so the Gulf of Oman label fits.
const frame = {
  type: 'Feature' as const,
  properties: {},
  geometry: { type: 'MultiPoint' as const, coordinates: [[43.9, 24.3], [63.5, 39.9]] },
};
const projection = geoMercator().fitWidth(WIDTH - 2 * PAD, frame);
const [tx, ty] = projection.translate();
projection.translate([tx + PAD, ty + PAD]);
const project = (p: Position) => projection(p as [number, number])!;
const HEIGHT = Math.ceil(project([43.9, 24.3])[1] + PAD);

// --- Paths --------------------------------------------------------------------------------------

type XY = [number, number];

// Douglas–Peucker: keeps the points that deviate more than TOLERANCE from the simplified line.
function simplify(pts: XY[]): XY[] {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack: [number, number][] = [[0, pts.length - 1]];
  while (stack.length) {
    const [s, e] = stack.pop()!;
    const [x1, y1] = pts[s];
    const [x2, y2] = pts[e];
    const len = Math.hypot(x2 - x1, y2 - y1) || 1e-9;
    let maxD = 0;
    let idx = -1;
    for (let i = s + 1; i < e; i++) {
      const d = Math.abs((x2 - x1) * (y1 - pts[i][1]) - (x1 - pts[i][0]) * (y2 - y1)) / len;
      if (d > maxD) [maxD, idx] = [d, i];
    }
    if (idx >= 0 && maxD > TOLERANCE) {
      keep[idx] = 1;
      stack.push([s, idx], [idx, e]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}

function ringPath(ring: Position[]) {
  const pts = ring.map(project) as XY[];
  // Split closed rings in two so the first and last point are not the same anchor.
  const mid = Math.floor(pts.length / 2);
  let out = [...simplify(pts.slice(0, mid + 1)).slice(0, -1), ...simplify(pts.slice(mid))];
  // Tiny islands collapse under the tolerance; keep enough points to stay visible.
  if (out.length < 4) out = pts.slice(0, Math.min(pts.length, 6));
  return 'M' + out.map(([x, y]) => `${round(x)} ${round(y)}`).join('L') + 'Z';
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');

// --- Cities and pins ----------------------------------------------------------------------------

const counts = new Map(cities.map((c) => [c.id, projects.filter((p) => p.cities.includes(c.id)).length]));
const usedCities = cities.filter((c) => counts.get(c.id)! > 0);

const provinceOfCity = new Map<string, string>();
for (const c of usedCities) {
  const hit = provinces.find((p) => geoContains(p, [c.lng, c.lat]));
  if (!hit) throw new Error(`${c.id} is not inside any province; check its coordinates`);
  if (hit.properties.shapeName !== c.province.en) {
    throw new Error(`${c.id} lies in ${hit.properties.shapeName}, but cities.ts says ${c.province.en}`);
  }
  provinceOfCity.set(c.id, hit.properties.shapeName);
}

// Spread overlapping pins apart (Tehran/Latian/Karaj, Manjil/Loshan, …) with a small relaxation.
// A leader line in the component connects a moved pin to its true location.
const pins = usedCities.map((c) => {
  const [x, y] = project([c.lng, c.lat]);
  return { id: c.id, ax: x, ay: y, x, y, r: pinRadius(counts.get(c.id)!) };
});
for (let step = 0; step < 400; step++) {
  for (let i = 0; i < pins.length; i++) {
    for (let j = i + 1; j < pins.length; j++) {
      const a = pins[i];
      const b = pins[j];
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      let dist = Math.hypot(dx, dy);
      const min = a.r + b.r + PIN_GAP;
      if (dist >= min) continue;
      if (dist < 0.01) [dx, dy, dist] = [1, 0, 1];
      const push = (min - dist) / 2;
      // The bigger pin moves less, so large cities stay near their real position.
      const wa = b.r / (a.r + b.r);
      const wb = a.r / (a.r + b.r);
      a.x -= (dx / dist) * push * 2 * wa;
      a.y -= (dy / dist) * push * 2 * wa;
      b.x += (dx / dist) * push * 2 * wb;
      b.y += (dy / dist) * push * 2 * wb;
    }
  }
  for (const p of pins) {
    p.x += (p.ax - p.x) * 0.01;
    p.y += (p.ay - p.y) * 0.01;
  }
}

// --- Write --------------------------------------------------------------------------------------

const activeProvinces = new Set(provinceOfCity.values());
const provinceRows = provinces
  .sort((a, b) => a.properties.shapeName.localeCompare(b.properties.shapeName))
  .map((p) => ({
    id: slug(p.properties.shapeName),
    name: { fa: faNames[p.properties.shapeName], en: p.properties.shapeName },
    active: activeProvinces.has(p.properties.shapeName),
    d: polygonsOf(p).map((poly) => poly.map(ringPath).join('')).join(''),
  }));

const out = `// Generated by scripts/build-map.ts from data-src/iran-adm1.geojson. Do not edit by hand.
// Boundaries: geoBoundaries (gbOpen IRN ADM1), from OpenStreetMap data, ODbL 1.0.

export const mapSize = { width: ${WIDTH}, height: ${HEIGHT} } as const;

export const provinces: { id: string; name: { fa: string; en: string }; active: boolean; d: string }[] = ${JSON.stringify(provinceRows)};

/** Pin centers (x, y) and true locations (ax, ay), in map units. */
export const pinPositions: Record<string, { x: number; y: number; ax: number; ay: number }> = ${JSON.stringify(
  Object.fromEntries(pins.map((p) => [p.id, { x: round(p.x), y: round(p.y), ax: round(p.ax), ay: round(p.ay) }])),
)};

export const seaLabels: { id: string; name: { fa: string; en: string }; x: number; y: number }[] = ${JSON.stringify(
  seas.map((s) => {
    const [x, y] = project([...s.at]);
    return { id: s.id, name: s.name, x: round(x), y: round(y) };
  }),
)};
`;

writeFileSync('content/map.generated.ts', out);
const moved = pins.filter((p) => Math.hypot(p.x - p.ax, p.y - p.ay) > 2).map((p) => p.id);
console.log(
  `✓ build-map: ${provinceRows.length} provinces, ${pins.length} pins (${activeProvinces.size} provinces with projects), ` +
    `${WIDTH}×${HEIGHT}, ${(out.length / 1024).toFixed(0)} KB. Moved apart: ${moved.join(', ') || 'none'}.`,
);
