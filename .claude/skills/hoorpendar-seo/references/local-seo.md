# Local SEO for Ahvaz and Khuzestan

## How Google decides

- **Map pack** (the three map results): relevance, distance from the searcher and prominence of
  a business listing. Distance needs a real address near Ahvaz. The company's addresses are in
  Tehran and Karaj, so the map pack for «جرقه زن اهواز» is out of reach until there is a
  representative office or workshop address in Khuzestan.
- **Organic results** below the map: normal page ranking. A page that genuinely answers
  "igniter / battery charger supplier for Khuzestan" can rank first here without a local address.

## Business listings

Google Business Profile management is not available to businesses in Iran, so do not plan
around it. What works instead:

- **Google Maps**: "Add a missing place" from the Maps app, for the Tehran office and the Karaj
  workshop (and an Ahvaz address if one exists). Keep the name exactly «هورپندار» / «Hoorpendar».
- **Neshan** and **Balad**: register each address in their business sections; these are what
  most Iranian users open for directions.
- Name, address and phone must match the site footer and `content/company.ts` everywhere.

Say this is user work; it needs the company's own accounts.

## A Khuzestan page on the site

Allowed by the content policy: city and province names, years, sector and facility type,
capability numbers. Not allowed: client or site names.

Suggested route: `/fa/khuzestan` and `/en/khuzestan` (or `/fa/service-areas/khuzestan`), with:

- H1 and title with the intent, for example «جرقه‌زن و شارژر باتری صنعتی برای صنایع خوزستان».
- A short, honest intro: what Hoorpendar builds and supplies to the province, and how support
  works (on-site commissioning, repair turnaround, spares). Only facts the user confirms.
- The list of projects in Khuzestan cities from `content/projects.ts` (Ahvaz, Abadan, Aghajari,
  Masjed Soleyman, Andimeshk and others; about 50 entries), grouped by city and year, and a
  link to `/projects?city=ahvaz`.
- Links to the ignition and charger category pages and the main product pages; link back from
  those pages to this one ("delivered and supported across Khuzestan").
- `Organization` JSON-LD with `areaServed` listing Khuzestan and its main cities.
- A short FAQ that answers real questions (delivery time to Ahvaz, custom voltages, repair),
  written through the `persian-writing` skill.

Avoid thin doorway pages (one near-identical page per city). One strong province page is better
than ten city pages; add a city page only when there is distinct content for it.
