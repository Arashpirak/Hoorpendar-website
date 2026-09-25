import type { FacilityKey, L, ProductCategorySlug, Sector } from './types';

// Colors live in CSS (--oil, --power, --industry) so the map, lists and filters stay in sync.
export const sectors: Record<Sector, L> = {
  oil: { fa: 'نفت و گاز', en: 'Oil & Gas' },
  power: { fa: 'آب و نیرو', en: 'Water & Power' },
  industry: { fa: 'صنایع', en: 'Industry' },
};

// Generic client descriptions used instead of client names (PLAN.md section 2.4).
export const facilities: Record<FacilityKey, L> = {
  'oil-gas-operator': { fa: 'بهره‌بردار نفت و گاز', en: 'Oil & gas operator' },
  'oil-gas-station': {
    fa: 'ایستگاه پمپاژ، تقویت فشار و تزریق گاز',
    en: 'Pumping, compression & gas injection station',
  },
  offshore: { fa: 'تأسیسات نفتی فراساحل', en: 'Offshore oil facility' },
  refinery: { fa: 'پالایشگاه گاز', en: 'Gas refinery' },
  hydro: { fa: 'سد و نیروگاه آبی', en: 'Dam & hydroelectric plant' },
  thermal: { fa: 'نیروگاه حرارتی و سیکل ترکیبی', en: 'Thermal power plant' },
  water: { fa: 'تأسیسات آب', en: 'Water utility' },
  petrochemical: { fa: 'مجتمع پتروشیمی', en: 'Petrochemical complex' },
  steel: { fa: 'مجتمع فولاد', en: 'Steel plant' },
  rail: { fa: 'سازنده‌ی ناوگان ریلی', en: 'Rail vehicle manufacturer' },
  mining: { fa: 'معدن', en: 'Mining' },
  municipal: { fa: 'پروژه‌ی شهری', en: 'Municipal project' },
  building: { fa: 'ساختمان اداری', en: 'Office building' },
  research: { fa: 'پروژه‌ی پژوهشی', en: 'Research program' },
  epc: { fa: 'پیمانکار صنعتی', en: 'Industrial contractor' },
  meteorology: { fa: 'شبکه‌ی ملی داده‌های هواشناسی', en: 'National meteorological network' },
};

export const productCategories: Record<ProductCategorySlug, L> = {
  'excitation-governor': { fa: 'سیستم‌های تحریک و کنترل ژنراتور', en: 'Excitation & Governor Systems' },
  'flame-detection': { fa: 'آشکارسازی شعله و آتش', en: 'Flame & Fire Detection' },
  ignition: { fa: 'سامانه‌های جرقه‌زن', en: 'Ignition Systems' },
  'turbine-control': { fa: 'کنترل و ابزار دقیق توربین', en: 'Turbine Control & Sensors' },
  'power-supplies': { fa: 'شارژر باتری و منبع تغذیه', en: 'Battery Chargers & Power Supplies' },
  'alarm-safety': { fa: 'اعلام‌گر آلارم و ایمنی فرایند', en: 'Alarm Annunciators & Process Safety' },
  instrumentation: { fa: 'ابزار دقیق و مانیتورینگ فرایند', en: 'Instrumentation & Process Monitoring' },
  'dam-power-infrastructure': {
    fa: 'تجهیزات سد، نیروگاه و زیرساخت',
    en: 'Dam, Power Plant & Infrastructure',
  },
  'legacy-renewal': { fa: 'بازسازی و نوسازی سیستم‌های قدیمی', en: 'Legacy System Renewal' },
};
