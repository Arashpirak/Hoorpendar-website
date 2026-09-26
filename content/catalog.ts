import type { L } from './types';

// Company profile and catalogue (/catalog). Rewritten from the company resume under PLAN.md section 2:
// no client names, named sites or third-party brands. Products, projects and contact details come
// from their own content files, so this file holds only the profile text.

export const catalog = {
  about: [
    {
      fa: 'شرکت دانش‌بنیان صنایع فن‌آوری رایانه هورپندار از سال ۱۳۷۸ تجهیزات الکترونیکی خاص طراحی و تولید می‌کند و پروژه‌های برق، کنترل، اتوماسیون و ابزار دقیق را اجرا می‌کند. تا امروز پروژه‌های زیادی را به‌صورت EPC در نفت و گاز، آب و برق و فولاد تحویل داده‌ایم و در بیشتر آن‌ها سخت‌افزار را هم خودمان طراحی کرده‌ایم و ساخته‌ایم.',
      en: 'Hoorpendar Computer Technology Industries, a knowledge-based company founded in 1999, designs and manufactures specialised electronic equipment and delivers electrical, control, automation and instrumentation projects. We have completed many EPC projects in oil and gas, water and power, and steel, and in most of them we designed and built the hardware ourselves.',
    },
    {
      fa: 'کارفرمایان ما سدها و نیروگاه‌ها، شرکت‌های بهره‌برداری نفت و گاز، شبکه‌ی ملی داده‌های هواشناسی و صنایع کلیدی دیگرند. بیشتر دستگاه‌هایی که می‌سازیم باید بی‌وقفه و در شرایط سخت کار کنند: دمای بالا، لرزش، رطوبت، میدان مغناطیسی قوی و اضافه‌ولتاژ ناشی از کلیدزنی و صاعقه. در کنترل نیروگاه، تأمین آب شرب یا ایستگاه پمپاژ نفت و گاز، حتی توقف کوتاه هزینه‌ی زیادی دارد.',
      en: 'Our clients are dams and power plants, oil and gas operators, the national meteorological network and other key industries. Most of what we build has to run continuously in harsh conditions: heat, vibration, humidity, strong magnetic fields and surges from switching and lightning. In power plant control, drinking water supply or an oil and gas pumping station, even a short stop is expensive.',
    },
    {
      fa: 'بسیاری از پروژه‌های ما پژوهشی بوده‌اند و برای نخستین بار در کشور اجرا شده‌اند، مانند سیستم تحریک ژنراتور نیروگاه، گاورنر دیجیتال توربین آبی، کریدوسکوپ لیزری دومحوره و شبکه‌ی سوئیچینگ داده‌های هواشناسی. کمتر شرکتی هم پروژه‌های برق، ابزار دقیق و اتوماسیون را اجرا می‌کند و هم تجهیزات الکترونیک صنعتی را برای تولید انبوه طراحی می‌کند. هورپندار هر دو کار را انجام می‌دهد.',
      en: 'Many of our projects were research programs carried out for the first time in Iran, among them generator excitation for a power plant, a digital hydro-turbine governor, a two-axis laser crydoscope and a meteorological data switching network. Few companies both deliver electrical, instrumentation and automation projects and design industrial electronics for series production. Hoorpendar does both.',
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
        fa: 'تجهیزات الکترونیک صنعتی می‌سازیم، به‌ویژه برای توربین و ژنراتور.',
        en: 'We build industrial electronics, especially for turbines and generators.',
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
      lead: { fa: 'پروژه‌ها را به‌صورت EPC طراحی و اجرا می‌کنیم.', en: 'We design and deliver projects on an EPC basis.' },
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
        fa: 'عمر تجهیزاتی را که دیگر پشتیبانی سازنده ندارند، افزایش می‌دهیم.',
        en: 'We extend the life of equipment that no longer has manufacturer support.',
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
      lead: { fa: 'در کنار تولید، این خدمات تخصصی را هم ارائه می‌دهیم.', en: 'Alongside manufacturing, we offer these specialist services.' },
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
        fa: 'واحد تحریک ژنراتور یک نیروگاه آبی را طراحی کردیم و ساختیم. از آن زمان سیستم‌های تحریک استاتیک بسیاری برای ژنراتورها و موتورهای سنکرون تولید کرده‌ایم که یکی از آن‌ها ۱۲۰۰ آمپری است.',
        en: 'We designed and built the excitation unit for a hydroelectric generator. Since then we have produced many static excitation systems for generators and synchronous motors, one of them rated at 1,200 A.',
      },
    },
    {
      yearSH: 1380,
      toSH: 1382,
      title: { fa: 'کنترل هوشمند انتقال آب شرب', en: 'Intelligent control of drinking water transfer' },
      body: {
        fa: 'سیستم کنترلی با افزونگی کامل (Full-Redundant) طراحی کردیم که دبی آب انتقالی از سد به یک کلان‌شهر را خودکار تنظیم می‌کند. تجهیزات آن را هم خودمان ساختیم.',
        en: 'We designed a fully redundant control system that automatically regulates water flow from a dam to a metropolitan area, and built its equipment ourselves.',
      },
    },
    {
      yearSH: 1384,
      toSH: 1385,
      title: { fa: 'کریدوسکوپ لیزری پایش بدنه‌ی سد', en: 'Laser crydoscope for dam monitoring' },
      body: {
        fa: 'این دستگاه حرکت بدنه‌ی سد را در دو محور X و Y، بدون تماس فیزیکی و با دقت ۰٫۰۱ میلی‌متر ثبت می‌کند.',
        en: 'It records dam-body movement on two axes (X and Y) to within 0.01 mm, without touching the structure.',
      },
    },
    {
      yearSH: 1386,
      toSH: 1390,
      title: { fa: 'تحریک و AVR موتورهای سنکرون ۳٫۵ مگاواتی', en: 'Excitation and AVR for 3.5 MW synchronous motors' },
      body: {
        fa: 'کنترل و راه‌انداز تحریک استاتیک موتورهای سنکرون ایستگاه‌های پمپاژ و تقویت فشار نفت و گاز را ساختیم. در ۱۳۹۶ هم ۴۰ واحد کنترل تحریک دیگر برای همین موتورها تحویل دادیم.',
        en: 'We built static excitation control and starters for synchronous motors at oil and gas pumping and compression stations. In 2017 we delivered 40 more excitation control units for the same motors.',
      },
    },
    {
      yearSH: 1391,
      toSH: 1392,
      title: { fa: 'نخستین گاورنر دیجیتال توربین آبی کشور', en: 'Iran’s first digital hydro-turbine governor' },
      body: {
        fa: 'در یک پروژه‌ی پژوهشی، گاورنر دیجیتال DHTG-300 را بر پایه‌ی PLC طراحی کردیم و ساختیم. دانش فنی کنترل سرعت توربین، سیستم هیدرولیک و شیرهای سروو (Servo Valve) هم از همین پروژه به دست آمد.',
        en: 'In a research program we designed and built the PLC-based DHTG-300 digital governor, and gained our know-how in turbine speed control, hydraulics and servo valves along the way.',
      },
    },
    {
      yearSH: 1392,
      title: { fa: '۸۰۰ سیگنال اعلام‌گر آلارم', en: '800 alarm annunciator signals' },
      body: {
        fa: 'برای کارخانه‌های یک شرکت بهره‌برداری نفت و گاز، اعلام‌گرهای آلارم (Alarm Annunciator) با ۸۰۰ سیگنال ساختیم و تحویل دادیم.',
        en: 'We built and delivered alarm annunciators covering 800 signals for the plants of an oil and gas operator.',
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
        fa: '۱۲۰ دستگاه PI-315 تحویل دادیم تا ابزارهای پنوماتیک قدیمی به سیستم‌های کنترل الکترونیکی وصل شوند.',
        en: 'We delivered 120 PI-315 units so that older pneumatic instruments could connect to electronic control systems.',
      },
    },
    {
      yearSH: 1397,
      ongoing: true,
      title: { fa: 'واحدهای کنترل توربین گازی', en: 'Gas turbine control units' },
      body: {
        fa: 'برای یک شرکت بهره‌برداری نفت بیش از ۱۰ مدل واحد کنترل توربین گازی طراحی و تولید کرده‌ایم که سرعت و دما را اندازه می‌گیرند و شیر سوخت را کنترل می‌کنند. این همکاری هنوز ادامه دارد.',
        en: 'For an oil operator we have designed and built more than ten models of gas turbine control unit, which measure speed and temperature and control the fuel valve. The work is still going on.',
      },
    },
    {
      yearSH: 1400,
      title: { fa: 'سنسور موقعیت بدون تماس زیر فشار ۶۰ بار', en: 'Contactless position sensor at 60 bar' },
      body: {
        fa: 'این سنسور موقعیت پره‌های راهنمای ورودی توربین گازی را اندازه می‌گیرد و در یک تأسیسات فراساحل، درون جک هیدرولیک و زیر فشار ۶۰ بار کار می‌کند.',
        en: 'The sensor measures gas turbine inlet guide vane position and works inside the hydraulic actuator, at 60 bar, on an offshore facility.',
      },
    },
    {
      yearSH: 1401,
      title: { fa: 'سیستم تحریک ژنراتور لوکوموتیو', en: 'Locomotive generator excitation' },
      body: {
        fa: 'سیستم تحریک ژنراتور لوکوموتیو را همراه با مبدل‌ها و درایورهای سوئیچینگ مخصوص آن طراحی کردیم و ساختیم.',
        en: 'We designed and built a locomotive generator excitation system, with switching converters and drivers made for it.',
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
