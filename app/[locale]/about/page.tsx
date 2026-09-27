import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { company } from '@/content/company';
import { photos } from '@/content/photos';
import { formatNumber } from '@/lib/format';
import { PageHero } from '@/components/ui/PageHero';
import { ChatInquiryButton } from '@/components/chat/ChatInquiryButton';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: PageProps<'/[locale]/about'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'about' });
  const tn = await getTranslations({ locale: locale as Locale, namespace: 'nav' });
  return pageMetadata(locale as Locale, '/about', { title: tn('about'), description: t('lead') });
}

const serviceKeys = ['engineering', 'manufacturing', 'retrofit', 'turnkey'] as const;

// Company overview, written from the company profile. Kept to about one printed page.
export default async function AboutPage({ params }: PageProps<'/[locale]/about'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const th = await getTranslations('home');
  const industries = t.raw('industries') as string[];
  const why = t.raw('why') as string[];

  const stats = [
    { key: 'years', value: company.stats.years },
    { key: 'contracts', value: company.stats.contracts, exact: true },
    { key: 'clients', value: company.stats.clients },
    { key: 'flameUnits', value: company.stats.flameUnits },
  ] as const;

  return (
    <>
      <PageHero photo={photos.substation} title={t('title')} lead={t('lead')} />

      <section className="py-14 sm:py-16" aria-labelledby="intro">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 id="intro" className="text-2xl font-extrabold text-brand sm:text-3xl">
              {t('introTitle')}
            </h2>
            <p className="mt-5 leading-8 text-text">{t('intro1')}</p>
            <p className="mt-4 leading-8 text-text">{t('intro2')}</p>
          </div>
          <dl aria-label={t('statsLabel')} className="grid grid-cols-2 gap-3 self-start">
            {stats.map((s) => (
              <div
                key={s.key}
                className="flex flex-col rounded-[var(--radius-card)] border border-border bg-surface p-4 sm:p-5"
              >
                <dt className="text-sm text-muted">{th(`stats.${s.key}`)}</dt>
                <dd className="order-first mb-1 text-3xl font-extrabold text-brand">
                  {formatNumber(locale, s.value)}
                  {'exact' in s ? '' : '+'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-border bg-surface-2 py-14 sm:py-16" aria-labelledby="services">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="services" className="mb-8 text-2xl font-extrabold text-brand sm:text-3xl">
            {t('servicesTitle')}
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            {serviceKeys.map((key) => (
              <li key={key} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
                <h3 className="text-lg font-bold text-text">{t(`services.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{t(`services.${key}.body`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-brand sm:text-3xl">{t('whyTitle')}</h2>
            <ul className="flex flex-col gap-4">
              {why.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-text">
                  <span aria-hidden className="mt-2.5 size-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-extrabold text-brand sm:text-3xl">{t('industriesTitle')}</h2>
            <ul className="flex flex-wrap gap-2">
              {industries.map((name) => (
                <li key={name} className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-2 py-12 sm:py-14" aria-labelledby="about-cta">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="about-cta" className="text-xl font-extrabold text-brand sm:text-2xl">
              {t('ctaTitle')}
            </h2>
            <p className="mt-2 max-w-2xl leading-7 text-muted">{t('ctaBody')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ChatInquiryButton className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast hover:opacity-90">
              {t('ctaChat')}
            </ChatInquiryButton>
            <Link
              href="/contact"
              className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text hover:border-accent"
            >
              {t('ctaContact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
