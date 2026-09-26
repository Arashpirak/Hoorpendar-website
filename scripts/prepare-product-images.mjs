// One-off: copies product photos from the resume folder and the local archive of the old site into
// public/img/products, resized, flattened onto white and cropped where another brand's label shows.
// The sources are local only (site-archive/ is not in git); the outputs are committed.
// Most product photos are no longer made here: they were cut out of the catalogue scans by hand, with the
// background removed and the product centred on a white 4:3 canvas, and committed directly. Running this
// script only rewrites the photos still listed below.
// Usage: node scripts/prepare-product-images.mjs

import { mkdirSync } from 'node:fs';
import sharp from 'sharp';

const R = 'hoorpendar-resume/img/';
const A = 'site-archive/images/uploads/2021/05/';
const OUT = 'public/img/products/';

// crop: [left, top, right, bottom] as fractions of the source image.
const images = [
  ['alarm-panel-sal82', A + 'SAL-82.jpeg'],
  ['flame-relay', R + 'fr430e.jpg'],
  // flame-safeguard-card.jpg comes from prepare-catalog-images.mjs, which masks a third-party part number.
  ['flare-monitor', R + 'fms280.jpg'],
  ['ignition-exciter', R + 'ign-2krj.jpg'],
  ['portable-igniter', R + 'hup18kd.jpg'],
  ['ignition-transformer', A + '15kv-Ignitor-Transformer.jpeg', [0, 0.02, 0.62, 0.62]],
  ['spark-plug', R + 'plug-hed614.jpg'],
  ['spark-plug-2', R + 'plug-hsr514.jpg'],
  ['thyristor-charger', A + 'Phase-Charger.jpg'],
  ['process-monitor-8ch', A + 'MCI-870.jpg'],
  ['strain-gauge-amplifier', A + 'NO-5.png'],
  ['vibration-display', A + 'Metrix-Display_LowLow.jpeg'],
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
