import type { Locale } from '@/i18n/routing';
import { cities } from '@/content/cities';
import { projects } from '@/content/projects';
import { facilities, sectors } from '@/content/taxonomy';
import type { Sector } from '@/content/types';
import { bidi } from '@/lib/bidi';

// Compact, single-language project rows for client components (keeps the page payload small).
export type ProjectRow = {
  id: string;
  title: string;
  /** Solar Hijri year, used for filtering in both languages. */
  ySH: number | null;
  sector: Sector;
  cities: string[];
  facility: string;
  group: string | null;
};

export type CityRow = { id: string; name: string; province: string };

export function projectRows(locale: Locale): ProjectRow[] {
  return projects.map((p) => ({
    id: p.id,
    title: bidi(locale, p.title[locale]),
    ySH: p.yearSH ?? null,
    sector: p.sector,
    cities: p.cities,
    facility: facilities[p.facility][locale],
    group: p.groupKey ?? null,
  }));
}

export function cityRows(locale: Locale): CityRow[] {
  return cities.map((c) => ({ id: c.id, name: c.name[locale], province: c.province[locale] }));
}

export function projectStats() {
  const contracts = projects.filter((p) => p.id.startsWith('p'));
  const years = contracts.map((p) => p.yearSH!).filter(Boolean);
  const usedCities = new Set(projects.flatMap((p) => p.cities));
  const provinces = new Set(cities.filter((c) => usedCities.has(c.id)).map((c) => c.province.en));
  return {
    contracts: contracts.length,
    cities: usedCities.size,
    provinces: provinces.size,
    fromSH: Math.min(...years),
    toSH: Math.max(...years),
  };
}

export const sectorLabels = (locale: Locale) =>
  Object.fromEntries((Object.keys(sectors) as Sector[]).map((s) => [s, sectors[s][locale]])) as Record<Sector, string>;
