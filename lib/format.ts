import type { Locale } from '@/i18n/routing';

// Persian pages use Persian digits; codes and units (4-20mA, IP65) are kept out of this on purpose.
export const formatNumber = (locale: Locale, n: number) =>
  new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US', { useGrouping: false }).format(n);

// Gregorian year for English pages, Solar Hijri for Persian pages.
export const displayYear = (locale: Locale, gregorian: number) =>
  formatNumber(locale, locale === 'fa' ? gregorian - 621 : gregorian);
