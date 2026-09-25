export type L = { fa: string; en: string };

export type Sector = 'oil' | 'power' | 'industry';

export type FacilityKey =
  | 'oil-gas-operator'
  | 'oil-gas-station'
  | 'offshore'
  | 'refinery'
  | 'hydro'
  | 'thermal'
  | 'water'
  | 'petrochemical'
  | 'steel'
  | 'rail'
  | 'mining'
  | 'municipal'
  | 'building'
  | 'research'
  | 'epc'
  | 'meteorology';

export type ProductCategorySlug =
  | 'excitation-governor'
  | 'flame-detection'
  | 'ignition'
  | 'turbine-control'
  | 'power-supplies'
  | 'alarm-safety'
  | 'instrumentation'
  | 'dam-power-infrastructure'
  | 'legacy-renewal';

export type City = {
  id: string;
  name: L;
  province: L;
  lat: number;
  lng: number;
  /** Nudges the map label for cities that sit close together. */
  labelOffset?: [number, number];
};

// There is deliberately no field for a client name, contract number or amount (PLAN.md section 2).
export type Project = {
  /** 'p014' for row 14 of the resume table, 'x05' for notable projects listed separately. */
  id: string;
  title: L;
  /** Only for highlighted projects. */
  summary?: L;
  facility: FacilityKey;
  /** Map pins. Empty when the site is not known; such projects appear only in the list. */
  cities: string[];
  /** Solar Hijri year; the Gregorian year shown on English pages is yearSH + 621. */
  yearSH?: number;
  sector: Sector;
  productCategory?: ProductCategorySlug;
  /** Featured cards and the timeline. */
  highlight?: boolean;
  /** Repeat contracts with the same title are shown as one row with a count. */
  groupKey?: string;
};
