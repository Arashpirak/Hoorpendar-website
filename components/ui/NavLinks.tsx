'use client';

import { useEffect, useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { navItems, type NavKey } from './nav-items';

type Props = {
  labels: Record<NavKey, string>;
  navLabel: string;
  openLabel: string;
  closeLabel: string;
};

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNav({ labels, navLabel }: Pick<Props, 'labels' | 'navLabel'>) {
  const pathname = usePathname();
  return (
    <nav aria-label={navLabel} className="hidden md:block">
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                  active ? 'bg-surface-2 text-text' : 'text-muted hover:text-text'
                }`}
              >
                {labels[item.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav({ labels, navLabel, openLabel, closeLabel }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu after navigating to another page.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        className="inline-flex size-10 items-center justify-center rounded-full text-text hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-accent"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav
        id="mobile-nav"
        aria-label={navLabel}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-surface shadow-lg"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    active ? 'bg-surface-2 text-text' : 'text-muted hover:text-text'
                  }`}
                >
                  {labels[item.key]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
