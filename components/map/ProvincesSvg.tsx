import type { Locale } from '@/i18n/routing';
import { mapSize, provinces, seaLabels } from '@/content/map.generated';

// Static province outlines and sea names, rendered on the server. Pins are drawn on top by MapCanvas.
export function ProvincesSvg({ locale }: { locale: Locale }) {
  return (
    <svg viewBox={`0 0 ${mapSize.width} ${mapSize.height}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
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
  );
}
