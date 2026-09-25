'use client';

import { useMemo, type ReactNode } from 'react';
import { useLocale } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import type { Sector } from '@/content/types';

export const SECTORS: Sector[] = ['oil', 'power', 'industry'];

export const sectorColor: Record<Sector, string> = {
  oil: 'var(--oil)',
  power: 'var(--power)',
  industry: 'var(--industry)',
};

/** Number formatting and year display for the current locale (Solar Hijri in Persian, Gregorian in English). */
export function useLocaleFormat() {
  const locale = useLocale() as Locale;
  return useMemo(() => {
    const nf = new Intl.NumberFormat(locale === 'fa' ? 'fa-IR' : 'en-US', { useGrouping: false });
    return {
      locale,
      nf,
      showYear: (ySH: number) => nf.format(locale === 'fa' ? ySH : ySH + 621),
    };
  }, [locale]);
}

export function FilterChip({
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

export function YearSelect({
  label,
  value,
  years,
  onChange,
}: {
  label: string;
  value: number;
  years: number[];
  onChange: (y: number) => void;
}) {
  const { showYear } = useLocaleFormat();
  return (
    <label className="flex items-center gap-1.5 text-sm">
      <span className="text-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-9 rounded-lg border border-border bg-surface px-2"
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {showYear(y)}
          </option>
        ))}
      </select>
    </label>
  );
}
