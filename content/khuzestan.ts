import type { L } from './types';
import { cities } from './cities';
import { projects } from './projects';

// Copy for the Khuzestan page (/khuzestan). Support and delivery claims were confirmed by the
// company in September 2026: engineers travel for commissioning and fault finding, support starts
// by phone or WhatsApp, repairs go through the Karaj workshop, and no fixed lead times are promised.
// City names only; never a client, site or plant name (PLAN.md section 2).

export const khuzestanCityIds = cities.filter((c) => c.province.en === 'Khuzestan').map((c) => c.id);
export const khuzestanProjects = projects.filter((p) => p.cities.some((id) => khuzestanCityIds.includes(id)));

export const khuzestan = {
  metaTitle: { fa: 'جرقه‌زن و شارژر باتری صنعتی در اهواز و خوزستان', en: 'Igniters and battery chargers in Khuzestan' },
  // {count} and {from} are filled in by the page.
  metaDescription: {
    fa: 'هورپندار از سال {from} در اهواز و شهرهای دیگر خوزستان {count} پروژه اجرا کرده است؛ از جرقه‌زن و شارژر باتری تا آشکارساز شعله، با نصب و عیب‌یابی در محل.',
    en: 'Since {from} Hoorpendar has delivered {count} projects in Ahvaz and across Khuzestan, from igniters and battery chargers to flame detectors, with on-site support.',
  },
  eyebrow: { fa: 'خوزستان', en: 'Khuzestan' },
  title: { fa: 'جرقه‌زن و شارژر باتری صنعتی برای صنایع خوزستان', en: 'Igniters and industrial battery chargers for Khuzestan' },
  lead: {
    fa: 'از سال {from} تا امروز {count} پروژه در {cities} شهر خوزستان اجرا کرده‌ایم که بیشترشان در تأسیسات نفت و گاز بوده‌اند. جرقه‌زن، شارژر باتری و تجهیزات دیگری که در این صفحه می‌بینید، در کارگاه خودمان طراحی و ساخته شده‌اند.',
    en: 'Since {from} we have delivered {count} projects in {cities} cities of Khuzestan, most of them at oil and gas facilities. The igniters, battery chargers and other equipment on this page were designed and built in our own workshop.',
  },
  statProjects: { fa: 'پروژه در خوزستان', en: 'projects in Khuzestan' },
  statCities: { fa: 'شهر', en: 'cities' },
  statSince: { fa: 'از سال', en: 'since' },

  deliveredTitle: { fa: 'جرقه‌زن و شارژر باتری در پروژه‌های خوزستان', en: 'Igniters and chargers in Khuzestan projects' },
  deliveredLead: {
    fa: 'این‌ها پروژه‌های جرقه‌زن و شارژر باتری ما در استان است. مشخصات هر دستگاه را در صفحه‌ی محصولات همان گروه ببینید.',
    en: 'These are our igniter and battery charger projects in the province. Each product group’s page has the full specifications.',
  },
  ignitionTitle: { fa: 'جرقه‌زن، شمع و کابل', en: 'Igniters, plugs and leads' },
  ignitionLink: { fa: 'همه‌ی جرقه‌زن‌ها', en: 'All igniters' },
  chargerTitle: { fa: 'شارژر باتری و منبع تغذیه', en: 'Battery chargers and power supplies' },
  chargerLink: { fa: 'همه‌ی شارژرهای باتری', en: 'All battery chargers' },

  otherTitle: { fa: 'کارهای دیگر ما در خوزستان', en: 'Our other work in Khuzestan' },
  otherLead: {
    fa: 'جرقه‌زن و شارژر فقط بخشی از کار ما در استان است. آشکارساز شعله، ابزار دقیق و اعلام‌گر آلارم سهم بیشتری از پروژه‌ها دارند.',
    en: 'Igniters and chargers are only part of our work in the province. Flame detection, instrumentation and alarm annunciators make up a larger share of the projects.',
  },
  projectCount: { fa: '{count} پروژه', en: '{count} projects' },

  supportTitle: { fa: 'نصب، راه‌اندازی و پشتیبانی در محل', en: 'Installation, commissioning and on-site support' },
  support: [
    {
      fa: 'پشتیبانی با تماس تلفنی یا پیام در واتس‌اپ شروع می‌شود تا مشکل پیش از هر اقدامی شناخته شود. اگر دستگاه باید تعمیر شود، آن را به کارگاه ما در کرج می‌فرستید و پس از تعمیر برمی‌گردانیم.',
      en: 'Support starts with a phone call or a WhatsApp message, so the problem is understood before anything else happens. A unit that needs repair comes to our workshop in Karaj and goes back to you once it is fixed.',
    },
    {
      fa: 'برای نصب و راه‌اندازی تجهیزات جدید و برای عیب‌یابی دستگاهی که در سرویس خراب شده است، مهندسان ما به اهواز و شهرهای دیگر استان می‌آیند. زمان تحویل هر سفارش به نوع دستگاه و میزان سفارشی‌سازی بستگی دارد و هنگام استعلام اعلام می‌شود.',
      en: 'Our engineers travel to Ahvaz and the rest of the province to install and commission new equipment and to find faults in units that have failed in service. Delivery time depends on the equipment and how much it is customised, and is given with each quote.',
    },
  ] satisfies L[],

  projectsTitle: { fa: 'پروژه‌های هورپندار در شهرهای خوزستان', en: 'Hoorpendar projects in Khuzestan cities' },
  cityMap: { fa: 'پروژه‌های {city} روی نقشه', en: '{city} projects on the map' },
  repeat: { fa: '{count} قرارداد', en: '{count} contracts' },

  faqTitle: { fa: 'پرسش‌های رایج', en: 'Common questions' },
  faq: [
    {
      q: { fa: 'برای نصب و راه‌اندازی به اهواز و شهرهای دیگر خوزستان می‌آیید؟', en: 'Do you come to Ahvaz and other Khuzestan cities for installation?' },
      a: {
        fa: 'بله. تجهیزاتی را که می‌سازیم، در محل نصب و راه‌اندازی می‌کنیم و مهندسان ما برای این کار به اهواز، آغاجاری، مسجدسلیمان و شهرهای دیگر استان می‌آیند.',
        en: 'Yes. We install and commission the equipment we build on site, and our engineers travel to Ahvaz, Aghajari, Masjed Soleyman and other cities in the province to do it.',
      },
    },
    {
      q: { fa: 'اگر جرقه‌زن یا شارژر باتری در سایت خراب شود، چه باید کرد؟', en: 'What happens if an igniter or charger fails on site?' },
      a: {
        fa: 'با ما تماس بگیرید یا در واتس‌اپ پیام بدهید تا مشکل را از راه دور بررسی کنیم. اگر عیب‌یابی در محل لازم باشد، مهندس ما به سایت می‌آید. دستگاهی که باید تعمیر شود، به کارگاه کرج فرستاده و پس از تعمیر برگردانده می‌شود.',
        en: 'Call us or send a WhatsApp message and we look at the problem remotely first. If fault finding on site is needed, one of our engineers comes out. A unit that needs repair is sent to our Karaj workshop and returned once fixed.',
      },
    },
    {
      q: { fa: 'جرقه‌زن ساخت شرکت‌های دیگر را هم تعمیر می‌کنید؟', en: 'Do you repair igniters made by other companies?' },
      a: {
        fa: 'بله. جرقه‌زن و اکسایتر سازنده‌های دیگر را تعمیر و آزمایش می‌کنیم. دستگاه جدید را هم می‌توانیم مطابق نمونه‌ی دستگاه فعلی بسازیم تا بدون تغییر در سیم‌کشی نصب شود.',
        en: 'Yes. We repair and test igniters and exciters from other makers. We can also build a new unit to the sample of the existing one, so it fits without rewiring.',
      },
    },
    {
      q: { fa: 'شارژر باتری با ولتاژ یا جریان خاص می‌سازید؟', en: 'Can you build a charger for a non-standard voltage or current?' },
      a: {
        fa: 'بله. شارژر باتری (که بعضی آن را باطری شارژر هم می‌نامند) را با خروجی 6 تا 250Vdc و در نوع سه‌فاز با جریان تا حدود 200A، مطابق بانک باتری و مشخصات پروژه می‌سازیم.',
        en: 'Yes. We build battery chargers from 6 to 250 V DC, and three-phase units up to about 200 A, to suit the battery bank and the project specification.',
      },
    },
    {
      q: { fa: 'زمان تحویل سفارش چقدر است؟', en: 'How long does delivery take?' },
      a: {
        fa: 'زمان تحویل به نوع دستگاه و میزان سفارشی‌سازی بستگی دارد و هنگام استعلام برای هر سفارش اعلام می‌شود.',
        en: 'It depends on the equipment and how much it is customised. We give a delivery time with each quote.',
      },
    },
  ] satisfies { q: L; a: L }[],
  ctaTitle: { fa: 'استعلام جرقه‌زن یا شارژر باتری', en: 'Ask about an igniter or battery charger' },
  ctaBody: {
    fa: 'مشخصات دستگاه فعلی یا نیاز پروژه را بفرستید تا پیشنهاد فنی و قیمت را اعلام کنیم.',
    en: 'Send us the details of your current unit or your project’s requirements, and we will reply with a technical proposal and a price.',
  },
};
