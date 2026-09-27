import type { Metadata } from 'next';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { catalog } from '@/content/catalog';
import { categories, products, productsIn, renewal } from '@/content/products';
import { projects } from '@/content/projects';
import { company, telHref } from '@/content/company';
import { facilities } from '@/content/taxonomy';
import { photos } from '@/content/photos';
import type { FacilityKey, Product } from '@/content/types';
import { projectRows, projectStats } from '@/lib/project-view';
import { groupRows } from '@/lib/group-rows';
import { displayYear, formatNumber } from '@/lib/format';
import { bidi } from '@/lib/bidi';
import { PageHero } from '@/components/ui/PageHero';
import { ProductImage } from '@/components/products/ProductCard';
import { PrintButton } from '@/components/catalog/PrintButton';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: PageProps<'/[locale]/catalog'>): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: 'catalog' });
  return pageMetadata(locale, '/catalog', {
    title: t('metaTitle'),
    description: t('metaDescription'),
    image: photos.powerPlantNight.src,
  });
}

const sectionIds = ['about', 'services', 'milestones', 'products', 'industries', 'projects', 'standards', 'contact'] as const;

function Section({ id, eyebrow, title, lead, alt, newPage, children }: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  alt?: boolean;
  /** Start this section on a new page when printing. */
  newPage?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-20 py-14 sm:py-16 print:py-6 ${alt ? 'border-y border-border bg-surface' : ''} ${newPage ? 'print:break-before-page' : ''}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-2 text-sm font-semibold text-accent">{eyebrow}</p>
        <h2 id={`${id}-title`} className="text-2xl font-extrabold text-brand sm:text-3xl">
          {title}
        </h2>
        {lead && <p className="mt-3 max-w-3xl leading-8 text-muted">{lead}</p>}
        <div className="mt-8 print:mt-5">{children}</div>
      </div>
    </section>
  );
}

function CatalogProduct({ product, locale, linkLabel }: { product: Product; locale: Locale; linkLabel: string }) {
  const features = product.features[locale];
  return (
    <li className="flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface break-inside-avoid">
      <div className="relative aspect-[4/3] border-b border-border bg-white print:aspect-[16/10] dark:bg-surface-2">
        <ProductImage product={product} locale={locale} sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-5 print:p-3">
        {product.model && (
          <p className="mb-1 text-xs font-semibold text-accent">
            <span className="ltr inline-block">{product.model}</span>
          </p>
        )}
        <h4 className="leading-7 font-bold text-text">{bidi(locale, product.title[locale])}</h4>
        <p className="mt-2 text-sm leading-7 text-muted">{bidi(locale, product.summary[locale])}</p>
        {features.length > 0 && (
          <ul className="mt-3 space-y-1 text-[13px] leading-6">
            {features.slice(0, 4).map((f) => (
              <li key={f} className="relative ps-4 before:absolute before:start-0 before:top-[0.6em] before:size-1.5 before:rounded-sm before:bg-accent">
                {bidi(locale, f)}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={`/products/${product.category}/${product.slug}`}
          className="mt-auto pt-4 text-xs font-semibold text-accent hover:underline print:hidden"
        >
          {linkLabel} {locale === 'fa' ? '←' : '→'}
        </Link>
      </div>
    </li>
  );
}

export default async function CatalogPage({ params }: PageProps<'/[locale]/catalog'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('catalog');
  const tNav = await getTranslations('nav');
  const tProducts = await getTranslations('products');
  const tProjects = await getTranslations('projects');
  const tFooter = await getTranslations('footer');

  const num = (n: number) => formatNumber(locale, n);
  const year = (sh: number) => formatNumber(locale, locale === 'fa' ? sh : sh + 621);
  const stats = projectStats();
  const { contact } = company;

  const statItems = [
    { value: `+${num(company.stats.years)}`, label: t('stats.years') },
    { value: num(company.stats.contracts), label: t('stats.contracts') },
    { value: `+${num(company.stats.clients)}`, label: t('stats.clients') },
    { value: num(products.length), label: t('stats.products') },
  ];

  const tocLabels: Record<(typeof sectionIds)[number], string> = {
    about: t('aboutEyebrow'),
    services: t('servicesEyebrow'),
    milestones: t('milestonesEyebrow'),
    products: t('productsEyebrow'),
    industries: t('industriesEyebrow'),
    projects: t('projectsEyebrow'),
    standards: t('standardsEyebrow'),
    contact: t('contactEyebrow'),
  };

  // Projects by type of client, busiest first.
  const facilityCounts = new Map<FacilityKey, number>();
  for (const p of projects) facilityCounts.set(p.facility, (facilityCounts.get(p.facility) ?? 0) + 1);
  const industries = [...facilityCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([key, count]) => ({ key, count, sector: projects.find((p) => p.facility === key)!.sector }));

  // Full project list, oldest first; repeat contracts collapse into one row and undated projects go last.
  const rows = groupRows(projectRows(locale)).sort(
    (a, b) => (a.min ?? Infinity) - (b.min ?? Infinity) || a.first.id.localeCompare(b.first.id),
  );

  return (
    <>
      <PageHero photo={photos.powerPlantNight} eyebrow={t('eyebrow')} title={company.legalName[locale]} lead={t('lead')}>
        <div className="mt-7 flex flex-wrap items-center gap-3 print:hidden">
          <PrintButton label={t('print')} hint={t('printHint')} />
          <Link
            href="/contact"
            className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {tNav('contact')}
          </Link>
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 print:mt-5">
          {statItems.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
              <dd className="text-2xl font-extrabold sm:text-3xl">{s.value}</dd>
              <dt className="text-xs text-white/75">{s.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Contents */}
      <nav aria-label={t('contents')} className="sticky top-16 z-30 border-b border-border bg-bg/85 backdrop-blur-md print:hidden">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:px-6">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-full px-3.5 py-1.5 text-sm whitespace-nowrap text-muted hover:bg-surface-2 hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
              >
                {tocLabels[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* About */}
      <Section id="about" eyebrow={t('aboutEyebrow')} title={t('aboutTitle')}>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] print:block">
          <div className="space-y-4 leading-8 text-text/90 sm:text-justify">
            {catalog.about.map((p) => (
              <p key={p.en}>{bidi(locale, p[locale])}</p>
            ))}
          </div>
          <aside className="rounded-[var(--radius-card)] border border-border bg-surface p-6 break-inside-avoid print:mt-5">
            <h3 className="mb-4 text-lg font-bold text-brand">{t('strengthsTitle')}</h3>
            <ul className="space-y-3 text-sm leading-7">
              {catalog.strengths.map((s) => (
                <li key={s.en} className="flex gap-3">
                  <svg viewBox="0 0 20 20" className="mt-1 size-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span>{bidi(locale, s[locale])}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" alt eyebrow={t('servicesEyebrow')} title={t('servicesTitle')} lead={t('servicesLead')}>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-2">
          {catalog.services.map((s, i) => (
            <li key={s.title.en} className="rounded-[var(--radius-card)] border border-border bg-bg p-5 break-inside-avoid">
              <span className="mb-3 grid size-10 place-items-center rounded-xl bg-accent/10 font-extrabold text-accent">
                {num(i + 1)}
              </span>
              <h3 className="font-bold text-text">{s.title[locale]}</h3>
              <p className="mt-1 text-sm leading-7 text-muted">{bidi(locale, s.lead[locale])}</p>
              <ul className="mt-3 list-disc space-y-1 ps-5 text-sm leading-7 text-muted marker:text-accent">
                {s.items.map((item) => (
                  <li key={item.en}>{bidi(locale, item[locale])}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Milestones */}
      <Section id="milestones" newPage eyebrow={t('milestonesEyebrow')} title={t('milestonesTitle')}>
        <ol className="relative space-y-4 border-s-2 border-border ps-6 sm:ps-8">
          {catalog.milestones.map((m) => {
            const when =
              'when' in m && m.when
                ? m.when[locale]
                : 'ongoing' in m && m.ongoing
                  ? t('sinceYear', { year: year(m.yearSH!) })
                  : [m.yearSH, 'toSH' in m ? m.toSH : undefined].filter(Boolean).map((y) => year(y!)).join('–');
            return (
              <li key={m.title.en} className="relative break-inside-avoid">
                <span className="absolute -start-[31px] top-5 size-3.5 rounded-full border-2 border-bg bg-accent sm:-start-[39px]" aria-hidden="true" />
                <div className="rounded-[var(--radius-card)] border border-border bg-surface p-5 print:p-3">
                  <p className="text-sm font-extrabold text-accent">{when}</p>
                  <h3 className="mt-1 font-bold text-text">{bidi(locale, m.title[locale])}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted">{bidi(locale, m.body[locale])}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Products */}
      <Section id="products" alt newPage eyebrow={t('productsEyebrow')} title={t('productsTitle')} lead={t('productsLead')}>
        <div className="space-y-14 print:space-y-8">
          {categories
            .filter((c) => c.slug !== 'legacy-renewal')
            .map((c, i) => (
              <div key={c.slug} id={`cat-${c.slug}`} className={`scroll-mt-32 ${i > 0 ? 'print:break-before-page' : ''}`}>
                <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-border pb-3 break-after-avoid">
                  <h3 className="text-xl font-bold text-text">{c.title[locale]}</h3>
                  <span className="text-xs text-muted">{tProducts('items', { count: productsIn(c.slug).length })}</span>
                </div>
                <p className="mb-5 max-w-3xl text-sm leading-7 text-muted">{bidi(locale, c.intro[locale])}</p>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-3">
                  {productsIn(c.slug).map((p) => (
                    <CatalogProduct key={p.slug} product={p} locale={locale} linkLabel={t('productLink')} />
                  ))}
                </ul>
              </div>
            ))}

          <div id="cat-legacy-renewal" className="scroll-mt-32 break-inside-avoid print:break-before-page">
            <div className="mb-5 border-b-2 border-border pb-3">
              <h3 className="text-xl font-bold text-text">{t('renewalTitle')}</h3>
            </div>
            <p className="mb-6 max-w-3xl text-sm leading-7 text-muted">
              {bidi(locale, categories.find((c) => c.slug === 'legacy-renewal')!.intro[locale])}
            </p>
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.8fr] print:grid-cols-2">
              <div>
                <h4 className="mb-3 font-bold">{tProducts('renewalStepsTitle')}</h4>
                <ol className="space-y-2 text-sm leading-7">
                  {renewal.steps.map((s, i) => (
                    <li key={s.en} className="flex gap-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-accent-contrast">
                        {num(i + 1)}
                      </span>
                      <span className="pt-0.5">{s[locale]}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 className="mb-3 font-bold">{tProducts('renewalExamplesTitle')}</h4>
                <ul className="list-disc space-y-1 ps-5 text-sm leading-7 text-muted marker:text-accent">
                  {renewal.examples.map((e) => (
                    <li key={e.en}>{bidi(locale, e[locale])}</li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border bg-white print:hidden">
                <Image src={renewal.image.src} alt={renewal.image.alt[locale]} fill sizes="(min-width: 1024px) 300px, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section id="industries" newPage eyebrow={t('industriesEyebrow')} title={t('industriesTitle')} lead={t('industriesLead')}>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4">
          {industries.map((f) => (
            <li key={f.key} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 break-inside-avoid">
              <span className="text-2xl font-extrabold text-brand tabular-nums">{num(f.count)}</span>
              <span className="flex items-center gap-2 text-sm leading-6">
                <span className="inline-block size-2 shrink-0 rounded-full" style={{ background: `var(--${f.sector})` }} />
                {facilities[f.key][locale]}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        alt
        newPage
        eyebrow={t('projectsEyebrow')}
        title={t('projectsTitle')}
        lead={t('projectsLead', { count: num(stats.contracts), from: year(stats.fromSH), to: year(stats.toSH) })}
      >
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-bg">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-surface-2 max-sm:hidden">
              <tr>
                <th scope="col" className="w-10 px-3 py-3 text-start font-semibold">#</th>
                <th scope="col" className="px-3 py-3 text-start font-semibold">{tProjects('colTitle')}</th>
                <th scope="col" className="px-3 py-3 text-start font-semibold">{tProjects('colFacility')}</th>
                <th scope="col" className="w-24 px-3 py-3 text-start font-semibold">{tProjects('colYear')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const range =
                  r.min === null ? t('undated') : r.min === r.max ? year(r.min) : `${year(r.min)}–${year(r.max!)}`;
                return (
                  <tr key={r.first.id} className="border-t border-border align-top break-inside-avoid max-sm:block max-sm:px-4 max-sm:py-3">
                    <td className="px-3 py-2.5 text-muted tabular-nums max-sm:hidden">{num(i + 1)}</td>
                    <td className="px-3 py-2.5 leading-7 max-sm:block max-sm:p-0">
                      <span className="me-2 inline-block size-2 rounded-full align-middle" style={{ background: `var(--${r.first.sector})` }} aria-hidden="true" />
                      {r.first.title}
                      {r.count > 1 && <span className="ms-2 text-xs text-muted">(×{num(r.count)})</span>}
                    </td>
                    <td className="px-3 py-2.5 text-muted max-sm:inline-block max-sm:p-0 max-sm:pe-3 max-sm:text-xs">{r.first.facility}</td>
                    <td className="px-3 py-2.5 whitespace-nowrap text-muted tabular-nums max-sm:inline-block max-sm:p-0 max-sm:text-xs">{range}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Standards */}
      <Section id="standards" eyebrow={t('standardsEyebrow')} title={t('standardsTitle')}>
        <ul className="flex flex-wrap gap-2">
          {catalog.standards.map((s) => (
            <li key={s} className="ltr rounded-full border border-border bg-surface px-4 py-1.5 text-sm">
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">{catalog.standardsNote[locale]}</p>
      </Section>

      {/* Contact */}
      <Section id="contact" alt eyebrow={t('contactEyebrow')} title={t('contactTitle')} lead={t('contactLead')}>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-2 print:gap-3">
          <div className="rounded-xl border border-border bg-bg p-5 break-inside-avoid">
            <dt className="text-sm text-muted">{tFooter('address')}</dt>
            <dd className="mt-1 font-bold leading-7">{contact.address[locale]}</dd>
          </div>
          <div className="rounded-xl border border-border bg-bg p-5 break-inside-avoid">
            <dt className="text-sm text-muted">{tFooter('phone')}</dt>
            <dd className="mt-1 space-y-0.5 font-bold">
              {contact.phones.map((p) => (
                <a key={p} href={telHref(p)} className="ltr block hover:text-accent">
                  {p}
                </a>
              ))}
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-bg p-5 break-inside-avoid">
            <dt className="text-sm text-muted">{tFooter('fax')}</dt>
            <dd className="ltr mt-1 font-bold">{contact.fax}</dd>
          </div>
          <div className="rounded-xl border border-border bg-bg p-5 break-inside-avoid">
            <dt className="text-sm text-muted">
              {tFooter('email')} · {t('website')}
            </dt>
            <dd className="mt-1 space-y-0.5 font-bold">
              <a href={`mailto:${contact.email}`} className="ltr block hover:text-accent">
                {contact.email}
              </a>
              <span className="ltr block">www.hoorpendar.com</span>
            </dd>
          </div>
        </dl>
        <p className="mt-8 text-xs text-muted">
          © {company.legalName[locale]} · {tFooter('since', { year: displayYear(locale, company.foundedYear) })}
        </p>
      </Section>
    </>
  );
}
