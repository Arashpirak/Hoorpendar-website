import type { Product } from '../types';
import { apps, img } from './shared';

export const instrumentation: Product[] = [
  {
    slug: 'pressure-to-current-converter',
    category: 'instrumentation',
    model: 'PI-315 · PIT-315N',
    title: { fa: 'مبدل فشار به جریان (P/I)', en: 'Pressure-to-current (P/I) converter' },
    summary: {
      fa: 'سیگنال فشار پنوماتیک را به جریان الکتریکی استاندارد تبدیل می‌کند تا ابزار دقیق پنوماتیک موجود بتواند به سیستم‌های کنترل، ثبات‌ها و نمایشگرهای جدید وصل شود.',
      en: 'Converts pneumatic instrument signals to current so existing pneumatic instruments can connect to modern control systems, recorders and displays.',
    },
    features: {
      fa: [
        'دقت بهتر از ±0.25% FS',
        'تغذیه از خود حلقه‌ی جریان (Loop-Powered)، 12 تا 32Vdc',
        'پهنای فقط 19mm (مدل N)؛ نصب روی ریل',
        'تحمل تا دو برابر فشار نامی',
      ],
      en: [
        'Accuracy better than ±0.25 % FS',
        'Loop-powered, 12–32 V DC',
        'Only 19 mm wide (N model); DIN-rail mounting',
        'Withstands twice the rated pressure',
      ],
    },
    specs: [
      { label: { fa: 'ورودی', en: 'Input' }, value: '3–15 psig (0.2–1 bar, 3–27 psig)' },
      { label: { fa: 'خروجی', en: 'Output' }, value: '4–20 mA' },
      { label: { fa: 'دقت', en: 'Accuracy' }, value: '±0.25 % FS' },
      { label: { fa: 'تغذیه', en: 'Supply' }, value: '12 – 32 V DC, loop-powered' },
    ],
    applications: [apps.oilGas, apps.refinery],
    images: [img('pi-converter', 'مبدل فشار به جریان PIT-315N', 'PIT-315N P/I converter')],
    relatedProjectIds: ['p091', 'p035', 'p046', 'p051', 'p086', 'p111', 'p114', 'p136', 'p106'],
  },
  {
    slug: 'process-monitor-8-channel',
    category: 'instrumentation',
    model: 'MCI-870',
    title: { fa: 'مانیتور فرایند ۸ کاناله برای فضای باز', en: '8-channel outdoor process monitor' },
    summary: {
      fa: 'هشت ورودی آنالوگ با جداسازی الکتریکی دارد و در جعبه‌ی فلزی IP54 عرضه می‌شود. هر کانال پردازنده و رله‌های آلارم و قطع (Trip) خودش را دارد.',
      en: 'It has eight isolated analog inputs in an IP54 metal enclosure. Each channel has its own processor and its own alarm and trip relays.',
    },
    features: {
      fa: [
        'ورودی‌ها: RTD، ترموکوپل، mV، 0-10V، 1-5V، 0/4-20mA',
        'پردازنده‌ی مستقل برای هر کانال؛ دو رله‌ی آلارم و قطع',
        'Modbus روی RS-485/232',
      ],
      en: [
        'Inputs: RTD, thermocouple, mV, 0–10 V, 1–5 V, 0/4–20 mA',
        'A processor per channel; two alarm and trip relays',
        'Modbus over RS-485/232',
      ],
    },
    specs: [
      { label: { fa: 'کانال‌ها', en: 'Channels' }, value: '8, isolated' },
      { label: { fa: 'تغذیه', en: 'Supply' }, value: '18 – 36 V DC' },
      { label: { fa: 'حفاظت', en: 'Protection' }, value: 'IP54' },
    ],
    applications: [apps.oilGas, apps.compressor],
    images: [img('process-monitor-8ch', 'مانیتور فرایند ۸ کاناله MCI-870', 'MCI-870 8-channel process monitor')],
    relatedProjectIds: ['p033', 'p031'],
  },
  {
    slug: 'multichannel-temperature-monitors',
    category: 'instrumentation',
    model: 'MPS · MCI-6447 · MCI-2420 · MCP-9000',
    title: { fa: 'پایش چندکاناله و دماسنج‌های صنعتی', en: 'Multichannel process and temperature monitors' },
    summary: {
      fa: 'در نیروگاه‌ها و صنایع نفت گاهی باید دمای بیش از ۶۰ نقطه را هم‌زمان پایش کرد. خانواده‌ی MPS تا ۳۲ کانال ورودی دارد و دماسنج‌های ۶۴، ۲۴، ۹ و ۸ کاناله هم ساخته می‌شوند.',
      en: 'Power plants and oil facilities often need to watch more than 60 temperature points. The MPS family takes up to 32 inputs, and 64-, 24-, 9- and 8-channel temperature monitors are also available.',
    },
    features: {
      fa: ['ورودی RTD، TC، V و mA', 'نمایشگر لمسی یا دیجیتال MPS-D16؛ حالت‌های MNL، AUT و MAX', 'دو رله‌ی خروجی و ارتباط RS-485'],
      en: ['RTD, TC, V and mA inputs', 'MPS-D16 touch or digital display; MNL, AUT and MAX modes', 'Two output relays and RS-485'],
    },
    specs: [{ label: { fa: 'کانال‌ها', en: 'Channels' }, value: 'up to 32 (MPS), 8 – 64 (monitors)' }],
    applications: [apps.hydro, apps.thermal, apps.oilGas],
    images: [
      img('multichannel-monitor', 'دماسنج چندکاناله', 'Multichannel temperature monitor'),
      img('multichannel-monitor-2', 'تابلوی پایش چندکاناله', 'Multichannel monitoring panel'),
    ],
    relatedProjectIds: ['p127', 'p061', 'p031'],
  },
  {
    slug: 'strain-gauge-amplifier',
    category: 'instrumentation',
    model: 'TSG-500',
    title: { fa: 'تقویت‌کننده‌ی استرین‌گیج', en: 'Strain gauge amplifier' },
    summary: {
      fa: 'سیگنال سنسورهای کرنش‌سنج (استرین‌گیج) را برای اندازه‌گیری فشار، اختلاف فشار، وزن و سطح تقویت می‌کند. خروجی آن 4-20mA است و صفر و دامنه‌اش (Zero و Span) قابل تنظیم است.',
      en: 'Amplifies strain-gauge signals to measure pressure, differential pressure, weight and level. It has a 4–20 mA output with adjustable zero and span.',
    },
    features: {
      fa: ['خروجی 4-20mA', 'تنظیم Zero و Span', 'بدنه‌ی مقاوم صنعتی'],
      en: ['4–20 mA output', 'Zero and span adjustment', 'Rugged industrial housing'],
    },
    applications: [apps.oilGas, apps.industry],
    images: [img('strain-gauge-amplifier', 'تقویت‌کننده‌ی استرین‌گیج TSG-500', 'TSG-500 strain gauge amplifier')],
  },
  {
    slug: 'paperless-recorders-data-loggers',
    category: 'instrumentation',
    title: { fa: 'ثبات‌های بدون کاغذ و ثبت‌کننده‌های داده', en: 'Paperless recorders and data loggers' },
    summary: {
      fa: 'ثبات بدون کاغذ ۱۲ کاناله، راه‌انداز ثبات‌های نموداری و ثبت‌کننده‌ی پارامترهای الکتریکی نیروگاه می‌سازیم. داده‌های رله‌های حفاظتی و تحلیلگرهای توان را هم با سامانه‌های جمع‌آوری داده ثبت می‌کنیم.',
      en: 'We build twelve-channel paperless recorders, chart recorder drivers and power-plant electrical data loggers, and collect data from protection relays and power analyzers.',
    },
    features: {
      fa: ['ثبات بدون کاغذ ۱۲ کاناله', 'جمع‌آوری داده از رله‌ها و تحلیلگرهای توان', 'نرم‌افزار ثبت داده و گزارش‌گیری'],
      en: ['12-channel paperless recorder', 'Data acquisition from relays and power analyzers', 'Logging and reporting software'],
    },
    applications: [apps.thermal, apps.hydro, apps.refinery],
    images: [],
    relatedProjectIds: ['p053', 'p106', 'p134', 'p024', 'p006'],
  },
];
