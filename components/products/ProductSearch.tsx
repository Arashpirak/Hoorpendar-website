'use client';

import { useId, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export type SearchItem = { href: string; title: string; model?: string; category: string; text: string };

const ZWNJ = String.fromCharCode(0x200c);
const normalize = (s: string) =>
  s.toLowerCase().replace(/[يى]/g, 'ی').replace(/ك/g, 'ک').split(ZWNJ).join(' ').replace(/[\s-]+/g, ' ').trim();

// Instant search over product names, model codes and descriptions.
export function ProductSearch({ items }: { items: SearchItem[] }) {
  const t = useTranslations('products');
  const id = useId();
  const [q, setQ] = useState('');
  const needle = normalize(q);
  const results = needle ? items.filter((i) => normalize(i.text).includes(needle)) : [];

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {t('searchLabel')}
      </label>
      <input
        id={id}
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t('searchPlaceholder')}
        className="h-12 w-full rounded-xl border border-border bg-surface px-4 placeholder:text-muted focus-visible:outline-2 focus-visible:outline-accent"
      />
      {needle && (
        <div className="mt-3 rounded-xl border border-border bg-surface" aria-live="polite">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-muted">{t('noResults')}</p>
          ) : (
            <ul className="divide-y divide-border">
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-3 hover:bg-surface-2">
                    <span className="font-medium text-text">{r.title}</span>
                    <span className="text-xs text-muted">
                      {r.model && <span className="ltr me-2 inline-block font-semibold text-accent">{r.model}</span>}
                      {r.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
