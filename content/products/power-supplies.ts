import type { Product } from '../types';
import { apps, img } from './shared';

export const powerSupplies: Product[] = [
  {
    slug: 'smart-battery-charger-controller',
    category: 'power-supplies',
    model: 'SBC-600 · SBC-620',
    title: { fa: 'کنترلر هوشمند شارژر باتری', en: 'Smart battery charger controller' },
    summary: {
      fa: 'بسیاری از شارژرها سالم‌اند و فقط چون کارت کنترل یدکی ندارند، از مدار خارج شده‌اند. این کنترلر روی انواع شارژرهای تریستوری نصب می‌شود و آن‌ها را به شارژری نو و به‌روز تبدیل می‌کند. مدل SBC-620 برای نوسازی شارژرهای سه‌فاز است.',
      en: 'Many healthy chargers are taken out of service only because their control cards can no longer be replaced. This controller fits most thyristor chargers and turns them into modern units. The SBC-620 upgrades three-phase chargers.',
    },
    features: {
      fa: [
        'ولتاژ باتری 24 تا 110Vdc؛ پل‌های ۳ و ۶ تریستوری',
        'نمایشگر LCD گرافیکی، کنترل PID، ثبت خطاها با زمان رخداد',
        'Modbus RTU روی RS-485/232',
        'تقسیم بار میان شارژرها (Load Sharing) و کنترل دیودهای افت ولتاژ (Dropper) تا ۴ پله',
      ],
      en: [
        '24 to 110 V DC battery voltage; 6- and 3-thyristor bridges',
        'Graphic LCD, PID control, time-stamped fault log',
        'Modbus RTU over RS-485/232',
        'Load sharing and dropper-diode control in up to 4 steps',
      ],
    },
    specs: [
      { label: { fa: 'ولتاژ باتری', en: 'Battery voltage' }, value: '24 – 110 V DC' },
      { label: { fa: 'ارتباط', en: 'Communication' }, value: 'Modbus RTU · RS-485/232' },
    ],
    applications: [apps.substation, apps.hydro, apps.thermal, apps.refinery],
    images: [img('battery-charger-controller', 'کنترلر هوشمند شارژر باتری SBC-600', 'SBC-600 smart charger controller')],
    relatedProjectIds: ['p096', 'p121', 'p122', 'p131', 'p030', 'p057', 'p101'],
  },
  {
    slug: 'smart-battery-charger',
    category: 'power-supplies',
    model: 'SMART-128',
    title: { fa: 'شارژر هوشمند باتری تک‌فاز و سه‌فاز', en: 'Smart single- and three-phase battery charger' },
    summary: {
      fa: 'کنترلر HP-PC128 این شارژر منحنی شارژ را متناسب با نوع و تعداد باتری‌ها دنبال می‌کند و ولتاژ مصرف‌کننده را با دیودهای افت ولتاژ چندپله‌ای تنظیم می‌کند.',
      en: 'Its HP-PC128 controller follows the charging curve for the battery type and count, and controls load voltage with multi-stage dropper diodes.',
    },
    features: {
      fa: [
        'حالت‌های شارژ نگهداری (Float)، سریع (Boost)، اولیه (Initial) و دستی',
        'شارژ دومرحله‌ای جریان‌ثابت / ولتاژثابت با حفاظت‌های کامل',
        'ارسال وضعیت با Modbus؛ تقسیم بار برای کار موازی شارژرها',
      ],
      en: [
        'Float, boost, initial and manual modes',
        'Two-stage constant-current / constant-voltage charging with full protection',
        'Status over Modbus; load sharing for parallel chargers',
      ],
    },
    applications: [apps.substation, apps.thermal, apps.oilGas],
    images: [img('smart-battery-charger', 'شارژر هوشمند باتری SMART-128', 'SMART-128 smart battery charger')],
    relatedProjectIds: ['p113', 'p042', 'p109'],
  },
  {
    slug: 'portable-battery-charger',
    category: 'power-supplies',
    model: 'PSB-1000',
    title: { fa: 'شارژر سوئیچینگ قابل‌حمل باتری', en: 'Portable switching battery charger' },
    summary: {
      fa: 'باتری‌های اسیدی و قلیایی ۲۴ ولتی را شارژ می‌کند و مطابق استاندارد صنایع پتروشیمی ایران برای شارژر باتری طراحی شده است.',
      en: 'Charges lead-acid and alkaline batteries in the 24 V range, designed to the Iranian petrochemical standard for battery chargers.',
    },
    features: {
      fa: ['حالت‌های Initial، Boost، Float و کار دستی به‌عنوان منبع تغذیه', 'درجه‌ی حفاظت IP54', 'ابعاد 310×290×250mm؛ سبک و قابل‌حمل'],
      en: ['Initial, boost, float and manual power-supply modes', 'IP54 protection', '310 × 290 × 250 mm, light and portable'],
    },
    specs: [
      { label: { fa: 'خروجی', en: 'Output' }, value: '24 – 35 V DC, up to 30 A' },
      { label: { fa: 'حفاظت', en: 'Protection' }, value: 'IP54' },
    ],
    applications: [apps.oilGas, apps.substation],
    images: [img('portable-battery-charger', 'شارژر قابل‌حمل باتری PSB-1000', 'PSB-1000 portable battery charger')],
    relatedProjectIds: ['p117'],
  },
  {
    slug: 'turbine-starting-battery-charger',
    category: 'power-supplies',
    model: 'RTB-100',
    title: { fa: 'شارژر باتری ویژه‌ی سیستم راه‌اندازی توربین', en: 'Battery charger for turbine starting systems' },
    summary: {
      fa: 'موتور پمپ هیدرولیک برخی توربین‌های گازی هنگام راه‌اندازی حدود ۸۰ آمپر جریان می‌کشد و چند بار راه‌اندازی پیاپی، باتری‌ها را خالی می‌کند. RTB-100 با دو حلقه‌ی کنترل مستقل، هم‌زمان تا ۴۰ آمپر جریان شارژ و تا ۱۰۰ آمپر جریان بار می‌دهد، بی‌آنکه شارژ قطع شود.',
      en: 'On some gas turbines the hydraulic pump motor draws about 80 A at start-up, and repeated starts drain the batteries. The RTB-100 has two independent control loops: it charges at up to 40 A while supplying up to 100 A of load without interrupting the charge.',
    },
    features: {
      fa: ['دو حلقه‌ی کنترل مستقل شارژ و بار', 'تابلوی باتری ماژولار با ورق فلزی ۳ میلی‌متری'],
      en: ['Independent charge and load control loops', 'Modular 3 mm steel battery cabinet'],
    },
    specs: [
      { label: { fa: 'جریان شارژ', en: 'Charge current' }, value: 'up to 40 A' },
      { label: { fa: 'جریان بار', en: 'Load current' }, value: 'up to 100 A' },
    ],
    applications: [apps.gasTurbine],
    images: [],
    relatedProjectIds: ['p109'],
  },
  {
    slug: 'voltage-stabilizer-24v',
    category: 'power-supplies',
    model: 'STB-2408S',
    title: { fa: 'تثبیت‌کننده‌ی ولتاژ ۲۴ ولت', en: '24 V voltage stabilizer' },
    summary: {
      fa: 'ولتاژ پایدار برای PLC، HMI و تجهیزات حساس اتوماسیون فراهم می‌کند و روی ریل نصب می‌شود.',
      en: 'Provides a stable supply for PLCs, HMIs and sensitive automation equipment, and mounts on a DIN rail.',
    },
    features: {
      fa: ['ورودی 12 تا 36Vdc، خروجی تثبیت‌شده‌ی +24Vdc', 'جریان ۲ تا ۱۰ آمپر', 'حفاظت اضافه‌ولتاژ، اضافه‌جریان و اتصال کوتاه'],
      en: ['12–36 V DC input, regulated +24 V DC output', '2 to 10 A', 'Over-voltage, over-current and short-circuit protection'],
    },
    specs: [
      { label: { fa: 'ورودی', en: 'Input' }, value: '12 – 36 V DC' },
      { label: { fa: 'خروجی', en: 'Output' }, value: '+24 V DC, 2 – 10 A' },
    ],
    applications: [apps.automation, apps.controlRoom],
    images: [img('voltage-stabilizer', 'تثبیت‌کننده‌ی ولتاژ ۲۴ ولت', '24 V voltage stabilizer')],
  },
  {
    slug: 'battery-selector-and-power-supplies',
    category: 'power-supplies',
    model: 'SDS-120',
    title: { fa: 'سلکتور باتری و منابع تغذیه‌ی ویژه', en: 'Battery selector and special power supplies' },
    summary: {
      fa: 'SDS-120 اتصال دو شارژر و دو بانک باتری را مدیریت می‌کند و هر بانک را می‌تواند به هر یک از شارژرها وصل کند. منابع تغذیه‌ی سوئیچینگ سیستم‌های پایش ارتعاش، کارت تغذیه و تقویت‌کننده‌ی 24Vdc، تابلوی سلکتور 127VDC و کارت‌های UPS هم ساخته می‌شوند.',
      en: 'The SDS-120 manages two chargers and two battery banks and connects either bank to either charger. Hoorpendar also builds switching supplies for vibration-monitoring systems, 24 V DC power cards and amplifiers, 127 V DC selector panels and UPS cards.',
    },
    features: {
      fa: ['مدیریت دو شارژر و دو بانک باتری', 'منابع تغذیه‌ی سوئیچینگ سفارشی', 'تابلوهای سلکتور DC'],
      en: ['Two chargers, two battery banks', 'Custom switching power supplies', 'DC selector panels'],
    },
    applications: [apps.substation, apps.hydro, apps.oilGas],
    images: [],
    relatedProjectIds: ['p078', 'p026', 'p047', 'p083', 'p132'],
  },
];
