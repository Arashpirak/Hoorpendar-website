'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import type { Sector } from '@/content/types';
import type { CityRow, ProjectRow } from '@/lib/project-view';
import { pinRadius } from '@/lib/map';
import { SECTORS, sectorColor, useLocaleFormat } from './filters';

export type Pin = { x: number; y: number; ax: number; ay: number };
export type CityData = { total: number; bySector: Record<Sector, number>; items: ProjectRow[] };

export function groupByCity(projects: ProjectRow[], cities: CityRow[]) {
  const map = new Map<string, CityData>();
  for (const c of cities) map.set(c.id, { total: 0, bySector: { oil: 0, power: 0, industry: 0 }, items: [] });
  for (const p of projects) {
    for (const id of p.cities) {
      const d = map.get(id)!;
      d.total++;
      d.bySector[p.sector]++;
      d.items.push(p);
    }
  }
  return map;
}

type Props = {
  byCity: Map<string, CityData>;
  cities: CityRow[];
  pins: Record<string, Pin>;
  size: { width: number; height: number };
  sectorLabels: Record<Sector, string>;
  selected: string | null;
  onSelect: (id: string) => void;
  /** The server-rendered provinces <svg>. */
  children: ReactNode;
};

export function MapCanvas({ byCity, cities, pins, size, sectorLabels, selected, onSelect, children }: Props) {
  const t = useTranslations('map');
  const { nf } = useLocaleFormat();
  const [hovered, setHovered] = useState<string | null>(null);

  // Pins grow on narrow screens so they stay tappable.
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(Math.min(1.7, Math.max(1, 640 / entry.contentRect.width)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cityById = new Map(cities.map((c) => [c.id, c]));
  // Largest first, so small pins are drawn on top.
  const shown = cities
    .filter((c) => pins[c.id] && byCity.get(c.id)!.total > 0)
    .sort((a, b) => byCity.get(b.id)!.total - byCity.get(a.id)!.total);
  const hoveredCity = hovered ? cityById.get(hovered) : undefined;
  const hoveredData = hovered ? byCity.get(hovered) : undefined;

  return (
    <div>
      <div ref={boxRef} className="relative" style={{ aspectRatio: `${size.width} / ${size.height}` }}>
        {children}
        <svg
          viewBox={`0 0 ${size.width} ${size.height}`}
          className="absolute inset-0 h-full w-full"
          role="group"
          aria-label={t('mapLabel')}
        >
          {shown.map((c) => {
            const pin = pins[c.id];
            return Math.hypot(pin.x - pin.ax, pin.y - pin.ay) > 2 ? (
              <g key={`lead-${c.id}`} aria-hidden="true" className="text-muted">
                <line x1={pin.ax} y1={pin.ay} x2={pin.x} y2={pin.y} stroke="currentColor" strokeWidth={scale} />
                <circle cx={pin.ax} cy={pin.ay} r={2 * scale} fill="currentColor" />
              </g>
            ) : null;
          })}
          {shown.map((c) => {
            const d = byCity.get(c.id)!;
            const pin = pins[c.id];
            const r = pinRadius(d.total) * scale;
            const ringR = r - 1.8 * scale;
            const circ = 2 * Math.PI * ringR;
            const isSelected = selected === c.id;
            let offset = 0;
            return (
              <g
                key={c.id}
                transform={`translate(${pin.x} ${pin.y})`}
                role="button"
                tabIndex={0}
                aria-label={t('pinLabel', { city: c.name, province: c.province, count: d.total })}
                aria-pressed={isSelected}
                className="group cursor-pointer outline-none"
                onClick={() => onSelect(c.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect(c.id);
                  }
                }}
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(c.id)}
                onBlur={() => setHovered(null)}
              >
                <circle r={r + 6 * scale} fill="transparent" />
                <circle
                  r={r + 4 * scale}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth={2 * scale}
                  className={isSelected ? '' : 'hidden group-focus-visible:block'}
                />
                <circle
                  r={r}
                  fill="var(--surface)"
                  stroke="var(--brand)"
                  strokeOpacity={0.25}
                  className="transition-transform duration-150 group-hover:scale-110"
                />
                {SECTORS.map((s) => {
                  const share = d.bySector[s] / d.total;
                  if (!share) return null;
                  const seg = (
                    <circle
                      key={s}
                      r={ringR}
                      fill="none"
                      stroke={sectorColor[s]}
                      strokeWidth={3.2 * scale}
                      strokeDasharray={`${share * circ} ${circ}`}
                      strokeDashoffset={-offset * circ}
                      transform="rotate(-90)"
                    />
                  );
                  offset += share;
                  return seg;
                })}
                {d.total > 1 && (
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="var(--text)"
                    fontSize={Math.min(r * 0.85, 16 * scale)}
                    fontWeight={700}
                    className="pointer-events-none select-none"
                  >
                    {nf.format(d.total)}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {hoveredCity && hoveredData && hoveredData.total > 0 && (
          <div
            role="presentation"
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg bg-text px-3 py-1.5 text-xs whitespace-nowrap text-bg shadow-lg"
            style={{
              left: `${(pins[hoveredCity.id].x / size.width) * 100}%`,
              top: `calc(${((pins[hoveredCity.id].y - pinRadius(hoveredData.total) * scale) / size.height) * 100}% - 8px)`,
            }}
          >
            <b>{hoveredCity.name}</b> · {hoveredCity.province} · {t('projects', { count: hoveredData.total })}
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        {SECTORS.map((s) => (
          <span key={s} className="flex items-center gap-1.5">
            <span className="inline-block size-2.5 rounded-full" style={{ background: sectorColor[s] }} />
            {sectorLabels[s]}
          </span>
        ))}
      </div>
    </div>
  );
}
