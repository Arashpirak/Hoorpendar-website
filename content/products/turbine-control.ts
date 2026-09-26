import type { Product } from '../types';
import { apps, img } from './shared';

export const turbineControl: Product[] = [
  {
    slug: 'turbine-speed-temperature-monitors',
    category: 'turbine-control',
    title: { fa: 'مانیتور سرعت و دمای توربین گازی', en: 'Gas turbine speed and temperature monitors' },
    summary: {
      fa: 'این واحدها سرعت توربین را با سنسور مغناطیسی (Magnetic Pickup) و دمای آن را با ترموکوپل اندازه می‌گیرند. رله‌های حد و خروجی آنالوگ دارند و در گستره‌های مختلف ساخته می‌شوند.',
      en: 'These units measure turbine speed with a magnetic pickup and temperature with thermocouples. They have threshold relays and analog outputs, and come in several ranges.',
    },
    features: {
      fa: ['سرعت: چهار رله‌ی حد', 'دما: سه رله‌ی حد', 'خروجی آنالوگ 0-5Vdc و 0-200µA'],
      en: ['Speed: four threshold relays', 'Temperature: three threshold relays', '0–5 V DC and 0–200 µA analog outputs'],
    },
    applications: [apps.gasTurbine],
    images: [],
    relatedProjectIds: ['p120', 'p107', 'p108'],
  },
  {
    slug: 'fuel-valve-controller-ramp-generator',
    category: 'turbine-control',
    model: 'RUG-280',
    title: { fa: 'کنترل شیر سوخت و مولد شیب راه‌اندازی', en: 'Fuel valve controller and start-up ramp generator' },
    summary: {
      fa: 'کنترلر، شیر اصلی سوخت توربین را بر اساس سرعت و دما تنظیم می‌کند (خروجی 0-50mA). مولد شیب (Ramp) RUG-280 هم سیگنال مرحله‌ی راه‌اندازی توربین را می‌سازد.',
      en: 'The controller sets the turbine’s main fuel valve from speed and temperature (0–50 mA output), and the RUG-280 ramp generator produces the start-up signal.',
    },
    features: {
      fa: ['خروجی کنترل شیر 0-50mA', 'تغذیه‌ی مولد شیب +28Vdc', 'دو خروجی شیب مستقل'],
      en: ['0–50 mA valve drive output', '+28 V DC ramp generator supply', 'Two independent ramp outputs'],
    },
    applications: [apps.gasTurbine],
    images: [img('ramp-generator', 'مولد شیب راه‌اندازی RUG-280', 'RUG-280 ramp-up generator')],
    relatedProjectIds: ['p120'],
  },
  {
    slug: 'contactless-position-transducer',
    category: 'turbine-control',
    title: { fa: 'ترانسدیوسر موقعیت بدون تماس', en: 'Contactless position transducer' },
    summary: {
      fa: 'موقعیت شیر سوخت و پره‌های راهنمای ورودی هوای توربین (IGV) را بدون تماس و بدون فرسایش مکانیکی اندازه می‌گیرد. نوعی از آن درون جک هیدرولیک و زیر فشار ۶۰ بار کار می‌کند.',
      en: 'Measures fuel valve and inlet guide vane position with no mechanical wear. One version works inside the hydraulic actuator at 60 bar.',
    },
    features: {
      fa: ['زاویه‌ی ±45°', 'خروجی 4-20mA با تنظیم Zero و Span', 'تغذیه‌ی +24Vdc؛ بدنه‌ی ضدانفجار از آلومینیوم آنودایز'],
      en: ['±45° travel', '4–20 mA output with zero and span adjustment', '+24 V DC supply; explosion-proof anodized aluminium body'],
    },
    specs: [
      { label: { fa: 'بازه', en: 'Range' }, value: '±45°' },
      { label: { fa: 'خروجی', en: 'Output' }, value: '4–20 mA' },
      { label: { fa: 'فشار کاری (نوع داخل جک)', en: 'Pressure (in-actuator version)' }, value: '60 bar' },
    ],
    applications: [apps.gasTurbine],
    images: [],
    relatedProjectIds: ['p119'],
  },
  {
    slug: 'speed-pickup-and-indicator',
    category: 'turbine-control',
    title: { fa: 'سنسور سرعت مغناطیسی و نمایشگر سرعت توربین', en: 'Magnetic speed pickups and turbine speed indicators' },
    summary: {
      fa: 'سنسورهای مغناطیسی (Magnetic Speed Pickup) سرعت توربین و ژنراتور را می‌گیرند و نمایشگر دیجیتال آن را روی تابلوی توربین نشان می‌دهد.',
      en: 'Magnetic pickups sense turbine and generator speed, and a digital indicator shows it on the turbine panel.',
    },
    features: {
      fa: ['سنسور مغناطیسی سرعت', 'نمایشگر دیجیتال با خروجی آلارم', 'ساخت مطابق نمونه'],
      en: ['Magnetic speed sensor', 'Digital indicator with alarm outputs', 'Made to sample'],
    },
    applications: [apps.gasTurbine, apps.thermal],
    images: [],
    relatedProjectIds: ['p130', 'p138'],
  },
];
