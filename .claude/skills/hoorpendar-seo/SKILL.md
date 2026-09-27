---
name: hoorpendar-seo
description: SEO for the Hoorpendar website (Next.js 16, fa/en). Use for any work on search ranking, metadata, titles and descriptions, sitemap, robots, canonical/hreflang, JSON-LD structured data, keyword targeting, landing pages, local SEO for Ahvaz and Khuzestan, Google Search Console, or when the user mentions سئو، رتبه در گوگل، کلمه کلیدی، جرقه‌زن، شارژر باتری، اهواز، خوزستان.
---

# Hoorpendar SEO

Goal: when someone in Iran, and especially in Ahvaz and Khuzestan, searches for an igniter
(جرقه‌زن، ایگنایتر، اکسایتر جرقه) or an industrial battery charger (شارژر باتری، باتری شارژر،
یکسوساز), a Hoorpendar page is the first organic result.

## Ground rules (read first)

1. **Content policy wins over SEO.** The pinned memory and PLAN.md section 2 apply to every title,
   description, alt text, JSON-LD field and landing page: no client or organization names, no
   contract details, no third-party brands or model numbers, no mention of sanctions. A keyword
   such as «جرقه‌زن توربین زیمنس» is off-limits even if people search for it. `npm run check-content`
   must pass.
2. **Persian copy goes through the `persian-writing` skill** (see CLAUDE.md). SEO copy is still
   human copy: complete sentences, no keyword stuffing, no slogan headings. Put the keyword in
   naturally once in the title, once in the H1 and early in the first paragraph.
3. **Read the Next.js docs in `node_modules/next/dist/docs/`** before writing metadata code
   (`01-app/03-api-reference/03-file-conventions/01-metadata/` for sitemap and robots,
   `04-functions/generate-metadata.md` for `alternates`). This is Next 16: `params` is a Promise.

## Measure first

```bash
node scripts/seo-audit.ts https://hoorpendar-website.vercel.app --keywords=fa
```

`scripts/seo-audit.ts` crawls a running site (default `http://localhost:3000`) from `/fa`, `/en`
and `/sitemap.xml` and reports, per page: title and description length, canonical, hreflang
(fa, en, x-default), `<html lang>`, H1 count, Open Graph, JSON-LD validity and missing alt text,
plus duplicate titles and robots.txt/sitemap.xml status. `--keywords=fa|en` lists which pages
mention each target keyword group in their title, H1 or description. `--json` gives
machine-readable output. Run it before and after a change and compare.

## Technical checklist for this codebase

Baseline audit on 2026-09-27 (120 pages): no canonical and no hreflang on any page, no JSON-LD,
`/sitemap.xml` and `/robots.txt` both return 500, 50 pages without og:title/og:image, 53
descriptions too long, 30 titles too long. No page mentions Ahvaz or Khuzestan.

Done on 2026-09-27 (audit went from 482 errors to 0): `lib/seo.ts` holds `SITE_URL`
(`NEXT_PUBLIC_SITE_URL`, default `https://hoorpendar.com`), `pageMetadata()` for canonical,
hreflang (fa, en, x-default) and Open Graph, and the JSON-LD builders. Every page calls
`pageMetadata()`; `app/sitemap.ts` and `app/robots.ts` exist; the layout renders `Organization`
JSON-LD, the home page `WebSite`, category pages `BreadcrumbList`, product pages `Product` and
`BreadcrumbList`. Use these helpers for any new page. No `Offer` without a real price; no fake
`AggregateRating`.

- [ ] Titles: about 50-60 characters, keyword first, brand last (`%s | هورپندار` template already
      exists). Descriptions: 120-155 characters, one concrete sentence with the keyword.
- [ ] og:image for the 30 pages that have none (about, contact, projects, catalog, products without photos).
- [ ] `areaServed` in `organizationJsonLd` could list Khuzestan and its main cities once the Khuzestan page exists.
- [ ] Images: descriptive Persian alt text on the fa pages (already mostly present).
- [ ] 301 redirects from the old WordPress URLs (list in `site-archive/crawl/index.json`), in
      `next.config.ts`, so the old site's ranking passes to the new pages.
- [ ] Core Web Vitals: check with PageSpeed Insights on mobile after deploy.

## Keywords and pages

See `references/keywords.md` for the full keyword map (Persian spelling variants, English,
intent, target URL). Short version: one strong page per intent.

| Intent | Target page |
|---|---|
| جرقه‌زن / ایگنایتر (general, turbine, boiler, furnace) | `/fa/products/ignition` |
| each igniter type (پرتابل، اکسایتر، ترانس جرقه، شمع و کابل) | its product page |
| شارژر باتری صنعتی / یکسوساز / شارژر باتری تریستوری | `/fa/products/power-supplies` |
| each charger type | its product page |
| … در اهواز / خوزستان | a Khuzestan service page (see `references/local-seo.md`) |

The category pages must carry real text (a few paragraphs on types, applications, input and
output ranges, custom builds, support in Khuzestan) rather than only a product grid.

## Local SEO for Ahvaz and Khuzestan

Details in `references/local-seo.md`. In short: Google ranks the local map pack by proximity
to a verified address, which the company does not have in Khuzestan today. Organic results for
«جرقه‌زن اهواز» can still be won with a genuine Khuzestan page (projects delivered in the
province from `content/projects.ts`, on-site support, delivery times), internal links from the
ignition and charger pages, and listings on Neshan, Balad and Google Maps. A real
representative address in Ahvaz would make the map pack reachable.

## Off-site (outside the codebase; tell the user, do not do it yourself)

- Google Search Console and Bing Webmaster Tools: verify `hoorpendar.com`, submit the sitemap,
  watch "Performance" for the target queries.
- Listings with consistent name, address and phone (NAP): Neshan, Balad, Google Maps
  ("add a missing place"), Iranian industrial directories and knowledge-based company lists.
- Links from trade associations, industry exhibitions such as the Iran Oil Show, and supplier
  vendor lists.
