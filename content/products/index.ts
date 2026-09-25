import type { L, Product, ProductCategorySlug } from '../types';
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

export type Category = {
  slug: ProductCategorySlug;
  title: L;
  intro: L;
  photo: Photo;
};

// Display order of the catalogue.
export const categories: Category[] = [
  {
    slug: 'excitation-governor',
    title: productCategories['excitation-governor'],
    intro: {
      fa: 'سیستم‌های تحریک استاتیک و بدون جاروبک، AVR دیجیتال و گاورنر توربین آبی برای ژنراتورها و موتورهای سنکرون.',
      en: 'Static and brushless excitation, digital AVRs and hydro-turbine governors for generators and synchronous motors.',
    },
    photo: photos.damNight,
  },
  {
    slug: 'flame-detection',
    title: productCategories['flame-detection'],
    intro: {
      fa: 'یونیت‌ها، رله‌ها و سنسورهای تشخیص شعله برای توربین، کوره، بویلر و فلر، و آشکارساز آتش محیط‌های پرخطر.',
      en: 'Flame detection units, relays and sensors for turbines, furnaces, boilers and flares, and fire detectors for hazardous areas.',
    },
    photo: photos.refineryFlare,
  },
  {
    slug: 'ignition',
    title: productCategories.ignition,
    intro: {
      fa: 'یونیت، اکسایتر، کابل و شمع جرقه‌زن برای توربین‌های گازی، بویلرها و کوره‌ها؛ در صورت نیاز در جعبه‌ی ضد انفجار.',
      en: 'Ignition units, exciters, leads and plugs for gas turbines, boilers and furnaces, in explosion-proof enclosures where needed.',
    },
    photo: photos.powerPlantNight,
  },
  {
    slug: 'turbine-control',
    title: productCategories['turbine-control'],
    intro: {
      fa: 'مانیتور سرعت و دما، کنترل شیر سوخت، سنسور موقعیت بدون تماس و ابزار دقیق توربین‌های گازی صنعتی.',
      en: 'Speed and temperature monitors, fuel valve control, contactless position sensing and instrumentation for industrial gas turbines.',
    },
    photo: photos.refineryNight,
  },
  {
    slug: 'power-supplies',
    title: productCategories['power-supplies'],
    intro: {
      fa: 'باطری شارژرهای هوشمند، کنترلر نوسازی شارژرهای قدیمی، و منابع تغذیه‌ی صنعتی و سفارشی.',
      en: 'Smart battery chargers, controllers that modernize older chargers, and industrial and custom power supplies.',
    },
    photo: photos.substation,
  },
  {
    slug: 'alarm-safety',
    title: productCategories['alarm-safety'],
    intro: {
      fa: 'اعلام‌گرهای آلارم برنامه‌پذیر مطابق ISA S18.1 و سیستم‌های ایمنی فرایند (HIPPS) برای صنایع نفت و گاز و نیروگاه‌ها.',
      en: 'Programmable alarm annunciators to ISA S18.1 and process safety systems (HIPPS) for oil and gas and power plants.',
    },
    photo: photos.controlRoom,
  },
  {
    slug: 'instrumentation',
    title: productCategories.instrumentation,
    intro: {
      fa: 'مبدل‌های سیگنال، مانیتورهای چندکاناله‌ی فرایند و دما، ثبات‌ها و دیتالاگرها.',
      en: 'Signal converters, multichannel process and temperature monitors, recorders and data loggers.',
    },
    photo: photos.offshoreRig,
  },
  {
    slug: 'dam-power-infrastructure',
    title: productCategories['dam-power-infrastructure'],
    intro: {
      fa: 'ارتفاع‌سنج، ابزار پایش ایمنی سد، فرکانس‌متر، ساعت مرکزی و مقاومت‌های صنعتی برای سدها، نیروگاه‌ها و زیرساخت.',
      en: 'Level meters, dam safety instruments, frequency meters, master clocks and industrial resistors for dams, power plants and infrastructure.',
    },
    photo: photos.damRelease,
  },
  {
    slug: 'legacy-renewal',
    title: productCategories['legacy-renewal'],
    intro: {
      fa: 'افزایش عمر مفید تجهیزات الکترونیکی و کارت‌هایی که دیگر پشتیبانی سازنده ندارند: بازسازی یا نوسازی با فناوری روز، با همان عملکرد و اتصالات.',
      en: 'Extending the life of electronic equipment and cards that no longer have manufacturer support: rebuilt or redesigned with current technology, keeping the same function and connections.',
    },
    photo: photos.circuitBoard,
  },
];

export const products: Product[] = [
  ...excitationGovernor,
  ...flameDetection,
  ...ignition,
  ...turbineControl,
  ...powerSupplies,
  ...alarmSafety,
  ...instrumentation,
  ...damPowerInfrastructure,
];

export const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
export const productsIn = (slug: ProductCategorySlug) => products.filter((p) => p.category === slug);
export const findProduct = (category: string, slug: string) =>
  products.find((p) => p.category === category && p.slug === slug);

// Legacy system renewal is a service rather than a product line (PLAN.md 7.4).
export const renewal = {
  steps: [
    { fa: 'بررسی نمونه‌ی اصلی و تحلیل عملکرد', en: 'Examine the original unit and analyse how it works' },
    { fa: 'مستندسازی و استخراج نقشه‌ی شماتیک', en: 'Document it and draw up the schematic' },
    { fa: 'طراحی مدار با قطعات جدید و در دسترس', en: 'Design the circuit with current, available parts' },
    { fa: 'ساخت و آزمون کامل، مطابق عملکرد سیستم قبلی', en: 'Build and fully test it against the original behaviour' },
    { fa: 'نصب، راه‌اندازی و پشتیبانی بلندمدت', en: 'Install, commission and support it long term' },
  ] satisfies L[],
  examples: [
    { fa: 'کارت‌های کنترل تحریک موتورهای سنکرون', en: 'Synchronous motor excitation control cards' },
    { fa: 'کارت‌های سیستم کنترل ولتاژ تحریک ژنراتور', en: 'Generator excitation voltage control cards' },
    { fa: 'منابع تغذیه و کارت‌های سیستم پایش ارتعاش', en: 'Vibration monitoring power supplies and cards' },
    { fa: 'کارت‌های سیستم آلارم و Fault Annunciator', en: 'Alarm system and fault annunciator cards' },
    { fa: 'یونیت‌های پایش دما و کارت‌های پروسس مانیتورینگ', en: 'Temperature monitoring units and process monitoring cards' },
    { fa: 'زنر بریر و Safety Barrier', en: 'Zener barriers and safety barriers' },
    { fa: 'کارت‌های کنترل کلیدهای فشار ضعیف و حفاظت موتور', en: 'LV switchgear control and motor protection cards' },
    { fa: 'کارت‌های UPS، منابع تغذیه‌ی رکوردر و آمپلی‌فایرها', en: 'UPS cards, recorder power supplies and amplifiers' },
  ] satisfies L[],
  image: img('renewal-cards', 'کارت‌های الکترونیکی بازسازی‌شده', 'Rebuilt electronic cards'),
};
