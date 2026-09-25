import type { Locale } from '@/i18n/routing';

// In Persian text, Latin runs such as model codes and units ("(DHTG-300)", "24V DC") can be reordered
// by the bidi algorithm, so parentheses and hyphens land on the wrong side. Wrapping each run in
// Unicode isolates (LRI … PDI) keeps it intact, the same way the resume's faText helper did.
const LRI = String.fromCharCode(0x2066);
const PDI = String.fromCharCode(0x2069);
const LATIN_RUN = /[A-Za-z0-9][A-Za-z0-9\-/.+×°±%µΩ~]*(?: [A-Za-z0-9][A-Za-z0-9\-/.+×°±%µΩ~]*)*/g;

export function isolateLatin(text: string) {
  return text.replace(LATIN_RUN, (run) => {
    // Sentence punctuation belongs to the Persian text around the run.
    const [, body, tail] = run.match(/^(.*?)([.,:;]*)$/)!;
    return `${LRI}${body}${PDI}${tail}`;
  });
}

/** Text ready for display: isolates Latin runs on Persian pages, unchanged on English pages. */
export const bidi = (locale: Locale, text: string) => (locale === 'fa' ? isolateLatin(text) : text);
