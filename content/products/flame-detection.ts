import type { Product } from '../types';
import { apps, img } from './shared';

export const flameDetection: Product[] = [
  {
    slug: 'turbine-flame-detector',
    category: 'flame-detection',
    model: 'FDU-300 · FDU-320',
    title: { fa: 'یونیت تشخیص شعله‌ی محفظه‌ی احتراق توربین', en: 'Turbine combustion-chamber flame detection unit' },
    summary: {
      fa: 'شعله‌ی توربین را هم در کارکرد عادی و هم هنگام جرقه‌زنی پایش می‌کند و در صورت خاموشی شعله، با رله‌ی خروجی توربین را تریپ می‌دهد. بیش از ۲۰۰ دستگاه از آن در حال کار است.',
      en: 'Monitors the turbine flame in normal running and during ignition, and trips the turbine through its output relay if the flame is lost. More than 200 units are in service.',
    },
    features: {
      fa: [
        'قابل نصب روی انواع توربین‌های گازی صنعتی',
        'کابل سنسور تا یونیت ۵ تا ۱۵ متر، نسوز با روکش فلزی',
        'تحمل حرارت تا 85°C، جعبه‌ی آلومینیومی آب‌بندی‌شده',
      ],
      en: [
        'Fits a wide range of industrial gas turbines',
        'Sensor-to-unit cable of 5 to 15 m, fire-resistant with metal braid',
        'Operates up to 85 °C in a sealed aluminium housing',
      ],
    },
    specs: [
      { label: { fa: 'دمای کار', en: 'Operating temperature' }, value: 'up to 85 °C' },
      { label: { fa: 'طول کابل سنسور', en: 'Sensor cable' }, value: '5 – 15 m' },
      { label: { fa: 'تعداد در حال کار', en: 'Units in service' }, value: '200+' },
    ],
    applications: [apps.gasTurbine, apps.compressor],
    images: [
      img('fdu-300', 'یونیت تشخیص شعله FDU-300', 'FDU-300 flame detection unit'),
      img('fdu-320', 'یونیت تشخیص شعله FDU-320', 'FDU-320 flame detection unit'),
    ],
    relatedProjectIds: ['p069', 'p071', 'p076', 'p082', 'p055', 'p059', 'p105', 'p128'],
  },
  {
    slug: 'flame-relay',
    category: 'flame-detection',
    model: 'FR-430E · FR-430D',
    title: { fa: 'رله‌ی تشخیص شعله UV و یونیزاسیون', en: 'UV and ionization flame relay' },
    summary: {
      fa: 'تشخیص شعله در محفظه‌ی توربین، کوره و بویلر. مدل E با سنسور UV و مدل D با سنسور میله‌ای (Flame Rod) که یونیزاسیون ناشی از احتراق را اندازه می‌گیرد. تعداد زیادی از آن در صنایع نفت و گاز کار می‌کند.',
      en: 'Flame detection for turbines, furnaces and boilers. The E model works with a UV sensor; the D model uses a flame rod that measures combustion ionization. Widely used in oil and gas plants.',
    },
    features: {
      fa: ['خروجی کنتاکت رله Changeover', 'تغذیه 220 یا 115Vac طبق سفارش', 'سازگار با سنسورهای UV و میله‌ای'],
      en: ['Changeover relay contact output', '220 or 115 V AC supply, to order', 'Works with UV and flame-rod sensors'],
    },
    specs: [
      { label: { fa: 'تغذیه', en: 'Supply' }, value: '220 / 115 V AC' },
      { label: { fa: 'خروجی', en: 'Output' }, value: 'Changeover relay' },
    ],
    applications: [apps.gasTurbine, apps.boiler],
    images: [img('flame-relay', 'رله‌ی شعله FR-430E', 'FR-430E flame relay')],
    relatedProjectIds: ['p067', 'p077', 'p089', 'p090', 'p093', 'p094'],
  },
  {
    slug: 'flame-safeguard-controller',
    category: 'flame-detection',
    title: { fa: 'کنترلر ایمنی شعله (Flame Safeguard)', en: 'Flame safeguard controller' },
    summary: {
      fa: 'با سنسور UV یا میله‌ای، شعله‌ی پایلوت را تشخیص می‌دهد و اجازه‌ی فرمان به شیر اصلی سوخت را صادر می‌کند. همراه با یونیت شعله‌یاب در بدنه‌ی آلومینیومی صنعتی و ضد انفجار.',
      en: 'Proves the pilot flame with a UV or rod sensor before permitting the main fuel valve to open. Supplied with a flame scanner in an industrial, explosion-proof aluminium housing.',
    },
    features: {
      fa: ['خروجی دو مرحله رله Pilot / Main', 'یونیت شعله‌یاب با بدنه‌ی ضد انفجار', 'ساخت در ولتاژ و ابعاد مورد نیاز'],
      en: ['Two-stage pilot / main relay outputs', 'Flame scanner in an explosion-proof body', 'Built to the required voltage and size'],
    },
    applications: [apps.boiler, apps.refinery],
    images: [img('flame-safeguard-card', 'کارت کنترلر ایمنی شعله', 'Flame safeguard controller card')],
  },
  {
    slug: 'uv-fire-detector',
    category: 'flame-detection',
    model: 'UFD-760',
    title: { fa: 'آشکارساز آتش UV محیط‌های پرخطر', en: 'UV fire detector for hazardous areas' },
    summary: {
      fa: 'پایش پیوسته‌ی محیط‌های مستعد آتش‌سوزی مانند کمپرسورهای گاز و توربین‌های گازی. حاصل دو سال تحقیق و توسعه در هورپندار.',
      en: 'Continuous fire watch for high-risk areas such as gas compressors and gas turbines. The result of two years of in-house research and development.',
    },
    features: {
      fa: [
        'تشخیص شعله‌ای به ابعاد ۱ سانتی‌متر مربع از فاصله‌ی ۵ متری',
        'مدارات منطقی CPLD؛ غیرحساس به نور خورشید',
        'کنتاکت NO/NC به‌صورت Fail-Safe',
        'بدنه‌ی ضد انفجار از استیل ضدزنگ یا آلومینیوم آنودایز',
      ],
      en: [
        'Detects a 1 cm² flame at 5 m',
        'CPLD logic; blind to sunlight',
        'Fail-safe NO/NC contacts',
        'Explosion-proof stainless steel or anodized aluminium body',
      ],
    },
    specs: [
      { label: { fa: 'تغذیه', en: 'Supply' }, value: '18 – 36 V DC' },
      { label: { fa: 'دمای کار', en: 'Operating temperature' }, value: 'up to 85 °C' },
      { label: { fa: 'حساسیت', en: 'Sensitivity' }, value: '1 cm² flame at 5 m' },
    ],
    applications: [apps.gasTurbine, apps.compressor, apps.refinery],
    images: [img('uv-fire-detector', 'آشکارساز آتش UFD-760', 'UFD-760 UV fire detector')],
  },
  {
    slug: 'flare-pilot-monitor',
    category: 'flame-detection',
    model: 'FMS-280',
    title: { fa: 'پایش بدون تماس فلر و پایلوت', en: 'Contactless flare and pilot monitor' },
    summary: {
      fa: 'وضعیت و حجم شعله‌ی فلر را از فاصله‌ی دور اندازه می‌گیرد و به اتاق فرمان می‌فرستد و در صورت خاموشی، هشدار صوتی و بصری می‌دهد. جایگزین ترموکوپل‌هایی است که به‌سرعت فرسوده می‌شوند. در یک ایستگاه تقویت فشار از فاصله‌ی حدود ۴۰۰ متری نصب شده است.',
      en: 'Measures flare flame status and size from a distance, reports it to the control room and raises audible and visual alarms on flame-out. Replaces thermocouples that wear out quickly. Installed about 400 m from the flare at a compression station.',
    },
    features: {
      fa: ['دو رله‌ی خروجی خاموشی (آنی و تأخیری)', 'خروجی آنالوگ 4-20mA', 'پورت سریال و نرم‌افزار ثبت'],
      en: ['Two flame-out relays (instant and delayed)', '4–20 mA analog output', 'Serial port and logging software'],
    },
    specs: [
      { label: { fa: 'فاصله‌ی نصب', en: 'Installation distance' }, value: '≈ 400 m (reference site)' },
      { label: { fa: 'خروجی', en: 'Outputs' }, value: '2 relays · 4–20 mA · serial' },
    ],
    applications: [apps.flare, apps.compressor, apps.refinery],
    images: [img('flare-monitor', 'سیستم پایش فلر نصب‌شده', 'Flare monitor on site')],
    relatedProjectIds: ['p022'],
  },
  {
    slug: 'flame-sensors',
    category: 'flame-detection',
    model: 'KRN-IN320',
    title: { fa: 'سنسورها و الکترودهای شعله', en: 'Flame sensors and electrodes' },
    summary: {
      fa: 'الکترود میله‌ای یونیزاسیون (Flame Rod) با بدنه‌ی چینی لعاب‌دار، و سنسورهای UV و IR برای تشخیص انواع شعله. در ابعاد و شکل‌های مختلف، مطابق نمونه‌ی کارفرما ساخته می‌شوند.',
      en: 'Ionization flame rods with glazed porcelain bodies, and UV and IR sensors for different flame types. Made in various sizes and shapes to match the customer’s sample.',
    },
    features: {
      fa: ['الکترود یونیزاسیون با بدنه‌ی چینی', 'سنسورهای UV و IR', 'ساخت طبق نمونه'],
      en: ['Ionization electrode with porcelain body', 'UV and IR sensors', 'Made to sample'],
    },
    applications: [apps.boiler, apps.gasTurbine],
    images: [img('flame-rod', 'الکترود یونیزاسیون شعله', 'Flame ionization electrode')],
    relatedProjectIds: ['p102', 'p090', 'p094'],
  },
];
