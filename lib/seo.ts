import type { Metadata } from 'next';
import { routing, type Locale } from '@/i18n/routing';
import { company } from '@/content/company';
import { cities } from '@/content/cities';

// Canonical origin. Preview deployments point here too, so only the production domain is indexed.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hoorpendar.com').replace(/\/$/, '');

/** Default Open Graph image for pages that pass none. */
export const DEFAULT_OG_IMAGE = '/img/photos/power-plant-night.jpg';

// Rendered titles end in " | هورپندار" or " | Hoorpendar" (layout template); Google shows about 60.
const titleSuffix: Record<Locale, number> = { fa: ' | هورپندار'.length, en: ' | Hoorpendar'.length };
export const fitsTitle = (locale: Locale, title: string) => title.length + titleSuffix[locale] <= 60;

/** Absolute URL of a locale-less path such as '/products/ignition' ('' is the home page). */
export const localeUrl = (locale: Locale, path: string) => `${SITE_URL}/${locale}${path}`;

/** hreflang map for a path; x-default is the root URL, which picks a language from the browser. */
export const languageAlternates = (path: string) => ({
  ...Object.fromEntries(routing.locales.map((l) => [l, localeUrl(l, path)])),
  'x-default': `${SITE_URL}${path || '/'}`,
});

/**
 * Canonical, hreflang and Open Graph fields for a page. Open Graph is repeated in full here
 * because a page's openGraph object replaces the layout's instead of merging with it.
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  { title, description, image }: { title: string; description: string; image?: string },
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: localeUrl(locale, path), languages: languageAlternates(path) },
    openGraph: {
      type: 'website',
      siteName: company.name[locale],
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
      url: localeUrl(locale, path),
      title,
      description,
      images: [image ?? DEFAULT_OG_IMAGE],
    },
  };
}

/** Serializes JSON-LD for a <script> tag; escaping '<' keeps the payload from closing the tag. */
export const jsonLd = (data: object) => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') });

export function organizationJsonLd(locale: Locale) {
  const [office, workshop] = company.locations;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: company.name[locale],
    alternateName: company.name[locale === 'fa' ? 'en' : 'fa'],
    legalName: company.legalName[locale],
    url: localeUrl(locale, ''),
    logo: `${SITE_URL}/icon.svg`,
    foundingDate: String(company.foundedYear),
    email: company.contact.email,
    telephone: company.contact.phones[0],
    faxNumber: company.contact.fax,
    address: [office, workshop].map((loc, i) => ({
      '@type': 'PostalAddress',
      streetAddress: loc.address[locale],
      addressLocality: i === 0 ? (locale === 'fa' ? 'تهران' : 'Tehran') : (locale === 'fa' ? 'کرج' : 'Karaj'),
      addressCountry: 'IR',
    })),
    // Iran, plus the province and cities with most of the company's projects (the Khuzestan page).
    areaServed: [
      { '@type': 'Country', name: locale === 'fa' ? 'ایران' : 'Iran' },
      {
        '@type': 'AdministrativeArea',
        name: locale === 'fa' ? 'استان خوزستان' : 'Khuzestan Province',
        url: localeUrl(locale, '/khuzestan'),
      },
      ...cities
        .filter((c) => c.province.en === 'Khuzestan')
        .map((c) => ({
          '@type': 'City',
          name: c.name[locale],
          containedInPlace: { '@type': 'AdministrativeArea', name: c.province[locale] },
        })),
    ],
    sameAs: [`https://www.instagram.com/${company.contact.instagram}/`],
  };
}

export function breadcrumbJsonLd(locale: Locale, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: localeUrl(locale, item.path),
    })),
  };
}
