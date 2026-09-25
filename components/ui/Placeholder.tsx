import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function Placeholder({ title }: { title: string }) {
  const t = await getTranslations('placeholder');
  return (
    <section className="bg-grid">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h1 className="text-3xl font-extrabold text-brand sm:text-4xl">{title}</h1>
        <p className="mt-4 text-muted">
          <span className="font-semibold text-gold">{t('title')}</span> · {t('body')}
        </p>
        <Link href="/" className="mt-8 inline-block text-sm font-semibold text-accent hover:underline">
          {t('back')}
        </Link>
      </div>
    </section>
  );
}
