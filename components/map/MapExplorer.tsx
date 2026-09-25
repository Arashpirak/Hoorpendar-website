'use client';

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { Sector } from '@/content/types';
import type { CityRow, ProjectRow } from '@/lib/project-view';
import { pinRadius } from '@/lib/map';

type Pin = { x: number; y: number; ax: number; ay: number };
type CityData = { total: number; bySector: Record<Sector, number>; items: ProjectRow[] };

type Props = {
  projects: ProjectRow[];
  cities: CityRow[];
  pins: Record<string, Pin>;
  size: { width: number; height: number };
  sectorLabels: Record<Sector, string>;
  years: { from: number; to: number };
  /** The server-rendered provinces <svg>; pins are drawn on top of it. */
  children: ReactNode;
};

const SECTORS: Sector[] = ['oil', 'power', 'industry'];
const sectorColor: Record<Sector, string> = {
  oil: 'var(--oil)',
  power: 'var(--power)',
  industry: 'var(--industry)',
};

export function MapExplorer({ projects, cities, pins, size, sectorLabels, years, children }: Props) {
  const t = useTranslations('map');
  const locale = useLocale() as Locale;
  const nf = useMemo(() => new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US', { useGrouping: false }), [locale]);
  const showYear = (ySH: number) => nf.format(locale === 'fa' ? ySH : ySH + 621);

  const [sector, setSector] = useState<Sector | 'all'>('all');
  const [from, setFrom] = useState(years.from);
  const [to, setTo] = useState(years.to);
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Pins grow on narrow screens so they stay tappable.
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(Math.min(1.7, Math.max(1, 640 / entry.contentRect.width)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const fullRange = from === years.from && to === years.to;
  const filtered = sector !== 'all' || !fullRange;
  const visible = useMemo(
    () =>
      projects.filter(
        (p) =>
          (sector === 'all' || p.sector === sector) &&
          (p.ySH === null ? fullRange : p.ySH >= from && p.ySH <= to),
      ),
    [projects, sector, from, to, fullRange],
  );

  const byCity = useMemo(() => {
    const map = new Map<string, CityData>();
    for (const c of cities) map.set(c.id, { total: 0, bySector: { oil: 0, power: 0, industry: 0 }, items: [] });
    for (const p of visible) {
      for (const id of p.cities) {
        const d = map.get(id)!;
        d.total++;
        d.bySector[p.sector]++;
        d.items.push(p);
      }
    }
    return map;
  }, [cities, visible]);

  const cityById = useMemo(() => new Map(cities.map((c) => [c.id, c])), [cities]);
  const listed = useMemo(
    () => cities.filter((c) => pins[c.id]).sort((a, b) => byCity.get(b.id)!.total - byCity.get(a.id)!.total),
    [cities, pins, byCity],
  );
  const sectorCounts = useMemo(() => {
    const inRange = projects.filter((p) => (p.ySH === null ? fullRange : p.ySH >= from && p.ySH <= to));
    return Object.fromEntries(SECTORS.map((s) => [s, inRange.filter((p) => p.sector === s).length])) as Record<Sector, number>;
  }, [projects, from, to, fullRange]);
  const unlocated = visible.filter((p) => p.cities.length === 0).length;

  // Close the panel with Escape, and move focus into it when a city is picked.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKey);
    const heading = [...document.querySelectorAll<HTMLElement>('[data-city-heading]')].find((el) => el.offsetParent);
    heading?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  const yearOptions = Array.from({ length: years.to - years.from + 1 }, (_, i) => years.from + i);
  const hoveredPin = hovered ? pins[hovered] : null;
  const hoveredData = hovered ? byCity.get(hovered)! : null;

  const cityPanel = selected ? (
    <CityDetails
      city={cityById.get(selected)!}
      data={byCity.get(selected)!}
      showYear={showYear}
      nf={nf}
      onClose={() => setSelected(null)}
    />
  ) : null;

  const cityList = (
    <CityList cities={listed} byCity={byCity} nf={nf} selected={selected} onSelect={setSelected} />
  );

  return (
    <div className="space-y-5">
      {/* Filters */}
      <div role="group" aria-label={t('filterLabel')} className="flex flex-wrap items-center gap-2">
        <FilterChip active={sector === 'all'} onClick={() => setSector('all')}>
          {t('all')}
        </FilterChip>
        {SECTORS.map((s) => (
          <FilterChip key={s} active={sector === s} onClick={() => setSector(s)} color={sectorColor[s]}>
            {sectorLabels[s]} <span className="text-muted">({nf.format(sectorCounts[s])})</span>
          </FilterChip>
        ))}
        <div className="flex items-center gap-2 text-sm sm:ms-auto">
          <label className="flex items-center gap-1.5">
            <span className="text-muted">{t('yearFrom')}</span>
            <select
              value={from}
              onChange={(e) => setFrom(Math.min(Number(e.target.value), to))}
              className="h-9 rounded-lg border border-border bg-surface px-2"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {showYear(y)}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-1.5">
            <span className="text-muted">{t('yearTo')}</span>
            <select
              value={to}
              onChange={(e) => setTo(Math.max(Number(e.target.value), from))}
              className="h-9 rounded-lg border border-border bg-surface px-2"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {showYear(y)}
                </option>
              ))}
            </select>
          </label>
          {filtered && (
            <button
              type="button"
              onClick={() => {
                setSector('all');
                setFrom(years.from);
                setTo(years.to);
              }}
              className="rounded-lg px-2 py-1.5 text-accent hover:underline"
            >
              {t('reset')}
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        {/* Map */}
        <div>
          <div ref={boxRef} className="relative" style={{ aspectRatio: `${size.width} / ${size.height}` }}>
            {children}
            <svg
              viewBox={`0 0 ${size.width} ${size.height}`}
              className="absolute inset-0 h-full w-full"
              role="group"
              aria-label={t('mapLabel')}
            >
              {listed
                .slice()
                .reverse()
                .map((c) => {
                  const pin = pins[c.id];
                  const d = byCity.get(c.id)!;
                  const moved = Math.hypot(pin.x - pin.ax, pin.y - pin.ay) > 2;
                  return moved && d.total > 0 ? (
                    <g key={`lead-${c.id}`} aria-hidden="true" className="text-muted">
                      <line x1={pin.ax} y1={pin.ay} x2={pin.x} y2={pin.y} stroke="currentColor" strokeWidth={scale} />
                      <circle cx={pin.ax} cy={pin.ay} r={2 * scale} fill="currentColor" />
                    </g>
                  ) : null;
                })}
              {/* Largest first, so small pins stay on top. */}
              {listed.map((c) => {
                const d = byCity.get(c.id)!;
                if (d.total === 0) return null;
                const pin = pins[c.id];
                const r = pinRadius(d.total) * scale;
                const ringR = r - 1.8 * scale;
                const circ = 2 * Math.PI * ringR;
                let offset = 0;
                const isSelected = selected === c.id;
                return (
                  <g
                    key={c.id}
                    transform={`translate(${pin.x} ${pin.y})`}
                    role="button"
                    tabIndex={0}
                    aria-label={t('pinLabel', { city: c.name, province: c.province, count: d.total })}
                    aria-pressed={isSelected}
                    className="group cursor-pointer outline-none"
                    onClick={() => setSelected(c.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelected(c.id);
                      }
                    }}
                    onMouseEnter={() => setHovered(c.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(c.id)}
                    onBlur={() => setHovered(null)}
                  >
                    <circle r={r + 6 * scale} fill="transparent" />
                    <circle
                      r={r + 4 * scale}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth={2 * scale}
                      className={isSelected ? '' : 'hidden group-focus-visible:block'}
                    />
                    <circle
                      r={r}
                      fill="var(--surface)"
                      stroke="var(--brand)"
                      strokeOpacity={0.25}
                      className="transition-transform duration-150 group-hover:scale-110"
                    />
                    {SECTORS.map((s) => {
                      const share = d.bySector[s] / d.total;
                      if (!share) return null;
                      const seg = (
                        <circle
                          key={s}
                          r={ringR}
                          fill="none"
                          stroke={sectorColor[s]}
                          strokeWidth={3.2 * scale}
                          strokeDasharray={`${share * circ} ${circ}`}
                          strokeDashoffset={-offset * circ}
                          transform="rotate(-90)"
                        />
                      );
                      offset += share;
                      return seg;
                    })}
                    {d.total > 1 && (
                      <text
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="var(--text)"
                        fontSize={Math.min(r * 0.85, 16 * scale)}
                        fontWeight={700}
                        className="pointer-events-none select-none"
                      >
                        {nf.format(d.total)}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {hoveredPin && hoveredData && hoveredData.total > 0 && (
              <div
                role="presentation"
                className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-lg bg-text px-3 py-1.5 text-xs whitespace-nowrap text-bg shadow-lg"
                style={{
                  left: `${(hoveredPin.x / size.width) * 100}%`,
                  top: `calc(${((hoveredPin.y - pinRadius(hoveredData.total) * scale) / size.height) * 100}% - 8px)`,
                }}
              >
                <b>{cityById.get(hovered!)!.name}</b> · {cityById.get(hovered!)!.province} ·{' '}
                {t('projects', { count: hoveredData.total })}
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
            {SECTORS.map((s) => (
              <span key={s} className="flex items-center gap-1.5">
                <span className="inline-block size-2.5 rounded-full" style={{ background: sectorColor[s] }} />
                {sectorLabels[s]}
              </span>
            ))}
          </div>
          {visible.length === 0 && <p className="mt-3 text-sm text-muted">{t('empty')}</p>}
          {unlocated > 0 && <p className="mt-2 text-xs text-muted">{t('unlocated', { count: unlocated })}</p>}
        </div>

        {/* Desktop side column: city list, or the selected city's projects. */}
        <aside className="hidden max-h-[680px] overflow-y-auto rounded-[var(--radius-card)] border border-border bg-surface lg:block">
          {cityPanel ?? (
            <div className="p-5">
              <h3 className="mb-1 font-bold text-text">{t('cityList')}</h3>
              <p className="mb-4 text-sm text-muted">{t('pick')}</p>
              {cityList}
            </div>
          )}
        </aside>
      </div>

      {/* Mobile: city list under the map, details in a bottom sheet. */}
      <div className="lg:hidden">
        <h3 className="mb-3 font-bold text-text">{t('cityList')}</h3>
        {cityList}
      </div>
      {cityPanel && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label={t('close')}
            className="absolute inset-0 bg-black/40"
            onClick={() => setSelected(null)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[75dvh] overflow-y-auto rounded-t-2xl bg-surface pb-24 shadow-2xl">
            {cityPanel}
          </div>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  color,
  children,
}: {
  active: boolean;
  onClick: () => void;
  color?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
        active ? 'border-accent bg-accent/10 text-text' : 'border-border bg-surface text-muted hover:text-text'
      }`}
    >
      {color && <span className="inline-block size-2.5 rounded-full" style={{ background: color }} />}
      {children}
    </button>
  );
}

function CityList({
  cities,
  byCity,
  nf,
  selected,
  onSelect,
}: {
  cities: CityRow[];
  byCity: Map<string, CityData>;
  nf: Intl.NumberFormat;
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-1">
      {cities.map((c) => {
        const total = byCity.get(c.id)!.total;
        return (
          <li key={c.id}>
            <button
              type="button"
              disabled={total === 0}
              onClick={() => onSelect(c.id)}
              aria-pressed={selected === c.id}
              className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-start text-sm hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-40"
            >
              <span className="min-w-0">
                <span className="block truncate font-medium text-text">{c.name}</span>
                <span className="block truncate text-xs text-muted">{c.province}</span>
              </span>
              <span className="rounded-full bg-surface-2 px-2 py-0.5 text-xs font-semibold text-text">
                {nf.format(total)}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function CityDetails({
  city,
  data,
  showYear,
  nf,
  onClose,
}: {
  city: CityRow;
  data: CityData;
  showYear: (ySH: number) => string;
  nf: Intl.NumberFormat;
  onClose: () => void;
}) {
  const t = useTranslations('map');

  // Repeat contracts collapse into one row with a count and a year range.
  const groups = new Map<string, ProjectRow[]>();
  for (const p of data.items) {
    const key = p.group ?? p.id;
    groups.set(key, [...(groups.get(key) ?? []), p]);
  }
  const rows = [...groups.values()]
    .map((items) => {
      const ys = items.map((p) => p.ySH).filter((y): y is number => y !== null);
      return { first: items[0], count: items.length, min: ys.length ? Math.min(...ys) : null, max: ys.length ? Math.max(...ys) : null };
    })
    .sort((a, b) => (a.min ?? 9999) - (b.min ?? 9999));
  const facilityTypes = [...new Set(data.items.map((p) => p.facility))];

  return (
    <div className="p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 data-city-heading tabIndex={-1} className="text-xl font-bold text-brand outline-none">
            {city.name}
          </h3>
          <p className="text-sm text-muted">
            {city.province} · {t('projects', { count: data.total })}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('close')}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted hover:bg-surface-2 hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <p className="mb-1 text-xs font-semibold text-muted">{t('facilities')}</p>
      <p className="mb-4 text-sm text-text">{facilityTypes.join(' · ')}</p>

      <ul className="divide-y divide-border">
        {rows.map(({ first, count, min, max }) => (
          <li key={first.id} className="flex gap-3 py-2.5">
            <span className="mt-2 inline-block size-2 shrink-0 rounded-full" style={{ background: sectorColor[first.sector] }} />
            <span className="min-w-0 flex-1 text-sm leading-6 text-text">
              {first.title}
              {count > 1 && <span className="text-muted"> · {t('contracts', { count: nf.format(count) })}</span>}
            </span>
            <span className="shrink-0 text-xs leading-6 text-muted">
              {min === null ? t('noYear') : min === max ? showYear(min) : `${showYear(min)}–${showYear(max!)}`}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={{ pathname: '/projects', query: { city: city.id } }}
        className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
      >
        {t('viewAll')}
      </Link>
    </div>
  );
}
