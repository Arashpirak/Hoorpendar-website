// Words that must never appear in published content (PLAN.md section 2).
// Spaces in a term also match a half-space (ZWNJ), a hyphen or no space at all.
// Terms match whole words only unless `partial` is set, and are case-insensitive unless `caseSensitive` is set.
//
// Categories:
//   policy  – sanctions, reverse engineering, "replacing foreign equipment"
//   client  – client and organization names
//   place   – named dams, power plants, refineries and sites (content/cities.ts is exempt)
//   brand   – third-party brands and model numbers

export type BlockTerm = {
  term: string;
  category: 'policy' | 'client' | 'place' | 'brand';
  caseSensitive?: boolean;
  partial?: boolean;
};

const t = (category: BlockTerm['category'], terms: string[], opts: Partial<BlockTerm> = {}) =>
  terms.map((term) => ({ term, category, ...opts }));

export const blocklist: BlockTerm[] = [
  ...t('policy', ['تحریم', 'مهندسی معکوس', 'تجهیزات خارجی', 'قطعات خارجی']),
  ...t('policy', ['sanction', 'embargo', 'reverse engineer', 'foreign equipment'], { partial: true }),

  ...t('client', [
    'مارون', 'نفت و گاز کارون', 'نفت و گاز آغاجاری', 'نفت و گاز گچساران',
    'مناطق نفت خیز', 'نفت فلات', 'نفت مناطق مرکزی', 'خطوط لوله و مخابرات',
    'آب منطقه ای تهران', 'آب منطقه ای گیلان', 'آب منطقه ای آذربایجان',
    'مدیریت تولید جنوب غرب', 'صندوق حمایت از پژوهشگران',
    'پتروشیمی پارس', 'پتروشیمی خراسان', 'مپنا',
    'تهران شینه', 'صنایع فلزی کوشا', 'ایران فنون', 'نواندیشان', 'دریلینگ',
    'شهرداری تهران', 'عمران کارکنان', 'چیتگر', 'بوستان نگین',
    'فولاد خوزستان', 'سرخون', 'سازمان هواشناسی', 'وزارت راه', 'تونل تلو', 'آب و فاضلاب اهواز',
    'دلتاکار', 'پارس تکنو',
    'Khuzestan Steel', 'Sarkhun', 'Sarkhoon', 'IRIMO', 'Telo Tunnel', 'Deltakar', 'Pars Techno',
    'Maroun', 'Marun', 'Karoon Oil', 'Karun Oil', 'Aghajari Oil', 'Gachsaran Oil',
    'NIOC', 'NISOC', 'ICOFC', 'IOOC', 'IOPTC', 'MAPNA',
    'Pars Petrochemical', 'Khorasan Petrochemical', 'Regional Water Company of',
    'Tehran Regional Water', 'Guilan Regional Water', 'Gilan Regional Water',
    'Tehran Shineh', 'Kousha', 'Novandishan', 'Drilling International', 'Chitgar',
  ]),

  ...t('place', [
    'لتیان', 'امیرکبیر', 'امیر کبیر', 'سفیدرود', 'سد ارس', 'نیروگاه ارس', 'سد دز', 'نیروگاه دز',
    'عباسپور', 'نیروگاه کلان', 'شهید رجایی', 'شهید رجائی', 'نیروگاه لوشان', 'نیروگاه آبادان',
    'هاشمیان', 'هاشمی نژاد', 'کوپال', 'نهند', 'درودزن', 'حسنلو', 'زاینده رود',
    'Latyan', 'Latian', 'Amirkabir', 'Amir Kabir', 'Sefidrud', 'Sefid Rud', 'Sefidroud',
    'Aras Dam', 'Aras Hydro', 'Aras power', 'Dez Dam', 'Dez power', 'Abbaspour', 'Karun-1',
    'Kalan power', 'Rajaee', 'Rajai', 'Loshan power', 'Abadan power', 'Hasheminejad',
    'Hashemi-Nejad', 'Kupal', 'Nahand', 'Doroodzan', 'Hasanlu', 'Zayandeh',
  ]),

  ...t('brand', [
    'هانیول', 'زیمنس', 'رولزرویس', 'رولز رویس', 'سولار', 'رستون', 'وستینگهاوس', 'رزمونت',
    'آلستوم', 'جی ای سی', 'جی ای', 'فوجی', 'پان آلارم', 'سولزر', 'ورکسپور', 'سینکرایت', 'بنتلی',
    'Honeywell', 'Siemens', 'Rolls-Royce', 'Rolls Royce', 'Solar Turbine', 'Ruston',
    'Westinghouse', 'Det-Tronics', 'Detronics', 'Bently', 'Rosemount', 'Alstom', 'Fuji',
    'PanAlarm', 'Pan Alarm', 'Ronan', 'Metrix', 'MAN Turbo', 'Sulzer', 'Werkspoor', 'Synchrite',
    'General Electric', 'ELIN', 'Toshiba', 'توشیبا',
  ]),
  ...t('brand', ['GE'], { caseSensitive: true }),
  ...t('brand', ['SGT-', 'RA-890', 'RA890', 'R4343', 'C7012', 'DT89', 'KRNW'], { partial: true }),
];
