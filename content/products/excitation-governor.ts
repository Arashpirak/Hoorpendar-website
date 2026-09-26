import type { Product } from '../types';
import { apps, img, sheet } from './shared';

export const excitationGovernor: Product[] = [
  {
    slug: 'static-excitation-system',
    category: 'excitation-governor',
    model: 'SECON-2000',
    title: { fa: 'سیستم تحریک استاتیک تریستوری با AVR دیجیتال', en: 'Thyristor static excitation system with digital AVR' },
    summary: {
      fa: 'سامانه‌ی کامل تحریک برای ژنراتورهای سنکرون است و کنترل‌کننده‌ی دیجیتال بر پایه‌ی PLC، پل تریستوری، واحد آتش پالس، ترانسفورماتور تحریک، تجهیزات اندازه‌گیری و نمایشگر لمسی (HMI) را در بر می‌گیرد. طراحی آن مطابق استانداردهای IEEE 421.1 تا 421.5 است.',
      en: 'A complete excitation system for synchronous generators, with a PLC-based digital controller, thyristor bridge, firing unit, excitation transformer, metering and a touch HMI. It is designed to IEEE 421.1–421.5.',
    },
    features: {
      fa: [
        'سه حالت کنترل: ولتاژ، ضریب توان و توان راکتیو',
        'پل یکسوساز تریستوری تمام‌موج ۱۲ پالسه، با امکان افزونگی (Redundancy) در بخش کنترل و پل',
        'Crowbar، Field Discharge و Field Flashing با فناوری IGBT',
        'محدودکننده‌های تحریک و حفاظت‌های اضافه‌ولتاژ میدان، V/Hz و کم‌تحریکی',
        'پایش و کنترل محلی و از راه دور با Modbus TCP، همراه با ثبت رویدادها و منحنی‌ها',
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
    catalog: [sheet('excitation-sheet', 'کاتالوگ سیستم‌های تحریک SECON', 'SECON excitation systems catalogue sheet')],
    relatedProjectIds: ['p001', 'p016', 'p065', 'x08', 'p123'],
  },
  {
    slug: 'brushless-excitation',
    category: 'excitation-governor',
    model: 'SECON-50 · SECON-30',
    title: { fa: 'تحریک موتورها و ژنراتورهای سنکرون بدون جاروبک', en: 'Excitation for brushless synchronous motors and generators' },
    summary: {
      fa: 'این سامانه‌های کم‌جریان، موتورها و ژنراتورهای سنکرون بدون جاروبک و دومرحله‌ای را تحریک می‌کنند. کنترل و راه‌انداز تحریک موتورهای سنکرون پرقدرت ایستگاه‌های پمپاژ هم در همین خانواده است.',
      en: 'These low-current systems excite brushless and two-stage synchronous motors and generators. The family also includes excitation control and starters for high-power pumping-station motors.',
    },
    features: {
      fa: [
        'SECON-50: تا ۵۰ آمپر، مدل ترانزیستوری',
        'SECON-30: تا ۳۰ آمپر، مدل تریستوری با حالت خودکار و دستی',
        'حفاظت Crowbar سیم‌پیچی روتور، متناسب با مشخصات ماشین',
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
    catalog: [sheet('excitation-sheet', 'کاتالوگ سیستم‌های تحریک SECON-50 و SECON-30', 'SECON-50 and SECON-30 catalogue sheet')],
    relatedProjectIds: ['p014', 'p018', 'p092', 'p032'],
  },
  {
    slug: 'rotor-crowbar-protection',
    category: 'excitation-governor',
    title: { fa: 'حفاظت Crowbar سیم‌پیچ روتور ژنراتور', en: 'Generator rotor crowbar protection' },
    summary: {
      fa: 'Crowbar سیم‌پیچ روتور ژنراتورهای سنکرون را در برابر اضافه‌ولتاژ حفاظت می‌کند و انرژی ذخیره‌شده در آن را تخلیه می‌کند. معمولاً بخشی از سیستم تحریک است و آن را مطابق سفارش و مشخصات سیم‌پیچ روتور هر ژنراتور طراحی و تولید می‌کنیم.',
      en: 'A crowbar protects the rotor winding of a synchronous generator from over-voltage and dissipates the energy stored in it. It is usually part of the excitation system, and we design and build each one to order for the generator’s rotor winding.',
    },
    features: {
      fa: [
        'حفاظت اضافه‌ولتاژ سیم‌پیچ روتور',
        'تخلیه‌ی سریع انرژی میدان (Field Discharge)',
        'طراحی متناسب با مشخصات سیم‌پیچ روتور هر ژنراتور',
      ],
      en: [
        'Rotor winding over-voltage protection',
        'Fast field discharge',
        'Designed to each generator’s rotor winding',
      ],
    },
    applications: [apps.hydro, apps.thermal, apps.syncMotor],
    images: [],
    catalog: [sheet('excitation-sheet', 'کاتالوگ سیستم‌های تحریک و حفاظت Crowbar', 'Excitation and crowbar protection catalogue sheet')],
  },
  {
    slug: 'digital-hydro-governor',
    category: 'excitation-governor',
    model: 'DHTG-300',
    title: { fa: 'گاورنر دیجیتال توربین آبی', en: 'Digital hydro-turbine governor' },
    summary: {
      fa: 'نخستین گاورنر دیجیتال توربین آبی ساخت ایران است و بر پایه‌ی PLC کار می‌کند. سرعت و بار توربین، سامانه‌ی هیدرولیک و شیرهای سروو را کنترل می‌کند. نیروگاهی که به این گاورنر و سیستم تحریک هورپندار مجهز است، در آزمون راه‌اندازی بدون برق شبکه (Black Start) بخشی از شبکه را به‌صورت جزیره‌ای برق‌دار کرد.',
      en: 'The first digital hydro-turbine governor made in Iran, running on a PLC. It controls turbine speed and load, the hydraulic system and servo valves. A plant fitted with it and a Hoorpendar excitation system energized part of the grid in island mode during a black-start test.',
    },
    features: {
      fa: [
        'کنترل سرعت و توان با کنترل‌کننده‌ی PID',
        'پذیرش بار پله‌ای تا ۲٫۵ مگاوات با ثابت ماندن فرکانس در حالت جزیره‌ای',
        'تنظیم ضرایب و راه‌اندازی در محل، به دست کارشناسان هورپندار',
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
