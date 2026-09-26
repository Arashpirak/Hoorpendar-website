import type { Product } from '../types';
import { apps, img } from './shared';

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
      ],
      en: [
        '2 to 512 alarms; all inputs isolated',
        'Three window sizes and five LED colours',
        'ISA S18.1 sequences (A, A4, M, R, F1A, F3A, F2M1) and first-out',
        'RS-485 Modbus; alarm repeat relays',
        'IP54/IP65 and explosion-proof enclosures',
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
    relatedProjectIds: ['p019', 'p020', 'p040', 'p015', 'p050', 'p054', 'p079', 'p129', 'p084'],
  },
  {
    slug: 'compact-alarm-panel',
    category: 'alarm-safety',
    model: 'SAL-82',
    title: { fa: 'پنل آلارم جمع‌وجور', en: 'Compact alarm panel' },
    summary: {
      fa: 'این پنل کوچک و پنجره‌ای برای تابلوهای محلی ساخته شده است. برچسب پنجره‌ها را می‌توان عوض کرد و دکمه‌های آزمون (Test)، تأیید (Acknowledge) و بازنشانی (Reset) روی خود پنل قرار دارند.',
      en: 'This compact window-type panel is made for local control panels. The window labels can be changed, and the test, acknowledge and reset buttons are on the panel itself.',
    },
    features: {
      fa: ['برچسب پنجره‌ها قابل تعویض', 'دکمه‌های Test، Acknowledge و Reset', 'مناسب تابلوهای محلی و کنار تجهیزات'],
      en: ['Labelled alarm windows', 'Test, acknowledge and reset buttons', 'Suited to local and machine panels'],
    },
    applications: [apps.hydro, apps.oilGas, apps.controlRoom],
    images: [img('alarm-panel-sal82', 'پنل آلارم SAL-82', 'SAL-82 alarm panel')],
    relatedProjectIds: ['p088', 'p112', 'p066'],
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
    relatedProjectIds: ['p034', 'p062'],
  },
];
