import type { Product } from '../types';
import { apps, img } from './shared';

export const flameDetection: Product[] = [
  {
    slug: 'turbine-flame-detector',
    category: 'flame-detection',
    model: 'FDU-300 · FDU-320',
    title: { fa: 'واحد آشکارساز شعله‌ی محفظه‌ی احتراق توربین', en: 'Turbine combustion-chamber flame detection unit' },
    summary: {
      fa: 'شعله‌ی توربین را هم در کار عادی و هم هنگام جرقه‌زنی پایش می‌کند و اگر شعله خاموش شود، با رله‌ی خروجی فرمان توقف اضطراری (Trip) توربین را می‌دهد. بیش از ۲۰۰ دستگاه از آن در حال کار است.',
      en: 'Monitors the turbine flame in normal running and during ignition, and trips the turbine through its output relay if the flame is lost. More than 200 units are in service.',
    },
    features: {
      fa: [
        'قابل نصب روی انواع توربین گازی صنعتی',
        'کابل نسوز با روکش فلزی به طول ۵ تا ۱۵ متر، از سنسور تا واحد',
        'کار تا دمای 85°C در جعبه‌ی آلومینیومی آب‌بندی‌شده',
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
      img('fdu-300', 'واحد آشکارساز شعله FDU-300', 'FDU-300 flame detection unit'),
      img('fdu-320', 'واحد آشکارساز شعله FDU-320', 'FDU-320 flame detection unit'),
    ],
    relatedProjectIds: ['p069', 'p071', 'p076', 'p082', 'p055', 'p059', 'p105', 'p128'],
  },
  {
    slug: 'flame-relay',
    category: 'flame-detection',
    model: 'FR-430E · FR-430D',
    title: { fa: 'رله‌ی آشکارساز شعله با سنسور UV یا یونیزاسیون', en: 'UV and ionization flame relay' },
    summary: {
      fa: 'وجود شعله را در توربین، کوره و بویلر تشخیص می‌دهد. مدل E با سنسور فرابنفش (UV) کار می‌کند و مدل D با الکترود میله‌ای (Flame Rod) که یونیزاسیون ناشی از احتراق را می‌سنجد. شمار زیادی از آن در صنایع نفت و گاز کار می‌کند.',
      en: 'Detects flame in turbines, furnaces and boilers. The E model works with a UV sensor; the D model uses a flame rod that measures combustion ionization. Many are in service at oil and gas plants.',
    },
    features: {
      fa: ['خروجی رله با کنتاکت دوطرفه (Changeover)', 'تغذیه‌ی 220 یا 115Vac، به انتخاب خریدار', 'سازگار با سنسور UV و الکترود میله‌ای'],
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
      fa: 'با سنسور UV یا الکترود میله‌ای، روشن بودن شعله‌ی پایلوت را تأیید می‌کند و تنها پس از آن اجازه‌ی باز شدن شیر اصلی سوخت را می‌دهد. همراه با شعله‌یاب در بدنه‌ی آلومینیومی ضدانفجار عرضه می‌شود.',
      en: 'Proves the pilot flame with a UV or rod sensor before permitting the main fuel valve to open. Supplied with a flame scanner in an industrial, explosion-proof aluminium housing.',
    },
    features: {
      fa: ['خروجی رله‌ی دومرحله‌ای پایلوت / اصلی', 'شعله‌یاب با بدنه‌ی ضدانفجار', 'ساخت با ولتاژ و ابعاد دلخواه'],
      en: ['Two-stage pilot / main relay outputs', 'Flame scanner in an explosion-proof body', 'Built to the required voltage and size'],
    },
    applications: [apps.boiler, apps.refinery],
    images: [img('flame-safeguard-card', 'کارت کنترلر ایمنی شعله', 'Flame safeguard controller card')],
  },
  {
    slug: 'uv-fire-detector',
    category: 'flame-detection',
    model: 'UFD-760',
    title: { fa: 'آشکارساز آتش UV برای مناطق خطرناک', en: 'UV fire detector for hazardous areas' },
    summary: {
      fa: 'محیط‌هایی را که خطر آتش‌سوزی دارند، مانند کمپرسورخانه‌ها و توربین‌های گازی، به‌طور پیوسته پایش می‌کند. طراحی آن دو سال پژوهش و توسعه در هورپندار زمان برد.',
      en: 'Continuous fire watch for high-risk areas such as gas compressors and gas turbines. It took two years of in-house research and development.',
    },
    features: {
      fa: [
        'تشخیص شعله‌ای به اندازه‌ی ۱ سانتی‌متر مربع از فاصله‌ی ۵ متری',
        'مدار منطقی CPLD؛ بدون واکنش به نور خورشید',
        'کنتاکت NO/NC با منطق ایمن در خرابی (Fail-Safe)',
        'بدنه‌ی ضدانفجار از فولاد زنگ‌نزن یا آلومینیوم آنودایز',
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
    title: { fa: 'پایش بدون تماس شعله‌ی فلر و پایلوت', en: 'Contactless flare and pilot monitor' },
    summary: {
      fa: 'وضعیت و اندازه‌ی شعله‌ی فلر را از راه دور می‌سنجد، به اتاق کنترل گزارش می‌دهد و اگر شعله خاموش شود، هشدار صوتی و تصویری می‌دهد. جایگزین ترموکوپل‌هایی است که در شعله زود فرسوده می‌شوند. یک نمونه در ایستگاه تقویت فشار گاز از فاصله‌ی حدود ۴۰۰ متری فلر را پایش می‌کند.',
      en: 'Measures flare flame status and size from a distance, reports it to the control room and raises audible and visual alarms on flame-out. Replaces thermocouples that wear out quickly. Installed about 400 m from the flare at a compression station.',
    },
    features: {
      fa: ['دو رله‌ی خروجی برای خاموشی شعله (آنی و با تأخیر)', 'خروجی آنالوگ 4-20mA', 'درگاه سریال و نرم‌افزار ثبت داده'],
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
    title: { fa: 'سنسورها و الکترودهای آشکارساز شعله', en: 'Flame sensors and electrodes' },
    summary: {
      fa: 'الکترود میله‌ای یونیزاسیون (Flame Rod) با بدنه‌ی چینی لعاب‌دار و سنسورهای فرابنفش (UV) و فروسرخ (IR) را برای تشخیص انواع شعله می‌سازیم؛ در شکل‌ها و اندازه‌های گوناگون و مطابق نمونه‌ی کارفرما.',
      en: 'We make ionization flame rods with glazed porcelain bodies, and UV and IR sensors for different flame types, in various shapes and sizes to match the customer’s sample.',
    },
    features: {
      fa: ['الکترود یونیزاسیون با بدنه‌ی چینی', 'سنسورهای UV و IR', 'ساخت مطابق نمونه'],
      en: ['Ionization electrode with porcelain body', 'UV and IR sensors', 'Made to sample'],
    },
    applications: [apps.boiler, apps.gasTurbine],
    images: [img('flame-rod', 'الکترود یونیزاسیون شعله', 'Flame ionization electrode')],
    relatedProjectIds: ['p102', 'p090', 'p094'],
  },
];
