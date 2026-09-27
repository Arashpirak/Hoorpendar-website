// On-page SEO audit of a running site: crawls internal links and reports missing or weak
// titles, descriptions, canonicals, hreflang, headings, JSON-LD and image alt text.
// Usage: node scripts/seo-audit.ts [origin] [--max=200] [--keywords=fa|en] [--json]
//   origin defaults to http://localhost:3000 (start it with `npm run build && npm start`).
//   --keywords checks each page against the target keyword list below.

export {};

const args = process.argv.slice(2);
const origin = new URL(args.find((a) => !a.startsWith('--')) ?? 'http://localhost:3000').origin;
const flag = (name: string) => args.find((a) => a.startsWith(`--${name}`))?.split('=')[1] ?? (args.includes(`--${name}`) ? '' : undefined);
const maxPages = Number(flag('max') || 200);
const keywordLocale = flag('keywords');
const asJson = flag('json') !== undefined;

// Target searches (see .claude/skills/hoorpendar-seo/references/keywords.md). A page "covers" a
// group when one of its variants appears in the title, H1 or description.
const keywordGroups: Record<'fa' | 'en', Record<string, string[]>> = {
  fa: {
    'جرقه‌زن': ['جرقه‌زن', 'جرقه زن', 'جرقه', 'ایگنایتر', 'اکسایتر'],
    'شارژر باتری': ['شارژر باتری', 'باتری شارژر', 'شارژر', 'یکسوساز'],
    'خوزستان/اهواز': ['اهواز', 'خوزستان'],
  },
  en: {
    igniter: ['igniter', 'ignition', 'exciter'],
    'battery charger': ['battery charger', 'charger', 'rectifier'],
    'Khuzestan/Ahvaz': ['ahvaz', 'khuzestan'],
  },
};

type Issue = { level: 'error' | 'warn'; msg: string };
type PageReport = { url: string; status: number; title?: string; issues: Issue[]; keywords?: string[] };

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
const stripTags = (s: string) => decode(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
const attr = (tag: string, name: string) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'))?.[1];
const tags = (html: string, name: string) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? [];
const meta = (html: string, key: string) =>
  tags(html, 'meta').find((t) => attr(t, 'name') === key || attr(t, 'property') === key);

function audit(url: string, html: string): Omit<PageReport, 'status'> {
  const issues: Issue[] = [];
  const err = (msg: string) => issues.push({ level: 'error', msg });
  const warn = (msg: string) => issues.push({ level: 'warn', msg });
  const head = html.split(/<\/head>/i)[0];

  const title = stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '');
  if (!title) err('missing <title>');
  else if (title.length > 65) warn(`title is ${title.length} chars (Google shows about 60)`);
  else if (title.length < 20) warn(`title is only ${title.length} chars`);

  const desc = decode(attr(meta(head, 'description') ?? '', 'content') ?? '');
  if (!desc) err('missing meta description');
  else if (desc.length > 170) warn(`description is ${desc.length} chars (about 155 are shown)`);
  else if (desc.length < 70) warn(`description is only ${desc.length} chars`);

  const robots = attr(meta(head, 'robots') ?? '', 'content') ?? '';
  if (/noindex/i.test(robots)) warn(`robots meta: ${robots}`);

  const links = tags(head, 'link');
  const canonical = links.find((t) => attr(t, 'rel') === 'canonical');
  if (!canonical) err('missing canonical link');
  // Compare paths only, so a local or preview build that canonicalizes to the production domain passes.
  else if (new URL(attr(canonical, 'href')!, url).pathname !== new URL(url).pathname) warn(`canonical points elsewhere: ${attr(canonical, 'href')}`);

  const hreflangs = links.filter((t) => attr(t, 'rel') === 'alternate' && attr(t, 'hreflang')).map((t) => attr(t, 'hreflang')!);
  for (const lang of ['fa', 'en', 'x-default']) if (!hreflangs.some((h) => h.toLowerCase().startsWith(lang))) err(`missing hreflang="${lang}"`);

  const htmlTag = tags(html, 'html')[0] ?? '';
  if (!attr(htmlTag, 'lang')) err('missing <html lang>');

  const h1s = html.match(/<h1\b[\s\S]*?<\/h1>/gi) ?? [];
  if (h1s.length === 0) err('no <h1>');
  else if (h1s.length > 1) warn(`${h1s.length} <h1> elements`);
  const h1 = stripTags(h1s[0] ?? '');

  if (!meta(head, 'og:title')) warn('missing og:title');
  if (!meta(head, 'og:image')) warn('missing og:image');

  const jsonLd = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (jsonLd.length === 0) warn('no JSON-LD structured data');
  for (const [, body] of jsonLd) {
    try {
      JSON.parse(body);
    } catch {
      err('invalid JSON-LD (does not parse)');
    }
  }

  const noAlt = tags(html, 'img').filter((t) => attr(t, 'alt') === undefined).length;
  if (noAlt) err(`${noAlt} <img> without alt`);

  let keywords: string[] | undefined;
  if (keywordLocale === 'fa' || keywordLocale === 'en') {
    const lang = attr(htmlTag, 'lang') ?? '';
    if (lang.startsWith(keywordLocale)) {
      const haystack = `${title} ${h1} ${desc}`.toLowerCase().replace(/‌/g, ' ');
      keywords = Object.entries(keywordGroups[keywordLocale])
        .filter(([, variants]) => variants.some((v) => haystack.includes(v.toLowerCase().replace(/‌/g, ' '))))
        .map(([group]) => group);
    }
  }

  return { url, title, issues, keywords };
}

async function get(url: string) {
  const res = await fetch(url, { redirect: 'manual', headers: { 'accept-language': 'fa,en' } }).catch(() => null);
  if (!res) return { status: 0, location: null, body: '' };
  return { status: res.status, location: res.headers.get('location'), body: res.status === 200 ? await res.text() : '' };
}

const siteIssues: Issue[] = [];
const robotsTxt = await get(`${origin}/robots.txt`);
if (robotsTxt.status !== 200) siteIssues.push({ level: 'error', msg: `/robots.txt returned ${robotsTxt.status}` });
else if (!/sitemap:/i.test(robotsTxt.body)) siteIssues.push({ level: 'warn', msg: '/robots.txt does not list the sitemap' });

const queue: string[] = [`${origin}/fa`, `${origin}/en`];
const sitemap = await get(`${origin}/sitemap.xml`);
if (sitemap.status !== 200) siteIssues.push({ level: 'error', msg: `/sitemap.xml returned ${sitemap.status}` });
else for (const [, loc] of sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)) queue.push(origin + new URL(decode(loc), origin).pathname);

const seen = new Set<string>();
const reports: PageReport[] = [];
while (queue.length && reports.length < maxPages) {
  const url = queue.shift()!.replace(/[#?].*$/, '').replace(/\/$/, '');
  if (seen.has(url)) continue;
  seen.add(url);
  const res = await get(url);
  if (res.status !== 200) {
    reports.push({ url, status: res.status, issues: [{ level: res.status >= 400 ? 'error' : 'warn', msg: `HTTP ${res.status}${res.location ? ` -> ${res.location}` : ''}` }] });
    continue;
  }
  reports.push({ status: 200, ...audit(url, res.body) });
  for (const tag of tags(res.body, 'a')) {
    const href = attr(tag, 'href');
    if (!href || href.startsWith('#') || /^(mailto|tel|javascript):/.test(href)) continue;
    const next = new URL(decode(href), url);
    if (next.origin === origin && !/\.\w{2,4}$/.test(next.pathname)) queue.push(next.href);
  }
}

// Duplicate titles and descriptions across pages.
const byTitle = new Map<string, string[]>();
for (const r of reports) if (r.title) byTitle.set(r.title, [...(byTitle.get(r.title) ?? []), r.url]);
for (const [title, urls] of byTitle) if (urls.length > 1) siteIssues.push({ level: 'warn', msg: `${urls.length} pages share the title "${title}"` });

if (asJson) {
  console.log(JSON.stringify({ origin, siteIssues, pages: reports }, null, 2));
} else {
  const path = (u: string) => u.slice(origin.length) || '/';
  for (const i of siteIssues) console.log(`${i.level.toUpperCase().padEnd(5)} site  ${i.msg}`);
  for (const r of reports) {
    for (const i of r.issues) console.log(`${i.level.toUpperCase().padEnd(5)} ${path(r.url)}  ${i.msg}`);
  }
  if (keywordLocale) {
    console.log(`\nKeyword coverage (${keywordLocale}): pages whose title, H1 or description mention each target`);
    for (const group of Object.keys(keywordGroups[keywordLocale as 'fa' | 'en'] ?? {})) {
      const hits = reports.filter((r) => r.keywords?.includes(group)).map((r) => path(r.url));
      console.log(`  ${group}: ${hits.length}${hits.length ? `  (${hits.slice(0, 6).join(', ')}${hits.length > 6 ? ', ...' : ''})` : ''}`);
    }
  }
  const all = [...siteIssues, ...reports.flatMap((r) => r.issues)];
  const errors = all.filter((i) => i.level === 'error').length;
  console.log(`\n${reports.length} pages, ${errors} errors, ${all.length - errors} warnings`);
  process.exitCode = errors ? 1 : 0;
}
