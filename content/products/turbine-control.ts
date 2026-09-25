import type { Product } from '../types';
import { apps, img } from './shared';

export const turbineControl: Product[] = [
  {
    slug: 'turbine-speed-temperature-monitors',
    category: 'turbine-control',
    title: { fa: 'مانیتور سرعت و دمای توربین گازی', en: 'Gas turbine speed and temperature monitors' },
    summary: {
      fa: 'یونیت‌های اندازه‌گیری سرعت با سنسور Magnetic Pickup و دمای توربین با ترموکوپل، با رله‌های آستانه و خروجی آنالوگ، در رنج‌های مختلف.',
      en: 'Speed monitoring from a magnetic pickup and turbine temperature monitoring from thermocouples, with threshold relays and analog outputs, in several ranges.',
    },
    features: {
      fa: ['سرعت: چهار رله‌ی آستانه', 'دما: سه رله‌ی آستانه', 'خروجی آنالوگ 0-5Vdc و 0-200µA'],
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
    title: { fa: 'کنترل شیر سوخت و مولد رمپ راه‌انداز', en: 'Fuel valve controller and start-up ramp generator' },
    summary: {
      fa: 'کنترلر شیر سوخت اصلی توربین بر اساس سرعت و دما (خروجی 0-50mA)، و مولد رمپ RUG-280 که سیگنال راه‌انداز اولیه‌ی توربین را تولید می‌کند.',
      en: 'A main fuel valve controller driven by speed and temperature (0–50 mA output), and the RUG-280 ramp generator that produces the turbine’s start-up signal.',
    },
    features: {
      fa: ['خروجی کنترل شیر 0-50mA', 'تغذیه‌ی مولد رمپ +28Vdc', 'دو خروجی رمپ مستقل'],
      en: ['0–50 mA valve drive output', '+28 V DC ramp generator supply', 'Two independent ramp outputs'],
    },
    applications: [apps.gasTurbine],
    images: [img('ramp-generator', 'مولد رمپ راه‌انداز RUG-280', 'RUG-280 ramp-up generator')],
    relatedProjectIds: ['p120'],
  },
  {
    slug: 'contactless-position-transducer',
    category: 'turbine-control',
    title: { fa: 'ترانسدیوسر موقعیت بدون تماس', en: 'Contactless position transducer' },
    summary: {
      fa: 'اندازه‌گیری موقعیت شیر سوخت و پره‌های راهنمای ورودی هوای توربین بدون استهلاک مکانیکی. نسخه‌ای از آن درون جک هیدرولیک و زیر فشار ۶۰ بار کار می‌کند.',
      en: 'Measures fuel valve and inlet guide vane position with no mechanical wear. One version works inside the hydraulic actuator at 60 bar.',
    },
    features: {
      fa: ['زاویه‌ی ±45°', 'خروجی 4-20mA با تنظیم Zero و Span', 'تغذیه +24Vdc؛ بدنه‌ی آلومینیوم آنودایز ضد انفجار'],
      en: ['±45° travel', '4–20 mA output with zero and span adjustment', '+24 V DC supply; explosion-proof anodized aluminium body'],
    },
    specs: [
      { label: { fa: 'بازه', en: 'Range' }, value: '±45°' },
      { label: { fa: 'خروجی', en: 'Output' }, value: '4–20 mA' },
      { label: { fa: 'فشار کاری (نسخه‌ی داخل جک)', en: 'Pressure (in-actuator version)' }, value: '60 bar' },
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
      fa: 'سنسورهای Magnetic Speed Pickup برای توربین و ژنراتور، و نمایشگرهای دیجیتال سرعت برای تابلوی توربین.',
      en: 'Magnetic speed pickups for turbines and generators, and digital speed indicators for turbine panels.',
    },
    features: {
      fa: ['سنسور مغناطیسی سرعت', 'نمایشگر دیجیتال با خروجی آلارم', 'ساخت طبق نمونه'],
      en: ['Magnetic speed sensor', 'Digital indicator with alarm outputs', 'Made to sample'],
    },
    applications: [apps.gasTurbine, apps.thermal],
    images: [],
    relatedProjectIds: ['p130', 'p138'],
  },
];
