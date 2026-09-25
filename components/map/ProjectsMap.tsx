import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { mapSize, pinPositions } from '@/content/map.generated';
import { cityRows, projectRows, projectStats, sectorLabels } from '@/lib/project-view';
import { formatNumber } from '@/lib/format';
import { MapExplorer } from './MapExplorer';
import { ProvincesSvg } from './ProvincesSvg';

// Interactive projects map for the home page (PLAN.md section 6). Provinces render on the server
// as plain SVG, so the page ships no map library; only pins, filters and the panel run in the browser.
export async function ProjectsMap() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('map');
  const stats = projectStats();
  const year = (sh: number) => formatNumber(locale, locale === 'fa' ? sh : sh + 621);

  const facts = [
    { value: formatNumber(locale, stats.contracts), label: t('statContracts') },
    { value: formatNumber(locale, stats.cities), label: t('statCities') },
    { value: formatNumber(locale, stats.provinces), label: t('statProvinces') },
    { value: `${year(stats.fromSH)}–${year(stats.toSH)}`, label: t('statPeriod') },
  ];

  return (
    <div>
      <dl className="mb-6 flex flex-wrap gap-x-8 gap-y-3">
        {facts.map((f) => (
          <div key={f.label} className="flex items-baseline gap-2">
            <dd className="text-2xl font-extrabold text-brand">{f.value}</dd>
            <dt className="text-sm text-muted">{f.label}</dt>
          </div>
        ))}
      </dl>

      <MapExplorer
        projects={projectRows(locale)}
        cities={cityRows(locale)}
        pins={pinPositions}
        size={mapSize}
        sectorLabels={sectorLabels(locale)}
        years={{ from: stats.fromSH, to: stats.toSH }}
      >
        <ProvincesSvg locale={locale} />
      </MapExplorer>
    </div>
  );
}
