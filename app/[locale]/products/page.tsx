import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { categories, categoryBySlug, products, productsIn } from '@/content/products';
import { photos } from '@/content/photos';
import { PageHero } from '@/components/ui/PageHero';
import { ProductSearch, type SearchItem } from '@/components/products/ProductSearch';
import { bidi } from '@/lib/bidi';

export async function generateMetadata({ params }: PageProps<'/[locale]/products'>): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: 'products' });
  return { title: t('eyebrow'), description: t('lead') };
}

export default async function ProductsPage({ params }: PageProps<'/[locale]/products'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('products');

  const searchItems: SearchItem[] = products.map((p) => ({
    href: `/products/${p.category}/${p.slug}`,
    title: bidi(locale, p.title[locale]),
    model: p.model,
    category: categoryBySlug.get(p.category)!.title[locale],
    // Both languages are searchable, so an English model name works on the Persian page too.
    text: [p.title.fa, p.title.en, p.model ?? '', p.summary[locale]].join(' '),
  }));

  return (
    <>
      <PageHero photo={photos.circuitBoard} eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')}>
        <div className="mt-8 max-w-xl text-text">
          <ProductSearch items={searchItems} />
        </div>
      </PageHero>

      <section className="py-14 sm:py-16" aria-labelledby="families">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="families" className="mb-8 text-2xl font-extrabold text-brand sm:text-3xl">
            {t('categoriesTitle')}
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const count = productsIn(c.slug).length;
              return (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="group relative isolate flex h-full min-h-64 flex-col justify-end overflow-hidden rounded-[var(--radius-card)] p-5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <Image
                      src={c.photo.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#07101c] via-[#07101c]/70 to-[#07101c]/10" />
                    <h3 className="text-xl font-bold">{c.title[locale]}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">{bidi(locale, c.intro[locale])}</p>
                    <p className="mt-3 text-xs font-semibold text-[#f5c451]">
                      {count > 0 ? t('items', { count }) : t('viewProducts')} {locale === 'fa' ? '←' : '→'}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-10 text-sm text-muted">{t('customNote')}</p>
        </div>
      </section>
    </>
  );
}
