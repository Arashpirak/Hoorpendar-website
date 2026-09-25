'use client';

import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import type { Sector } from '@/content/types';
import type { CityRow, ProjectRow } from '@/lib/project-view';
import { groupRows } from '@/lib/group-rows';
import { FilterChip, SECTORS, YearSelect, sectorColor, useLocaleFormat } from '@/components/map/filters';
import { MapCanvas, groupByCity, type Pin } from '@/components/map/MapCanvas';

type Props = {
  projects: ProjectRow[];
  cities: CityRow[];
  pins: Record<string, Pin>;
  size: { width: number; height: number };
  sectorLabels: Record<Sector, string>;
  facilities: string[];
  years: { from: number; to: number };
  /** The server-rendered provinces <svg>. */
  children: ReactNode;
};

const ZWNJ = String.fromCharCode(0x200c);
const DIACRITICS = new RegExp(`[${String.fromCharCode(0x064b)}-${String.fromCharCode(0x065f)}]`, 'g');
const ISOLATES = new RegExp(`[${String.fromCharCode(0x2066)}-${String.fromCharCode(0x2069)}]`, 'g');

// Search ignores Arabic/Persian letter variants, half-spaces and case.
const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(DIACRITICS, '')
    .replace(ISOLATES, '')
    .split(ZWNJ)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

export function ProjectsExplorer({ projects, cities, pins, size, sectorLabels, facilities, years, children }: Props) {
  const t = useTranslations('projects');
  const tm = useTranslations('map');
  const { nf, showYear } = useLocaleFormat();
  const searchId = useId();

  const [q, setQ] = useState('');
  const [sector, setSector] = useState<Sector | 'all'>('all');
  const [city, setCity] = useState('');
  const [facility, setFacility] = useState('');
  const [from, setFrom] = useState(years.from);
  const [to, setTo] = useState(years.to);

  // Filters live in the URL so a filtered list can be shared. The page is rendered unfiltered on the
  // server (so the full list is in the HTML), then the URL filters are applied once in the browser.
  const hydrated = useRef(false);
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const num = (k: string, d: number) => (sp.has(k) && !Number.isNaN(Number(sp.get(k))) ? Number(sp.get(k)) : d);
    /* eslint-disable react-hooks/set-state-in-effect -- one-time read of the URL after hydration */
    setQ(sp.get('q') ?? '');
    const s = sp.get('sector');
    setSector(s === 'oil' || s === 'power' || s === 'industry' ? s : 'all');
    setCity(cities.some((c) => c.id === sp.get('city')) ? sp.get('city')! : '');
    setFacility(sp.get('facility') ?? '');
    setFrom(Math.max(years.from, num('from', years.from)));
    setTo(Math.min(years.to, num('to', years.to)));
    /* eslint-enable react-hooks/set-state-in-effect */
    hydrated.current = true;
  }, [cities, years]);

  useEffect(() => {
    if (!hydrated.current) return;
    const sp = new URLSearchParams();
    if (q) sp.set('q', q);
    if (sector !== 'all') sp.set('sector', sector);
    if (city) sp.set('city', city);
    if (facility) sp.set('facility', facility);
    if (from !== years.from) sp.set('from', String(from));
    if (to !== years.to) sp.set('to', String(to));
    const qs = sp.toString();
    window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
  }, [q, sector, city, facility, from, to, years]);

  const cityById = useMemo(() => new Map(cities.map((c) => [c.id, c])), [cities]);
  const searchText = useMemo(
    () =>
      new Map(
        projects.map((p) => [
          p.id,
          normalize([p.title, p.facility, ...p.cities.flatMap((id) => [cityById.get(id)!.name, cityById.get(id)!.province])].join(' ')),
        ]),
      ),
    [projects, cityById],
  );

  const fullRange = from === years.from && to === years.to;
  const needle = normalize(q);
  const matchesExceptCity = (p: ProjectRow) =>
    (sector === 'all' || p.sector === sector) &&
    (!facility || p.facility === facility) &&
    (p.ySH === null ? fullRange : p.ySH >= from && p.ySH <= to) &&
    (!needle || searchText.get(p.id)!.includes(needle));
  const forMap = projects.filter(matchesExceptCity);
  const filtered = forMap.filter((p) => !city || p.cities.includes(city));
  const rows = groupRows(filtered).sort((a, b) => (b.max ?? -1) - (a.max ?? -1));
  const byCity = groupByCity(forMap, cities);
  const yearOptions = Array.from({ length: years.to - years.from + 1 }, (_, i) => years.from + i);
  const cityOptions = cities
    .filter((c) => projects.some((p) => p.cities.includes(c.id)))
    .sort((a, b) => a.name.localeCompare(b.name));
  const isFiltered = Boolean(q || city || facility) || sector !== 'all' || !fullRange;

  const reset = () => {
    setQ('');
    setSector('all');
    setCity('');
    setFacility('');
    setFrom(years.from);
    setTo(years.to);
  };

  const yearText = (min: number | null, max: number | null) =>
    min === null ? tm('noYear') : min === max ? showYear(min) : `${showYear(min)}–${showYear(max!)}`;
  const place = (p: ProjectRow) => p.cities.map((id) => cityById.get(id)!.name).join('، ') || t('noLocation');

  const selectClass = 'h-10 w-full rounded-lg border border-border bg-surface px-3 text-sm';

  return (
    <div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        {/* Filters */}
        <div className="space-y-5">
          <div>
            <label htmlFor={searchId} className="mb-1.5 block text-sm font-semibold text-text">
              {t('searchLabel')}
            </label>
            <input
              id={searchId}
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm placeholder:text-muted focus-visible:outline-2 focus-visible:outline-accent"
            />
          </div>

          <div role="group" aria-label={t('sector')}>
            <p className="mb-1.5 text-sm font-semibold text-text">{t('sector')}</p>
            <div className="flex flex-wrap gap-2">
              <FilterChip active={sector === 'all'} onClick={() => setSector('all')}>
                {tm('all')}
              </FilterChip>
              {SECTORS.map((s) => (
                <FilterChip key={s} active={sector === s} onClick={() => setSector(s)} color={sectorColor[s]}>
                  {sectorLabels[s]}
                </FilterChip>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-text">{t('city')}</span>
            <select value={city} onChange={(e) => setCity(e.target.value)} className={selectClass}>
              <option value="">{t('allCities')}</option>
              {cityOptions.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.province})
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-text">{t('facility')}</span>
            <select value={facility} onChange={(e) => setFacility(e.target.value)} className={selectClass}>
              <option value="">{t('allFacilities')}</option>
              {facilities.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <YearSelect label={tm('yearFrom')} value={from} years={yearOptions} onChange={(y) => setFrom(Math.min(y, to))} />
            <YearSelect label={tm('yearTo')} value={to} years={yearOptions} onChange={(y) => setTo(Math.max(y, from))} />
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-border pt-4 text-sm">
            <span className="text-muted" aria-live="polite">
              {t('showing', { shown: nf.format(filtered.length), total: nf.format(projects.length) })}
            </span>
            {isFiltered && (
              <button type="button" onClick={reset} className="font-semibold text-accent hover:underline">
                {t('reset')}
              </button>
            )}
          </div>
        </div>

        {/* Map */}
        <div>
          <p className="mb-3 text-sm text-muted">{t('mapHint')}</p>
          <div className="mx-auto max-w-2xl">
            <MapCanvas
              byCity={byCity}
              cities={cities}
              pins={pins}
              size={size}
              sectorLabels={sectorLabels}
              selected={city || null}
              onSelect={(id) => setCity((c) => (c === id ? '' : id))}
            >
              {children}
            </MapCanvas>
          </div>
        </div>
      </div>

      {/* List: table on wide screens, cards on phones. */}
      {rows.length === 0 ? (
        <p className="rounded-[var(--radius-card)] border border-border bg-surface p-6 text-center text-muted">{t('empty')}</p>
      ) : (
        <>
          <div className="hidden overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface md:block">
            <table className="w-full text-sm">
              <thead className="bg-surface-2 text-start text-xs text-muted">
                <tr>
                  <th scope="col" className="px-4 py-3 text-start font-semibold">{t('colTitle')}</th>
                  <th scope="col" className="px-4 py-3 text-start font-semibold">{t('colLocation')}</th>
                  <th scope="col" className="px-4 py-3 text-start font-semibold">{t('colFacility')}</th>
                  <th scope="col" className="px-4 py-3 text-start font-semibold whitespace-nowrap">{t('colYear')}</th>
                  <th scope="col" className="px-4 py-3 text-start font-semibold">{t('colSector')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map(({ first, count, min, max }) => (
                  <tr key={first.id} className="align-top hover:bg-surface-2/60">
                    <td className="px-4 py-3 leading-6 text-text">
                      {first.title}
                      {count > 1 && (
                        <span className="ms-2 rounded-full bg-surface-2 px-2 py-0.5 text-xs text-muted">
                          {t('contracts', { count: nf.format(count) })}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted">{place(first)}</td>
                    <td className="px-4 py-3 text-muted">{first.facility}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-muted">{yearText(min, max)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 text-muted">
                        <span className="inline-block size-2 rounded-full" style={{ background: sectorColor[first.sector] }} />
                        {sectorLabels[first.sector]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="space-y-3 md:hidden">
            {rows.map(({ first, count, min, max }) => (
              <li key={first.id} className="rounded-[var(--radius-card)] border border-border bg-surface p-4">
                <p className="leading-7 font-medium text-text">{first.title}</p>
                <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="inline-block size-2 rounded-full" style={{ background: sectorColor[first.sector] }} />
                    {sectorLabels[first.sector]}
                  </span>
                  <span>{place(first)}</span>
                  <span>{yearText(min, max)}</span>
                  {count > 1 && <span>{t('contracts', { count: nf.format(count) })}</span>}
                </p>
                <p className="mt-1 text-xs text-muted">{first.facility}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
