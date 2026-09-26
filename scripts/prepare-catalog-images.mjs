// One-off: copies the full catalogue sheets and product photos of the old site from the local archive
// into public/img/catalog, uncropped. Lines that name another brand, a client site or sanctions are
// blurred (on photos and coloured backgrounds) or painted white (on white sheets); nothing else changes.
// Also writes content/products/catalog-sizes.generated.ts so pages can lay the sheets out without shift.
// The sources are local only (site-archive/ is not in git); the outputs are committed.
// Usage: node scripts/prepare-catalog-images.mjs

import { mkdirSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const A = 'site-archive/images/uploads/2021/05/';
const A6 = 'site-archive/images/uploads/2021/06/';
const OUT = 'public/img/catalog/';
const MAX = 1600;

// Regions are [left, top, right, bottom] in pixels of the source image.
// blur: soft-blurs the region; white: paints it white.
const images = [
  // Flame detection
  ['fdu-300-sheet', A + 'Flame-Detector-FDU-300.jpeg', { blur: [[100, 530, 398, 565]] }],
  ['fdu-320-sheet', 'site-archive/images/uploads/2024/05/FDU320_low.jpg', { blur: [[285, 1420, 948, 1500]] }],
  ['fr-430e-sheet', A + 'Flame-Detector-R430E.png', { white: [[368, 426, 425, 454], [565, 465, 760, 495]] }],
  ['fr-430d-sheet', A + 'Flame-Detector-FR-430D.png'],
  ['fr-430d-wiring', A + 'Flame-Detector-FR-430D2.png', { white: [[225, 545, 600, 592]] }],
  ['flame-safeguard-card', A + 'Flame-detector-relay-card.jpeg', { blur: [[265, 515, 430, 560]] }],
  ['ufd-760-sheet', A + 'UFD-760.jpeg', { blur: [[25, 216, 735, 418]] }],
  ['fms-280-sheet', A + 'flare-pilot-monitoring-model-FMS-280.jpeg', { blur: [[185, 706, 642, 740]] }],
  ['krn-in320-sheet', A + 'Ion-Electrod_KRN-IN320.jpeg'],

  // Ignition
  ['ign-2krj-sheet', A + 'ING-2KRJ2-1.jpg'],
  ['hsb-169-sheet', A + '15kv-Ignitor-Transformer.jpeg'],
  ['portable-igniter-sheet', A + 'PORTABLE-SPARK-IGNITOR-Label_2.jpg'],
  ['ignition-exciter-24v', A + 'Solar-HP-Ignition-Exciter.jpg'],
  ['plug-hsr514', A + 'Reston-turbine-spark-plug.jpeg'],
  ['plug-igrp120', A + 'RollsRoycs-Ignitor.jpg'],
  ['plug-hed614', A + 'SOLAR-Gas-Turbine-Spark-Plug.jpeg'],
  ['plug-hnr100', A + 'Boiler-Spark-Plug.jpeg'],
  ['plug-hkr600', A + 'Koreh-Ignator_low.jpg'],
  ['cable-ignc-rs75', A + 'RUSTON-Gas-Turbine-Ignition-Cable.jpeg'],
  ['cable-igrc-202', A + 'Rolls-Royce-Ignition-Cable_HP.jpeg'],
  ['cable-igsc-sl18', A + 'SOLAR-Gas-Turbine-Ignition-Cable.jpeg'],
  ['cable-ignc-w72', A + 'Workspor_Turbine-Cable-1-1.jpeg', { white: [[655, 185, 1070, 320]] }],

  // Power supplies
  ['smart-charger-sheet', A + 'Battery-charger.jpg'],
  ['sbc-600-sheet', A + 'SBC620.jpeg'],
  ['psb-1000-sheet', A + 'protable-switching-battery-charger.jpeg'],
  ['thyristor-charger-cabinet', A + 'Phase-Charger.jpg'],

  // Excitation
  ['excitation-sheet', A + 'EXITATION.jpg'],

  // Instrumentation
  ['pi-315-sheet', A + 'pressure-to-curent-pit-315.jpeg'],
  ['mci-870-sheet', A + 'MCI-870-2_Low.jpg'],
  ['mps-sheet', A + 'MPS-series.jpeg'],
  ['mps-sheet-2', A + 'Multi-channel-process-monitor.jpeg'],
  ['mci-6447-panel', A + 'Multi-channel-process-monitor-1.jpeg'],
  ['mps-hmi-panel', A + 'Multi-channel-process-monitor-2.jpeg'],
  ['tsg-500', A + 'Strain-gauge-meter.jpeg'],
  ['data-logger-sheet', A + 'DataLogger.jpeg'],
  ['vibration-card-1', A + 'Types-of-vibration-cards.jpeg.jpeg'],
  ['vibration-card-2', A + 'Types-of-vibration-cards.jpeg-1.jpeg'],
  ['vibration-controller-card', A + 'Types-of-vibration-cards.jpeg-2.jpeg'],
  ['vibration-display', A + 'Metrix-Display_LowLow.jpeg'],
  ['thrust-readout', A + 'BENTLY-NEVADA-1700-SERIES.jpeg', { white: [[40, 40, 730, 195]] }],
  ['vibration-readout', A + 'BENTLY-NEVADA-1700-SERIES-2.jpeg', { white: [[40, 40, 730, 195]], blur: [[160, 238, 295, 278]] }],
  ['vibration-cable-1', A + 'Vibration-cable.jpeg.jpeg'],
  ['vibration-cable-2', A + 'Vibration-cable-1.jpeg'],

  // Dams, power plants and infrastructure
  ['level-meter-sheet', A + 'LEVEL-METER.jpeg'],
  ['blvm-100-sheet', A + 'LEVEL-METER-Bubbler_Low.jpeg'],
  ['blvm-100-hmi-1', A + 'LEVEL-METER-Bubbler_Low_software-1.jpeg'],
  ['blvm-100-hmi-2', A + 'LEVEL-METER-Bubbler_Low_software-2-1.jpeg'],
  ['frequency-meter-sheet', A + 'Frequency-Meter.jpeg'],
  ['cast-iron-resistor-sheet', A + 'Cast-iron-load-resistance.jpeg'],
  ['pdml-4800-sheet-1', A + 'Pendulums-1.jpeg'],
  ['pdml-4800-sheet-2', A + 'Pendulums-2.jpeg'],
  ['pdml-4800-sheet-3', A + 'Pendulums-3.jpeg'],

  // Alarm and safety
  ['pal-annunciator-sheet', A + 'PAL-625.jpeg'],
  ['sal-82-sheet', A + 'HP-SAL82.png'],
  ['sal-82-photo', A + 'SAL-82.jpeg'],
  ['alarm-card-1', A6 + 'Cart-Alarm-Panel-1.jpeg', { blur: [[145, 472, 478, 500], [572, 472, 778, 500]] }],
  ['alarm-card-2', A6 + 'Cart-Alarm-Panel-2.jpeg'],
  ['alarm-card-3', A6 + 'Cart-Alarm-Panel-4.jpeg', { blur: [[172, 270, 240, 535], [240, 500, 560, 562]] }],
  ['alarm-card-4', A6 + 'Cart-Alarm-Panel-5.jpeg', { blur: [[338, 262, 402, 525]] }],
  ['hipps-sheet', A + 'HIPPS-logic-solver.jpeg', { blur: [[55, 549, 745, 566]] }],

  // Turbine control
  ['position-transmitter-tcv', A + 'DisPlacement-Transmitter-Model-DT89EXi_Type-TCV1.jpg', {
    white: [[775, 585, 1060, 648]],
    blur: [[40, 420, 205, 515]],
  }],
  ['position-transmitter-ngv', A + 'DisPlacement-Transmitter-Model-DT89EXi_Type-NGV1.jpg', {
    white: [[790, 628, 1066, 684]],
    blur: [[30, 390, 185, 515]],
  }],
];

const rect = ([l, t, r, b]) => ({ left: l, top: t, width: r - l, height: b - t });

mkdirSync(OUT, { recursive: true });
const sizes = {};
for (const [name, src, edits = {}] of images) {
  // Flatten first so every overlay works on an opaque RGB image.
  let buf = await sharp(src).flatten({ background: '#ffffff' }).toColourspace('srgb').png().toBuffer();
  const overlays = [];
  for (const r of edits.blur ?? []) {
    const box = rect(r);
    const patch = await sharp(buf).extract(box).blur(Math.max(8, box.height / 3)).toBuffer();
    overlays.push({ input: patch, left: box.left, top: box.top });
  }
  for (const r of edits.white ?? []) {
    const box = rect(r);
    const patch = await sharp({
      create: { width: box.width, height: box.height, channels: 3, background: '#ffffff' },
    }).png().toBuffer();
    overlays.push({ input: patch, left: box.left, top: box.top });
  }
  if (overlays.length) buf = await sharp(buf).composite(overlays).png().toBuffer();

  const info = await sharp(buf)
    .resize({ width: MAX, height: MAX * 2, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`${OUT}${name}.jpg`);
  sizes[name] = [info.width, info.height];
  console.log(`${name}.jpg ${info.width}×${info.height} ${(info.size / 1024).toFixed(0)} KB`);
}

// Masked photos that are also a product's main image.
await sharp(`${OUT}flame-safeguard-card.jpg`).toFile('public/img/products/flame-safeguard-card.jpg');
await sharp(`${OUT}alarm-card-1.jpg`).toFile('public/img/products/alarm-card.jpg');
// public/img/products/position-transmitter.jpg is a hand-made cut-out of the TCV photo with the same blur.

writeFileSync(
  'content/products/catalog-sizes.generated.ts',
  '// Generated by scripts/prepare-catalog-images.mjs. Do not edit.\n' +
    `export const catalogSizes: Record<string, [number, number]> = ${JSON.stringify(sizes, null, 2)};\n`,
);
