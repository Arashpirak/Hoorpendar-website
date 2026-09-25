import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { company, instagramHref, telHref, whatsappHref } from '@/content/company';
import { displayYear } from '@/lib/format';
import { Logo } from './Logo';
import { navItems } from './nav-items';

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();
  const { contact } = company;
  const since = displayYear(locale, company.foundedYear);

  const linkClass = 'hover:text-accent focus-visible:outline-2 focus-visible:outline-accent rounded';

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <Logo className="h-9 w-auto" />
            <span className="text-lg font-bold text-brand">{company.name[locale]}</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted">{t('footer.tagline')}</p>
          <p className="text-sm text-muted">{t('chat.hint')}</p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-text">{t('footer.linksTitle')}</h2>
          <ul className="space-y-2.5 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className={linkClass}>
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-text">{t('footer.contactTitle')}</h2>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-muted">{t('footer.address')}</dt>
              <dd>{contact.address[locale]}</dd>
            </div>
            <div>
              <dt className="text-muted">{t('footer.phone')}</dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-1">
                {contact.phones.map((p) => (
                  <a key={p} href={telHref(p)} className={`ltr ${linkClass}`}>
                    {p}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-muted">{t('footer.fax')}</dt>
              <dd className="ltr">{contact.fax}</dd>
            </div>
            <div>
              <dt className="text-muted">{t('footer.email')}</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className={`ltr ${linkClass}`}>
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-6">
              <div>
                <dt className="text-muted">{t('footer.whatsapp')}</dt>
                <dd>
                  <a href={whatsappHref(contact.whatsapp)} target="_blank" rel="noopener noreferrer" className={`ltr ${linkClass}`}>
                    {contact.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">{t('footer.instagram')}</dt>
                <dd>
                  <a href={instagramHref(contact.instagram)} target="_blank" rel="noopener noreferrer" className={`ltr ${linkClass}`}>
                    @{contact.instagram}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-border">
        {/* Extra bottom space keeps the chat bubble clear of the footer text. */}
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pt-5 pb-24 text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
          <span>© {company.legalName[locale]}</span>
          <span>{t('footer.since', { year: since })}</span>
        </div>
      </div>
    </footer>
  );
}
