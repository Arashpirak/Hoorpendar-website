import Script from 'next/script';
import type { Locale } from '@/i18n/routing';

// Atirame chat widget, as on the previous site. Loaded after the page is idle so it
// does not slow down the first render. The widget reads its settings from these data-* attributes.
export function AtirameChat({ locale }: { locale: Locale }) {
  return (
    <Script
      id="atirame-chat"
      src="https://www.atirame.ir/dist2/embed.js"
      strategy="lazyOnload"
      data-api-url="https://www.atirame.ir"
      data-language={locale}
      data-position="bottom-right"
    />
  );
}
