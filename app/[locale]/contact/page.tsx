import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { Placeholder } from '@/components/ui/Placeholder';

export async function generateMetadata({ params }: PageProps<'/[locale]/contact'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'nav' });
  return { title: t('contact') };
}

export default async function ContactPage({ params }: PageProps<'/[locale]/contact'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  return <Placeholder title={t('contact')} />;
}
