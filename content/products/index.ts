import type { L, Product, ProductCategorySlug, Seo } from '../types';
import { productCategories } from '../taxonomy';
import { photos, type Photo } from '../photos';
import { img } from './shared';
import { excitationGovernor } from './excitation-governor';
import { flameDetection } from './flame-detection';
import { ignition } from './ignition';
import { turbineControl } from './turbine-control';
import { powerSupplies } from './power-supplies';
import { alarmSafety } from './alarm-safety';
import { instrumentation } from './instrumentation';
import { damPowerInfrastructure } from './dam-power-infrastructure';
import { categorySeo, productSeo } from './seo';

export type Category = {
  slug: ProductCategorySlug;
  title: L;
  intro: L;
  photo: Photo;
  seo?: Seo;
};

// Display order of the catalogue.
export const categories: Category[] = [
  {
    slug: 'excitation-governor',
    title: productCategories['excitation-governor'],
    intro: {
      fa: 'برای ژنراتورها و موتورهای سنکرون، سیستم تحریک استاتیک و بدون جاروبک، تنظیم‌کننده‌ی خودکار ولتاژ (AVR) دیجیتال و گاورنر توربین آبی می‌سازیم.',
      en: 'For generators and synchronous motors we build static and brushless excitation, digital AVRs and hydro-turbine governors.',
    },
    photo: photos.damNight,
  },
  {
    slug: 'flame-detection',
    title: productCategories['flame-detection'],
    intro: {
      fa: 'واحدها، رله‌ها و سنسورهای این گروه شعله را در توربین، کوره، بویلر و فلر تشخیص می‌دهند. آشکارساز آتش برای مناطق خطرناک هم در همین گروه است.',
      en: 'These units, relays and sensors detect flame in turbines, furnaces, boilers and flares. The group also includes fire detectors for hazardous areas.',
    },
    photo: photos.refineryFlare,
  },
  {
    slug: 'ignition',
    title: productCategories.ignition,
    intro: {
      fa: 'واحد جرقه‌زن، اکسایتر، کابل و شمع برای توربین‌های گازی، بویلرها و کوره‌ها می‌سازیم و در صورت نیاز آن‌ها را در جعبه‌ی ضدانفجار تحویل می‌دهیم.',
      en: 'We build ignition units, exciters, leads and plugs for gas turbines, boilers and furnaces, and supply them in explosion-proof enclosures where needed.',
    },
    photo: photos.powerPlantNight,
  },
  {
    slug: 'turbine-control',
    title: productCategories['turbine-control'],
    intro: {
      fa: 'این تجهیزات سرعت و دمای توربین‌های گازی صنعتی را پایش می‌کنند، شیر سوخت را کنترل می‌کنند و موقعیت را بدون تماس می‌سنجند.',
      en: 'This equipment monitors speed and temperature on industrial gas turbines, controls the fuel valve and measures position without contact.',
    },
    photo: photos.refineryNight,
  },
  {
    slug: 'power-supplies',
    title: productCategories['power-supplies'],
    intro: {
      fa: 'شارژر هوشمند باتری و منبع تغذیه‌ی صنعتی و سفارشی می‌سازیم. کنترلری هم داریم که شارژرهای قدیمی را نوسازی می‌کند.',
      en: 'We build smart battery chargers and industrial and custom power supplies, plus a controller that brings older chargers up to date.',
    },
    photo: photos.substation,
  },
  {
    slug: 'alarm-safety',
    title: productCategories['alarm-safety'],
    intro: {
      fa: 'اعلام‌گرهای آلارم برنامه‌پذیر این گروه مطابق ISA S18.1 کار می‌کنند. سامانه‌های ایمنی فرایند (HIPPS) را هم برای نفت و گاز و نیروگاه‌ها می‌سازیم.',
      en: 'The programmable alarm annunciators in this group follow ISA S18.1. We also build process safety systems (HIPPS) for oil and gas and power plants.',
    },
    photo: photos.controlRoom,
  },
  {
    slug: 'instrumentation',
    title: productCategories.instrumentation,
    intro: {
      fa: 'مبدل سیگنال، مانیتور چندکاناله‌ی فرایند و دما، ثبات و ثبت‌کننده‌ی داده (دیتالاگر) در این گروه قرار دارند.',
      en: 'This group covers signal converters, multichannel process and temperature monitors, recorders and data loggers.',
    },
    photo: photos.offshoreRig,
  },
  {
    slug: 'dam-power-infrastructure',
    title: productCategories['dam-power-infrastructure'],
    intro: {
      fa: 'برای سدها، نیروگاه‌ها و زیرساخت‌ها سطح‌سنج آب، ابزار پایش ایمنی سد، فرکانس‌متر، ساعت مرکزی و مقاومت صنعتی می‌سازیم.',
      en: 'For dams, power plants and infrastructure we build level meters, dam safety instruments, frequency meters, master clocks and industrial resistors.',
    },
    photo: photos.damRelease,
  },
  {
    slug: 'legacy-renewal',
    title: productCategories['legacy-renewal'],
    intro: {
      fa: 'تجهیزات و کارت‌های الکترونیکی‌ای را که سازنده دیگر پشتیبانی‌شان نمی‌کند، بازسازی یا با فناوری روز بازطراحی می‌کنیم. عملکرد و اتصالات دستگاه همان می‌ماند.',
      en: 'We rebuild electronic equipment and cards that no longer have manufacturer support, or redesign them with current technology. The function and connections stay the same.',
    },
    photo: photos.circuitBoard,
  },
];

for (const c of categories) c.seo = categorySeo[c.slug];

export const products: Product[] = [
  ...excitationGovernor,
  ...flameDetection,
  ...ignition,
  ...turbineControl,
  ...powerSupplies,
  ...alarmSafety,
  ...instrumentation,
  ...damPowerInfrastructure,
].map((p) => ({ ...p, seo: productSeo[`${p.category}/${p.slug}`] }));

// A key in seo.ts that matches no product is a typo; fail the build instead of silently ignoring it.
for (const key of Object.keys(productSeo)) {
  if (!products.some((p) => `${p.category}/${p.slug}` === key)) throw new Error(`seo.ts: unknown product ${key}`);
}

export const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
export const productsIn = (slug: ProductCategorySlug) => products.filter((p) => p.category === slug);
export const findProduct = (category: string, slug: string) =>
  products.find((p) => p.category === category && p.slug === slug);

// Legacy system renewal is a service rather than a product line (PLAN.md 7.4).
export const renewal = {
  steps: [
    { fa: 'بررسی نمونه‌ی اصلی و تحلیل عملکرد', en: 'Examine the original unit and analyse how it works' },
    { fa: 'مستندسازی و استخراج نقشه‌ی مدار', en: 'Document it and draw up the schematic' },
    { fa: 'طراحی مدار با قطعات جدید و در دسترس', en: 'Design the circuit with current, available parts' },
    { fa: 'ساخت و آزمون کامل برای اطمینان از عملکردی برابر با سیستم قبلی', en: 'Build and fully test it against the original behaviour' },
    { fa: 'نصب، راه‌اندازی و پشتیبانی بلندمدت', en: 'Install, commission and support it long term' },
  ] satisfies L[],
  examples: [
    { fa: 'کارت‌های کنترل تحریک موتورهای سنکرون', en: 'Synchronous motor excitation control cards' },
    { fa: 'کارت‌های کنترل ولتاژ سیستم تحریک ژنراتور', en: 'Generator excitation voltage control cards' },
    { fa: 'منابع تغذیه و کارت‌های سیستم پایش ارتعاش', en: 'Vibration monitoring power supplies and cards' },
    { fa: 'کارت‌های سیستم آلارم و اعلام خطا (Fault Annunciator)', en: 'Alarm system and fault annunciator cards' },
    { fa: 'واحدهای پایش دما و کارت‌های پایش فرایند', en: 'Temperature monitoring units and process monitoring cards' },
    { fa: 'سدهای ایمنی ذاتی (Zener و Safety Barrier)', en: 'Zener barriers and safety barriers' },
    { fa: 'کارت‌های کنترل کلیدهای فشار ضعیف و حفاظت موتور', en: 'LV switchgear control and motor protection cards' },
    { fa: 'کارت‌های UPS، منابع تغذیه‌ی ثبات‌ها و تقویت‌کننده‌ها', en: 'UPS cards, recorder power supplies and amplifiers' },
  ] satisfies L[],
  image: img('renewal-cards', 'کارت‌های الکترونیکی بازسازی‌شده', 'Rebuilt electronic cards'),
};
