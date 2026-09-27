import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { company, instagramHref, telHref, whatsappHref } from '@/content/company';
import { photos } from '@/content/photos';
import { PageHero } from '@/components/ui/PageHero';
import { ChatInquiryButton } from '@/components/chat/ChatInquiryButton';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: PageProps<'/[locale]/contact'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'contact' });
  return pageMetadata(locale as Locale, '/contact', { title: t('title'), description: t('lead') });
}

const mapEmbed = (query: string, locale: Locale) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=${locale}&t=m&z=15&output=embed`;
const mapLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export default async function ContactPage({ params }: PageProps<'/[locale]/contact'>) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations('contact');
  const tf = await getTranslations('footer');
  const { contact, locations } = company;

  const linkClass = 'hover:text-accent focus-visible:outline-2 focus-visible:outline-accent rounded';

  return (
    <>
      <PageHero photo={photos.controlRoom} title={t('title')} lead={t('lead')} />

      <section className="py-14 sm:py-16" aria-labelledby="locations">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="locations" className="mb-8 text-2xl font-extrabold text-brand sm:text-3xl">
            {t('locationsTitle')}
          </h2>
          <ul className="grid gap-6 lg:grid-cols-2">
            {locations.map((loc) => {
              const place = t(loc.key);
              return (
                <li
                  key={loc.key}
                  className="flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface"
                >
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-text">{place}</h3>
                    <p className="mt-1 text-sm text-muted">{t(`${loc.key}Note`)}</p>
                    <p className="mt-3 leading-7 text-text">{loc.address[locale]}</p>
                    <a
                      href={mapLink(loc.mapQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
                    >
                      {t('openMap')}
                    </a>
                  </div>
                  <iframe
                    src={mapEmbed(loc.mapQuery, locale)}
                    title={t('mapTitle', { place })}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mt-auto aspect-[4/3] w-full border-0 border-t border-border sm:aspect-[16/9]"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-surface-2 py-14 sm:py-16" aria-labelledby="channels">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 id="channels" className="mb-6 text-2xl font-extrabold text-brand sm:text-3xl">
              {t('channelsTitle')}
            </h2>
            <dl className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted">{tf('phone')}</dt>
                <dd className="mt-1 flex flex-col gap-1">
                  {contact.phones.map((p) => (
                    <a key={p} href={telHref(p)} className={`ltr self-start ${linkClass}`}>
                      {p}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">{tf('fax')}</dt>
                <dd className="ltr mt-1">{contact.fax}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">{tf('email')}</dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.email}`} className={`ltr ${linkClass}`}>
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">{tf('whatsapp')}</dt>
                <dd className="mt-1">
                  <a href={whatsappHref(contact.whatsapp)} target="_blank" rel="noopener noreferrer" className={`ltr ${linkClass}`}>
                    {contact.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">{tf('instagram')}</dt>
                <dd className="mt-1">
                  <a href={instagramHref(contact.instagram)} target="_blank" rel="noopener noreferrer" className={`ltr ${linkClass}`}>
                    @{contact.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="self-start rounded-[var(--radius-card)] border border-border bg-surface p-6">
            <h2 className="text-lg font-bold text-text">{t('chatTitle')}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{t('chatBody')}</p>
            <ChatInquiryButton className="mt-5 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast hover:opacity-90">
              {t('chatCta')}
            </ChatInquiryButton>
          </div>
        </div>
      </section>
    </>
  );
}
