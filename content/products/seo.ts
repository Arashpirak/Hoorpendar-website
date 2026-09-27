import type { ProductCategorySlug, Seo } from '../types';

// Search-result titles and descriptions (the <title> and meta description), kept apart from the
// page copy so they can be tuned for search without touching what the page says.
// Titles lead with the search term (keywords: .claude/skills/hoorpendar-seo/references/keywords.md)
// and stay near 49 characters, because the layout appends " | هورپندار". Descriptions stay at or
// under 155 characters. A product without an entry falls back to its title, model and summary.

export const categorySeo: Partial<Record<ProductCategorySlug, Seo>> = {
  ignition: {
    title: { fa: 'جرقه‌زن توربین گازی، بویلر و کوره', en: 'Igniters for gas turbines, boilers and furnaces' },
    description: {
      fa: 'جرقه‌زن (ایگنایتر)، اکسایتر جرقه، ترانس جرقه، شمع و کابل برای توربین گازی، بویلر و کوره می‌سازیم و هر دستگاه را پیش از تحویل آزمون جرقه می‌کنیم.',
      en: 'We build igniters, ignition exciters, transformers, plugs and leads for gas turbines, boilers and furnaces, and spark-test every unit before delivery.',
    },
  },
  'power-supplies': {
    title: { fa: 'شارژر باتری صنعتی و یکسوساز تریستوری', en: 'Industrial battery chargers and rectifiers' },
    description: {
      fa: 'شارژر باتری صنعتی تک‌فاز و سه‌فاز از 6 تا 250Vdc و تا 200A، شارژر قابل حمل و کنترلر نوسازی شارژرهای قدیمی برای پست برق، نیروگاه و نفت و گاز.',
      en: 'Industrial battery chargers, single- and three-phase, from 6 to 250 V DC and up to 200 A, plus portable chargers and retrofit controllers.',
    },
  },
  'legacy-renewal': {
    description: {
      fa: 'کارت‌ها و تجهیزات الکترونیکی را که سازنده دیگر پشتیبانی نمی‌کند، بازسازی یا با قطعات امروزی بازطراحی می‌کنیم و عملکرد و اتصالات دستگاه همان می‌ماند.',
      en: 'We rebuild or redesign electronic cards and equipment that no longer have manufacturer support, keeping the same function and wiring.',
    },
  },
};

// Keyed by `${category}/${slug}`.
export const productSeo: Record<string, Seo> = {
  // Ignition
  'ignition/hi-energy-ignition-unit': {
    title: { fa: 'جرقه‌زن پرانرژی توربین گازی IGRU-200', en: 'High-energy gas turbine igniter IGRU-200' },
    description: {
      fa: 'جرقه‌زن پرانرژی IGRU-200 مشعل توربین گازی را با جرقه‌ی 2000Vdc و ۱۲ ژول روشن می‌کند. ورودی آن 24 تا 220V است و در جعبه‌ی ضدانفجار نصب می‌شود.',
      en: 'The IGRU-200 high-energy igniter lights gas turbine combustors with a 2000 V DC, 12 J spark. It takes 24 to 220 V input and sits in an explosion-proof box.',
    },
  },
  'ignition/hi-energy-ignition-exciter': {
    title: { fa: 'اکسایتر جرقه‌زن پرانرژی IGN-2KRJ', en: 'High-energy ignition exciter IGN-2KRJ' },
    description: {
      fa: 'اکسایتر جرقه IGN-2KRJ سه جرقه‌ی 2000Vdc در ثانیه می‌زند و گاز و گازوئیل را در توربین و بویلر سریع روشن می‌کند. ورودی آن 230/115Vac یا 24Vdc است.',
      en: 'The IGN-2KRJ exciter fires three 2000 V DC sparks a second and quickly lights gas or diesel in turbines and boilers. Input is 230/115 V AC or 24 V DC.',
    },
  },
  'ignition/turbine-ignition-exciter-18kv': {
    title: { fa: 'اکسایتر جرقه‌زن ۱۸ کیلوولت IGN-SL10', en: '18 kV turbine ignition exciter IGN-SL10' },
    description: {
      fa: 'اکسایتر جرقه‌زن IGN-SL10 از ورودی 24Vdc ولتاژ 18kV می‌سازد و توربین گازی صنعتی را با ۳ تا ۴ جرقه‌ی پرانرژی در ثانیه روشن می‌کند.',
      en: 'The IGN-SL10 exciter turns a 24 V DC supply into 18 kV and lights industrial gas turbines with three to four high-energy sparks a second.',
    },
  },
  'ignition/portable-igniter': {
    title: { fa: 'جرقه‌زن پرتابل (قابل حمل) مشعل HUP-18KD', en: 'Portable burner igniter HUP-18KD' },
    description: {
      fa: 'جرقه‌زن پرتابل HUP-18KD مشعل کوره، بویلر و پیش‌گرمکن را دستی روشن می‌کند. با برق 220Vac یا باتری 24Vdc کار می‌کند و باتری آن یک روز کاری دوام دارد.',
      en: 'The HUP-18KD portable igniter lights furnace, boiler and preheater burners by hand. It runs on 220 V AC or a 24 V DC battery that lasts a working day.',
    },
  },
  'ignition/ignition-transformer': {
    title: { fa: 'ترانس جرقه‌ی مشعل کوره و بویلر HSB-169', en: 'Burner ignition transformer HSB-169' },
    description: {
      fa: 'ترانس جرقه HSB-169 ولتاژ 115Vac را به 15000Vac می‌رساند و برای مشعل کوره و بویلر جرقه‌ی پیوسته می‌سازد.',
      en: 'The HSB-169 ignition transformer steps 115 V AC up to 15 kV AC and gives furnace and boiler burners a continuous spark.',
    },
  },
  'ignition/ignition-cables': {
    title: { fa: 'کابل جرقه‌زن توربین گازی، زره‌دار و سیلیکونی', en: 'Turbine ignition leads, armoured or silicone' },
    description: {
      fa: 'کابل جرقه‌زن ولتاژبالا برای توربین گازی صنعتی را زره‌دار یا سیلیکونی، با عایق تا 30kV و تحمل دمای تا 250°C و مطابق نمونه‌ی کارفرما می‌سازیم.',
      en: 'High-voltage ignition leads for industrial gas turbines, armoured or silicone, insulated to 30 kV and rated to 250 °C, built to the customer’s sample.',
    },
  },
  'ignition/spark-plugs': {
    title: { fa: 'شمع جرقه‌زن توربین گازی، کوره و بویلر', en: 'Spark plugs for gas turbines and furnaces' },
    description: {
      fa: 'شمع جرقه‌زن توربین گازی، کوره و بویلر را در نوع پرانرژی و الکترودبلند می‌سازیم؛ با جرقه‌ی تا 20kV و بدنه‌ای که دمای تا 1250°C را تحمل می‌کند.',
      en: 'We make igniter plugs for gas turbines, furnaces and boilers, in high-energy and long-electrode types, sparking up to 20 kV and rated to 1250 °C.',
    },
  },
  'ignition/flare-ignition-system': {
    title: { fa: 'جرقه‌زن فلر با پروب جرقه‌زن پالسی', en: 'Flare igniter with pulse ignition probe' },
    description: {
      fa: 'جرقه‌زن فلر با پروب پالسی، پایلوت فلر را روشن می‌کند و اگر خاموش شود، دوباره روشنش می‌کند. تابلوی کنترل با فرمان از راه دور همراه آن تحویل می‌شود.',
      en: 'This flare ignition system lights the flare pilot with a pulse probe and relights it after a flame-out. It comes with a control panel and remote command.',
    },
  },

  // Battery chargers and power supplies
  'power-supplies/smart-battery-charger-controller': {
    title: { fa: 'کنترلر شارژر باتری تریستوری SBC-600', en: 'Thyristor battery charger controller SBC-600' },
    description: {
      fa: 'کنترلر هوشمند SBC-600 روی شارژر باتری تریستوری تک‌فاز و سه‌فاز نصب می‌شود و شارژر قدیمی را با نمایشگر LCD، کنترل PID و Modbus نوسازی می‌کند.',
      en: 'The SBC-600 smart controller fits single- and three-phase thyristor battery chargers and upgrades older units with an LCD, PID control and Modbus.',
    },
  },
  'power-supplies/smart-battery-charger': {
    title: { fa: 'شارژر باتری هوشمند صنعتی SMART-128', en: 'Smart industrial battery charger SMART-128' },
    description: {
      fa: 'شارژر باتری صنعتی SMART-128 با ورودی تک‌فاز یا سه‌فاز، شارژ Float و Boost را متناسب با نوع و تعداد باتری انجام می‌دهد و وضعیت را با Modbus می‌فرستد.',
      en: 'The SMART-128 industrial charger runs float and boost charging for the battery type and count, on single- or three-phase input, and reports over Modbus.',
    },
  },
  'power-supplies/portable-battery-charger': {
    title: { fa: 'شارژر باتری قابل حمل ۲۴ ولت PSB-1000', en: 'Portable 24 V battery charger PSB-1000' },
    description: {
      fa: 'شارژر سوئیچینگ PSB-1000 باتری اسیدی و قلیایی ۲۴ ولتی را با جریان تا 30A شارژ می‌کند. بدنه‌ی سبک IP54 دارد و مطابق استاندارد پتروشیمی ایران است.',
      en: 'The PSB-1000 switching charger charges 24 V lead-acid and alkaline batteries at up to 30 A. Light IP54 case, built to the Iranian petrochemical standard.',
    },
  },
  'power-supplies/thyristor-battery-charger': {
    title: { fa: 'شارژر باتری تریستوری تک‌فاز و سه‌فاز', en: 'Thyristor battery chargers, 1- and 3-phase' },
    description: {
      fa: 'شارژر باتری تریستوری (یکسوساز) تک‌فاز و سه‌فاز با خروجی 6 تا 250Vdc و جریان تا 200A می‌سازیم؛ با کنترلر دیجیتال و مطابق ولتاژ و جریان سفارش شما.',
      en: 'Single- and three-phase thyristor battery chargers (rectifiers), 6 to 250 V DC and up to 200 A, with a digital controller, built to your specification.',
    },
  },
  'power-supplies/turbine-starting-battery-charger': {
    title: { fa: 'شارژر باتری راه‌اندازی توربین گازی RTB-100', en: 'Turbine starting battery charger RTB-100' },
    description: {
      fa: 'شارژر باتری RTB-100 برای سیستم راه‌اندازی توربین گازی هم‌زمان تا 40A شارژ و تا 100A جریان بار می‌دهد تا راه‌اندازی‌های پیاپی باتری را خالی نکند.',
      en: 'The RTB-100 gas turbine starting charger charges at up to 40 A while supplying up to 100 A of load, so repeated starts do not drain the batteries.',
    },
  },
  'power-supplies/battery-selector-and-power-supplies': {
    title: { fa: 'سلکتور باتری و منبع تغذیه‌ی صنعتی SDS-120', en: 'Battery selector SDS-120 and power supplies' },
    description: {
      fa: 'سلکتور باتری SDS-120 دو شارژر و دو بانک باتری را مدیریت می‌کند. منبع تغذیه‌ی سوئیچینگ سفارشی، تابلوی سلکتور DC و کارت UPS هم می‌سازیم.',
      en: 'The SDS-120 battery selector manages two chargers and two battery banks. We also build custom switching power supplies, DC selector panels and UPS cards.',
    },
  },

  // Excitation and governors
  'excitation-governor/static-excitation-system': {
    title: { fa: 'سیستم تحریک استاتیک ژنراتور SECON-2000', en: 'Static excitation system SECON-2000' },
    description: {
      fa: 'سیستم تحریک استاتیک SECON-2000 برای ژنراتور سنکرون، با AVR دیجیتال بر پایه‌ی PLC، پل تریستوری و نمایشگر لمسی، مطابق استانداردهای IEEE 421 ساخته می‌شود.',
      en: 'The SECON-2000 static excitation system for synchronous generators has a PLC-based digital AVR, thyristor bridge and touch HMI, designed to IEEE 421.',
    },
  },
  'excitation-governor/brushless-excitation': {
    title: { fa: 'سیستم تحریک بدون جاروبک SECON-50 و SECON-30', en: 'Brushless excitation system SECON-50/30' },
    description: {
      fa: 'سیستم تحریک کم‌جریان SECON-50 و SECON-30 موتورها و ژنراتورهای سنکرون بدون جاروبک را تحریک می‌کند و راه‌انداز تحریک موتورهای پرقدرت پمپاژ هم دارد.',
      en: 'SECON-50 and SECON-30 low-current excitation for brushless synchronous motors and generators, with excitation starters for high-power pumping motors.',
    },
  },
  'excitation-governor/rotor-crowbar-protection': {
    description: {
      fa: 'حفاظت Crowbar سیم‌پیچ روتور ژنراتور سنکرون را در برابر اضافه‌ولتاژ حفظ می‌کند و انرژی ذخیره‌شده را تخلیه می‌کند. هر دستگاه مطابق مشخصات روتور ساخته می‌شود.',
      en: 'A crowbar protects a synchronous generator’s rotor winding from over-voltage and dissipates its stored energy. Each unit is built to the rotor’s rating.',
    },
  },
  'excitation-governor/digital-hydro-governor': {
    description: {
      fa: 'گاورنر دیجیتال DHTG-300 بر پایه‌ی PLC سرعت و بار توربین آبی و شیرهای سروو را کنترل می‌کند. این نخستین گاورنر دیجیتال توربین آبی ساخت ایران است.',
      en: 'The DHTG-300 is a PLC-based digital governor for hydro-turbine speed, load and servo valves, and the first digital hydro-turbine governor made in Iran.',
    },
  },

  // Flame detection
  'flame-detection/turbine-flame-detector': {
    title: { fa: 'آشکارساز شعله‌ی توربین گازی FDU-300', en: 'Gas turbine flame detector FDU-300/320' },
    description: {
      fa: 'آشکارساز شعله‌ی FDU-300 شعله‌ی محفظه‌ی احتراق توربین را پایش می‌کند و اگر شعله خاموش شود، فرمان Trip می‌دهد. بیش از ۲۰۰ دستگاه از آن در حال کار است.',
      en: 'The FDU-300 watches the flame in a turbine combustion chamber and trips the turbine on flame loss. More than 200 units are in service.',
    },
  },
  'flame-detection/flame-relay': {
    title: { fa: 'رله‌ی شعله UV و یونیزاسیون FR-430', en: 'UV and ionization flame relay FR-430' },
    description: {
      fa: 'رله‌ی شعله‌ی FR-430 شعله را در توربین، کوره و بویلر تشخیص می‌دهد. مدل E با سنسور UV و مدل D با الکترود یونیزاسیون (Flame Rod) کار می‌کند.',
      en: 'The FR-430 flame relay detects flame in turbines, furnaces and boilers. The E model uses a UV sensor and the D model an ionization flame rod.',
    },
  },
  'flame-detection/flame-safeguard-controller': {
    description: {
      fa: 'کنترلر ایمنی شعله با سنسور UV یا الکترود میله‌ای، روشن بودن پایلوت را تأیید می‌کند و فقط بعد از آن اجازه‌ی باز شدن شیر اصلی سوخت را می‌دهد.',
      en: 'Proves the pilot flame with a UV or rod sensor before letting the main fuel valve open. Supplied with a flame scanner in an explosion-proof housing.',
    },
  },
  'flame-detection/flare-pilot-monitor': {
    description: {
      fa: 'FMS-280 شعله‌ی فلر و پایلوت را از راه دور و بدون تماس پایش می‌کند، وضعیت آن را به اتاق کنترل می‌فرستد و اگر شعله خاموش شود، هشدار می‌دهد.',
      en: 'The FMS-280 monitors flare and pilot flames from a distance without contact, reports to the control room and raises an alarm on flame-out.',
    },
  },
  'flame-detection/flame-sensors': {
    description: {
      fa: 'الکترود یونیزاسیون (Flame Rod) با بدنه‌ی چینی و سنسورهای UV و IR را برای تشخیص شعله، در شکل‌ها و اندازه‌های مختلف و مطابق نمونه‌ی کارفرما می‌سازیم.',
      en: 'Ionization flame rods with porcelain bodies, and UV and IR flame sensors, in many shapes and sizes and made to the customer’s sample.',
    },
  },

  // Turbine control
  'turbine-control/turbine-speed-temperature-monitors': {
    description: {
      fa: 'مانیتور سرعت و دمای توربین گازی با سنسور مغناطیسی و ترموکوپل کار می‌کند، رله‌ی حد و خروجی آنالوگ دارد و در گستره‌های مختلف ساخته می‌شود.',
      en: 'Gas turbine speed and temperature monitors using magnetic pickups and thermocouples, with threshold relays and analog outputs, in several ranges.',
    },
  },
  'turbine-control/fuel-valve-controller-ramp-generator': {
    title: { fa: 'کنترل شیر سوخت و مولد شیب RUG-280', en: 'Fuel valve controller and ramp generator' },
  },
  'turbine-control/contactless-position-transducer': {
    description: {
      fa: 'ترانسدیوسر بدون تماس، موقعیت شیر سوخت و پره‌های IGV توربین را بدون فرسایش می‌سنجد. بدنه‌ی آن ایمن ذاتی (EEx ib) است و نوعی از آن در روغن ۶۰ بار کار می‌کند.',
      en: 'Measures turbine fuel valve and IGV position with no wear, in an EEx ib intrinsically safe housing. One version works inside a 60 bar hydraulic actuator.',
    },
  },
  'turbine-control/speed-pickup-and-indicator': {
    title: { fa: 'سنسور سرعت مغناطیسی و نمایشگر سرعت توربین', en: 'Turbine speed pickups and indicators' },
  },

  // Alarm and process safety
  'alarm-safety/programmable-alarm-annunciator': {
    title: { fa: 'اعلام‌گر آلارم برنامه‌پذیر PAL750 و PAL625', en: 'Programmable alarm annunciator PAL750' },
    description: {
      fa: 'اعلام‌گر آلارم ماژولار PAL750 در تأسیسات نفت و گاز و نیروگاه‌ها کار می‌کند. هر ماژول پردازنده‌ی خودش را دارد و در هر آرایشی از سطر و ستون چیده می‌شود.',
      en: 'The PAL750 modular annunciator runs at oil and gas plants and power stations. Each module has its own processor, so modules fit any row and column layout.',
    },
  },
  'alarm-safety/compact-alarm-panel': {
    description: {
      fa: 'پنل آلارم جمع‌وجور SAL-82 برای تابلوهای محلی دو مدل دارد: مدل ساده با LED پرنور و مدل کنترل‌دار که آلارم را ثبت می‌کند و توالی ISA S18.1 را اجرا می‌کند.',
      en: 'The SAL-82 compact alarm panel for local panels comes as a simple LED model and a controller model that logs alarms and runs ISA S18.1 sequences.',
    },
  },
  'alarm-safety/alarm-annunciator-cards': {
    description: {
      fa: 'کارت‌های ورودی و فلاشر پنل‌های آلارم قدیمی را با همان ابعاد و اتصالات می‌سازیم تا پنل بدون تغییر در سیم‌کشی دوباره کار کند.',
      en: 'We build input and flasher cards for older annunciators with the original size and connections, so the panel works again without rewiring.',
    },
  },
  'alarm-safety/hipps-logic-solver': {
    title: { fa: 'سامانه‌ی HIPPS برای حفاظت در برابر فشار زیاد', en: 'HIPPS logic solver for overpressure protection' },
    description: {
      fa: 'سامانه‌ی ایمنی HIPPS جریان را پیش از آنکه فشار از حد مجاز بگذرد قطع می‌کند؛ لوله‌کشی پایین‌دست سبک‌تر طراحی می‌شود و گاز کمتری به فلر می‌رود.',
      en: 'A HIPPS for upstream oil and gas that shuts off flow before pressure passes the safe limit, so downstream piping can be lighter and less gas is flared.',
    },
  },

  // Instrumentation
  'instrumentation/multichannel-temperature-monitors': {
    description: {
      fa: 'خانواده‌ی MPS تا ۳۲ کانال ورودی دارد. دماسنج‌های ۶۴، ۲۴، ۹ و ۸ کاناله هم برای پایش هم‌زمان دمای ده‌ها نقطه در نیروگاه و صنایع نفت می‌سازیم.',
      en: 'The MPS family takes up to 32 inputs, and our 64-, 24-, 9- and 8-channel temperature monitors watch dozens of points at once in plants.',
    },
  },
  'instrumentation/strain-gauge-amplifier': {
    description: {
      fa: 'تقویت‌کننده‌ی استرین‌گیج TSG-500 سیگنال کرنش‌سنج را برای اندازه‌گیری فشار، وزن و سطح به 4-20mA تبدیل می‌کند و صفر و دامنه‌ی آن قابل تنظیم است.',
      en: 'The TSG-500 turns strain-gauge signals into 4–20 mA for pressure, weight and level measurement, with adjustable zero and span.',
    },
  },
  'instrumentation/paperless-recorders-data-loggers': {
    description: {
      fa: 'ثبات بدون کاغذ ۱۲ کاناله، راه‌انداز ثبات نموداری و ثبت‌کننده‌ی داده‌های الکتریکی نیروگاه می‌سازیم و داده‌ی رله‌های حفاظتی را هم جمع‌آوری می‌کنیم.',
      en: 'Twelve-channel paperless recorders, chart recorder drivers and power-plant electrical data loggers that also collect protection relay data.',
    },
  },
  'instrumentation/vibration-monitoring': {
    description: {
      fa: 'کارت، نمایشگر و کابل رابط سنسور را برای سامانه‌های پایش ارتعاش و جابه‌جایی محوری ماشین‌های دوار، هم‌خوان با اتصالات سامانه‌ی موجود، می‌سازیم.',
      en: 'Cards, readouts and sensor cables for vibration and thrust monitoring on rotating machines, matching the connections of the existing system.',
    },
  },

  // Dams, power plants and infrastructure
  'dam-power-infrastructure/bubbler-level-meter': {
    description: {
      fa: 'سطح‌سنج حبابی BLVM-100 با دمیدن هوا و سنجش فشار برگشتی، سطح آب سدهای خاکی و بتنی را بدون نیاز به دسترسی عمودی اندازه می‌گیرد.',
      en: 'The BLVM-100 bubbler level meter reads water level from purge-air back pressure, for earth and concrete dams with no vertical access.',
    },
  },
  'dam-power-infrastructure/frequency-meter': {
    title: { fa: 'فرکانس‌متر دیجیتال و ترانسدیوسر فرکانس', en: 'Digital frequency meter and transducer' },
  },
  'dam-power-infrastructure/dam-safety-instruments': {
    description: {
      fa: 'سامانه‌ی لیزری PDML-4800 انحراف پاندول سد را در دو محور با دقت ۰٫۰۱ میلی‌متر می‌خواند و برای تحلیل پایداری سد به رایانه می‌فرستد.',
      en: 'The PDML-4800 laser reader measures dam pendulum deflection on two axes to 0.01 mm and sends it to the dam stability software.',
    },
  },
};
