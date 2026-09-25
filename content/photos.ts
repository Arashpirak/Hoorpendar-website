import type { L } from './types';

// Atmosphere photos from Unsplash (free for commercial use under the Unsplash License).
// None of them may show a third-party brand name or logo.
export type Photo = { src: string; alt: L; credit: string; source: string };

const unsplash = (slug: string) => `https://unsplash.com/photos/${slug}`;

export const photos = {
  powerPlantNight: {
    src: '/img/photos/power-plant-night.jpg',
    alt: { fa: 'نیروگاه در شب', en: 'Power plant at night' },
    credit: 'American Public Power Association',
    source: unsplash('bv2pvCGMtzg'),
  },
  refineryFlare: {
    src: '/img/photos/refinery-flare.jpg',
    alt: { fa: 'مخازن و فلر پالایشگاه در شب', en: 'Refinery tanks and flare stacks at night' },
    credit: 'D Yang',
    source: unsplash('vaHAD5kOBJ8'),
  },
  refineryNight: {
    src: '/img/photos/refinery-night.jpg',
    alt: { fa: 'مجتمع صنعتی در شب', en: 'Industrial complex at night' },
    credit: 'PilMo Kang',
    source: unsplash('H72SCCTZPE8'),
  },
  hydroDam: {
    src: '/img/photos/hydro-dam.jpg',
    alt: { fa: 'سد و نیروگاه آبی', en: 'Hydroelectric dam' },
    credit: 'Tejj',
    source: unsplash('o8iXJVAahUc'),
  },
  controlRoom: {
    src: '/img/photos/control-room.jpg',
    alt: { fa: 'اتاق کنترل نیروگاه', en: 'Power plant control room' },
    credit: 'Frantisek Duris',
    source: unsplash('C3DfIgig1j8'),
  },
  substation: {
    src: '/img/photos/substation.jpg',
    alt: { fa: 'پست برق', en: 'Electrical substation' },
    credit: 'Jose Manuel Esp',
    source: unsplash('bbqAh039s6U'),
  },
  circuitBoard: {
    src: '/img/photos/circuit-board.jpg',
    alt: { fa: 'برد الکترونیکی', en: 'Printed circuit board' },
    credit: 'Akshat Sharma',
    source: unsplash('mrTVz_fosMY'),
  },
  offshoreRig: {
    src: '/img/photos/offshore-rig.jpg',
    alt: { fa: 'سکوی نفتی فراساحل', en: 'Offshore oil platform' },
    credit: 'J.f Manzanero',
    source: unsplash('3J2FB7BItdA'),
  },
} satisfies Record<string, Photo>;
