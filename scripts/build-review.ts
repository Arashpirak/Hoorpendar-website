// Builds review/projects-review.html: resume titles side by side with the public rewrite, for sign-off.
// The output contains client names from the resume, so review/ is git-ignored and never published.
// Usage: node scripts/build-review.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { projects } from '../content/projects.ts';
import { cityById } from '../content/cities.ts';
import { facilities, productCategories, sectors } from '../content/taxonomy.ts';

type ResumeRow = { n: number; t: string; c: string; y: number; s: string };

const html = readFileSync('hoorpendar-resume/index.html', 'utf8');
const match = html.match(/const PROJECTS = (\[.*?\]);/s);
if (!match) throw new Error('PROJECTS table not found in the resume');
const resume = new Map((JSON.parse(match[1]) as ResumeRow[]).map((r) => [r.n, r]));

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fa = (n: number) => n.toLocaleString('fa-IR', { useGrouping: false });

const rows = projects
  .map((p) => {
    const n = p.id.startsWith('p') ? Number(p.id.slice(1)) : undefined;
    const src = n ? resume.get(n) : undefined;
    const city = p.cities.map((c) => cityById.get(c)!.name.fa).join('، ') || '<span class="warn">فقط در لیست</span>';
    const tags = [
      p.highlight ? '<span class="tag gold">شاخص</span>' : '',
      p.groupKey ? `<span class="tag">گروه: ${p.groupKey}</span>` : '',
    ].join(' ');
    const summary = p.summary
      ? `<div class="sum"><b>شرح:</b> ${esc(p.summary.fa)}<div dir="ltr">${esc(p.summary.en)}</div></div>`
      : '';
    return `<tr class="s-${p.sector}">
      <td class="id">${p.id}</td>
      <td class="src">${src ? esc(src.t) : '<span class="muted">—</span>'}</td>
      <td class="src client">${src ? esc(src.c) : ''}</td>
      <td>${p.yearSH ? fa(p.yearSH) : '<span class="muted">—</span>'}</td>
      <td class="pub"><b>${esc(p.title.fa)}</b>${summary}</td>
      <td class="pub" dir="ltr">${esc(p.title.en)}</td>
      <td>${city}</td>
      <td>${facilities[p.facility].fa}</td>
      <td><span class="dot"></span>${sectors[p.sector].fa}</td>
      <td>${p.productCategory ? productCategories[p.productCategory].fa : '<span class="muted">—</span>'}</td>
      <td>${tags}</td>
    </tr>`;
  })
  .join('\n');

const page = `<!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>بازبینی عنوان پروژه‌ها (داخلی)</title>
<style>
  :root { --bg:#f6f8fb; --card:#fff; --text:#0f1b2d; --muted:#6b7890; --border:#dde4ee; --oil:#e8710a; --power:#1d7fd6; --industry:#7c4dcc; --warn:#b42318; --gold:#b7791f; }
  @media (prefers-color-scheme: dark) { :root { --bg:#0a121e; --card:#101b2b; --text:#e6edf7; --muted:#9aa8bd; --border:#22324a; } }
  body { margin:0; background:var(--bg); color:var(--text); font:14px/1.7 Vazirmatn, Tahoma, sans-serif; }
  header { padding:24px 16px 8px; max-width:1500px; margin:auto; }
  h1 { margin:0 0 4px; font-size:22px; }
  .note { background:#fff4e5; color:#5a3a00; border:1px solid #f0c27a; border-radius:12px; padding:12px 16px; margin:12px 0; }
  @media (prefers-color-scheme: dark) { .note { background:#2b2112; color:#f5d7a1; border-color:#6b4d1d; } }
  .note ol { margin:6px 0 0; padding-inline-start:20px; }
  .wrap { max-width:1500px; margin:auto; padding:0 16px 48px; overflow-x:auto; }
  table { width:100%; border-collapse:collapse; background:var(--card); border:1px solid var(--border); border-radius:12px; overflow:hidden; }
  th, td { padding:8px 10px; border-bottom:1px solid var(--border); vertical-align:top; text-align:start; }
  th { position:sticky; top:0; background:var(--card); font-size:12px; color:var(--muted); z-index:1; }
  td.id { font-family:ui-monospace, monospace; color:var(--muted); white-space:nowrap; }
  td.src { color:var(--muted); max-width:260px; }
  td.client { font-size:12px; }
  td.pub { max-width:320px; }
  .sum { margin-top:6px; font-size:12px; color:var(--muted); }
  .muted { color:var(--muted); } .warn { color:var(--warn); font-size:12px; }
  .tag { display:inline-block; font-size:11px; border:1px solid var(--border); border-radius:999px; padding:0 8px; margin:2px 0; white-space:nowrap; }
  .tag.gold { color:var(--gold); border-color:var(--gold); }
  .dot { display:inline-block; width:8px; height:8px; border-radius:50%; margin-inline-end:6px; }
  .s-oil .dot { background:var(--oil); } .s-power .dot { background:var(--power); } .s-industry .dot { background:var(--industry); }
</style>
</head>
<body>
<header>
  <h1>بازبینی عنوان پروژه‌ها</h1>
  <p class="muted">سند داخلی. دو ستون خاکستری (عنوان رزومه و کارفرما) فقط برای مقایسه است و در سایت نمی‌آید. آنچه در سایت دیده می‌شود ستون‌های «عنوان عمومی» به بعد است. ${fa(projects.length)} ردیف: ${fa(138)} قرارداد رزومه و ${fa(projects.length - 138)} پروژه‌ی شاخص و ارتفاع‌سنج سد.</p>
  <div class="note"><b>مواردی که تأیید شما را لازم دارد:</b>
    <ol>
      <li><b>کدهای حذف‌شده:</b> KRNW320 (ردیف ۱۰۲)، P-4500 (۶۳)، 20CB (۹۹) و ZBOX (۱۲۰) را حذف کردم چون مطمئن نبودم کد خود هورپندار باشند. اگر کد خودتان است، برمی‌گردانم. کدهای PAL625، FDU-300، FR-430E، PI-315، SBC-620 و DHTG-300 مانده‌اند.</li>
      <li><b>آزمون Black Start</b> در شرح پروژه‌ی پژوهشی گاورنر (ردیف ۳۶) آمده، نه در AVR ردیف ۱۶.</li>
      <li><b>دو پروژه‌ی شاخص که در پیوست ب پلن نبود</b> ولی در رزومه هست اضافه شد: x18 (اطفای حریق CO2 نیروگاه آبی، منجیل) و x19 (رله‌های حفاظتی، آغاجاری).</li>
      <li><b>هواشناسی</b> (x02، x14) در حوزه‌ی «صنایع» است. اگر ترجیح می‌دهید «آب و نیرو» باشد، بگویید.</li>
      <li><b>برچسب‌های تأسیسات تازه</b> که در جدول ۲.۴ پلن نبود: «مجتمع فولاد»، «معدن» و «ساختمان اداری».</li>
      <li><b>مختصات شهرها</b> مرکز شهر است، نه محل سد یا نیروگاه (مثلاً اندیمشک، مسجدسلیمان).</li>
      <li><b>گروه‌بندی</b> قراردادهای تکراری فقط وقتی انجام شده که عنوان و شهر یکی است (ستون آخر).</li>
    </ol>
  </div>
</header>
<div class="wrap">
<table>
  <thead><tr>
    <th>شناسه</th><th>عنوان رزومه (داخلی)</th><th>کارفرما (داخلی)</th><th>سال</th>
    <th>عنوان عمومی فارسی</th><th>English</th><th>شهر روی نقشه</th><th>برچسب تأسیسات</th><th>حوزه</th><th>دسته‌ی محصول</th><th></th>
  </tr></thead>
  <tbody>
${rows}
  </tbody>
</table>
</div>
</body>
</html>
`;

mkdirSync('review', { recursive: true });
writeFileSync('review/projects-review.html', page);
console.log(`review/projects-review.html written (${projects.length} rows).`);
