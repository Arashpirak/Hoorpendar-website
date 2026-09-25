import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fa', 'en'],
  // Used for `/` when the browser prefers neither Persian nor English.
  defaultLocale: 'en',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

export const localeDir = (locale: Locale) => (locale === 'fa' ? 'rtl' : 'ltr');
