import type { Product } from '../types';
import { apps, img, sheet } from './shared';

export const alarmSafety: Product[] = [
  {
    slug: 'programmable-alarm-annunciator',
    category: 'alarm-safety',
    model: 'PAL750 · PAL625',
    title: { fa: 'اعلام‌گر آلارم برنامه‌پذیر ماژولار', en: 'Modular programmable alarm annunciator' },
    summary: {
      fa: 'این اعلام‌گر در بسیاری از تأسیسات نفت و گاز و نیروگاه‌ها کار می‌کند. هر ماژول پردازنده‌ی خودش را دارد و به ماژول اصلی (Master) وابسته نیست، پس ماژول‌ها را می‌توان در هر آرایشی از سطر و ستون کنار هم چید.',
      en: 'This annunciator is in service at many oil and gas plants and power stations. Every module has its own processor and does not depend on a master, so modules can be combined in any row and column layout.',
    },
    features: {
      fa: [
        '۲ تا ۵۱۲ آلارم؛ همه‌ی ورودی‌ها با جداسازی الکتریکی (ایزوله)',
        'سه اندازه‌ی پنجره و پنج رنگ LED',
        'توالی‌های استاندارد ISA S18.1 (A، A4، M، R، F1A، F3A، F2M1) و First-Out',
        'ارتباط Modbus روی RS-485؛ رله‌ی تکرار آلارم',
        'درجه‌ی حفاظت IP54/IP65 و محفظه‌ی ضدانفجار',
        'مدار ASIC، کار مطمئن در محیط‌های پرنویز و زمان پاسخ قابل تنظیم به سفارش خریدار',
        'رله‌ی آژیر و رله‌ی جدا برای هر گروه آلارم؛ برنامه‌ریزی اولیه از جلوی پنل',
        'عمق کم (129mm)؛ روی تابلو یا دیوار نصب می‌شود',
      ],
      en: [
        '2 to 512 alarms; all inputs isolated',
        'Three window sizes and five LED colours',
        'ISA S18.1 sequences (A, A4, M, R, F1A, F3A, F2M1) and first-out',
        'RS-485 Modbus; alarm repeat relays',
        'IP54/IP65 and explosion-proof enclosures',
        'ASIC logic, reliable in electrically noisy plants, with response time set to order',
        'Horn relay and a relay per alarm group; initial programming from the front',
        'Only 129 mm deep; panel or wall mounting',
      ],
    },
    specs: [
      { label: { fa: 'تعداد آلارم', en: 'Alarm points' }, value: '2 – 512' },
      { label: { fa: 'ولتاژ ورودی', en: 'Input voltage' }, value: '24, 48, 110, 125 V DC' },
      { label: { fa: 'اندازه‌ی پنجره', en: 'Window sizes' }, value: '64×64, 64×32, 32×32 mm' },
      { label: { fa: 'استاندارد', en: 'Standard' }, value: 'ISA S18.1' },
    ],
    applications: [apps.oilGas, apps.thermal, apps.hydro, apps.controlRoom],
    images: [img('annunciator', 'اعلام‌گر آلارم PAL750', 'PAL750 alarm annunciator')],
    catalog: [sheet('pal-annunciator-sheet', 'کاتالوگ اعلام‌گرهای آلارم برنامه‌پذیر HP-PAL625 و HP-PAL750', 'HP-PAL625 and HP-PAL750 programmable annunciator catalogue sheet')],
    relatedProjectIds: ['p019', 'p020', 'p040', 'p015', 'p050', 'p054', 'p079', 'p129', 'p084'],
  },
  {
    slug: 'compact-alarm-panel',
    category: 'alarm-safety',
    model: 'SAL-82',
    title: { fa: 'پنل آلارم جمع‌وجور', en: 'Compact alarm panel' },
    summary: {
      fa: 'این پنل کوچک و پنجره‌ای برای تابلوهای محلی ساخته شده است و در دو مدل ساده و کنترل‌دار عرضه می‌شود. مدل ساده فقط پنجره‌های آلارم را با LED پرنور روشن می‌کند. در مدل کنترل‌دار، پردازنده‌ی داخلی سیگنال‌ها را می‌گیرد، آلارم را اعلام و ثبت می‌کند و توالی استاندارد ISA S18.1 را اجرا می‌کند. هر دو مدل ماژولارند و با هر تعداد پنجره ساخته می‌شوند.',
      en: 'This compact window-type panel is made for local control panels and comes in a simple and a controller model. The simple model lights the alarm windows with bright LEDs. In the controller model, an internal processor reads the signals, announces and logs the alarms and runs ISA S18.1 sequences. Both are modular and built with any number of windows.',
    },
    features: {
      fa: [
        'برچسب پنجره‌ها به‌راحتی از جلو عوض می‌شود؛ ابعاد پنجره 60×30mm',
        'دکمه‌های Test، Acknowledge و Reset و قطع آژیر (Horn Off)',
        'ولتاژ ورودی آلارم قابل انتخاب: ۱۲، ۲۴، ۴۸، ۱۲۰ یا ۲۴۰ ولت؛ همه‌ی ورودی‌ها ایزوله',
        'رنگ آلارم (قرمز، سبز یا زرد) و ورودی NO یا NC با دیپ‌سوئیچ از پشت دستگاه تنظیم می‌شود',
        'مدل کنترل‌دار: سه رله‌ی خروجی آژیر، خطا و WDT؛ RS-232، RS-485 و Modbus (اختیاری)',
        'کارت‌های ماژولار در Sub Rack استاندارد 3U و ترمینال‌های صنعتی',
      ],
      en: [
        'Window labels change easily from the front; 60 × 30 mm windows',
        'Test, acknowledge, reset and horn-off buttons',
        'Selectable alarm input voltage: 12, 24, 48, 120 or 240 V; all inputs isolated',
        'Alarm colour (red, green or amber) and NO or NC inputs set by DIP switches at the back',
        'Controller model: horn, fault and WDT relays; optional RS-232, RS-485 and Modbus',
        'Modular cards in a standard 3U sub-rack, with industrial terminals',
      ],
    },
    specs: [
      { label: { fa: 'ولتاژ ورودی', en: 'Input voltage' }, value: '12 / 24 / 48 / 120 / 240 V' },
      { label: { fa: 'اندازه‌ی پنجره', en: 'Window size' }, value: '60 × 30 mm' },
      { label: { fa: 'استاندارد', en: 'Standard' }, value: 'ISA S18.1-1979 (R1992)' },
    ],
    applications: [apps.hydro, apps.oilGas, apps.controlRoom],
    images: [img('alarm-panel-sal82', 'پنل آلارم SAL-82', 'SAL-82 alarm panel')],
    catalog: [
      sheet('sal-82-sheet', 'کاتالوگ پنل آلارم SAL-82', 'SAL-82 alarm annunciator catalogue sheet'),
      sheet('sal-82-photo', 'پنل آلارم SAL-82', 'SAL-82 alarm panel'),
    ],
    relatedProjectIds: ['p088', 'p112', 'p066'],
  },
  {
    slug: 'alarm-annunciator-cards',
    category: 'alarm-safety',
    title: { fa: 'کارت‌های یدکی پنل آلارم', en: 'Replacement alarm annunciator cards' },
    summary: {
      fa: 'کارت‌های ورودی و فلاشر پنل‌های آلارم قدیمی را می‌سازیم تا پنل موجود بدون تغییر در تابلو و سیم‌کشی دوباره کار کند. کارت جدید همان اتصالات و ابعاد کارت قبلی را دارد و در همان رک نصب می‌شود.',
      en: 'We build input and flasher cards for older alarm annunciators, so an existing panel works again with no change to the cabinet or wiring. Each new card keeps the connections and size of the original and fits the same rack.',
    },
    features: {
      fa: [
        'کارت ورودی آلارم با کلید انتخاب سیگنال NO یا NC',
        'کارت فلاشر منطق منفی (Negative Logic Flasher)',
        'تغذیه 24Vdc؛ پنل جلوی فلزی با برچسب مدل و ولتاژ',
      ],
      en: [
        'Alarm input card with NO/NC signal selector',
        'Negative-logic flasher board',
        '24 V DC supply; metal front plate with model and voltage label',
      ],
    },
    applications: [apps.oilGas, apps.thermal, apps.controlRoom],
    images: [img('alarm-card', 'کارت ورودی پنل آلارم', 'Alarm annunciator input card')],
    catalog: [
      sheet('alarm-card-1', 'کارت ورودی آلارم', 'Alarm input card'),
      sheet('alarm-card-3', 'کارت ورودی آلارم با کلید انتخاب NO/NC', 'Alarm input card with NO/NC selector'),
      sheet('alarm-card-2', 'کارت فلاشر منطق منفی', 'Negative-logic flasher board'),
      sheet('alarm-card-4', 'کارت فلاشر، نمای جانبی', 'Flasher board, side view'),
    ],
  },
  {
    slug: 'hipps-logic-solver',
    category: 'alarm-safety',
    model: 'HIPPS Logic Solver',
    title: { fa: 'سامانه‌ی حفاظت در برابر فشار زیاد (HIPPS)', en: 'High-integrity pressure protection system (HIPPS)' },
    summary: {
      fa: 'این سامانه‌ی ایمنی ابزاردقیقی (SIS) برای تأسیسات بالادستی نفت و گاز ساخته شده است. پیش از آنکه فشار از حد مجاز بگذرد، جریان را قطع می‌کند؛ به همین دلیل لوله‌کشی پایین‌دست را می‌توان سبک‌تر و ارزان‌تر طراحی کرد و گاز کمتری به فلر فرستاده می‌شود.',
      en: 'A safety instrumented system for upstream oil and gas. It shuts off the flow before pressure exceeds the safe limit, so downstream piping can be designed lighter and cheaper, and less gas goes to the flare.',
    },
    features: {
      fa: ['محاسبه و صحه‌گذاری سطح یکپارچگی ایمنی (SIL)', 'اتصال به SCADA', 'کار تا دمای 60°C بدون تهویه؛ مصرف انرژی کم', 'قابل توسعه برای سامانه‌ی مدیریت مشعل (BMS) و شیرهای قطع خط (LBV)'],
      en: ['SIL calculation and verification', 'SCADA connection', 'Runs up to 60 °C without ventilation; low power', 'Expandable for BMS and line-break valve functions'],
    },
    specs: [
      { label: { fa: 'ایمنی', en: 'Safety' }, value: 'SIL-rated SIS' },
      { label: { fa: 'دمای کار', en: 'Operating temperature' }, value: 'up to 60 °C' },
    ],
    applications: [apps.oilGas, apps.compressor],
    images: [img('hipps', 'تابلوی HIPPS Logic Solver', 'HIPPS logic solver panel')],
    catalog: [sheet('hipps-sheet', 'کاتالوگ HIPPS Logic Solver', 'HIPPS logic solver catalogue sheet')],
    relatedProjectIds: ['p034', 'p062'],
  },
];
