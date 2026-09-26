import type { L } from './types';

// Company profile and catalogue (/catalog). Rewritten from the company resume under PLAN.md section 2:
// no client names, named sites or third-party brands. Products, projects and contact details come
// from their own content files, so this file holds only the profile text.

export const catalog = {
  about: [
    {
      fa: 'شرکت دانش‌بنیان صنایع فن‌آوری رایانه هورپندار از سال ۱۳۷۸ به‌عنوان یک مرکز تخصصی در طراحی و تولید تجهیزات الکترونیکی خاص و اجرای پروژه‌های برق، کنترل، اتوماسیون و ابزار دقیق فعالیت می‌کند. پروژه‌های متعددی را به‌صورت EPC در صنایع نفت و گاز، آب و برق و فولاد به پایان رسانده و در بیشتر آن‌ها سخت‌افزار مورد نیاز را نیز خود طراحی و ساخته است.',
      en: 'Hoorpendar Computer Technology Industries, a knowledge-based company founded in 1999, designs and manufactures specialised electronic equipment and delivers electrical, control, automation and instrumentation projects. It has completed many EPC projects in oil and gas, water and power, and steel, and in most of them designed and built the hardware itself.',
    },
    {
      fa: 'مشتریان هورپندار سدها و نیروگاه‌ها، شرکت‌های بهره‌برداری نفت و گاز، شبکه‌ی ملی داده‌های هواشناسی و دیگر صنایع کلیدی هستند. بیشتر تجهیزات ما باید به‌طور دائم و مطمئن در شرایط سخت کار کنند: دمای بالا، لرزش، رطوبت، میدان‌های مغناطیسی قوی و اسپارک‌های ناشی از کلیدزنی و صاعقه؛ در جاهایی که توقف کار از نظر اقتصادی و راهبردی پرهزینه است، مانند کنترل نیروگاه‌ها، تأمین آب شرب و ایستگاه‌های پمپاژ نفت و گاز.',
      en: 'Our clients are dams and power plants, oil and gas operators, the national meteorological network and other key industries. Most of our equipment has to run continuously and reliably in harsh conditions: heat, vibration, humidity, strong magnetic fields and surges from switching and lightning, in places where downtime is costly, such as power plant control, drinking water supply and oil and gas pumping stations.',
    },
    {
      fa: 'بخش زیادی از پروژه‌های هورپندار ماهیت پژوهشی داشته و برای نخستین بار در کشور اجرا شده‌اند؛ از جمله سیستم تحریک ژنراتور نیروگاه، گاورنر دیجیتال توربین آبی، کریدوسکوپ لیزری دومحوره و شبکه‌ی سوئیچینگ داده‌های هواشناسی. هورپندار از معدود شرکت‌هایی است که هم پروژه‌های برق، ابزار دقیق و اتوماسیون را اجرا می‌کند و هم تجهیزات الکترونیک صنعتی را طراحی و به تولید انبوه می‌رساند.',
      en: 'Many of our projects were research programs carried out for the first time in Iran, among them generator excitation for a power plant, a digital hydro-turbine governor, a two-axis laser crydoscope and a meteorological data switching network. Hoorpendar is one of the few companies that both delivers electrical, instrumentation and automation projects and designs industrial electronics for series production.',
    },
  ] satisfies L[],

  strengths: [
    {
      fa: 'همراهی از صفر تا صد: بررسی نیاز، طراحی، ساخت، نصب، راه‌اندازی و پشتیبانی',
      en: 'End to end: requirements, design, manufacture, installation, commissioning and support',
    },
    {
      fa: 'طراحی و ساخت کامل در داخل شرکت؛ قابل سفارش در ولتاژ، ابعاد و مشخصات دلخواه',
      en: 'Designed and built in-house, to the voltage, size and specification a project needs',
    },
    {
      fa: 'کیفیت هم‌تراز با نمونه‌های معتبر بین‌المللی، با قیمت رقابتی',
      en: 'Quality on par with established international equipment, at a competitive price',
    },
    {
      fa: 'تأمین قطعات یدکی و خدمات پس از فروش مستقیم از سازنده',
      en: 'Spare parts and after-sales service directly from the manufacturer',
    },
    {
      fa: 'طراحی برای محیط‌های سخت: بدنه‌ی ضدانفجار، حفاظت IP54/IP65 و دمای کاری تا 85°C',
      en: 'Built for harsh sites: explosion-proof enclosures, IP54/IP65 and operation up to 85 °C',
    },
    {
      fa: 'سازگار با سیستم‌های موجود: Modbus RTU/TCP، خروجی 4-20mA و اتصال به SCADA/DCS',
      en: 'Fits existing systems: Modbus RTU/TCP, 4–20 mA outputs and SCADA/DCS connectivity',
    },
  ] satisfies L[],

  services: [
    {
      title: { fa: 'طراحی و تولید تجهیزات', en: 'Equipment design and manufacture' },
      lead: {
        fa: 'تجهیزات الکترونیک صنعتی، به‌ویژه برای توربین و ژنراتور.',
        en: 'Industrial electronics, especially for turbines and generators.',
      },
      items: [
        { fa: 'سیستم‌های تحریک و کنترل ژنراتور', en: 'Generator excitation and control systems' },
        { fa: 'شعله‌یاب و آشکارساز آتش', en: 'Flame and fire detectors' },
        { fa: 'سیستم‌های جرقه‌زن توربین، بویلر و کوره', en: 'Ignition systems for turbines, boilers and furnaces' },
        { fa: 'شارژر باتری و منابع تغذیه‌ی صنعتی', en: 'Battery chargers and industrial power supplies' },
        { fa: 'اعلام‌گر آلارم و ابزار دقیق', en: 'Alarm annunciators and instrumentation' },
      ],
    },
    {
      title: { fa: 'اجرای پروژه‌های صنعتی', en: 'Industrial projects' },
      lead: { fa: 'طراحی و اجرای پروژه‌ها به‌صورت EPC.', en: 'Projects designed and delivered as EPC.' },
      items: [
        { fa: 'اتوماسیون و کنترل مبتنی بر PLC', en: 'PLC-based automation and control' },
        { fa: 'مانیتورینگ و جمع‌آوری اطلاعات (SCADA/DCS)', en: 'Monitoring and data acquisition (SCADA/DCS)' },
        { fa: 'اندازه‌گیری، انتقال اطلاعات و تله‌متری', en: 'Measurement, data transmission and telemetry' },
        { fa: 'سیستم‌های اعلام آلارم، خطا و حریق', en: 'Alarm, fault and fire alarm systems' },
        { fa: 'شبکه‌ی فیبر نوری و تأسیسات برق و روشنایی', en: 'Fibre-optic networks, power and lighting' },
      ],
    },
    {
      title: { fa: 'بازسازی و نوسازی سیستم‌های قدیمی', en: 'Legacy system renewal' },
      lead: {
        fa: 'افزایش عمر تجهیزاتی که دیگر پشتیبانی سازنده ندارند.',
        en: 'Longer life for equipment that no longer has manufacturer support.',
      },
      items: [
        { fa: 'بازسازی کارت‌ها و بردهای الکترونیکی', en: 'Rebuilding electronic cards and boards' },
        { fa: 'طراحی مدار جدید با قطعات در دسترس', en: 'New circuit designs with available parts' },
        { fa: 'استخراج نقشه‌ی شماتیک و تحلیل عملکرد', en: 'Schematic capture and functional analysis' },
        { fa: 'به‌روزرسانی سیستم‌های تحریک و کنترل قدیمی', en: 'Upgrading older excitation and control systems' },
      ],
    },
    {
      title: { fa: 'خدمات فنی و مهندسی', en: 'Engineering services' },
      lead: { fa: 'خدمات تخصصی در کنار تولید.', en: 'Specialist services alongside manufacturing.' },
      items: [
        { fa: 'تنظیم ضرایب PID سیستم‌های گاورنر و تحریک', en: 'PID tuning of governor and excitation systems' },
        { fa: 'تعمیر تجهیزات الکترونیکی خاص', en: 'Repair of specialised electronic equipment' },
        { fa: 'تست و کالیبراسیون تجهیزات ابزار دقیق', en: 'Testing and calibration of instruments' },
        { fa: 'مطالعه و امکان‌سنجی به‌روزرسانی سیستم‌ها', en: 'Upgrade studies and feasibility assessments' },
        { fa: 'نصب، راه‌اندازی و پشتیبانی فنی بلندمدت', en: 'Installation, commissioning and long-term support' },
      ],
    },
  ] satisfies { title: L; lead: L; items: L[] }[],

  // Solar Hijri years; `when` is used where the resume gives no single year.
  milestones: [
    {
      yearSH: 1380,
      title: { fa: 'نخستین سیستم تحریک استاتیک ساخت داخل', en: 'Iran’s first domestically built static excitation system' },
      body: {
        fa: 'طراحی و ساخت واحد تحریک ژنراتور یک نیروگاه آبی. پس از آن هورپندار سیستم‌های تحریک استاتیک ژنراتورها و موتورهای سنکرون، از جمله سیستم تحریک ۱۲۰۰ آمپری، را طراحی و تولید کرده است.',
        en: 'An excitation unit for a hydroelectric generator. Since then Hoorpendar has designed and built static excitation for generators and synchronous motors, including a 1,200 A system.',
      },
    },
    {
      yearSH: 1380,
      toSH: 1382,
      title: { fa: 'کنترل هوشمند انتقال آب شرب', en: 'Intelligent control of drinking water transfer' },
      body: {
        fa: 'سیستم کنترل Full-Redundant برای تنظیم خودکار دبی آب انتقالی از سد به یک کلان‌شهر، با تجهیزات ساخت شرکت.',
        en: 'A fully redundant control system that automatically regulates water flow from a dam to a metropolitan area, built on Hoorpendar equipment.',
      },
    },
    {
      yearSH: 1384,
      toSH: 1385,
      title: { fa: 'کریدوسکوپ لیزری پایش بدنه‌ی سد', en: 'Laser crydoscope for dam monitoring' },
      body: {
        fa: 'ثبت دقیق حرکات بدنه‌ی سد با دقت ۰٫۰۱ میلی‌متر در دو محور X و Y و بدون تماس فیزیکی.',
        en: 'Records dam-body movement to 0.01 mm on two axes (X and Y) without physical contact.',
      },
    },
    {
      yearSH: 1386,
      toSH: 1390,
      title: { fa: 'تحریک و AVR موتورهای سنکرون ۳٫۵ مگاواتی', en: 'Excitation and AVR for 3.5 MW synchronous motors' },
      body: {
        fa: 'کنترل و راه‌انداز تحریک استاتیک موتورهای سنکرون ایستگاه‌های پمپاژ و تقویت فشار نفت و گاز. در ۱۳۹۶ نیز ۴۰ واحد کنترل تحریک برای همین موتورها تحویل شد.',
        en: 'Static excitation control and starters for synchronous motors at oil and gas pumping and compression stations. In 2017 another 40 excitation control units followed for the same motors.',
      },
    },
    {
      yearSH: 1391,
      toSH: 1392,
      title: { fa: 'نخستین گاورنر دیجیتال توربین آبی کشور', en: 'Iran’s first digital hydro-turbine governor' },
      body: {
        fa: 'پروژه‌ی پژوهشی طراحی و ساخت گاورنر دیجیتال مبتنی بر PLC (مدل DHTG-300)؛ با دستیابی به دانش فنی کنترل سرعت توربین، سیستم‌های هیدرولیک و شیرهای Servo Valve.',
        en: 'A research program that produced the PLC-based DHTG-300 digital governor and the know-how for turbine speed control, hydraulics and servo valves.',
      },
    },
    {
      yearSH: 1392,
      title: { fa: '۸۰۰ سیگنال اعلام‌گر آلارم', en: '800 alarm annunciator signals' },
      body: {
        fa: 'تولید و تحویل ۸۰۰ سیگنال Alarm Annunciator برای کارخانه‌های یک شرکت بهره‌برداری نفت و گاز.',
        en: 'Manufacture and delivery of 800 alarm annunciator signals for the plants of an oil and gas operator.',
      },
    },
    {
      when: { fa: 'آزمون شبکه', en: 'Grid test' },
      title: { fa: 'موفقیت در آزمون خودراه‌اندازی (Black Start)', en: 'A successful black-start test' },
      body: {
        fa: 'بخشی از یک استان کاملاً بی‌برق شد و یک نیروگاه آبی مجهز به سیستم تحریک SECON-2000 و گاورنر DHTG-300 هورپندار، به‌صورت جزیره‌ای آن را برق‌دار کرد و بارهای پله‌ای تا ۲٫۵ مگاوات را با حفظ فرکانس و ولتاژ کنترل کرد.',
        en: 'Part of a province was fully disconnected, and a hydro plant running Hoorpendar’s SECON-2000 excitation and DHTG-300 governor restored it in island mode, holding frequency and voltage through load steps of up to 2.5 MW.',
      },
    },
    {
      yearSH: 1396,
      title: { fa: '۱۲۰ مبدل فشار به جریان در یک قرارداد', en: '120 pressure-to-current converters in one contract' },
      body: {
        fa: 'تحویل ۱۲۰ دستگاه PI-315 برای اتصال ابزارهای پنوماتیک قدیمی به سیستم‌های کنترل الکترونیکی.',
        en: 'Delivery of 120 PI-315 units that connect older pneumatic instruments to electronic control systems.',
      },
    },
    {
      yearSH: 1397,
      ongoing: true,
      title: { fa: 'واحدهای کنترل توربین گازی', en: 'Gas turbine control units' },
      body: {
        fa: 'طراحی و تولید بیش از ۱۰ مدل واحد کنترل توربین گازی، شامل اندازه‌گیری سرعت و دما و کنترل شیر سوخت، برای یک شرکت بهره‌برداری نفت.',
        en: 'More than ten models of gas turbine control units designed and built, covering speed and temperature measurement and fuel valve control, for an oil operator.',
      },
    },
    {
      yearSH: 1400,
      title: { fa: 'سنسور موقعیت بدون تماس زیر فشار ۶۰ بار', en: 'Contactless position sensor at 60 bar' },
      body: {
        fa: 'سنسور موقعیت پره‌های راهنمای ورودی توربین گازی که درون جک هیدرولیک و زیر فشار ۶۰ بار کار می‌کند، در یک تأسیسات فراساحل.',
        en: 'An inlet guide vane position sensor that works inside the hydraulic actuator at 60 bar, at an offshore facility.',
      },
    },
    {
      yearSH: 1401,
      title: { fa: 'سیستم تحریک ژنراتور لوکوموتیو', en: 'Locomotive generator excitation' },
      body: {
        fa: 'طراحی و ساخت سیستم تحریک ژنراتور لوکوموتیو، همراه با مبدل‌ها و درایورهای سوئیچینگ خاص.',
        en: 'Design and manufacture of a locomotive generator excitation system with purpose-built switching converters and drivers.',
      },
    },
  ] satisfies { yearSH?: number; toSH?: number; ongoing?: boolean; when?: L; title: L; body: L }[],

  // Values stay Latin in both languages.
  standards: [
    'IEEE 421.1–421.5',
    'ISA S18.1',
    'SIL / SIS',
    'Modbus RTU',
    'Modbus TCP',
    'RS-485 / RS-232',
    '4–20 mA',
    'PLC',
    'SCADA / DCS',
    'Microprocessor · CPLD · FPGA',
    'IGBT / SCR',
    'IP54 / IP65',
    'Ex d',
    'Fibre optic',
  ],
  standardsNote: {
    fa: 'شارژرهای باتری مطابق استاندارد صنایع پتروشیمی ایران طراحی می‌شوند.',
    en: 'Battery chargers are designed to the Iranian petrochemical industry standard.',
  } satisfies L,
};
