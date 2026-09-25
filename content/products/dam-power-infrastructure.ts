import type { Product } from '../types';
import { apps, img } from './shared';

export const damPowerInfrastructure: Product[] = [
  {
    slug: 'digital-level-meter',
    category: 'dam-power-infrastructure',
    model: 'HP-LVLM100 · LVLM100+ · LVLM20F',
    title: { fa: 'ارتفاع‌سنج دیجیتال شناوری', en: 'Digital float level meter' },
    summary: {
      fa: 'اندازه‌گیری سطح آب سدها، ایستگاه‌های هیدرومتری، کانال‌ها و رودخانه‌ها، مخازن سوخت و سیلوهای آرد و سیمان.',
      en: 'Level measurement for dams, hydrometric stations, canals and rivers, fuel tanks, and flour and cement silos.',
    },
    features: {
      fa: ['رنج 0 تا 100 متر با دقت ±1cm', 'RS-485 Modbus؛ انتقال اطلاعات تا ۱۶ کیلومتر', 'دیتارکوردر، نمایشگر و نرم‌افزار ثبت و پایش آنلاین'],
      en: ['0–100 m range, ±1 cm accuracy', 'RS-485 Modbus; data transmission up to 16 km', 'Data recorder, display and online logging software'],
    },
    specs: [
      { label: { fa: 'رنج', en: 'Range' }, value: '0 – 100 m' },
      { label: { fa: 'دقت', en: 'Accuracy' }, value: '±1 cm' },
      { label: { fa: 'انتقال داده', en: 'Data link' }, value: 'RS-485 Modbus, up to 16 km' },
    ],
    applications: [apps.dam, apps.water],
    images: [img('level-meter', 'ارتفاع‌سنج دیجیتال HP-LVLM100', 'HP-LVLM100 digital level meter')],
    relatedProjectIds: ['p081', 'l01', 'l02', 'l03', 'l04', 'l05'],
  },
  {
    slug: 'bubbler-level-meter',
    category: 'dam-power-infrastructure',
    model: 'BLVM-100',
    title: { fa: 'ارتفاع‌سنج تزریق هوا (Bubbler)', en: 'Air-purge (bubbler) level meter' },
    summary: {
      fa: 'هوای فشرده را به پایین‌ترین نقطه‌ی اندازه‌گیری تزریق و فشار آن را اندازه می‌گیرد که با ارتفاع آب متناسب است. برای سدهای خاکی و بتنی بدون دسترسی عمودی به سطح آب، و برای پایش هم‌زمان چند چاه مشاهده‌ای.',
      en: 'Purges compressed air to the lowest measuring point and reads its pressure, which is proportional to the water height. Suits earth and concrete dams without vertical access to the water, and can watch several observation wells at once.',
    },
    features: {
      fa: ['تا ۱۰۰ متر با دقت سانتی‌متر', 'بدون تماس سنسور با آب؛ بی‌تأثیر از گل‌ولای و جلبک', 'اتصال به رایانه و DCS'],
      en: ['Up to 100 m with centimetre accuracy', 'No sensor contact with water; unaffected by silt and algae', 'Connects to PCs and DCS'],
    },
    applications: [apps.dam, apps.water],
    images: [img('bubbler-level-meter', 'ارتفاع‌سنج تزریق هوا BLVM-100', 'BLVM-100 bubbler level meter')],
    relatedProjectIds: ['x16'],
  },
  {
    slug: 'frequency-meter',
    category: 'dam-power-infrastructure',
    model: 'HP-DS400 · HP-DS225 · HP-TF560',
    title: { fa: 'فرکانس‌متر دیجیتال و ترانسدیوسر فرکانس', en: 'Digital frequency meter and frequency transducer' },
    summary: {
      fa: 'نمایش و اندازه‌گیری دقیق فرکانس برای نیروگاه‌ها و پست‌ها، با نمایشگرهای بزرگ برای تابلو، دیوار یا سقف.',
      en: 'Precise frequency display and measurement for power plants and substations, with large displays for panels, walls or ceilings.',
    },
    features: {
      fa: ['ایزولاسیون تا 1500V', 'خروجی 4-20mA یا 0-5Vdc', 'Modbus روی RS-485/232'],
      en: ['Isolation up to 1500 V', '4–20 mA or 0–5 V DC output', 'Modbus over RS-485/232'],
    },
    specs: [
      { label: { fa: 'بازه', en: 'Range' }, value: '5 – 95 Hz or 5 – 1000 Hz' },
      { label: { fa: 'دقت', en: 'Resolution' }, value: '0.01 or 0.001 Hz' },
    ],
    applications: [apps.hydro, apps.thermal, apps.substation],
    images: [img('frequency-meter', 'فرکانس‌متر دیجیتال', 'Digital frequency meter')],
    relatedProjectIds: ['p012'],
  },
  {
    slug: 'master-clock-system',
    category: 'dam-power-infrastructure',
    model: 'MCK-307 · LDS-2250 · HP-DSC225',
    title: { fa: 'سیستم ساعت مرکزی دیجیتال', en: 'Digital master clock system' },
    summary: {
      fa: 'هماهنگی زمان در نیروگاه‌ها، کارخانه‌ها و ادارات. یک ساعت مادر (Master Clock) ساعت و تقویم را برای هر تعداد نمایشگر ارسال می‌کند.',
      en: 'Time synchronization for power plants, factories and offices. One master clock drives the time and date on any number of displays.',
    },
    features: {
      fa: ['تنظیم با GPS یا رایانه', 'RS-232، RS-485 و CL', 'ارقام 1.75 تا 22.5 اینچ؛ دید از ۵ تا ۱۰۰ متر'],
      en: ['Set from GPS or a PC', 'RS-232, RS-485 and current loop', '1.75″ to 22.5″ digits, readable from 5 to 100 m'],
    },
    applications: [apps.hydro, apps.thermal, apps.industry],
    images: [img('master-clock', 'نمایشگر ساعت مرکزی', 'Master clock display')],
    relatedProjectIds: ['p021'],
  },
  {
    slug: 'cast-iron-resistors',
    category: 'dam-power-infrastructure',
    title: { fa: 'مقاومت‌های چدنی صنعتی', en: 'Industrial cast-iron resistors' },
    summary: {
      fa: 'مقاومت‌های راه‌انداز، لغزش پیوسته، ترمز، دشارژ، تحریک و حفاظت، و تجهیزات اتصال کوتاه، از 10kW تا 3MW.',
      en: 'Starting, slip, braking, discharge, excitation and protection resistors, and short-circuit equipment, from 10 kW to 3 MW.',
    },
    features: {
      fa: ['کارکرد کوتاه‌مدت، متناوب یا پیوسته', 'ظرفیت اضافه‌بار بالا', 'عایق دوبل میکا و سرامیک'],
      en: ['Short-time, intermittent or continuous duty', 'High overload capacity', 'Double mica and ceramic insulation'],
    },
    specs: [{ label: { fa: 'توان', en: 'Rating' }, value: '10 kW – 3 MW' }],
    applications: [apps.hydro, apps.syncMotor, apps.industry],
    images: [img('cast-iron-resistor', 'مقاومت چدنی صنعتی', 'Industrial cast-iron resistor')],
    relatedProjectIds: ['p027'],
  },
  {
    slug: 'dam-safety-instruments',
    category: 'dam-power-infrastructure',
    title: { fa: 'ابزار پایش ایمنی سد', en: 'Dam safety monitoring instruments' },
    summary: {
      fa: 'کریدوسکوپ لیزری دومحوره برای اندازه‌گیری انحراف بدنه‌ی سد با دقت ۰٫۰۱ میلی‌متر، سیستم اندازه‌گیری گشودگی دریچه‌های سرریز و آبگیر (حتی زیر آب)، و ثبت خودکار داده‌ی حدود ۱۰۰۰ سنسور بدنه‌ی سد.',
      en: 'A two-axis laser crydoscope that measures dam-body deflection to 0.01 mm, opening measurement for spillway and intake gates (including submerged gates), and automatic logging from about 1000 dam-body sensors.',
    },
    features: {
      fa: ['اندازه‌گیری انحراف با دقت ۰٫۰۱ میلی‌متر، بدون تماس', 'گشودگی دریچه‌ها تا فاصله‌ی ۳ کیلومتر', 'ثبت و انتقال خودکار داده به رایانه'],
      en: ['Deflection to 0.01 mm, contactless', 'Gate opening over distances up to 3 km', 'Automatic logging and transfer to a PC'],
    },
    applications: [apps.dam, apps.hydro],
    images: [],
    relatedProjectIds: ['p009', 'p043', 'p004', 'p005', 'p044', 'x12'],
  },
];
