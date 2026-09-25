import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { company } from '@/content/company';
import { photos } from '@/content/photos';
import { iranPhotos, type IranPhoto } from '@/content/iran-photos';
import { findProduct } from '@/content/products';
import type { Product } from '@/content/types';
import { bidi } from '@/lib/bidi';
import { formatNumber } from '@/lib/format';
import { ProjectsMap } from '@/components/map/ProjectsMap';

// Flagship products shown on the home page, in display order.
const featured = [
  ['alarm-safety', 'programmable-alarm-annunciator'],
  ['instrumentation', 'pressure-to-current-converter'],
  ['flame-detection', 'turbine-flame-detector'],
] as const;

function PhotoCredit({ photo, label }: { photo: IranPhoto; label: string }) {
  return (
    <a href={photo.source} target="_blank" rel="noopener noreferrer" className="ltr inline-block hover:underline">
      {label}
    </a>
  );
}

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const tm = await getTranslations('map');
  const featuredProducts = featured
    .map(([category, slug]) => findProduct(category, slug))
    .filter((p): p is Product => p !== undefined);
  const credit = (photo: IranPhoto) => t('photoCredit', { credit: photo.credit, license: photo.license });

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

      {/* Featured products: alternating photo and text rows. */}
      <section className="border-b border-border bg-surface py-16 sm:py-24" aria-labelledby="featured-title">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-sm font-semibold text-accent">{t('productsEyebrow')}</p>
          <h2 id="featured-title" className="text-2xl font-extrabold text-brand sm:text-4xl">
            {t('productsTitle')}
          </h2>
          <p className="mt-3 max-w-3xl leading-8 text-muted">{t('productsLead')}</p>

          <div className="mt-12 flex flex-col gap-16 sm:gap-20">
            {featuredProducts.map((product, i) => {
              const image = product.images[0];
              return (
                <article key={product.slug} className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    tabIndex={-1}
                    aria-hidden
                    className={`relative block aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-surface-2 ${i % 2 ? 'md:order-last' : ''}`}
                  >
                    {image && (
                      <Image
                        src={image.src}
                        alt={image.alt[locale]}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain p-6 sm:p-10"
                      />
                    )}
                  </Link>
                  <div>
                    {product.model && (
                      <p className="mb-2 text-sm font-semibold text-accent">
                        <span className="ltr inline-block">{product.model}</span>
                      </p>
                    )}
                    <h3 className="text-xl leading-9 font-extrabold text-text sm:text-2xl sm:leading-10">
                      {bidi(locale, product.title[locale])}
                    </h3>
                    <p className="mt-3 leading-8 text-muted">{bidi(locale, product.summary[locale])}</p>
                    <ul className="mt-5 space-y-2">
                      {product.features[locale].slice(0, 3).map((f) => (
                        <li key={f} className="flex gap-3 text-sm leading-7 text-text">
                          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{bidi(locale, f)}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/products/${product.category}/${product.slug}`}
                      className="mt-6 inline-block rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-contrast"
                    >
                      {t('productMore')}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <Link
            href="/products"
            className="mt-16 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast hover:opacity-90"
          >
            {t('productsCta')}
          </Link>
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
      {/* Iran's dams and power plants: one full-bleed photo, then two side by side. */}
      <section aria-labelledby="plants-title" className="bg-[#0a121e] text-white">
        <div className="relative isolate flex min-h-[min(80vh,720px)] items-end overflow-hidden">
          <Image
            src={iranPhotos.karun3.src}
            alt={iranPhotos.karun3.title[locale]}
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#07101c] via-[#07101c]/50 to-transparent" />
          <div className="mx-auto w-full max-w-6xl px-4 pt-32 pb-10 sm:px-6 sm:pb-14">
            <p className="mb-2 text-sm font-semibold text-[#f5c451]">{t('plantsEyebrow')}</p>
            <h2 id="plants-title" className="max-w-3xl text-2xl font-extrabold sm:text-4xl">
              {t('plantsTitle')}
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/85">{t('plantsLead')}</p>
            <p className="mt-8 text-sm font-semibold">
              {iranPhotos.karun3.title[locale]}
              <span className="font-normal text-white/70"> · {iranPhotos.karun3.place[locale]}</span>
            </p>
            <p className="mt-1 text-[11px] text-white/60">
              <PhotoCredit photo={iranPhotos.karun3} label={credit(iranPhotos.karun3)} />
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2">
          {[iranPhotos.rajaee, iranPhotos.karkheh].map((photo) => (
            <figure key={photo.source}>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-card)] bg-white/5">
                <Image
                  src={photo.src}
                  alt={photo.title[locale]}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-3">
                <span className="text-sm font-semibold">{photo.title[locale]}</span>
                <span className="text-sm text-white/70"> · {photo.place[locale]}</span>
                <span className="mt-1 block text-[11px] text-white/60">
                  <PhotoCredit photo={photo} label={credit(photo)} />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

    </>
  );
}
