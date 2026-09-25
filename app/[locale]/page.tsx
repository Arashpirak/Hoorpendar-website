import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { company } from '@/content/company';
import { photos } from '@/content/photos';
import { formatNumber } from '@/lib/format';
import { ProjectsMap } from '@/components/map/ProjectsMap';

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const tm = await getTranslations('map');

  const stats = [
    { key: 'years', value: company.stats.years },
    { key: 'contracts', value: company.stats.contracts, exact: true },
    { key: 'clients', value: company.stats.clients },
    { key: 'flameUnits', value: company.stats.flameUnits },
  ] as const;

  return (
    <>
      {/* Hero: full-bleed photo, as on the previous site. */}
      <section className="relative isolate overflow-hidden bg-[#0a121e] text-white">
        <Image
          src={photos.powerPlantNight.src}
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#07101c] via-[#07101c]/60 to-[#07101c]/20" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#07101c]/70 rtl:bg-linear-to-l to-transparent" />

        <div className="mx-auto flex min-h-[min(86vh,760px)] max-w-6xl flex-col justify-end px-4 pt-24 pb-10 sm:px-6 sm:pb-14">
          <p className="mb-4 text-sm font-semibold text-[#f5c451]">{t('eyebrow')}</p>
          <h1 className="max-w-3xl text-3xl leading-tight font-extrabold sm:text-5xl sm:leading-tight">
            {t('title')}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">{t('lead')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t('ctaProducts')}
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t('ctaProjects')}
            </Link>
          </div>

          <dl aria-label={t('statsLabel')} className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.key}
                className="flex flex-col rounded-[var(--radius-card)] border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5"
              >
                <dt className="text-sm text-white/75">{t(`stats.${s.key}`)}</dt>
                <dd className="order-first mb-1 text-3xl font-extrabold">
                  {formatNumber(locale, s.value)}
                  {'exact' in s ? '' : '+'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Projects map */}
      <section className="border-b border-border bg-bg py-16 sm:py-20" aria-labelledby="map-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-sm font-semibold text-accent">{tm('eyebrow')}</p>
          <h2 id="map-title" className="text-2xl font-extrabold text-brand sm:text-4xl">
            {tm('title')}
          </h2>
          <p className="mt-3 mb-8 max-w-3xl leading-8 text-muted">{tm('lead')}</p>
          <ProjectsMap />
          <Link
            href="/projects"
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast hover:opacity-90"
          >
            {t('mapCta')}
          </Link>
        </div>
      </section>
    </>
  );
}
