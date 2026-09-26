import type { L } from './types';

export const company = {
  name: {
    fa: 'هورپندار',
    en: 'Hoorpendar',
  } satisfies L,
  legalName: {
    fa: 'شرکت دانش‌بنیان صنایع فن‌آوری رایانه هورپندار',
    en: 'Hoorpendar Computer Technology Industries',
  } satisfies L,
  foundedYear: 1999,
  contact: {
    address: {
      fa: 'تهران، خیابان دکتر علی شریعتی، پلاک ۳۶۰',
      en: 'No. 360, Dr. Shariati St., Tehran, Iran',
    } satisfies L,
    // Stored in international form; displayed left-to-right in both languages.
    phones: ['+98 21 7760 9951', '+98 21 7750 7665', '+98 21 7750 8054'],
    fax: '+98 21 7760 3179',
    email: 'info@hoorpendar.com',
    whatsapp: '+98 990 336 5549',
    instagram: 'hoorpendar',
  },
  // Map queries: the office one is the query the old site used; the workshop points at the zone,
  // since the old site's factory map showed the wrong place.
  locations: [
    {
      key: 'office',
      address: {
        fa: 'تهران، خیابان دکتر علی شریعتی، پایین‌تر از بهار شیراز، پلاک ۳۶۰، واحد ۳',
        en: 'Unit 3, No. 360, Dr. Shariati St. (below Bahar-e Shiraz), Tehran, Iran',
      } satisfies L,
      mapQuery: 'Hoorpendar company',
    },
    {
      key: 'workshop',
      address: {
        fa: 'کرج، منطقه‌ی ویژه‌ی اقتصادی فرودگاه پیام',
        en: 'Payam Airport Special Economic Zone, Karaj, Alborz, Iran',
      } satisfies L,
      mapQuery: 'Payam Special Economic Zone, Karaj',
    },
  ],
  stats: {
    years: 25,
    contracts: 138,
    clients: 25,
    flameUnits: 200,
  },
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;
export const whatsappHref = (phone: string) =>
  `https://wa.me/${phone.replace(/[^\d]/g, '')}`;
export const instagramHref = (handle: string) =>
  `https://www.instagram.com/${handle}/`;
