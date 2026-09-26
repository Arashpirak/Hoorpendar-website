import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { categoryBySlug, findProduct, products } from '@/content/products';
import { projects } from '@/content/projects';
import { cityById } from '@/content/cities';
import { formatNumber } from '@/lib/format';
import { ProductImage } from '@/components/products/ProductCard';
import { bidi } from '@/lib/bidi';
import { ChatInquiryButton } from '@/components/chat/ChatInquiryButton';

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((p) => ({ locale, category: p.category, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: PageProps<'/[locale]/products/[category]/[slug]'>): Promise<Metadata> {
  const { locale, category, slug } = await params;
  const p = findProduct(category, slug);
  if (!p) return {};
  const l = locale as Locale;
  return {
    title: p.model ? `${p.title[l]} (${p.model})` : p.title[l],
    description: p.summary[l],
    openGraph: p.images[0] ? { images: [p.images[0].src] } : undefined,
  };
}

export default async function ProductPage({ params }: PageProps<'/[locale]/products/[category]/[slug]'>) {
  const { locale: l, category, slug } = await params;
  const locale = l as Locale;
  setRequestLocale(locale);
  const product = findProduct(category, slug);
  if (!product) notFound();
  const cat = categoryBySlug.get(product.category)!;
  const t = await getTranslations('products');
  const tn = await getTranslations('nav');

  const related = (product.relatedProjectIds ?? [])
    .map((id) => projects.find((p) => p.id === id))
    .filter((p) => p !== undefined);
  const cityIds = [...new Set(related.flatMap((p) => p.cities))];
  const year = (sh: number) => formatNumber(locale, locale === 'fa' ? sh : sh + 621);

  return (
    <article className="py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/products" className="hover:text-accent">{tn('products')}</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/products/${cat.slug}`} className="hover:text-accent">{cat.title[locale]}</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-text">{bidi(locale, product.title[locale])}</li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Photos */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border bg-white dark:bg-surface-2">
              <ProductImage product={product} locale={locale} sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            {product.images.length > 1 && (
              <ul className="grid grid-cols-3 gap-3">
                {product.images.slice(1).map((im) => (
                  <li key={im.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-white">
                    <Image src={im.src} alt={im.alt[locale]} fill sizes="200px" className="object-contain p-2" />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Summary */}
          <div>
            {product.model && (
              <p className="mb-2 text-sm">
                <span className="text-muted">{t('model')}: </span>
                <span className="ltr inline-block font-semibold text-accent">{product.model}</span>
              </p>
            )}
            <h1 className="text-3xl leading-tight font-extrabold text-brand sm:text-4xl sm:leading-tight">
              {bidi(locale, product.title[locale])}
            </h1>
            <p className="mt-5 leading-8 text-text">{bidi(locale, product.summary[locale])}</p>

            <h2 className="mt-8 mb-3 font-bold text-text">{t('features')}</h2>
            <ul className="space-y-2">
              {product.features[locale].map((f) => (
                <li key={f} className="flex gap-3 leading-7 text-text">
                  <span className="mt-2.5 inline-block size-1.5 shrink-0 rounded-full bg-accent" />
                  {bidi(locale, f)}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 mb-3 font-bold text-text">{t('applications')}</h2>
            <ul className="flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <li key={a.en} className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-text">
                  {bidi(locale, a[locale])}
                </li>
              ))}
            </ul>

            {cityIds.length > 0 && (
              <>
                <h2 className="mt-8 mb-3 font-bold text-text">{t('installedIn')}</h2>
                <ul className="flex flex-wrap gap-2">
                  {cityIds.map((id) => (
                    <li key={id}>
                      <Link
                        href={{ pathname: '/projects', query: { city: id } }}
                        className="inline-block rounded-full bg-surface-2 px-3 py-1 text-sm text-text hover:text-accent"
                      >
                        {cityById.get(id)!.name[locale]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-10 rounded-[var(--radius-card)] border border-border bg-surface-2 p-5">
              <p className="text-sm leading-7 text-muted">{t('customNote')}</p>
              <ChatInquiryButton className="mt-4 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast hover:opacity-90">
                {t('inquire')}
              </ChatInquiryButton>
            </div>
          </div>
        </div>

        {product.specs && (
          <section className="mt-14">
            <h2 className="mb-4 text-xl font-extrabold text-brand">{t('specs')}</h2>
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  {product.specs.map((s) => (
                    <tr key={s.label.en}>
                      <th scope="row" className="w-1/3 bg-surface-2 px-4 py-3 text-start font-medium text-muted">
                        {bidi(locale, s.label[locale])}
                      </th>
                      <td className="ltr px-4 py-3 text-start text-text">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-4 text-xl font-extrabold text-brand">{t('relatedProjects')}</h2>
            <ul className="divide-y divide-border rounded-[var(--radius-card)] border border-border bg-surface">
              {related.map((p) => (
                <li key={p.id} className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3 text-sm">
                  <span className="text-text">{bidi(locale, p.title[locale])}</span>
                  <span className="text-xs text-muted">
                    {[p.cities.map((id) => cityById.get(id)!.name[locale]).join('، '), p.yearSH && year(p.yearSH)]
                      .filter(Boolean)
                      .join(' · ')}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-10">
          <Link href={`/products/${cat.slug}`} className="text-sm font-semibold text-accent hover:underline">
            {t('backToCategory', { category: cat.title[locale] })}
          </Link>
        </p>
      </div>
    </article>
  );
}
