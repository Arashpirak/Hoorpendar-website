import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { Placeholder } from '@/components/ui/Placeholder';

export async function generateMetadata({ params }: PageProps<'/[locale]/projects'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'nav' });
  return { title: t('projects') };
}

export default async function ProjectsPage({ params }: PageProps<'/[locale]/projects'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  return <Placeholder title={t('projects')} />;
}
