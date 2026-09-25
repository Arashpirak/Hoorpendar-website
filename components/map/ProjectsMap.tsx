import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { mapSize, pinPositions, provinces, seaLabels } from '@/content/map.generated';
import { sectors } from '@/content/taxonomy';
import type { Sector } from '@/content/types';
import { cityRows, projectRows, projectStats } from '@/lib/project-view';
import { formatNumber } from '@/lib/format';
import { MapExplorer } from './MapExplorer';

// Interactive projects map (PLAN.md section 6). Provinces are rendered on the server as plain SVG,
// so the page ships no map library; only the pins, filters and city panel run in the browser.
export async function ProjectsMap() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('map');
  const stats = projectStats();
  const sectorLabels = Object.fromEntries(
    (Object.keys(sectors) as Sector[]).map((s) => [s, sectors[s][locale]]),
  ) as Record<Sector, string>;
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
        sectorLabels={sectorLabels}
        years={{ from: stats.fromSH, to: stats.toSH }}
      >
        <svg
          viewBox={`0 0 ${mapSize.width} ${mapSize.height}`}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <g strokeWidth={0.8} strokeLinejoin="round">
            {provinces.map((p) => (
              <path
                key={p.id}
                d={p.d}
                fill={p.active ? 'var(--map-land-active)' : 'var(--map-land)'}
                stroke="var(--map-border)"
              >
                <title>{p.name[locale]}</title>
              </path>
            ))}
          </g>
          {seaLabels.map((s) => (
            <text
              key={s.id}
              x={s.x}
              y={s.y}
              textAnchor="middle"
              fill="var(--map-sea-label)"
              fontSize={19}
              fontStyle={locale === 'en' ? 'italic' : undefined}
              letterSpacing={locale === 'en' ? 1.5 : undefined}
            >
              {s.name[locale]}
            </text>
          ))}
        </svg>
      </MapExplorer>
    </div>
  );
}
