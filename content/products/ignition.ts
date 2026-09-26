import type { Product } from '../types';
import { apps, img, sheet } from './shared';

export const ignition: Product[] = [
  {
    slug: 'hi-energy-ignition-unit',
    category: 'ignition',
    model: 'IGRU-200',
    title: { fa: 'واحد جرقه‌زن پرانرژی (Hi-Energy) توربین گازی', en: 'High-energy gas turbine ignition unit' },
    summary: {
      fa: 'مشعل توربین‌های گازی صنعتی را با جرقه‌ی پرانرژی روشن می‌کند و درون جعبه‌ی ضدانفجار نصب می‌شود.',
      en: 'Lights industrial gas turbine combustors with a high-energy spark, and is housed in an explosion-proof enclosure.',
    },
    features: {
      fa: ['ورودی 24، 48، 110 یا 220V، DC یا AC', 'خروجی 2000Vdc با انرژی ۱۲ ژول', '۳ تا ۵ جرقه در ثانیه', 'جعبه‌ی ضدانفجار؛ کار تا دمای 85°C'],
      en: ['24, 48, 110 or 220 V input, AC or DC', '2000 V DC output at 12 J', '3 to 5 sparks per second', 'Explosion-proof enclosure; up to 85 °C'],
    },
    specs: [
      { label: { fa: 'خروجی', en: 'Output' }, value: '2000 V DC · 12 J' },
      { label: { fa: 'نرخ جرقه', en: 'Spark rate' }, value: '3 – 5 /s' },
      { label: { fa: 'دمای کار', en: 'Operating temperature' }, value: 'up to 85 °C' },
    ],
    applications: [apps.gasTurbine],
    images: [img('ignition-unit', 'واحد جرقه‌زن در جعبه‌ی ضدانفجار', 'Ignition unit in explosion-proof enclosure')],
    relatedProjectIds: ['p100', 'p098'],
  },
  {
    slug: 'hi-energy-ignition-exciter',
    category: 'ignition',
    model: 'IGN-2KRJ',
    title: { fa: 'اکسایتر جرقه‌ی پرانرژی توربین و بویلر', en: 'High-energy ignition exciter for turbines and boilers' },
    summary: {
      fa: 'جرقه‌ی ولتاژبالا و پرانرژی می‌سازد که حدود سه بار در ثانیه تکرار می‌شود. روی شمع‌های مخصوص این سیستم، جرقه شبیه شعله است و گاز و گازوئیل را سریع روشن می‌کند. جعبه، ابعاد و کانکتورها را می‌توان مطابق محل نصب تغییر داد و در صورت نیاز دستگاه را در جعبه‌ی ضدانفجار Exd قرار داد.',
      en: 'Produces a high-voltage, high-energy spark about three times a second. On the matching plugs the spark looks like a flame and lights gas and diesel fuel quickly. The box, size and connectors can be changed to suit the installation, and the unit can be fitted in an Exd explosion-proof enclosure.',
    },
    features: {
      fa: ['ورودی 230/115Vac یا +24Vdc', 'خروجی 2000Vdc، سه جرقه در ثانیه', 'بدنه‌ی فلزی پرشده با رزین'],
      en: ['230/115 V AC or +24 V DC input', '2000 V DC pulsed output, 3 per second', 'Resin-filled metal housing'],
    },
    applications: [apps.gasTurbine, apps.boiler],
    images: [img('ignition-exciter', 'اکسایتر جرقه IGN-2KRJ', 'IGN-2KRJ ignition exciter')],
    catalog: [sheet('ign-2krj-sheet', 'سیستم جرقه‌ی پرانرژی IGN-2KRJ', 'IGN-2KRJ high-energy ignition system')],
    relatedProjectIds: ['p118'],
  },
  {
    slug: 'turbine-ignition-exciter-18kv',
    category: 'ignition',
    model: 'IGN-SL10',
    title: { fa: 'اکسایتر جرقه‌زن ۱۸ کیلوولت توربین گازی', en: '18 kV gas turbine ignition exciter' },
    summary: {
      fa: 'این اکسایتر ولتاژ ۱۸ کیلوولت را برای جرقه‌زنی توربین‌های گازی صنعتی تأمین می‌کند و بدنه‌اش کاملاً با رزین پر شده است.',
      en: 'Supplies 18 kV for igniting industrial gas turbines, in a fully potted housing.',
    },
    features: {
      fa: ['ورودی 24Vdc', 'ولتاژ خروجی 18kV', 'جرقه‌ی پرانرژی، ۳ تا ۴ بار در ثانیه'],
      en: ['24 V DC input', '18 kV output', 'High-energy spark, 3 to 4 per second'],
    },
    specs: [
      { label: { fa: 'ورودی', en: 'Input' }, value: '24 V DC' },
      { label: { fa: 'خروجی', en: 'Output' }, value: '18 kV' },
    ],
    applications: [apps.gasTurbine],
    images: [img('ignition-exciter-18kv', 'اکسایتر جرقه‌زن ۱۸ کیلوولت', '18 kV ignition exciter')],
    catalog: [sheet('ignition-exciter-24v', 'اکسایتر جرقه‌زن با ورودی 24Vdc', 'Ignition exciter with 24 V DC input')],
  },
  {
    slug: 'portable-igniter',
    category: 'ignition',
    model: 'HUP-18KD',
    title: { fa: 'جرقه‌زن قابل حمل مشعل', en: 'Portable burner igniter' },
    summary: {
      fa: 'با آن می‌توان مشعل کوره‌ها، بویلرها و پیش‌گرمکن‌ها را دستی روشن کرد. جرقه‌ی آن از نوع پرانرژی ضربه‌ای است و هر نوع سوختی را شعله‌ور می‌کند. دو نوع تغذیه دارد: نوع ارزان‌تر به برق شهر وصل می‌شود و نوع دیگر باتری قابل شارژ دارد که پس از شارژ کامل، یک روز کار می‌کند.',
      en: 'Used to light furnace, boiler and preheater burners by hand. Its high-energy pulsed spark lights any fuel. It comes in two versions: the lower-cost one runs from mains power, and the other has a rechargeable battery that lasts a working day on a full charge.',
    },
    features: {
      fa: [
        'تغذیه 220Vac یا باتری 24Vdc',
        'جرقه‌ی ۳ تا ۴ بار در ثانیه',
        'دسته‌ی ۱۰۰ سانتی‌متری با صفحه‌ی محافظ برگشت شعله که جایش روی دسته تنظیم می‌شود',
        'شمع دستگاه به‌راحتی باز و تعویض می‌شود',
      ],
      en: [
        '220 V AC or 24 V DC battery supply',
        '3 to 4 sparks per second',
        '100 cm lance with a flashback shield that slides to the position you need',
        'The plug is easy to remove and replace',
      ],
    },
    applications: [apps.boiler, apps.refinery],
    images: [img('portable-igniter', 'جرقه‌زن قابل حمل HUP-18KD', 'HUP-18KD portable igniter')],
    catalog: [sheet('portable-igniter-sheet', 'جرقه‌زن قابل حمل 220Vac و 24Vdc', 'Portable spark igniter, 220 V AC and 24 V DC')],
    relatedProjectIds: ['p103'],
  },
  {
    slug: 'ignition-transformer',
    category: 'ignition',
    model: 'HSB-169',
    title: { fa: 'ترانسفورماتور جرقه', en: 'Ignition transformer' },
    summary: {
      fa: 'برای مشعل‌های کوره و بویلر جرقه‌ی پیوسته تولید می‌کند و ولتاژ خروجی آن 15000Vac است.',
      en: 'Gives furnace and boiler burners a continuous spark from a 15,000 V AC output.',
    },
    features: {
      fa: ['اولیه 115Vac', 'ثانویه 15000Vac', 'جرقه‌ی پیوسته'],
      en: ['115 V AC primary', '15,000 V AC secondary', 'Continuous spark'],
    },
    specs: [{ label: { fa: 'ولتاژ', en: 'Voltage' }, value: '115 V AC → 15 kV AC' }],
    applications: [apps.boiler],
    images: [img('ignition-transformer', 'ترانسفورماتور جرقه', 'Ignition transformer')],
    catalog: [sheet('hsb-169-sheet', 'ترانسفورماتور جرقه HSB-169', 'HSB-169 ignition transformer')],
  },
  {
    slug: 'ignition-cables',
    category: 'ignition',
    model: 'IGRC-202 · IGSC-SL18 · IGNC-W72 · IGNC-RS75',
    title: { fa: 'کابل‌های جرقه‌زن توربین', en: 'Turbine ignition leads' },
    summary: {
      fa: 'کابل‌های ولتاژبالای جرقه‌زن را برای انواع توربین گازی صنعتی، در نوع زره‌دار و سیلیکونی و مطابق نمونه‌ی کارفرما می‌سازیم.',
      en: 'We make high-voltage ignition leads for a range of industrial gas turbines, in armoured and silicone versions, built to the customer’s sample.',
    },
    features: {
      fa: [
        'عایق 20kV، تحمل دما تا 250°C، زره فولاد زنگ‌نزن و اتصالات برنجی با آبکاری نیکل‌کروم',
        'کابل سیلیکونی ولتاژبالا تا 30kV',
        'IGRC-202 و IGSC-SL18: زره مقاوم و کابل ولتاژبالای مقاوم تا 200°C، برای جرقه‌ی پرانرژی',
        'IGNC-W72: زره فولاد زنگ‌نزن، مقاوم تا 180°C؛ در جعبه‌های پنج‌تایی',
        'IGNC-RS75: دوتکه با زره فولاد زنگ‌نزن و تحمل 180°C؛ طول هر تکه مطابق نیاز انتخاب می‌شود و روکش تکه‌ی کوتاه‌تر انعطاف بیشتری دارد تا در جعبه جا شود',
      ],
      en: [
        '20 kV insulation, up to 250 °C, stainless steel armour and nickel-chrome plated brass fittings',
        'High-voltage silicone lead up to 30 kV',
        'IGRC-202 and IGSC-SL18: rugged armour and a high-voltage core rated to 200 °C, for high-energy ignition',
        'IGNC-W72: stainless steel armour, rated to 180 °C; packed five to a box',
        'IGNC-RS75: two-piece, stainless steel armour, rated to 180 °C; each length is cut to order and the shorter piece is more flexible so it fits inside the box',
      ],
    },
    applications: [apps.gasTurbine],
    images: [img('ignition-cable', 'کابل جرقه‌زن توربین', 'Turbine ignition lead')],
    catalog: [
      sheet('cable-igrc-202', 'کابل جرقه‌زن IGRC-202', 'IGRC-202 ignition lead'),
      sheet('cable-igsc-sl18', 'کابل جرقه‌زن IGSC-SL18', 'IGSC-SL18 ignition lead'),
      sheet('cable-ignc-w72', 'کابل جرقه‌زن IGNC-W72', 'IGNC-W72 ignition lead'),
      sheet('cable-ignc-rs75', 'کابل جرقه‌زن دوتکه IGNC-RS75', 'IGNC-RS75 two-piece ignition lead'),
    ],
    relatedProjectIds: ['p104', 'p110'],
  },
  {
    slug: 'spark-plugs',
    category: 'ignition',
    model: 'IGRP-120 · HED614 · HSR514 · HNR-100 · HKR-600',
    title: { fa: 'شمع‌های جرقه‌زن توربین و کوره', en: 'Turbine and furnace spark plugs' },
    summary: {
      fa: 'شمع جرقه‌زن برای توربین‌های گازی، کوره‌ها و بویلرها می‌سازیم، از جمله انواع پرانرژی (Hi-Energy) و الکترودبلند.',
      en: 'We make spark plugs for gas turbines, furnaces and boilers, including high-energy and long-electrode versions.',
    },
    features: {
      fa: [
        'IGRP-120: فولاد زنگ‌نزن، مقاوم تا 1250°C؛ عایق ویژه با مقاومت داخلی، پوسته‌ی عایق بسیار نازک و بدنه از آلیاژ مخصوص',
        'HED614: جرقه تا 20kV، با پوسته‌ی عایق بسیار نازک؛ HSR514: تا 3kV',
        'HNR-100: شمع بویلر برای جرقه‌ی پرانرژی ضربه‌ای؛ عایق آن مقاومت داخلی دارد و حرارت بسیار زیاد را تحمل می‌کند',
        'HKR-600: شمع الکترودبلند کوره تا 15kV؛ فاصله‌ی هوایی جرقه با پیچ و مهره‌ی قفل‌کن دست‌کم ۲۵ میلی‌متر تنظیم می‌شود',
      ],
      en: [
        'IGRP-120: stainless steel, rated to 1250 °C; special resistive insulator, very thin insulating shells and a special alloy body',
        'HED614: sparks up to 20 kV, with very thin insulating shells; HSR514: up to 3 kV',
        'HNR-100: boiler plug for high-energy pulsed ignition, with a resistive insulator that withstands very high heat',
        'HKR-600: long-electrode furnace plug up to 15 kV; the spark gap adjusts by at least 25 mm with a lock nut',
      ],
    },
    applications: [apps.gasTurbine, apps.boiler],
    images: [
      img('spark-plug', 'شمع جرقه‌زن HED614', 'HED614 spark plug'),
      img('spark-plug-2', 'شمع جرقه‌زن HSR514', 'HSR514 spark plug'),
      img('spark-plug-3', 'شمع جرقه‌زن توربین', 'Turbine spark plug'),
    ],
    catalog: [
      sheet('plug-hsr514', 'شمع جرقه‌زن توربین HSR-514', 'HSR-514 turbine spark plug'),
      sheet('plug-hed614', 'شمع جرقه‌زن توربین HED-614', 'HED-614 turbine spark plug'),
      sheet('plug-igrp120', 'شمع جرقه‌زن توربین IGRP-120', 'IGRP-120 turbine spark plug'),
      sheet('plug-hnr100', 'شمع جرقه‌زن بویلر HNR-100', 'HNR-100 boiler spark plug'),
      sheet('plug-hkr600', 'شمع جرقه‌زن کوره HKR-600 با فاصله‌ی جرقه‌ی قابل تنظیم', 'HKR-600 furnace spark plug with adjustable gap'),
    ],
    relatedProjectIds: ['p095', 'p110'],
  },
  {
    slug: 'flare-ignition-system',
    category: 'ignition',
    title: { fa: 'سامانه‌ی کامل جرقه‌زن فلر (Pulse Ignition Probe)', en: 'Complete flare ignition system (pulse ignition probe)' },
    summary: {
      fa: 'این سامانه‌ی پالسی پایلوت فلر را روشن می‌کند و اگر خاموش شود، دوباره روشنش می‌کند. تابلوی کنترل هم همراه آن تحویل می‌شود.',
      en: 'This pulse system lights the flare pilot and relights it if it goes out. It is supplied with its control panel.',
    },
    features: {
      fa: ['پروب جرقه‌زن پالسی', 'تابلوی کنترل و فرمان از راه دور', 'در صورت نیاز در جعبه‌ی ضدانفجار'],
      en: ['Pulse ignition probe', 'Control panel with remote command', 'Available in explosion-proof enclosures'],
    },
    applications: [apps.flare, apps.refinery],
    images: [],
    relatedProjectIds: ['p116'],
  },
];
