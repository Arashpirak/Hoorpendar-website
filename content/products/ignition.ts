import type { Product } from '../types';
import { apps, img } from './shared';

export const ignition: Product[] = [
  {
    slug: 'hi-energy-ignition-unit',
    category: 'ignition',
    model: 'IGRU-200',
    title: { fa: 'واحد جرقه‌زن پرانرژی (Hi-Energy) توربین گازی', en: 'High-energy gas turbine ignition unit' },
    summary: {
      fa: 'واحد جرقه‌زن پرانرژی برای توربین‌های گازی صنعتی، در جعبه‌ی ضدانفجار.',
      en: 'High-energy ignition unit for industrial gas turbines, in an explosion-proof enclosure.',
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
      fa: 'اکسایتر جرقه‌ی پرانرژی برای توربین‌ها و بویلرها، با بدنه‌ی فلزی که با رزین مخصوص پر شده است.',
      en: 'High-energy ignition exciter in a metal housing filled with special resin, for turbines and boilers.',
    },
    features: {
      fa: ['ورودی 230/115Vac یا +24Vdc', 'خروجی 2000Vdc، سه جرقه در ثانیه', 'بدنه‌ی فلزی پرشده با رزین'],
      en: ['230/115 V AC or +24 V DC input', '2000 V DC pulsed output, 3 per second', 'Resin-filled metal housing'],
    },
    applications: [apps.gasTurbine, apps.boiler],
    images: [img('ignition-exciter', 'اکسایتر جرقه IGN-2KRJ', 'IGN-2KRJ ignition exciter')],
    relatedProjectIds: ['p118'],
  },
  {
    slug: 'turbine-ignition-exciter-18kv',
    category: 'ignition',
    model: 'IGN-SL10',
    title: { fa: 'اکسایتر جرقه‌زن ۱۸ کیلوولت توربین گازی', en: '18 kV gas turbine ignition exciter' },
    summary: {
      fa: 'اکسایتر جرقه‌زن ولتاژبالا برای توربین‌های گازی صنعتی، با بدنه‌ی کاملاً پرشده از رزین.',
      en: 'Fully potted high-voltage ignition exciter for industrial gas turbines.',
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
  },
  {
    slug: 'portable-igniter',
    category: 'ignition',
    model: 'HUP-18KD',
    title: { fa: 'جرقه‌زن قابل حمل مشعل', en: 'Portable burner igniter' },
    summary: {
      fa: 'برای روشن کردن دستی مشعل کوره‌ها، بویلرها و پیش‌گرمکن‌ها؛ با دسته‌ی ۱۰۰ سانتی‌متری و محافظ در برابر برگشت شعله.',
      en: 'For lighting furnace, boiler and preheater burners by hand. 100 cm lance with flashback guard.',
    },
    features: {
      fa: ['تغذیه 220Vac یا 24Vdc', 'جرقه‌ی ۳ تا ۴ بار در ثانیه', 'دسته‌ی ۱۰۰ سانتی‌متری با محافظ برگشت شعله'],
      en: ['220 V AC or 24 V DC supply', '3 to 4 sparks per second', '100 cm lance with flashback guard'],
    },
    applications: [apps.boiler, apps.refinery],
    images: [img('portable-igniter', 'جرقه‌زن قابل حمل HUP-18KD', 'HUP-18KD portable igniter')],
    relatedProjectIds: ['p103'],
  },
  {
    slug: 'ignition-transformer',
    category: 'ignition',
    model: 'HSB-619',
    title: { fa: 'ترانسفورماتور جرقه', en: 'Ignition transformer' },
    summary: {
      fa: 'ترانسفورماتور جرقه برای مشعل‌های کوره و بویلر، با خروجی 15000Vac و جرقه‌ی پیوسته.',
      en: 'Ignition transformer with a 15,000 V AC output and continuous spark, for furnace and boiler burners.',
    },
    features: {
      fa: ['اولیه 115Vac', 'ثانویه 15000Vac', 'جرقه‌ی پیوسته'],
      en: ['115 V AC primary', '15,000 V AC secondary', 'Continuous spark'],
    },
    specs: [{ label: { fa: 'ولتاژ', en: 'Voltage' }, value: '115 V AC → 15 kV AC' }],
    applications: [apps.boiler],
    images: [img('ignition-transformer', 'ترانسفورماتور جرقه', 'Ignition transformer')],
  },
  {
    slug: 'ignition-cables',
    category: 'ignition',
    model: 'IGRC-202 · IGSC-SL18 · IGNC-W72',
    title: { fa: 'کابل‌های جرقه‌زن توربین', en: 'Turbine ignition leads' },
    summary: {
      fa: 'کابل‌های ولتاژبالای جرقه‌زن برای انواع توربین گازی صنعتی، در نوع زره‌دار و سیلیکونی و مطابق نمونه‌ی کارفرما.',
      en: 'High-voltage ignition leads for a range of industrial gas turbines, in armoured and silicone versions, built to the customer’s sample.',
    },
    features: {
      fa: [
        'عایق 20kV، تحمل دما تا 250°C، زره فولاد زنگ‌نزن و اتصالات برنجی با آبکاری نیکل‌کروم',
        'کابل سیلیکونی ولتاژبالا تا 30kV',
        'روکش تفلون با زره فولادی؛ و کابل دوتکه',
      ],
      en: [
        '20 kV insulation, up to 250 °C, stainless steel armour and nickel-chrome plated brass fittings',
        'High-voltage silicone lead up to 30 kV',
        'PTFE sheath with steel armour; two-piece versions',
      ],
    },
    applications: [apps.gasTurbine],
    images: [img('ignition-cable', 'کابل جرقه‌زن توربین', 'Turbine ignition lead')],
    relatedProjectIds: ['p104', 'p110'],
  },
  {
    slug: 'spark-plugs',
    category: 'ignition',
    model: 'IGRP-120 · HED614 · HSR514 · HNR-100 · HKR-600',
    title: { fa: 'شمع‌های جرقه‌زن توربین و کوره', en: 'Turbine and furnace spark plugs' },
    summary: {
      fa: 'شمع‌های جرقه‌زن برای توربین‌های گازی، کوره‌ها و بویلرها، از جمله انواع پرانرژی (Hi-Energy) و الکترودبلند.',
      en: 'Spark plugs for gas turbines, furnaces and boilers, including high-energy and long-electrode versions.',
    },
    features: {
      fa: [
        'IGRP-120: فولاد زنگ‌نزن، مقاوم تا 1250°C',
        'HED614: جرقه تا 20kV؛ HSR514: تا 3kV',
        'HNR-100 برای توربین یا کوره‌ی پرانرژی؛ HKR-600 برای کوره تا 15kV',
      ],
      en: [
        'IGRP-120: stainless steel, rated to 1250 °C',
        'HED614: sparks up to 20 kV; HSR514: up to 3 kV',
        'HNR-100 for high-energy turbines or furnaces; HKR-600 for furnaces up to 15 kV',
      ],
    },
    applications: [apps.gasTurbine, apps.boiler],
    images: [
      img('spark-plug', 'شمع جرقه‌زن HED614', 'HED614 spark plug'),
      img('spark-plug-2', 'شمع جرقه‌زن HSR514', 'HSR514 spark plug'),
      img('spark-plug-3', 'شمع جرقه‌زن توربین', 'Turbine spark plug'),
    ],
    relatedProjectIds: ['p095', 'p110'],
  },
  {
    slug: 'flare-ignition-system',
    category: 'ignition',
    title: { fa: 'سامانه‌ی کامل جرقه‌زن فلر (Pulse Ignition Probe)', en: 'Complete flare ignition system (pulse ignition probe)' },
    summary: {
      fa: 'سامانه‌ی جرقه‌زن پالسی که پایلوت فلر را روشن می‌کند و روشن نگه می‌دارد؛ همراه با تابلوی کنترل.',
      en: 'Pulse ignition system for lighting and relighting flare pilots, supplied with its control panel.',
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
