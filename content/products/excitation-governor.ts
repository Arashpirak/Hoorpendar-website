import type { Product } from '../types';
import { apps, img } from './shared';

export const excitationGovernor: Product[] = [
  {
    slug: 'static-excitation-system',
    category: 'excitation-governor',
    model: 'SECON-2000',
    title: { fa: 'سیستم تحریک استاتیک تریستوری با AVR دیجیتال', en: 'Thyristor static excitation system with digital AVR' },
    summary: {
      fa: 'سیستم کامل تحریک ژنراتورهای سنکرون: کنترل‌کننده‌ی دیجیتال مبتنی بر PLC، پل تریستوری، یونیت آتش پالس، ترانسفورماتور تغذیه، تجهیزات اندازه‌گیری و HMI لمسی. طراحی مطابق IEEE 421.1 تا 421.5.',
      en: 'A complete excitation system for synchronous generators: PLC-based digital controller, thyristor bridge, firing unit, excitation transformer, metering and a touch HMI. Designed to IEEE 421.1–421.5.',
    },
    features: {
      fa: [
        'سه مد کنترل: ولتاژ، ضریب قدرت و توان راکتیو',
        'پل یکسوساز تریستوری ۱۲ پالس تمام‌موج، با امکان افزونگی (Redundancy) برای بخش کنترل و پل',
        'Crowbar، Field Discharge و Field Flashing با فناوری IGBT',
        'محدودکننده‌های تحریک، حفاظت اضافه‌ولتاژ میدان، V/F و کم‌تحریکی',
        'نمایش و کنترل محلی و از راه دور روی Modbus TCP، با ثبت رویداد و منحنی',
      ],
      en: [
        'Three control modes: voltage, power factor and reactive power',
        '12-pulse full-wave thyristor bridge, with optional redundancy for the controller and bridge',
        'IGBT-based crowbar, field discharge and field flashing',
        'Excitation limiters, field over-voltage, V/Hz and under-excitation protection',
        'Local and remote monitoring over Modbus TCP, with event and trend logging',
      ],
    },
    specs: [
      { label: { fa: 'جریان تحریک', en: 'Field current' }, value: 'up to 2000 A DC' },
      { label: { fa: 'تغذیه', en: 'Supply' }, value: 'Shunt transformer or PMG' },
      { label: { fa: 'استانداردها', en: 'Standards' }, value: 'IEEE 421.1 – 421.5' },
      { label: { fa: 'نمونه‌ی اجراشده', en: 'Reference unit' }, value: '11 MW · 10.5 kV generator, 160 V / 1200 A DC output' },
    ],
    applications: [apps.hydro, apps.thermal, apps.industry],
    images: [img('static-excitation', 'تابلوی سیستم تحریک استاتیک', 'Static excitation cabinet')],
    relatedProjectIds: ['p001', 'p016', 'p065', 'x08', 'p123'],
  },
  {
    slug: 'brushless-excitation',
    category: 'excitation-governor',
    model: 'SECON-50 · SECON-30',
    title: { fa: 'تحریک موتورها و ژنراتورهای سنکرون بدون جاروبک', en: 'Excitation for brushless synchronous motors and generators' },
    summary: {
      fa: 'سیستم‌های تحریک کم‌جریان برای موتورها و ژنراتورهای سنکرون بدون جاروبک و دومرحله‌ای، همراه با کنترل و راه‌انداز تحریک موتورهای سنکرون پرقدرت ایستگاه‌های پمپاژ.',
      en: 'Low-current excitation systems for brushless and two-stage synchronous motors and generators, including excitation control and starting for high-power pumping-station motors.',
    },
    features: {
      fa: [
        'SECON-50: تا ۵۰ آمپر، مدل ترانزیستوری',
        'SECON-30: تا ۳۰ آمپر، مدل تریستوری با مد اتوماتیک و دستی',
        'حفاظت Crowbar سیم‌پیچ روتور، طبق مشخصات ماشین',
        'کنترل خودکار ولتاژ (AVR) و ضریب قدرت موتورهای سنکرون',
      ],
      en: [
        'SECON-50: up to 50 A, transistor design',
        'SECON-30: up to 30 A, thyristor design with automatic and manual modes',
        'Rotor winding crowbar protection matched to the machine',
        'Automatic voltage and power-factor control for synchronous motors',
      ],
    },
    applications: [apps.syncMotor, apps.compressor, apps.industry],
    images: [],
    relatedProjectIds: ['p014', 'p018', 'p092', 'p032'],
  },
  {
    slug: 'digital-hydro-governor',
    category: 'excitation-governor',
    model: 'DHTG-300',
    title: { fa: 'گاورنر دیجیتال توربین آبی', en: 'Digital hydro-turbine governor' },
    summary: {
      fa: 'نخستین گاورنر دیجیتال توربین آبی ساخت داخل، بر پایه‌ی PLC. کنترل سرعت و بار توربین، سیستم هیدرولیک و شیرهای Servo Valve. نیروگاه مجهز به این گاورنر و سیستم تحریک هورپندار در آزمون خودراه‌اندازی (Black Start) بخشی از شبکه را به‌صورت جزیره‌ای برق‌دار کرد.',
      en: 'The first digital hydro-turbine governor made in Iran, built on a PLC. It controls turbine speed and load, the hydraulic system and servo valves. A plant fitted with it and a Hoorpendar excitation system energized part of the grid in island mode during a black-start test.',
    },
    features: {
      fa: [
        'کنترل سرعت و توان با تنظیم PID',
        'کنترل بارهای پله‌ای تا ۲٫۵ مگاوات با حفظ فرکانس در کار جزیره‌ای',
        'تنظیم ضرایب و راه‌اندازی در محل توسط تیم هورپندار',
      ],
      en: [
        'Speed and power control with PID tuning',
        'Held frequency under step loads of up to 2.5 MW in island operation',
        'On-site tuning and commissioning by the Hoorpendar team',
      ],
    },
    applications: [apps.hydro],
    images: [],
    relatedProjectIds: ['p036', 'p045'],
  },
];
