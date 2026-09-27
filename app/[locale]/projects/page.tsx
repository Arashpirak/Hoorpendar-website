import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { projects } from '@/content/projects';
import { cityById } from '@/content/cities';
import { facilities, sectors } from '@/content/taxonomy';
import { photos, type Photo } from '@/content/photos';
import type { Sector } from '@/content/types';
import { mapSize, pinPositions } from '@/content/map.generated';
import { cityRows, projectRows, projectStats, sectorLabels } from '@/lib/project-view';
import { formatNumber } from '@/lib/format';
import { bidi } from '@/lib/bidi';
import { PageHero } from '@/components/ui/PageHero';
import { ProvincesSvg } from '@/components/map/ProvincesSvg';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: PageProps<'/[locale]/projects'>): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: 'projects' });
  return pageMetadata(locale, '/projects', { title: t('title'), description: t('lead') });
}

// Stock photo on each highlighted project's card.
const highlightPhoto: Record<string, Photo> = {
  p001: photos.damNight,
  p002: photos.hydroDam,
  p009: photos.damRelease,
  p014: photos.refineryNight,
  p036: photos.controlRoom,
  p040: photos.refineryFlare,
  p091: photos.circuitBoard,
  p119: photos.offshoreRig,
  p133: photos.locomotive,
  x02: photos.weatherRadar,
};

export default async function ProjectsPage({ params }: PageProps<'/[locale]/projects'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('projects');
  const stats = projectStats();
  const year = (sh: number) => formatNumber(locale, locale === 'fa' ? sh : sh + 621);

  const contracts = projects.filter((p) => p.id.startsWith('p'));
  const sectorFacts = (Object.keys(sectors) as Sector[]).map((s) => ({
    value: formatNumber(locale, contracts.filter((p) => p.sector === s).length),
    label: sectors[s][locale],
    color: `var(--${s})`,
  }));
  const highlights = projects.filter((p) => p.highlight && p.summary);
  const facilityLabels = [...new Set(projects.map((p) => facilities[p.facility][locale]))].sort((a, b) =>
    a.localeCompare(b, locale),
  );

  return (
    <>
      <PageHero photo={photos.refineryNight} eyebrow={t('eyebrow')} title={t('title')} lead={t('lead')}>
        <dl className="mt-8 flex flex-wrap gap-3">
          <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
            <dd className="text-2xl font-extrabold">{formatNumber(locale, stats.contracts)}</dd>
            <dt className="text-xs text-white/75">{t('summaryContracts')}</dt>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
            <dd className="text-2xl font-extrabold">
              {year(stats.fromSH)}–{year(stats.toSH)}
            </dd>
            <dt className="text-xs text-white/75">{t('summaryPeriod')}</dt>
          </div>
          {sectorFacts.map((f) => (
            <div key={f.label} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
              <dd className="text-2xl font-extrabold">{f.value}</dd>
              <dt className="flex items-center gap-1.5 text-xs text-white/75">
                <span className="inline-block size-2 rounded-full" style={{ background: f.color }} />
                {f.label}
              </dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Highlighted projects */}
      <section className="border-b border-border py-14 sm:py-16" aria-labelledby="highlights">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="highlights" className="mb-8 text-2xl font-extrabold text-brand sm:text-3xl">
            {t('highlightsTitle')}
          </h2>
          <ul className="grid gap-5 lg:grid-cols-2">
            {highlights.map((p) => {
              const photo = highlightPhoto[p.id] ?? photos.controlRoom;
              const where = p.cities.map((id) => cityById.get(id)!.name[locale]).join('، ');
              return (
                <li
                  key={p.id}
                  className="flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface sm:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-auto sm:w-2/5 sm:shrink-0">
                    <Image src={photo.src} alt="" fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
                    <span className="absolute start-3 bottom-3 rounded-full bg-black/55 px-2.5 py-1 text-xs text-white backdrop-blur">
                      {[where, p.yearSH && year(p.yearSH)].filter(Boolean).join(' · ')}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-2 flex items-center gap-1.5 text-xs text-muted">
                      <span className="inline-block size-2 rounded-full" style={{ background: `var(--${p.sector})` }} />
                      {facilities[p.facility][locale]}
                    </p>
                    <h3 className="leading-7 font-bold text-text">{bidi(locale, p.title[locale])}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{bidi(locale, p.summary![locale])}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* All projects */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ProjectsExplorer
            projects={projectRows(locale)}
            cities={cityRows(locale)}
            pins={pinPositions}
            size={mapSize}
            sectorLabels={sectorLabels(locale)}
            facilities={facilityLabels}
            years={{ from: stats.fromSH, to: stats.toSH }}
          >
            <ProvincesSvg locale={locale} />
          </ProjectsExplorer>
          <p className="mt-10 border-t border-border pt-6 text-sm text-muted">{t('closing')}</p>
        </div>
      </section>
    </>
  );
}
