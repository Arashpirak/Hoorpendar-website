import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { Logo } from './Logo';
import { LocaleSwitch } from './LocaleSwitch';
import { DesktopNav, MobileNav } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';
import { navItems, type NavKey } from './nav-items';

export async function Header() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();
  const other: Locale = locale === 'fa' ? 'en' : 'fa';

  const labels = Object.fromEntries(navItems.map((i) => [i.key, t(`nav.${i.key}`)])) as Record<
    NavKey,
    string
  >;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md print:hidden">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={t('a11y.home')}
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-accent"
        >
          <Logo className="h-9 w-auto" />
          <span className="text-lg font-bold tracking-tight text-brand">{t('meta.siteName')}</span>
        </Link>

        <DesktopNav labels={labels} navLabel={t('nav.primary')} />

        <div className="flex items-center gap-1.5">
          <LocaleSwitch
            target={other}
            label={t('header.switchLocale')}
            ariaLabel={t('header.switchLocaleLabel')}
          />
          <ThemeToggle label={t('header.toggleTheme')} />
          <MobileNav
            labels={labels}
            navLabel={t('nav.primary')}
            openLabel={t('nav.openMenu')}
            closeLabel={t('nav.closeMenu')}
          />
        </div>
      </div>
    </header>
  );
}
