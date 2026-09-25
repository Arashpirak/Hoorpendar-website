import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { Placeholder } from '@/components/ui/Placeholder';

export async function generateMetadata({ params }: PageProps<'/[locale]/products'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'nav' });
  return { title: t('products') };
}

export default async function ProductsPage({ params }: PageProps<'/[locale]/products'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('nav');
  return <Placeholder title={t('products')} />;
}
