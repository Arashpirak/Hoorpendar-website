import type { Project } from './types';

// Public project list. Titles are rewritten from the company resume under PLAN.md section 2:
// no client names, named sites, contract details or third-party brands and models.
// Hoorpendar's own model codes (FDU-300, PAL625, PI-315, SBC-620, …) are allowed.
//
// p001–p138: contract table of the resume (row number = id), 1380–1401.
// x01–x19:   notable projects listed separately in the resume, mostly without a year.
// l01–l05:   dam level meters from the resume's client section.

export const projects: Project[] = [
  {
    id: 'p001', cities: ['lavasan'], facility: 'hydro', sector: 'power', yearSH: 1380, productCategory: 'excitation-governor', highlight: true,
    title: { fa: 'طراحی و ساخت واحد تحریک استاتیک ژنراتور نیروگاه آبی', en: 'Static excitation unit for a hydroelectric generator' },
    summary: {
      fa: 'نخستین سیستم تحریک استاتیک ژنراتور ساخت داخل. از آن پس هورپندار سیستم‌های تحریک استاتیک ژنراتورها و موتورهای سنکرون را طراحی و تولید کرده است.',
      en: 'The first static generator excitation system designed and built in Iran. Since then Hoorpendar has designed and produced static excitation systems for generators and synchronous motors.',
    },
  },
  {
    id: 'p002', cities: ['lavasan'], facility: 'hydro', sector: 'power', yearSH: 1380, productCategory: 'dam-power-infrastructure', highlight: true,
    title: { fa: 'سیستم کنترل هوشمند Full-Redundant برای تنظیم خودکار دبی آب انتقالی از سد به یک کلان‌شهر', en: 'Fully redundant intelligent control of water flow from a dam to a metropolitan area' },
    summary: {
      fa: 'کنترل هوشمند با افزونگی کامل برای تنظیم خودکار دبی آب انتقالی از یک سد به شبکه‌ی آب یک کلان‌شهر، با تجهیزات ساخت هورپندار و کنترلر PLC.',
      en: 'Fully redundant intelligent control that automatically regulates water flow from a dam into a metropolitan supply network, built on Hoorpendar hardware and a PLC controller.',
    },
  },
  {
    id: 'p003', cities: ['manjil'], facility: 'hydro', sector: 'power', yearSH: 1382, productCategory: 'instrumentation',
    title: { fa: 'طراحی، ساخت و اجرای سیستم مانیتورینگ ۵ واحد نیروگاه آبی', en: 'Monitoring system for five units of a hydroelectric plant' },
  },
  {
    id: 'p004', cities: ['lavasan'], facility: 'hydro', sector: 'power', yearSH: 1383, productCategory: 'dam-power-infrastructure',
    title: { fa: 'اندازه‌گیری گشودگی ۱۱ دریچه‌ی سد تا فاصله‌ی ۳ کیلومتر، همراه با تست و کالیبراسیون ابزار دقیق', en: 'Opening measurement for 11 dam gates over distances up to 3 km, with instrument testing and calibration' },
  },
  {
    id: 'p005', cities: ['lavasan'], facility: 'hydro', sector: 'power', yearSH: 1383, productCategory: 'dam-power-infrastructure',
    title: { fa: 'سیستم نمایش وضعیت گشودگی شش دریچه‌ی آبگیر زیر آب', en: 'Opening indication for six submerged intake gates' },
  },
  {
    id: 'p006', cities: ['andimeshk'], facility: 'hydro', sector: 'power', yearSH: 1383, productCategory: 'instrumentation',
    title: { fa: 'ثبت Online پارامترهای الکتریکی نیروگاه آبی و اندازه‌گیری تغییرات ارتفاع مخزن', en: 'Online recording of electrical parameters and reservoir level measurement at a hydroelectric plant' },
  },
  {
    id: 'p007', cities: ['lavasan'], facility: 'hydro', sector: 'power', yearSH: 1383, productCategory: 'alarm-safety',
    title: { fa: 'جمع‌آوری و انتقال حدود ۶۰۰ سیگنال اخباری و اخطاری نیروگاه آبی', en: 'Collection and transmission of about 600 status and alarm signals for a hydroelectric plant' },
  },
  {
    id: 'p008', cities: ['manjil'], facility: 'hydro', sector: 'power', yearSH: 1384, productCategory: 'alarm-safety',
    title: { fa: 'سیستم اعلام حریق نیروگاه آبی', en: 'Fire alarm system for a hydroelectric plant' },
  },
  {
    id: 'p009', cities: ['manjil'], facility: 'hydro', sector: 'power', yearSH: 1384, productCategory: 'dam-power-infrastructure', highlight: true,
    title: { fa: 'کریدوسکوپ لیزری برای اندازه‌گیری و پایش دقیق انحراف بدنه‌ی سد', en: 'Laser crydoscope for precise dam-body deflection monitoring' },
    summary: {
      fa: 'سیستم لیزری دومحوره برای پایش و ثبت حرکات بدنه‌ی سد با دقت ۰٫۰۱ میلی‌متر و بدون تماس فیزیکی.',
      en: 'A two-axis laser system that tracks and records dam-body movement to 0.01 mm without physical contact.',
    },
  },
  {
    id: 'p010', cities: ['poldasht'], facility: 'hydro', sector: 'power', yearSH: 1385, productCategory: 'instrumentation',
    title: { fa: 'طراحی، ساخت و اجرای سیستم مانیتورینگ اطلاعات سد و نیروگاه آبی در دو فاز', en: 'Two-phase data monitoring system for a dam and hydroelectric plant' },
  },
  {
    id: 'p011', cities: ['qazvin'], facility: 'thermal', sector: 'power', yearSH: 1385,
    title: { fa: 'سیستم کنترل و زمان‌بندی فلاشینگ برج‌های نیروگاه حرارتی', en: 'Flushing control and timing system for power plant towers' },
  },
  {
    id: 'p012', cities: ['abadan'], facility: 'thermal', sector: 'power', yearSH: 1385, productCategory: 'instrumentation',
    title: { fa: 'اندازه‌گیری ارتفاع مخزن سوخت و فرکانس‌متر نیروگاه حرارتی', en: 'Fuel tank level measurement and frequency meter for a thermal power plant' },
  },
  {
    id: 'p013', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1386, productCategory: 'dam-power-infrastructure',
    title: { fa: 'کنترل خودکار و از راه دور دریچه‌های کشویی سد و تنظیم خودکار دبی عبوری', en: 'Remote automatic control of dam sluice gates and outflow regulation' },
  },
  {
    id: 'p014', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1386, productCategory: 'excitation-governor', highlight: true,
    title: { fa: 'سیستم کنترل و راه‌انداز تحریک موتورهای سنکرون ۳٫۵ مگاواتی ایستگاه پمپاژ', en: 'Excitation control and starter for 3.5 MW synchronous motors at pumping stations' },
    summary: {
      fa: 'کنترل و راه‌انداز تحریک استاتیک موتورهای سنکرون ۳٫۵ مگاواتی در ایستگاه‌های پمپاژ و تقویت فشار. در سال‌های بعد ۴۰ واحد کنترل تحریک دیگر برای همین موتورها تحویل شد.',
      en: 'Static excitation control and starting for 3.5 MW synchronous motors at pumping and compression stations. Forty more excitation control units followed for the same motors.',
    },
  },
  {
    id: 'p015', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1386, productCategory: 'alarm-safety',
    title: { fa: 'سیستم اعلام‌گر آلارم ۲۵ ایستگاه پمپاژ گاز و تابلوهای وابسته', en: 'Alarm annunciators for 25 gas pumping stations and associated panels' },
  },
  {
    id: 'p016', cities: ['poldasht'], facility: 'hydro', sector: 'power', yearSH: 1387, productCategory: 'excitation-governor',
    title: { fa: 'سیستم کنترل خودکار ولتاژ تحریک (AVR) دو واحد نیروگاه آبی', en: 'Automatic voltage regulator (AVR) for two hydroelectric units' },
  },
  {
    id: 'p017', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1387,
    title: { fa: 'نصب و راه‌اندازی ۲۰ دستگاه رله‌ی حفاظتی موتور سنکرون', en: 'Installation and commissioning of 20 synchronous-motor protection relays' },
  },
  {
    id: 'p018', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1388, productCategory: 'excitation-governor',
    title: { fa: 'سیستم کنترل خودکار ولتاژ (AVR) موتورهای سنکرون ۳٫۵ مگاواتی', en: 'Automatic voltage regulator (AVR) for 3.5 MW synchronous motors' },
  },
  {
    id: 'p019', cities: ['gachsaran'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1388, productCategory: 'alarm-safety', groupKey: 'pal625-gachsaran',
    title: { fa: 'سیستم اعلام‌گر آلارم PAL625', en: 'PAL625 alarm annunciator system' },
  },
  {
    id: 'p020', cities: ['gachsaran'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1388, productCategory: 'alarm-safety', groupKey: 'pal625-gachsaran',
    title: { fa: 'سیستم اعلام‌گر آلارم PAL625', en: 'PAL625 alarm annunciator system' },
  },
  {
    id: 'p021', cities: ['manjil'], facility: 'hydro', sector: 'power', yearSH: 1388, productCategory: 'dam-power-infrastructure',
    title: { fa: 'سیستم ساعت مادر دیجیتال', en: 'Digital master clock system' },
  },
  {
    id: 'p022', cities: ['ahvaz'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1388, productCategory: 'flame-detection',
    title: { fa: 'پایش از راه دور فلرهای ایستگاه‌های تزریق گاز و نفت', en: 'Remote monitoring of flares at gas and oil injection stations' },
  },
  {
    id: 'p023', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1388, productCategory: 'legacy-renewal',
    title: { fa: 'کارت اندازه‌گیری دما برای سیستم پایش فرایند', en: 'Temperature measurement card for process monitoring' },
  },
  {
    id: 'p024', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1388, productCategory: 'instrumentation',
    title: { fa: 'مانیتورینگ و جمع‌آوری اطلاعات رله‌های حفاظتی و پاورآنالایزرها', en: 'Data acquisition and monitoring for protection relays and power analyzers' },
  },
  {
    id: 'p025', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1388, productCategory: 'legacy-renewal',
    title: { fa: 'طراحی و ساخت دو مدل کارت کنترل سیستم پایش ارتعاش', en: 'Two models of vibration-monitoring control cards' },
  },
  {
    id: 'p026', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1388, productCategory: 'power-supplies',
    title: { fa: '۲۰ دستگاه منبع تغذیه‌ی سوئیچینگ برای سیستم پایش ارتعاش', en: 'Twenty switching power supplies for a vibration-monitoring system' },
  },
  {
    id: 'p027', cities: ['poldasht'], facility: 'hydro', sector: 'power', yearSH: 1388, productCategory: 'dam-power-infrastructure',
    title: { fa: 'طراحی و ساخت مقاومت بار', en: 'Load resistor bank' },
  },
  {
    id: 'p028', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1388, productCategory: 'legacy-renewal',
    title: { fa: 'منبع تغذیه‌ی رک سیستم پایش ارتعاش', en: 'Rack power supply for a vibration-monitoring system' },
  },
  {
    id: 'p029', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1389, productCategory: 'legacy-renewal',
    title: { fa: 'کارت الکترونیکی سیستم آلارم', en: 'Alarm system electronic card' },
  },
  {
    id: 'p030', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1389, productCategory: 'power-supplies',
    title: { fa: 'طراحی و اجرای سیستم کنترلر شارژر باتری', en: 'Battery charger controller' },
  },
  {
    id: 'p031', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1389, productCategory: 'instrumentation',
    title: { fa: 'سیستم پایش فرایند (Process Monitor) با ورودی‌های متنوع، قابل افزایش تا ۶۴ کانال', en: 'Process monitor with mixed inputs, expandable to 64 channels' },
  },
  {
    id: 'p032', cities: ['bojnurd'], facility: 'petrochemical', sector: 'industry', yearSH: 1390, productCategory: 'excitation-governor',
    title: { fa: 'طراحی، ساخت و جایگزینی AVR ژنراتور ۸ مگاواتی', en: 'Design, build and replacement of the AVR for an 8 MW generator' },
  },
  {
    id: 'p033', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1390, productCategory: 'instrumentation',
    title: { fa: '۵ دستگاه دماسنج ۸ کاناله با درجه‌ی حفاظت IP54', en: 'Five 8-channel temperature monitors, IP54' },
  },
  {
    id: 'p034', cities: ['tehran'], facility: 'epc', sector: 'oil', yearSH: 1391, productCategory: 'alarm-safety',
    title: { fa: 'تابلوی Logic Solver سیستم HIPPS', en: 'HIPPS logic solver panel' },
  },
  {
    id: 'p035', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1391, productCategory: 'instrumentation',
    title: { fa: 'طراحی و تولید مبدل فشار به جریان، طی چند قرارداد', en: 'Pressure-to-current (P/I) converters, several contracts' },
  },
  {
    id: 'p036', cities: ['poldasht'], facility: 'research', sector: 'power', yearSH: 1391, productCategory: 'excitation-governor', highlight: true,
    title: { fa: 'پروژه‌ی پژوهشی سیستم کنترل دیجیتال گاورنر توربین آبی', en: 'Research program: digital governor control for a hydro turbine' },
    summary: {
      fa: 'نخستین گاورنر دیجیتال توربین آبی ساخت داخل (DHTG-300) بر پایه‌ی PLC. این نیروگاه با سیستم تحریک و گاورنر هورپندار در آزمون خودراه‌اندازی (Black Start) بخشی از شبکه را به‌صورت جزیره‌ای برق‌دار کرد و بارهای پله‌ای تا ۲٫۵ مگاوات را با حفظ فرکانس و ولتاژ کنترل کرد.',
      en: 'The first digital hydro-turbine governor made in Iran (DHTG-300), built on a PLC. With Hoorpendar excitation and governor systems, the plant later energized part of the grid in island mode during a black-start test, holding frequency and voltage under step loads of up to 2.5 MW.',
    },
  },
  {
    id: 'p037', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1391, productCategory: 'excitation-governor',
    title: { fa: 'سیستم گاورنر ژنراتور', en: 'Generator governor system' },
  },
  {
    id: 'p038', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1391, productCategory: 'dam-power-infrastructure',
    title: { fa: 'کنترل اتوماتیک ترمز ژنراتورهای نیروگاه آبی', en: 'Automatic generator brake control for a hydroelectric plant' },
  },
  {
    id: 'p039', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1391, productCategory: 'alarm-safety',
    title: { fa: 'سیستم تشخیص و اعلام خودکار آلارم نیروگاه آبی', en: 'Automatic alarm detection and annunciation for a hydroelectric plant' },
  },
  {
    id: 'p040', cities: ['gachsaran'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1392, productCategory: 'alarm-safety', highlight: true,
    title: { fa: 'تولید ۸۰۰ سیگنال اعلام‌گر آلارم برای کارخانه‌های بهره‌برداری نفت', en: '800 alarm annunciator signals for oil production plants' },
    summary: {
      fa: 'تولید و تحویل ۸۰۰ سیگنال اعلام‌گر آلارم برای کارخانه‌های مختلف یک بهره‌بردار نفت و گاز.',
      en: '800 alarm annunciator signals produced and delivered for the production plants of an oil and gas operator.',
    },
  },
  {
    id: 'p041', cities: ['tehran'], facility: 'municipal', sector: 'industry', yearSH: 1392,
    title: { fa: 'اجرای تأسیسات برق فشار ضعیف یک دریاچه‌ی شهری', en: 'Low-voltage electrical installations for an urban lake' },
  },
  {
    id: 'p042', cities: ['manjil'], facility: 'hydro', sector: 'power', yearSH: 1392, productCategory: 'power-supplies',
    title: { fa: 'شارژر باتری سد و نیروگاه آبی', en: 'Battery charger for a dam and hydroelectric plant' },
  },
  {
    id: 'p043', cities: ['poldasht'], facility: 'hydro', sector: 'power', yearSH: 1392, productCategory: 'dam-power-infrastructure',
    title: { fa: 'کریدوسکوپ لیزری پایش بدنه‌ی سد', en: 'Laser crydoscope for dam monitoring' },
  },
  {
    id: 'p044', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1392, productCategory: 'dam-power-infrastructure',
    title: { fa: 'تأمین، نصب و راه‌اندازی سامانه‌ی ریزپردازنده‌ای اندازه‌گیری بازشدگی دریچه‌های سرریز سد', en: 'Microprocessor-based spillway gate opening system: supply, installation and commissioning' },
  },
  {
    id: 'p045', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1392, productCategory: 'excitation-governor',
    title: { fa: 'سیستم تاکوژنراتور و محرک فلای‌گاورنر نیروگاه آبی', en: 'Tachogenerator and fly-governor drive for a hydroelectric plant' },
  },
  {
    id: 'p046', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'instrumentation', groupKey: 'pi-ahvaz',
    title: { fa: 'مبدل فشار به جریان', en: 'Pressure-to-current (P/I) converter' },
  },
  {
    id: 'p047', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'power-supplies',
    title: { fa: 'ساخت کارت تغذیه‌ی 24V DC', en: '24 V DC power card' },
  },
  {
    id: 'p048', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'instrumentation',
    title: { fa: 'ساخت مبدل سیگنال (Converter)', en: 'Signal converter' },
  },
  {
    id: 'p049', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'legacy-renewal',
    title: { fa: 'ساخت Safety Barrier', en: 'Safety barriers' },
  },
  {
    id: 'p050', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1393, productCategory: 'alarm-safety', groupKey: 'annunciator-aghajari',
    title: { fa: 'سیستم اعلام‌گر آلارم', en: 'Alarm annunciator system' },
  },
  {
    id: 'p051', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'instrumentation', groupKey: 'pi-ahvaz',
    title: { fa: 'مبدل فشار به جریان', en: 'Pressure-to-current (P/I) converter' },
  },
  {
    id: 'p052', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'alarm-safety',
    title: { fa: 'الکتروموتور آژیر', en: 'Siren electric motor' },
  },
  {
    id: 'p053', cities: ['asaluyeh'], facility: 'petrochemical', sector: 'industry', yearSH: 1393, productCategory: 'instrumentation',
    title: { fa: 'ثبات بدون کاغذ ۱۲ کاناله', en: '12-channel paperless recorder' },
  },
  {
    id: 'p054', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1393, productCategory: 'alarm-safety', groupKey: 'annunciator-aghajari',
    title: { fa: 'سیستم اعلام‌گر آلارم', en: 'Alarm annunciator system' },
  },
  {
    id: 'p055', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'flame-detection', groupKey: 'flame-detector-ahvaz',
    title: { fa: 'شعله‌یاب توربین گازی', en: 'Gas turbine flame detector' },
  },
  {
    id: 'p056', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393,
    title: { fa: 'ساخت کابل‌های ویژه‌ی تجهیزات فرایندی', en: 'Special cables for process equipment' },
  },
  {
    id: 'p057', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'power-supplies',
    title: { fa: 'واحد کنترل شارژر باتری', en: 'Battery charger control unit' },
  },
  {
    id: 'p058', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'legacy-renewal',
    title: { fa: 'ساخت کارت کنترل کلیدهای فشار ضعیف', en: 'LV switchgear control card' },
  },
  {
    id: 'p059', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'flame-detection', groupKey: 'flame-detector-ahvaz',
    title: { fa: 'شعله‌یاب توربین گازی', en: 'Gas turbine flame detector' },
  },
  {
    id: 'p060', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1393, productCategory: 'legacy-renewal',
    title: { fa: 'ساخت کارت سیستم پایش ارتعاش', en: 'Vibration-monitoring card' },
  },
  {
    id: 'p061', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1393, productCategory: 'instrumentation',
    title: { fa: 'تأمین، نصب و راه‌اندازی سیستم‌های میکرورایانه‌ای برنامه‌پذیر برای اندازه‌گیری و نمایش دیجیتال نقاط دمایی', en: 'Programmable microcomputer systems for measuring and displaying temperature points' },
  },
  {
    id: 'p062', cities: ['tehran'], facility: 'epc', sector: 'oil', yearSH: 1393, productCategory: 'alarm-safety',
    title: { fa: 'تأمین سیستم HIPPS Logic Solver', en: 'HIPPS logic solver system' },
  },
  {
    id: 'p063', cities: ['tehran'], facility: 'epc', sector: 'industry', yearSH: 1393, productCategory: 'alarm-safety',
    title: { fa: 'طراحی و مونتاژ سه دستگاه آژیر صنعتی', en: 'Design and assembly of three industrial sirens' },
  },
  {
    id: 'p064', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1393, productCategory: 'excitation-governor',
    title: { fa: 'مطالعه و امکان‌سنجی به‌روزرسانی سیستم تحریک دینامیک نیروگاه آبی', en: 'Feasibility study for upgrading the rotating excitation system of a hydroelectric plant' },
  },
  {
    id: 'p065', cities: ['lavasan'], facility: 'hydro', sector: 'power', yearSH: 1393, productCategory: 'excitation-governor',
    title: { fa: 'تست و کالیبراسیون کارت‌های سیستم تحریک ژنراتور نیروگاه آبی', en: 'Testing and calibration of generator excitation system cards' },
  },
  {
    id: 'p066', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1394, productCategory: 'alarm-safety',
    title: { fa: 'قطعات تابلوی هشداردهنده', en: 'Alarm panel components' },
  },
  {
    id: 'p067', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'flame-detection',
    title: { fa: 'رله‌ی شعله FR-430E', en: 'FR-430E flame relay' },
  },
  {
    id: 'p068', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'alarm-safety',
    title: { fa: 'ساخت کارت الکترونیکی Fault Annunciator', en: 'Fault annunciator electronic card' },
  },
  {
    id: 'p069', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'flame-detection', groupKey: 'fdu300-ahvaz',
    title: { fa: 'شعله‌یاب FDU-300 توربین گازی', en: 'FDU-300 gas turbine flame detector' },
  },
  {
    id: 'p070', cities: ['tehran'], facility: 'municipal', sector: 'industry', yearSH: 1394,
    title: { fa: 'اجرای تأسیسات برق و آبیاری یک بوستان شهری', en: 'Electrical and irrigation installations for an urban park' },
  },
  {
    id: 'p071', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'flame-detection', groupKey: 'fdu300-ahvaz',
    title: { fa: 'شعله‌یاب FDU-300 توربین گازی', en: 'FDU-300 gas turbine flame detector' },
  },
  {
    id: 'p072', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'power-supplies',
    title: { fa: 'منبع تغذیه‌ی پنل اخطار جدید توربین گازی', en: 'Power supply for a new gas turbine warning panel' },
  },
  {
    id: 'p073', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'legacy-renewal',
    title: { fa: 'ساخت آمپلی‌فایر 24V DC', en: '24 V DC amplifier' },
  },
  {
    id: 'p074', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'alarm-safety',
    title: { fa: 'ساخت تابلوی هشداردهنده‌ی توربین گازی', en: 'Gas turbine warning panel' },
  },
  {
    id: 'p075', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394,
    title: { fa: 'تأمین پمپ فشار', en: 'Pressure pump' },
  },
  {
    id: 'p076', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'flame-detection', groupKey: 'fdu300-ahvaz',
    title: { fa: 'شعله‌یاب FDU-300 توربین گازی', en: 'FDU-300 gas turbine flame detector' },
  },
  {
    id: 'p077', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1394, productCategory: 'flame-detection',
    title: { fa: 'لامپ UV و رله‌ی شعله', en: 'UV tubes and flame relays' },
  },
  {
    id: 'p078', cities: ['manjil'], facility: 'hydro', sector: 'power', yearSH: 1394, productCategory: 'power-supplies',
    title: { fa: 'تأمین یک دستگاه تابلوی سلکتوری 127V DC', en: '127 V DC selector panel' },
  },
  {
    id: 'p079', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1394, productCategory: 'alarm-safety', groupKey: 'annunciator-aghajari',
    title: { fa: 'سیستم اعلام‌گر آلارم', en: 'Alarm annunciator system' },
  },
  {
    id: 'p080', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1394, productCategory: 'dam-power-infrastructure',
    title: { fa: 'نصب و راه‌اندازی شیر سه‌راهه و مدار فرمان آب‌بندی شیرهای کروی نیروگاه آبی', en: 'Three-way valve and control circuit for spherical-valve sealing at a hydroelectric plant' },
  },
  {
    id: 'p081', cities: ['karaj'], facility: 'hydro', sector: 'power', yearSH: 1394, productCategory: 'dam-power-infrastructure',
    title: { fa: 'تأمین، نصب و راه‌اندازی ارتفاع‌سنج سد', en: 'Dam level meter: supply, installation and commissioning' },
  },
  {
    id: 'p082', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1395, productCategory: 'flame-detection', groupKey: 'fdu300-ahvaz',
    title: { fa: 'شعله‌یاب FDU-300 توربین گازی', en: 'FDU-300 gas turbine flame detector' },
  },
  {
    id: 'p083', cities: ['ahvaz'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1395, productCategory: 'power-supplies',
    title: { fa: 'ساخت ۴ کارت الکترونیکی UPS ۱۰ کیلوولت‌آمپر ایستگاه تزریق گاز', en: 'Four electronic cards for a 10 kVA UPS at a gas injection station' },
  },
  {
    id: 'p084', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1395, productCategory: 'alarm-safety',
    title: { fa: 'تابلوی اخطار ۳۲ پنجره‌ای پمپ واحد نمک‌زدایی', en: '32-window annunciator panel for a desalting-unit pump' },
  },
  {
    id: 'p085', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1395, productCategory: 'flame-detection',
    title: { fa: 'شعله‌یاب ۲۴ ولت', en: '24 V flame detector' },
  },
  {
    id: 'p086', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1395, productCategory: 'instrumentation', groupKey: 'pi-ahvaz',
    title: { fa: 'مبدل فشار به جریان', en: 'Pressure-to-current (P/I) converter' },
  },
  {
    id: 'p087', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1395, productCategory: 'alarm-safety',
    title: { fa: 'کارت‌های الکترونیکی هشداردهنده', en: 'Alarm electronic cards' },
  },
  {
    id: 'p088', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1395, productCategory: 'alarm-safety',
    title: { fa: 'تأمین ۴ دستگاه آلارم پنل', en: 'Four alarm panels' },
  },
  {
    id: 'p089', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1395, productCategory: 'flame-detection',
    title: { fa: 'تأمین ۴ رله‌ی شعله', en: 'Four flame relays' },
  },
  {
    id: 'p090', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1396, productCategory: 'flame-detection',
    title: { fa: '۴ رله‌ی شعله با سنسور میله‌ای (Flame Rod)', en: 'Four flame relays with flame-rod sensors' },
  },
  {
    id: 'p091', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1396, productCategory: 'instrumentation', highlight: true,
    title: { fa: 'تأمین ۱۲۰ دستگاه مبدل فشار به جریان PI-315', en: '120 PI-315 pressure-to-current converters' },
    summary: {
      fa: '۱۲۰ دستگاه مبدل فشار به جریان در یک قرارداد، برای اتصال ابزارهای پنوماتیک موجود به سیستم‌های کنترل الکترونیکی.',
      en: '120 pressure-to-current converters in a single contract, connecting existing pneumatic instruments to electronic control systems.',
    },
  },
  {
    id: 'p092', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1396, productCategory: 'excitation-governor',
    title: { fa: '۴۰ واحد کنترل تحریک موتور سنکرون ۳٫۵ مگاواتی', en: '40 excitation control units for 3.5 MW synchronous motors' },
  },
  {
    id: 'p093', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1396, productCategory: 'flame-detection',
    title: { fa: 'تأمین رله‌ی شعله همراه با چشم الکترونیکی', en: 'Flame relay with electronic flame scanner' },
  },
  {
    id: 'p094', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1396, productCategory: 'flame-detection',
    title: { fa: 'رله‌ی شعله و سنسور میله‌ای (Flame Rod)', en: 'Flame relay and flame rod' },
  },
  {
    id: 'p095', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1396, productCategory: 'ignition',
    title: { fa: 'تأمین ۵ شمع جرقه‌زن با الکترود بلند', en: 'Five long-electrode spark plugs' },
  },
  {
    id: 'p096', cities: ['masjed-soleyman'], facility: 'hydro', sector: 'power', yearSH: 1396, productCategory: 'power-supplies',
    title: { fa: 'تأمین، نصب و راه‌اندازی دو دستگاه کنترلر هوشمند شارژر باتری SBC-620', en: 'Two SBC-620 smart battery charger controllers: supply, installation and commissioning' },
  },
  {
    id: 'p097', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1396, productCategory: 'flame-detection',
    title: { fa: 'تأمین ۵ عدد شعله‌یاب', en: 'Five flame detectors' },
  },
  {
    id: 'p098', cities: ['qazvin'], facility: 'thermal', sector: 'power', yearSH: 1397, productCategory: 'ignition',
    title: { fa: 'طراحی و ساخت سیستم جرقه‌زن توربین گازی نیروگاه', en: 'Gas turbine ignition system for a power plant' },
  },
  {
    id: 'p099', cities: ['qazvin'], facility: 'thermal', sector: 'power', yearSH: 1396, productCategory: 'ignition',
    title: { fa: 'طراحی و ساخت کویل سیستم جرقه‌زن توربین گازی', en: 'Ignition coil for a gas turbine' },
  },
  {
    id: 'p100', cities: ['qazvin'], facility: 'thermal', sector: 'power', yearSH: 1396, productCategory: 'ignition',
    title: { fa: 'طراحی و ساخت واحد جرقه‌زن Hi-Energy', en: 'High-energy ignition unit' },
  },
  {
    id: 'p101', cities: ['loshan'], facility: 'thermal', sector: 'power', yearSH: 1396, productCategory: 'power-supplies',
    title: { fa: 'سیستم کنترلر شارژر باتری', en: 'Battery charger controller' },
  },
  {
    id: 'p102', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1397, productCategory: 'flame-detection',
    title: { fa: 'سنسور میله‌ای شعله (Flame Rod)', en: 'Flame rod sensor' },
  },
  {
    id: 'p103', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1397, productCategory: 'ignition',
    title: { fa: 'جرقه‌زن سیار پیش‌گرمکن‌های واحد نمک‌زدایی', en: 'Portable igniter for desalting-unit preheaters' },
  },
  {
    id: 'p104', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1396, productCategory: 'ignition',
    title: { fa: 'طراحی و تولید کابل جرقه‌زن توربین گازی', en: 'Gas turbine ignition cables' },
  },
  {
    id: 'p105', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1397, productCategory: 'flame-detection',
    title: { fa: 'طراحی و تولید ۱۴ دستگاه شعله‌یاب UV توربین گازی', en: 'Fourteen UV flame detectors for gas turbines' },
  },
  {
    id: 'p106', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1397, productCategory: 'instrumentation',
    title: { fa: 'ثبات بدون کاغذ و مبدل هوا به جریان', en: 'Paperless recorder and pneumatic-to-current converter' },
  },
  {
    id: 'p107', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1397, productCategory: 'turbine-control',
    title: { fa: 'سیستم کنترل توربین گازی صنعتی', en: 'Industrial gas turbine control system' },
  },
  {
    id: 'p108', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1397, productCategory: 'turbine-control',
    title: { fa: 'سیستم کنترل و پایش ارتعاش توربین گازی صنعتی', en: 'Control and vibration monitoring for an industrial gas turbine' },
  },
  {
    id: 'p109', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1397, productCategory: 'power-supplies',
    title: { fa: 'شارژر باتری 24V DC / 100A توربین گازی', en: '24 V DC / 100 A battery charger for a gas turbine' },
  },
  {
    id: 'p110', cities: ['gachsaran'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1398, productCategory: 'ignition',
    title: { fa: 'کابل و شمع جرقه‌زن توربین گازی', en: 'Gas turbine ignition leads and plugs' },
  },
  {
    id: 'p111', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1398, productCategory: 'instrumentation',
    title: { fa: 'ساخت ۲۰ عدد مبدل هوا به جریان (P/I)', en: 'Twenty pneumatic-to-current (P/I) converters' },
  },
  {
    id: 'p112', cities: ['tehran'], facility: 'epc', sector: 'industry', yearSH: 1398, productCategory: 'alarm-safety',
    title: { fa: 'ساخت ۱۵ دستگاه پنجره‌ی آلارم', en: 'Fifteen alarm windows' },
  },
  {
    id: 'p113', cities: ['loshan'], facility: 'thermal', sector: 'power', yearSH: 1398, productCategory: 'power-supplies',
    title: { fa: 'سیستم هوشمند شارژر باتری', en: 'Smart battery charger system' },
  },
  {
    id: 'p114', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1399, productCategory: 'instrumentation',
    title: { fa: 'مبدل فشار به جریان', en: 'Pressure-to-current (P/I) converter' },
  },
  {
    id: 'p115', cities: ['tehran'], facility: 'epc', sector: 'industry', yearSH: 1399, productCategory: 'legacy-renewal',
    title: { fa: 'کارت الکترونیکی سیستم آلارم', en: 'Alarm system electronic card' },
  },
  {
    id: 'p116', cities: ['ahvaz'], facility: 'epc', sector: 'oil', yearSH: 1399, productCategory: 'ignition',
    title: { fa: 'سیستم کامل جرقه‌زن فلر (Pulse Ignition Probe)', en: 'Complete flare ignition system (pulse ignition probe)' },
  },
  {
    id: 'p117', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1400, productCategory: 'power-supplies',
    title: { fa: 'سیستم شارژر باتری سوئیچینگ 24V / 20A', en: '24 V / 20 A switching battery charger' },
  },
  {
    id: 'p118', cities: ['tehran'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1400, productCategory: 'ignition',
    title: { fa: 'واحد تحریک جرقه‌زن (Ignition Exciter) توربین گازی صنعتی', en: 'Ignition exciter for an industrial gas turbine' },
  },
  {
    id: 'p119', cities: ['sirri'], facility: 'offshore', sector: 'oil', yearSH: 1400, productCategory: 'turbine-control', highlight: true,
    title: { fa: 'سنسور بدون تماس موقعیت پره‌های راهنمای ورودی توربین گازی', en: 'Contactless inlet guide vane position sensor for a gas turbine' },
    summary: {
      fa: 'سنسور موقعیت بدون تماس که درون جک هیدرولیک و زیر فشار ۶۰ بار نصب می‌شود و در دمای بالا دقت و سرعت لازم برای کنترل پره‌های راهنمای ورودی توربین را دارد.',
      en: "A contactless position sensor mounted inside the hydraulic actuator at 60 bar, with the accuracy and response needed to control the turbine's inlet guide vanes at high temperature.",
    },
  },
  {
    id: 'p120', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1399, productCategory: 'turbine-control',
    title: { fa: 'واحدهای کنترل سرعت و دمای توربین گازی صنعتی، طی سه قرارداد', en: 'Speed and temperature control units for industrial gas turbines, three contracts' },
  },
  {
    id: 'p121', cities: ['masjed-soleyman'], facility: 'hydro', sector: 'power', yearSH: 1400, productCategory: 'power-supplies',
    title: { fa: 'به‌روزرسانی سیستم کنترل شارژرهای باتری سد و نیروگاه آبی', en: 'Upgrade of battery charger control systems at a dam and hydroelectric plant' },
  },
  {
    id: 'p122', cities: ['bojnurd'], facility: 'petrochemical', sector: 'industry', yearSH: 1400, productCategory: 'power-supplies',
    title: { fa: 'به‌روزرسانی سیستم کنترل شارژر باتری', en: 'Battery charger control system upgrade' },
  },
  {
    id: 'p123', cities: ['bojnurd'], facility: 'petrochemical', sector: 'industry', yearSH: 1400, productCategory: 'excitation-governor',
    title: { fa: 'به‌روزرسانی سیستم تحریک ژنراتور', en: 'Generator excitation system upgrade' },
  },
  {
    id: 'p124', cities: ['loshan'], facility: 'thermal', sector: 'power', yearSH: 1400,
    title: { fa: 'به‌روزرسانی سیستم کنترل کلرزنی', en: 'Chlorination control system upgrade' },
  },
  {
    id: 'p125', cities: ['loshan'], facility: 'thermal', sector: 'power', yearSH: 1400, productCategory: 'flame-detection',
    title: { fa: 'تجهیزات شعله‌یاب و جرقه‌زن توربین گازی', en: 'Flame detection and ignition equipment for gas turbines' },
  },
  {
    id: 'p126', cities: ['lavasan'], facility: 'hydro', sector: 'power', yearSH: 1400, productCategory: 'dam-power-infrastructure',
    title: { fa: 'به‌روزرسانی سیستم کنترل دریچه‌های انتقال آب از سد به کلان‌شهر', en: 'Control system upgrade for water-transfer gates from a dam to a metropolitan area' },
  },
  {
    id: 'p127', cities: ['lavasan'], facility: 'hydro', sector: 'power', yearSH: 1400, productCategory: 'instrumentation',
    title: { fa: 'سیستم اندازه‌گیری ۳۲ کاناله‌ی دمای ژنراتور', en: '32-channel generator temperature measurement system' },
  },
  {
    id: 'p128', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1400, productCategory: 'flame-detection',
    title: { fa: 'تجهیزات سیستم شعله‌یاب، طی دو قرارداد', en: 'Flame detection system equipment, two contracts' },
  },
  {
    id: 'p129', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1400, productCategory: 'alarm-safety',
    title: { fa: 'سیستم اعلام‌گر آلارم توربین گازی', en: 'Gas turbine alarm annunciator system' },
  },
  {
    id: 'p130', cities: ['ahvaz'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1400, productCategory: 'turbine-control',
    title: { fa: 'ساخت نمایشگر سرعت توربین', en: 'Turbine speed indicator' },
  },
  {
    id: 'p131', cities: ['bojnurd'], facility: 'petrochemical', sector: 'industry', yearSH: 1401, productCategory: 'power-supplies',
    title: { fa: 'تکمیل به‌روزرسانی سیستم کنترل شارژر باتری', en: 'Completion of the battery charger control system upgrade' },
  },
  {
    id: 'p132', cities: ['karaj'], facility: 'rail', sector: 'industry', yearSH: 1401, productCategory: 'power-supplies',
    title: { fa: 'ساخت دو مدل مبدل و درایور سوئیچینگ ویژه', en: 'Two models of special switching converters and drivers' },
  },
  {
    id: 'p133', cities: ['karaj'], facility: 'rail', sector: 'industry', yearSH: 1401, productCategory: 'excitation-governor', highlight: true,
    title: { fa: 'سیستم تحریک ژنراتور لوکوموتیو', en: 'Locomotive traction-generator excitation system' },
    summary: {
      fa: 'طراحی و ساخت سیستم تحریک ژنراتور کشش لوکوموتیو، همراه با مبدل‌ها و درایورهای سوئیچینگ ویژه.',
      en: 'Excitation system for a locomotive traction generator, designed and built together with special switching converters and drivers.',
    },
  },
  {
    id: 'p134', cities: ['gachsaran'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1401, productCategory: 'instrumentation',
    title: { fa: 'درایور ثبات نموداری (Chart Driver)', en: 'Chart recorder driver' },
  },
  {
    id: 'p135', cities: ['gachsaran'], facility: 'oil-gas-operator', sector: 'oil', yearSH: 1401, productCategory: 'instrumentation',
    title: { fa: 'تأمین تجهیزات ابزار دقیق ساخت هورپندار', en: 'Supply of Hoorpendar-made instrumentation' },
  },
  {
    id: 'p136', cities: ['sarakhs'], facility: 'refinery', sector: 'oil', yearSH: 1401, productCategory: 'instrumentation',
    title: { fa: 'مبدل فشار به جریان', en: 'Pressure-to-current (P/I) converter' },
  },
  {
    id: 'p137', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1401, productCategory: 'power-supplies',
    title: { fa: 'کارت شارژ باتری', en: 'Battery charging card' },
  },
  {
    id: 'p138', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', yearSH: 1401, productCategory: 'turbine-control',
    title: { fa: 'قطعات ابزار دقیق توربین گازی صنعتی', en: 'Instrumentation parts for an industrial gas turbine' },
  },

  // Notable projects without a contract row.
  {
    id: 'x01', cities: ['manjil', 'poldasht', 'marvdasht'], facility: 'hydro', sector: 'power', productCategory: 'instrumentation',
    title: { fa: 'سیستم جامع جمع‌آوری خودکار و مانیتورینگ اطلاعات سه سد و نیروگاه آبی با WinCC به‌صورت DCS در شبکه‌ی Modbus', en: 'Automatic data acquisition and monitoring for three dams and hydroelectric plants (WinCC, DCS over Modbus)' },
  },
  {
    id: 'x02', cities: ['tehran'], facility: 'meteorology', sector: 'industry', highlight: true,
    title: { fa: 'شبکه‌ی جمع‌آوری و سوئیچینگ داده‌ی مراکز هواشناسی با ارتباط هم‌زمان بیش از ۲۵۶ ایستگاه', en: 'Meteorological data collection and switching network linking more than 256 stations at once' },
    summary: {
      fa: 'شبکه‌ی جمع‌آوری و سوئیچینگ داده برای مراکز هواشناسی، با ارتباط هم‌زمان و Online بیش از ۲۵۶ ایستگاه.',
      en: 'Data collection and switching network for meteorological centers, with more than 256 stations connected online at the same time.',
    },
  },
  {
    id: 'x03', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil', productCategory: 'instrumentation',
    title: { fa: 'مانیتورینگ حدود ۳۰ موتور سنکرون پرقدرت و فیدرهای ایستگاه‌های پمپاژ در چهار سایت دور از هم', en: 'Monitoring of about 30 high-power synchronous motors and feeders at four remote pumping sites' },
  },
  {
    id: 'x04', cities: ['ahvaz'], facility: 'steel', sector: 'industry', productCategory: 'instrumentation',
    title: { fa: 'مانیتورینگ خط ریخته‌گری SLAB یک مجتمع فولاد با PLC ساخت هورپندار و نرم‌افزار اختصاصی', en: 'Slab casting line monitoring for a steel plant, with a Hoorpendar-built PLC and custom software' },
  },
  {
    id: 'x05', cities: ['bandar-abbas'], facility: 'refinery', sector: 'oil', productCategory: 'instrumentation',
    title: { fa: 'نرم‌افزار مانیتورینگ Redundant طرح نوسازی یک پالایشگاه گاز', en: 'Redundant monitoring software for a gas refinery upgrade' },
  },
  {
    id: 'x06', cities: ['mahabad'], facility: 'water', sector: 'power', productCategory: 'instrumentation',
    title: { fa: 'مانیتورینگ تصفیه‌خانه و تلمبه‌خانه‌های آب شهری', en: 'Monitoring of a water treatment plant and municipal pumping stations' },
  },
  {
    id: 'x07', cities: ['karaj'], facility: 'hydro', sector: 'power', productCategory: 'dam-power-infrastructure',
    title: { fa: 'کنترل خودکار و از راه دور دبی آب انتقالی از سد با PLC تله‌مکانیک از فاصله‌ی حدود ۳ کیلومتر', en: 'Remote automatic control of water flow from a dam over about 3 km, with telemechanical PLCs' },
  },
  {
    id: 'x08', cities: ['lavasan'], facility: 'hydro', sector: 'power', productCategory: 'excitation-governor',
    title: { fa: 'کنترل اتوماتیک ولتاژ تحریک استاتیک ژنراتورهای ۱۲۰۰ آمپری', en: 'Automatic voltage control for 1200 A static generator excitation' },
  },
  {
    id: 'x09', cities: [], facility: 'epc', sector: 'industry',
    title: { fa: 'درایور موتورهای الکتریکی ۲۵ کیلوواتی لوکوموتیوهای حفاری تونل با کنترل سرعت و حفاظت سریع جریان', en: 'Drives for 25 kW electric motors of tunnelling locomotives, with speed control and fast current protection' },
  },
  {
    id: 'x10', cities: [], facility: 'epc', sector: 'industry',
    title: { fa: 'کنترل جریان الکترودهای کوره‌ی قوس الکتریکی ۵۰۰۰ آمپری', en: 'Electrode current control for a 5000 A electric arc furnace' },
  },
  {
    id: 'x11', cities: ['andimeshk'], facility: 'hydro', sector: 'power', productCategory: 'instrumentation',
    title: { fa: 'اندازه‌گیری، مانیتورینگ و ثبت بلادرنگ پارامترهای الکتریکی ۸ واحد نیروگاه آبی با نقش کنترل فرکانس شبکه', en: 'Real-time measurement and recording of electrical parameters for eight hydro units that regulate grid frequency' },
  },
  {
    id: 'x12', cities: ['karaj'], facility: 'hydro', sector: 'power', productCategory: 'dam-power-infrastructure',
    title: { fa: 'اندازه‌گیری و ثبت خودکار داده‌ی حدود ۱۰۰۰ سنسور بدنه‌ی سد', en: 'Automatic data logging from about 1000 dam-body sensors' },
  },
  {
    id: 'x13', cities: ['tehran'], facility: 'building', sector: 'industry',
    title: { fa: 'کنترل مرکزی نورپردازی LED یک ساختمان اداری و تنظیم روشنایی آمفی‌تئاتر و لابی', en: 'Central LED lighting control for an office building, including auditorium and lobby' },
  },
  {
    id: 'x14', cities: ['tehran'], facility: 'meteorology', sector: 'industry', productCategory: 'instrumentation',
    title: { fa: 'سیستم تست و مانیتورینگ دیجیتال ۶۴ کاناله‌ی خطوط ارسال و دریافت مراکز هواشناسی', en: '64-channel digital test and monitoring system for meteorological send/receive lines' },
  },
  {
    id: 'x15', cities: [], facility: 'mining', sector: 'industry',
    title: { fa: 'کنترل جرثقیل معدنی ۲۵ تنی با وزن‌سنجی Online و کنترل سرعت حرکت', en: 'Control of a 25-tonne mining crane with online load weighing and speed control' },
  },
  {
    id: 'x16', cities: ['naqadeh'], facility: 'water', sector: 'power', productCategory: 'dam-power-infrastructure',
    title: { fa: 'سنجش پیوسته‌ی دبی و ارتفاع آب کانال آب‌آور و ارتفاع دریاچه‌ی سد، با انتقال داده به دفتر مرکزی', en: 'Continuous flow and level measurement for a feeder canal and dam reservoir, with data transmission to head office' },
  },
  {
    id: 'x17', cities: ['rasht'], facility: 'water', sector: 'power',
    title: { fa: 'شبکه‌ی فیبر نوری تأسیسات آب منطقه‌ای و اتصال نیروگاه آبی و مدیریت سدها', en: 'Fiber-optic network linking regional water facilities, a hydroelectric plant and dam management' },
  },
  {
    id: 'x18', cities: ['manjil'], facility: 'hydro', sector: 'power', productCategory: 'alarm-safety',
    title: { fa: 'سیستم اعلام و اطفای حریق CO2 سد و نیروگاه آبی با سه مرکز کنترل', en: 'CO2 fire detection and suppression for a dam and hydroelectric plant, with three control centers' },
  },
  {
    id: 'x19', cities: ['aghajari'], facility: 'oil-gas-station', sector: 'oil',
    title: { fa: 'طراحی، نصب و آزمایش رله‌های حفاظتی ترانسفورماتور، پست، موتور و ژنراتور', en: 'Design, installation and testing of transformer, substation, motor and generator protection relays' },
  },

  // Dam level meters.
  ...(['tabriz', 'marvdasht', 'naqadeh', 'chadegan', 'jiroft'] as const).map(
    (city, i): Project => ({
      id: `l0${i + 1}`, cities: [city], facility: 'hydro', sector: 'power', productCategory: 'dam-power-infrastructure',
      title: { fa: 'سیستم ارتفاع‌سنج دیجیتال سد', en: 'Digital dam level meter' },
    }),
  ),
];

/** Number of contracts in the resume table (p001–p138). */
export const contractCount = projects.filter((p) => p.id.startsWith('p')).length;
