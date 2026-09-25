import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { company } from '@/content/company';
import { formatNumber } from '@/lib/format';

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  const stats = [
    { key: 'years', value: company.stats.years },
    { key: 'contracts', value: company.stats.contracts, exact: true },
    { key: 'clients', value: company.stats.clients },
    { key: 'flameUnits', value: company.stats.flameUnits },
  ] as const;

  return (
    <section className="bg-grid border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="mb-4 text-sm font-semibold text-accent">{t('eyebrow')}</p>
        <h1 className="max-w-3xl text-3xl leading-tight font-extrabold text-brand sm:text-5xl sm:leading-tight">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9">{t('lead')}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t('ctaProducts')}
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t('ctaProjects')}
          </Link>
        </div>

        <dl aria-label={t('statsLabel')} className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.key} className="flex flex-col rounded-[var(--radius-card)] border border-border bg-surface p-5">
              <dt className="text-sm text-muted">{t(`stats.${s.key}`)}</dt>
              <dd className="order-first mb-1 text-3xl font-extrabold text-brand">
                {formatNumber(locale, s.value)}
                {'exact' in s ? '' : '+'}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
