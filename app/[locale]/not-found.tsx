import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('notFound');
  return (
    <section className="bg-grid">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
        <p className="text-6xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold text-brand">{t('title')}</h1>
        <p className="mt-3 text-muted">{t('body')}</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast">
          {t('back')}
        </Link>
      </div>
    </section>
  );
}
