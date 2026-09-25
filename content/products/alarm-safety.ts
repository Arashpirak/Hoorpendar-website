import type { Product } from '../types';
import { apps, img } from './shared';

export const alarmSafety: Product[] = [
  {
    slug: 'programmable-alarm-annunciator',
    category: 'alarm-safety',
    model: 'PAL750 · PAL625',
    title: { fa: 'اعلام‌گر آلارم برنامه‌پذیر ماژولار', en: 'Modular programmable alarm annunciator' },
    summary: {
      fa: 'از باکیفیت‌ترین سیستم‌های آلارم تولید داخل، در حال کار در بسیاری از کارخانه‌های نفت و گاز و نیروگاه‌ها. هر ماژول پردازشگر مستقل دارد (No Master) و ماژول‌ها در هر ترکیب سطر و ستون کنار هم قرار می‌گیرند.',
      en: 'One of the most reliable annunciators made in Iran, in service at many oil and gas plants and power stations. Every module has its own processor (no master), and modules combine in any row and column layout.',
    },
    features: {
      fa: [
        '۲ تا ۵۱۲ آلارم؛ ایزولاسیون همه‌ی ورودی‌ها',
        'سه اندازه‌ی پنجره و پنج رنگ LED',
        'ترتیب‌های استاندارد ISA S18.1 (A، A4، M، R، F1A، F3A، F2M1) و First-Out',
        'ارتباط RS-485 با Modbus؛ رله‌ی تکرار آلارم',
        'IP54/IP65 و محفظه‌ی ضد انفجار',
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
      fa: 'پنل آلارم پنجره‌ای جمع‌وجور برای تابلوهای محلی، با پنجره‌های قابل برچسب‌گذاری و دکمه‌های Test، Acknowledge و Reset.',
      en: 'A compact window-type alarm panel for local control panels, with labelled windows and test, acknowledge and reset buttons.',
    },
    features: {
      fa: ['پنجره‌های قابل برچسب‌گذاری', 'دکمه‌های Test، Acknowledge و Reset', 'مناسب تابلوهای محلی و تجهیزات'],
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
    title: { fa: 'سیستم حفاظت فشار بالا (HIPPS)', en: 'High-integrity pressure protection system (HIPPS)' },
    summary: {
      fa: 'سیستم ایمنی (SIS) برای پروژه‌های بالادستی نفت و گاز. هزینه‌ی پایپینگ پایین‌دست را کاهش می‌دهد و از فلرینگ جلوگیری می‌کند.',
      en: 'A safety instrumented system for upstream oil and gas. It reduces downstream piping cost and avoids flaring.',
    },
    features: {
      fa: ['محاسبات SIL و SIL Verification', 'اتصال به SCADA', 'کار تا 60°C بدون تهویه؛ مصرف انرژی کم', 'قابل توسعه برای BMS و شیرهای LBV'],
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
