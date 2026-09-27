import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { cityById } from '@/content/cities';
import { photos } from '@/content/photos';
import { facilities } from '@/content/taxonomy';
import { categoryBySlug } from '@/content/products';
import { khuzestan as k, khuzestanCityIds, khuzestanProjects } from '@/content/khuzestan';
import type { Project, ProductCategorySlug } from '@/content/types';
import { formatNumber } from '@/lib/format';
import { bidi } from '@/lib/bidi';
import { PageHero } from '@/components/ui/PageHero';
import { ChatInquiryButton } from '@/components/chat/ChatInquiryButton';
import { breadcrumbJsonLd, jsonLd, pageMetadata } from '@/lib/seo';

const fill = (text: string, vars: Record<string, string>) =>
  text.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? `{${key}}`);

const year = (locale: Locale, sh: number) => formatNumber(locale, locale === 'fa' ? sh : sh + 621);

function stats(locale: Locale) {
  const years = khuzestanProjects.map((p) => p.yearSH).filter((y): y is number => y !== undefined);
  const cityIds = new Set(khuzestanProjects.flatMap((p) => p.cities).filter((id) => khuzestanCityIds.includes(id)));
  return {
    count: formatNumber(locale, khuzestanProjects.length),
    from: year(locale, Math.min(...years)),
    cities: formatNumber(locale, cityIds.size),
  };
}

export async function generateMetadata({ params }: PageProps<'/[locale]/khuzestan'>): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  return pageMetadata(locale, '/khuzestan', {
    title: k.metaTitle[locale],
    description: fill(k.metaDescription[locale], stats(locale)),
    image: photos.refineryFlare.src,
  });
}

/** Repeat contracts (same groupKey) collapse into one row, newest first. */
function rows(list: Project[]) {
  const groups = new Map<string, Project[]>();
  for (const p of list) groups.set(p.groupKey ?? p.id, [...(groups.get(p.groupKey ?? p.id) ?? []), p]);
  return [...groups.values()]
    .map((g) => {
      const ys = g.map((p) => p.yearSH).filter((y): y is number => y !== undefined);
      return { first: g[0], count: g.length, min: ys.length ? Math.min(...ys) : null, max: ys.length ? Math.max(...ys) : null };
    })
    .sort((a, b) => (b.max ?? 0) - (a.max ?? 0));
}

// Province landing page for searches such as «جرقه‌زن اهواز» and «شارژر باتری خوزستان»
// (.claude/skills/hoorpendar-seo/references/local-seo.md). One page for the province, not one per city.
export default async function KhuzestanPage({ params }: PageProps<'/[locale]/khuzestan'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const tn = await getTranslations('nav');
  const tp = await getTranslations('products');
  const s = stats(locale);
  const n = (v: number) => formatNumber(locale, v);
  const years = (r: { min: number | null; max: number | null }) =>
    r.min === null ? '' : r.min === r.max ? year(locale, r.min) : `${year(locale, r.min)}–${year(locale, r.max!)}`;

  const inCategory = (slug: ProductCategorySlug) => khuzestanProjects.filter((p) => p.productCategory === slug);
  const featured = [
    { slug: 'ignition' as const, title: k.ignitionTitle, link: k.ignitionLink },
    { slug: 'power-supplies' as const, title: k.chargerTitle, link: k.chargerLink },
  ];
  const others = [...new Set(khuzestanProjects.map((p) => p.productCategory))]
    .filter((c): c is ProductCategorySlug => !!c && c !== 'ignition' && c !== 'power-supplies')
    .map((slug) => ({ slug, count: inCategory(slug).length }))
    .sort((a, b) => b.count - a.count);

  const byCity = khuzestanCityIds
    .map((id) => ({ id, list: khuzestanProjects.filter((p) => p.cities.includes(id)) }))
    .filter((c) => c.list.length > 0)
    .sort((a, b) => b.list.length - a.list.length);

  const structuredData = [
    breadcrumbJsonLd(locale, [{ name: k.eyebrow[locale], path: '/khuzestan' }]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: k.faq.map((f) => ({
        '@type': 'Question',
        name: f.q[locale],
        acceptedAnswer: { '@type': 'Answer', text: f.a[locale] },
      })),
    },
  ];

  const card = 'rounded-[var(--radius-card)] border border-border bg-surface';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <PageHero photo={photos.refineryFlare} eyebrow={k.eyebrow[locale]} title={k.title[locale]} lead={fill(k.lead[locale], s)}>
        <dl className="mt-8 flex flex-wrap gap-3">
          {[
            { value: s.count, label: k.statProjects[locale] },
            { value: s.cities, label: k.statCities[locale] },
            { value: s.from, label: k.statSince[locale] },
          ].map((f) => (
            <div key={f.label} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
              <dd className="text-2xl font-extrabold">{f.value}</dd>
              <dt className="text-xs text-white/75">{f.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Igniters and chargers delivered in the province */}
      <section className="py-14 sm:py-16" aria-labelledby="delivered">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="delivered" className="text-2xl font-extrabold text-brand sm:text-3xl">{k.deliveredTitle[locale]}</h2>
          <p className="mt-3 max-w-3xl leading-8 text-muted">{k.deliveredLead[locale]}</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {featured.map((f) => (
              <div key={f.slug} className={`${card} flex flex-col p-6`}>
                <h3 className="mb-4 text-lg font-bold text-text">{f.title[locale]}</h3>
                <ul className="flex-1 space-y-3">
                  {rows(inCategory(f.slug)).map((r) => (
                    <li key={r.first.id} className="text-sm leading-7">
                      <span className="text-text">{bidi(locale, r.first.title[locale])}</span>
                      <span className="block text-xs text-muted">
                        {[
                          r.first.cities.map((id) => cityById.get(id)!.name[locale]).join('، '),
                          facilities[r.first.facility][locale],
                          years(r),
                        ]
                          .filter(Boolean)
                          .join(' · ')}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href={`/products/${f.slug}`} className="mt-5 text-sm font-semibold text-accent hover:underline">
                  {f.link[locale]}
                </Link>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-extrabold text-brand">{k.otherTitle[locale]}</h2>
          <p className="mt-3 max-w-3xl leading-8 text-muted">{k.otherLead[locale]}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/products/${o.slug}`} className={`${card} flex items-center justify-between gap-3 px-4 py-3 text-sm hover:border-accent`}>
                  <span className="text-text">{categoryBySlug.get(o.slug)!.title[locale]}</span>
                  <span className="shrink-0 text-muted">{fill(k.projectCount[locale], { count: n(o.count) })}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support */}
      <section className="border-y border-border bg-surface py-14 sm:py-16" aria-labelledby="support">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="support" className="mb-5 text-2xl font-extrabold text-brand sm:text-3xl">{k.supportTitle[locale]}</h2>
          {k.support.map((p) => (
            <p key={p.en} className="mb-4 leading-8 text-text">{p[locale]}</p>
          ))}
        </div>
      </section>

      {/* Projects by city */}
      <section className="py-14 sm:py-16" aria-labelledby="projects">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="projects" className="mb-8 text-2xl font-extrabold text-brand sm:text-3xl">{k.projectsTitle[locale]}</h2>
          <div className="space-y-10">
            {byCity.map(({ id, list }) => {
              const city = cityById.get(id)!.name[locale];
              return (
                <div key={id}>
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-bold text-text">
                      {city} <span className="text-sm font-normal text-muted">({fill(k.projectCount[locale], { count: n(list.length) })})</span>
                    </h3>
                    <Link href={{ pathname: '/projects', query: { city: id } }} className="text-sm font-semibold text-accent hover:underline">
                      {fill(k.cityMap[locale], { city })}
                    </Link>
                  </div>
                  <ul className={`${card} divide-y divide-border`}>
                    {rows(list).map((r) => (
                      <li key={r.first.id} className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3 text-sm">
                        <span className="text-text">
                          {bidi(locale, r.first.title[locale])}
                          {r.count > 1 && <span className="ms-2 text-xs text-muted">({fill(k.repeat[locale], { count: n(r.count) })})</span>}
                        </span>
                        <span className="text-xs text-muted">
                          {[facilities[r.first.facility][locale], years(r)].filter(Boolean).join(' · ')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface py-14 sm:py-16" aria-labelledby="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq" className="mb-6 text-2xl font-extrabold text-brand sm:text-3xl">{k.faqTitle[locale]}</h2>
          <div className="space-y-3">
            {k.faq.map((f) => (
              <details key={f.q.en} className="group rounded-xl border border-border bg-surface-2 px-5 py-4">
                <summary className="cursor-pointer font-semibold text-text">{f.q[locale]}</summary>
                <p className="mt-3 leading-8 text-text">{bidi(locale, f.a[locale])}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-2 py-12 sm:py-14" aria-labelledby="khuzestan-cta">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="khuzestan-cta" className="text-xl font-extrabold text-brand sm:text-2xl">{k.ctaTitle[locale]}</h2>
            <p className="mt-2 max-w-2xl leading-7 text-muted">{k.ctaBody[locale]}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ChatInquiryButton className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast hover:opacity-90">
              {tp('inquire')}
            </ChatInquiryButton>
            <Link
              href="/contact"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text hover:border-accent"
            >
              {tn('contact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
