import type { L } from './types';

// Real photos of Iranian dams and power plants from Wikimedia Commons.
// Their licences (CC BY / CC BY-SA) require the author, licence and a link
// next to each photo, so the home page prints `credit` under every one.
export type IranPhoto = {
  src: string;
  width: number;
  height: number;
  title: L;
  place: L;
  credit: string;
  license: string;
  source: string;
};

const commons = 'https://upload.wikimedia.org/wikipedia/commons';
const filePage = (name: string) => `https://commons.wikimedia.org/wiki/File:${name}`;

export const iranPhotos = {
  karun3: {
    src: `${commons}/6/69/Karun-3_Dam.JPG`,
    width: 2160,
    height: 1535,
    title: { fa: 'سد و نیروگاه کارون ۳', en: 'Karun-3 dam and hydropower plant' },
    place: { fa: 'ایذه، خوزستان', en: 'Izeh, Khuzestan' },
    credit: 'M samadi',
    license: 'CC BY-SA 3.0',
    source: filePage('Karun-3_Dam.JPG'),
  },
  rajaee: {
    src: `${commons}/8/85/Rajaei_power_station.jpg`,
    width: 3172,
    height: 2448,
    title: { fa: 'نیروگاه شهید رجایی', en: 'Shahid Rajaee power plant' },
    place: { fa: 'آبیک، قزوین', en: 'Abyek, Qazvin' },
    credit: 'Ayda',
    license: 'CC BY-SA 3.0',
    source: filePage('Rajaei_power_station.jpg'),
  },
  karkheh: {
    // Percent-encoded because the file name starts in Persian.
    src: `${commons}/7/79/%D8%B3%D8%AF_%DA%A9%D8%B1%D8%AE%D9%87_%D8%A8%D8%B1_%D8%B1%D9%88%DB%8C_%D8%B1%D9%88%D8%AF_%DA%A9%D8%B1%D8%AE%D9%87-Karkheh_dam_on_Karkheh_river.jpg`,
    width: 1200,
    height: 835,
    title: { fa: 'سد و نیروگاه کرخه', en: 'Karkheh dam and hydropower plant' },
    place: { fa: 'اندیمشک، خوزستان', en: 'Andimeshk, Khuzestan' },
    credit: 'Tasnim News Agency',
    license: 'CC BY 4.0',
    source:
      'https://commons.wikimedia.org/wiki/File:%D8%B3%D8%AF_%DA%A9%D8%B1%D8%AE%D9%87_%D8%A8%D8%B1_%D8%B1%D9%88%DB%8C_%D8%B1%D9%88%D8%AF_%DA%A9%D8%B1%D8%AE%D9%87-Karkheh_dam_on_Karkheh_river.jpg',
  },
} satisfies Record<string, IranPhoto>;
