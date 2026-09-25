'use client';

import { usePathname } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

type Props = { target: Locale; label: string; ariaLabel: string };

// A plain link with a full page load (not client-side navigation), so the chat widget
// starts again in the new language.
export function LocaleSwitch({ target, label, ariaLabel }: Props) {
  const pathname = usePathname();
  const href = `/${target}${pathname === '/' ? '' : pathname}`;

  return (
    <a
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.preventDefault();
        // Full page load on purpose: the chat widget only picks up its language on load.
        // eslint-disable-next-line @next/next/no-location-assign-relative-destination
        window.location.assign(href + window.location.search + window.location.hash);
      }}
      className="inline-flex h-10 items-center rounded-full border border-border px-3.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
    >
      {label}
    </a>
  );
}
