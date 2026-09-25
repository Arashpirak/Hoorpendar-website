// One-off: copies product photos from the resume folder and the local archive of the old site into
// public/img/products, resized, flattened onto white and cropped where another brand's label shows.
// The sources are local only (site-archive/ is not in git); the outputs are committed.
// Usage: node scripts/prepare-product-images.mjs

import { mkdirSync } from 'node:fs';
import sharp from 'sharp';

const R = 'hoorpendar-resume/img/';
const A = 'site-archive/images/uploads/2021/05/';
const OUT = 'public/img/products/';

// crop: [left, top, right, bottom] as fractions of the source image.
const images = [
  ['static-excitation', R + 'secon.jpg'],
  ['annunciator', R + 'annunciator.jpg'],
  ['alarm-panel-sal82', A + 'SAL-82.jpeg'],
  ['hipps', R + 'hipps.jpg'],
  ['fdu-300', R + 'fdu300.jpg'],
  ['fdu-320', R + 'fdu320.jpg'],
  ['flame-relay', R + 'fr430e.jpg'],
  ['flame-safeguard-card', A + 'Flame-detector-relay-card.jpeg'],
  ['uv-fire-detector', R + 'ufd760.jpg'],
  ['flare-monitor', R + 'fms280.jpg'],
  ['flame-rod', A + 'Ion-Electrod_KRN-IN320.jpeg'],
  ['ignition-unit', R + 'ign-unit.jpg'],
  ['ignition-exciter', R + 'ign-2krj.jpg'],
  ['ignition-exciter-18kv', R + 'ign-sl10.jpg'],
  ['portable-igniter', R + 'hup18kd.jpg'],
  ['ignition-transformer', A + '15kv-Ignitor-Transformer.jpeg', [0, 0.02, 0.62, 0.62]],
  ['ignition-cable', R + 'ign-cable.jpg'],
  ['spark-plug', R + 'plug-hed614.jpg'],
  ['spark-plug-2', R + 'plug-hsr514.jpg'],
  ['spark-plug-3', R + 'ign-plug.jpg'],
  ['ramp-generator', R + 'rug280.jpg', [0, 0, 1, 0.8]],
  ['battery-charger-controller', A + 'CTRL-Charher-4.jpg'],
  ['smart-battery-charger', R + 'smart128.jpg'],
  ['portable-battery-charger', R + 'psb1000.jpg'],
  ['voltage-stabilizer', R + 'stb.jpg'],
  ['pi-converter', R + 'pit315n.jpg'],
  ['process-monitor-8ch', A + 'MCI-870.jpg'],
  ['multichannel-monitor', R + 'mps.jpg'],
  ['multichannel-monitor-2', A + 'Multi-channel-process-monitor-2.jpeg'],
  ['strain-gauge-amplifier', A + 'NO-5.png'],
  ['level-meter', R + 'lvlm.jpg'],
  ['bubbler-level-meter', R + 'blvm.jpg'],
  ['frequency-meter', R + 'freq.jpg'],
  ['master-clock', R + 'clock.jpg'],
  ['cast-iron-resistor', R + 'resistor.jpg'],
  ['renewal-cards', A + 'Types-of-vibration-cards.jpeg.jpeg'],
];

mkdirSync(OUT, { recursive: true });
for (const [name, src, crop] of images) {
  let img = sharp(src);
  if (crop) {
    const { width, height } = await img.metadata();
    const [l, t, r, b] = crop;
    img = img.extract({
      left: Math.round(l * width),
      top: Math.round(t * height),
      width: Math.round((r - l) * width),
      height: Math.round((b - t) * height),
    });
  }
  const info = await img
    .flatten({ background: '#ffffff' })
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${OUT}${name}.jpg`);
  console.log(`${name}.jpg ${info.width}×${info.height} ${(info.size / 1024).toFixed(0)} KB`);
}
