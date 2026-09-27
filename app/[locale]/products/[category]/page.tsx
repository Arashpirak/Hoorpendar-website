import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { categories, categoryBySlug, productsIn, renewal } from '@/content/products';
import type { ProductCategorySlug } from '@/content/types';
import { formatNumber } from '@/lib/format';
import { Breadcrumbs, PageHero } from '@/components/ui/PageHero';
import { ProductCard } from '@/components/products/ProductCard';
import { bidi } from '@/lib/bidi';
import { ChatInquiryButton } from '@/components/chat/ChatInquiryButton';
import { breadcrumbJsonLd, jsonLd, pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => categories.map((c) => ({ locale, category: c.slug })));
}

export async function generateMetadata({ params }: PageProps<'/[locale]/products/[category]'>): Promise<Metadata> {
  const { locale, category } = await params;
  const c = categoryBySlug.get(category as ProductCategorySlug);
  if (!c) return {};
  const l = locale as Locale;
  return pageMetadata(l, `/products/${c.slug}`, { title: c.title[l], description: c.intro[l], image: c.photo.src });
}

export default async function CategoryPage({ params }: PageProps<'/[locale]/products/[category]'>) {
  const { locale: l, category: slug } = await params;
  const locale = l as Locale;
  setRequestLocale(locale);
  const category = categoryBySlug.get(slug as ProductCategorySlug);
  if (!category) notFound();
  const t = await getTranslations('products');
  const tn = await getTranslations('nav');
  const items = productsIn(category.slug);
  const isRenewal = category.slug === 'legacy-renewal';

  const breadcrumbs = breadcrumbJsonLd(locale, [
    { name: tn('products'), path: '/products' },
    { name: category.title[locale], path: `/products/${category.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbs)} />
      <PageHero
        photo={category.photo}
        title={category.title[locale]}
        lead={bidi(locale, category.intro[locale])}
        top={
          <Breadcrumbs
            items={[
              { label: tn('products'), link: <Link href="/products" className="hover:text-white">{tn('products')}</Link> },
              { label: category.title[locale] },
            ]}
          />
        }
      />

      {isRenewal ? (
        <section className="py-14 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-extrabold text-brand">{t('renewalStepsTitle')}</h2>
              <ol className="space-y-4">
                {renewal.steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-accent-contrast">
                      {formatNumber(locale, i + 1)}
                    </span>
                    <span className="pt-1.5 leading-7 text-text">{bidi(locale, s[locale])}</span>
                  </li>
                ))}
              </ol>
              <h2 className="mt-12 mb-4 text-2xl font-extrabold text-brand">{t('renewalExamplesTitle')}</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {renewal.examples.map((e, i) => (
                  <li key={i} className="rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-6 text-text">
                    {bidi(locale, e[locale])}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border bg-white">
                <Image src={renewal.image.src} alt={renewal.image.alt[locale]} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-4" />
              </div>
              <div className="rounded-[var(--radius-card)] border border-border bg-surface-2 p-6">
                <p className="leading-8 text-text">{t('renewalCta')}</p>
                <ChatInquiryButton className="mt-4 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast hover:opacity-90">
                  {t('inquire')}
                </ChatInquiryButton>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <li key={p.slug}>
                  <ProductCard product={p} locale={locale} />
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-muted">{t('customNote')}</p>
          </div>
        </section>
      )}
    </>
  );
}
