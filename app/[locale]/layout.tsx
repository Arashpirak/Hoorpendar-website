import type { Metadata } from 'next';
import { Inter, Vazirmatn } from 'next/font/google';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/next';
import { localeDir, routing } from '@/i18n/routing';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { AtirameChat } from '@/components/chat/AtirameChat';
import { ThemeScript } from '@/components/ui/ThemeScript';
import { jsonLd, organizationJsonLd, SITE_URL } from '@/lib/seo';
import '../globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

// B Nazanin (Borna Rayaneh) for Persian text. It ships in one weight and has no Latin letters,
// and its small x-height needs a size boost to read like the Latin fonts beside it. It draws
// ASCII digits as Persian numerals, so unicode-range leaves 0-9 (model codes, specs) to Inter.
const nazanin = localFont({
  src: '../fonts/BNazanin.woff2',
  variable: '--font-nazanin',
  display: 'swap',
  declarations: [
    { prop: 'size-adjust', value: '118%' },
    { prop: 'unicode-range', value: 'U+0020-002F, U+003A-0040, U+00A0, U+00AB, U+00BB, U+0600-06FF, U+200C-200F, U+FB50-FDFF, U+FE70-FEFF' },
  ],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t('title'), template: `%s | ${t('siteName')}` },
    description: t('description'),
    applicationName: t('siteName'),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'a11y' });

  return (
    <html
      lang={locale}
      dir={localeDir(locale)}
      className={`${nazanin.variable} ${vazirmatn.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-dvh flex-col">
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only z-50 rounded-lg bg-accent px-4 py-2 text-accent-contrast focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
          >
            {t('skipToContent')}
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationJsonLd(locale))} />
        <AtirameChat locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
