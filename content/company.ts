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
