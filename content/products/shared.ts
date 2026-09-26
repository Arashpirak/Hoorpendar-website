import type { CatalogImage, L } from '../types';
import { catalogSizes } from './catalog-sizes.generated';

// Generic application areas used across product pages. No brands.
export const apps = {
  gasTurbine: { fa: 'توربین‌های گازی صنعتی', en: 'Industrial gas turbines' },
  boiler: { fa: 'بویلر و کوره', en: 'Boilers and furnaces' },
  flare: { fa: 'فلر و مشعل پایلوت', en: 'Flares and pilot burners' },
  hydro: { fa: 'نیروگاه‌های آبی', en: 'Hydroelectric plants' },
  thermal: { fa: 'نیروگاه‌های حرارتی', en: 'Thermal power plants' },
  syncMotor: { fa: 'موتورهای سنکرون پرقدرت', en: 'High-power synchronous motors' },
  oilGas: { fa: 'کارخانه‌ها و ایستگاه‌های نفت و گاز', en: 'Oil and gas plants and stations' },
  compressor: { fa: 'ایستگاه‌های پمپاژ و تقویت فشار', en: 'Pumping and compression stations' },
  refinery: { fa: 'پالایشگاه و پتروشیمی', en: 'Refineries and petrochemical plants' },
  dam: { fa: 'سدها و ایستگاه‌های آب‌سنجی', en: 'Dams and hydrometric stations' },
  water: { fa: 'کانال‌ها، مخازن و تأسیسات آب', en: 'Canals, tanks and water utilities' },
  substation: { fa: 'پست‌های برق و سیستم‌های DC', en: 'Substations and DC systems' },
  controlRoom: { fa: 'اتاق‌های کنترل و تابلوهای فرمان', en: 'Control rooms and control panels' },
  industry: { fa: 'صنایع فولاد، ریلی و کارخانه‌ها', en: 'Steel, rail and manufacturing plants' },
  automation: { fa: 'تجهیزات اتوماسیون، PLC و HMI', en: 'Automation equipment, PLCs and HMIs' },
} satisfies Record<string, L>;

export const img = (name: string, fa: string, en: string) => ({ src: `/img/products/${name}.jpg`, alt: { fa, en } });

// A sheet from public/img/catalog, produced by scripts/prepare-catalog-images.mjs.
export const sheet = (name: string, fa: string, en: string): CatalogImage => {
  const size = catalogSizes[name];
  if (!size) throw new Error(`Unknown catalogue image: ${name}`);
  return { src: `/img/catalog/${name}.jpg`, alt: { fa, en }, width: size[0], height: size[1] };
};
