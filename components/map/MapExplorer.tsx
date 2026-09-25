'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Sector } from '@/content/types';
import type { CityRow, ProjectRow } from '@/lib/project-view';
import { FilterChip, SECTORS, YearSelect, sectorColor, useLocaleFormat } from './filters';
import { MapCanvas, groupByCity, type CityData, type Pin } from './MapCanvas';
import { groupRows } from '@/lib/group-rows';

type Props = {
  projects: ProjectRow[];
  cities: CityRow[];
  pins: Record<string, Pin>;
  size: { width: number; height: number };
  sectorLabels: Record<Sector, string>;
  years: { from: number; to: number };
  /** The server-rendered provinces <svg>. */
  children: ReactNode;
};

// Home-page map: sector and year filters, pins, and a city panel (side column or bottom sheet).
export function MapExplorer({ projects, cities, pins, size, sectorLabels, years, children }: Props) {
  const t = useTranslations('map');
  const { nf } = useLocaleFormat();

  const [sector, setSector] = useState<Sector | 'all'>('all');
  const [from, setFrom] = useState(years.from);
  const [to, setTo] = useState(years.to);
  const [selected, setSelected] = useState<string | null>(null);

  const fullRange = from === years.from && to === years.to;
  const inRange = (p: ProjectRow) => (p.ySH === null ? fullRange : p.ySH >= from && p.ySH <= to);
  const visible = projects.filter((p) => (sector === 'all' || p.sector === sector) && inRange(p));
  const byCity = groupByCity(visible, cities);
  const sectorCounts = Object.fromEntries(
    SECTORS.map((s) => [s, projects.filter((p) => p.sector === s && inRange(p)).length]),
  ) as Record<Sector, number>;
  const listed = cities.filter((c) => pins[c.id]).sort((a, b) => byCity.get(b.id)!.total - byCity.get(a.id)!.total);
  const unlocated = visible.filter((p) => p.cities.length === 0).length;
  const yearOptions = Array.from({ length: years.to - years.from + 1 }, (_, i) => years.from + i);

  // Close the panel with Escape, and move focus into it when a city is picked.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKey);
    const heading = [...document.querySelectorAll<HTMLElement>('[data-city-heading]')].find((el) => el.offsetParent);
    heading?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  const cityPanel = selected ? (
    <CityDetails
      city={cities.find((c) => c.id === selected)!}
      data={byCity.get(selected)!}
      onClose={() => setSelected(null)}
    />
  ) : null;
  const cityList = <CityList cities={listed} byCity={byCity} nf={nf} selected={selected} onSelect={setSelected} />;

  return (
    <div className="space-y-5">
      <div role="group" aria-label={t('filterLabel')} className="flex flex-wrap items-center gap-2">
        <FilterChip active={sector === 'all'} onClick={() => setSector('all')}>
          {t('all')}
        </FilterChip>
        {SECTORS.map((s) => (
          <FilterChip key={s} active={sector === s} onClick={() => setSector(s)} color={sectorColor[s]}>
            {sectorLabels[s]} <span className="text-muted">({nf.format(sectorCounts[s])})</span>
          </FilterChip>
        ))}
        <div className="flex items-center gap-2 sm:ms-auto">
          <YearSelect label={t('yearFrom')} value={from} years={yearOptions} onChange={(y) => setFrom(Math.min(y, to))} />
          <YearSelect label={t('yearTo')} value={to} years={yearOptions} onChange={(y) => setTo(Math.max(y, from))} />
          {(sector !== 'all' || !fullRange) && (
            <button
              type="button"
              onClick={() => {
                setSector('all');
                setFrom(years.from);
                setTo(years.to);
              }}
              className="rounded-lg px-2 py-1.5 text-sm text-accent hover:underline"
            >
              {t('reset')}
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <MapCanvas
            byCity={byCity}
            cities={cities}
            pins={pins}
            size={size}
            sectorLabels={sectorLabels}
            selected={selected}
            onSelect={setSelected}
          >
            {children}
          </MapCanvas>
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

function CityDetails({ city, data, onClose }: { city: CityRow; data: CityData; onClose: () => void }) {
  const t = useTranslations('map');
  const { nf, showYear } = useLocaleFormat();
  const rows = useMemo(() => groupRows(data.items).sort((a, b) => (a.min ?? 9999) - (b.min ?? 9999)), [data.items]);
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
