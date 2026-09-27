import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { categories, products } from '@/content/products';
import { languageAlternates, localeUrl } from '@/lib/seo';

const staticPaths = ['', '/products', '/projects', '/about', '/contact', '/catalog', '/khuzestan'];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...categories.map((c) => `/products/${c.slug}`),
    ...products.map((p) => `/products/${p.category}/${p.slug}`),
  ];
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localeUrl(locale, path),
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
