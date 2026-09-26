import type { City } from './types';

// Map pins. Coordinates are the town centers; they are checked again when the map is built.
// This file is exempt from the place-name part of check-content, so it must hold city names only.
// The ids 'lavasan' and 'poldasht' are kept from an earlier version; their pins now read Latian and Aras.
export const cities: City[] = [
  { id: 'ahvaz', name: { fa: 'اهواز', en: 'Ahvaz' }, province: { fa: 'خوزستان', en: 'Khuzestan' }, lat: 31.32, lng: 48.67 },
  { id: 'aghajari', name: { fa: 'آغاجاری', en: 'Aghajari' }, province: { fa: 'خوزستان', en: 'Khuzestan' }, lat: 30.7, lng: 49.83 },
  { id: 'masjed-soleyman', name: { fa: 'مسجدسلیمان', en: 'Masjed Soleyman' }, province: { fa: 'خوزستان', en: 'Khuzestan' }, lat: 31.94, lng: 49.3 },
  { id: 'andimeshk', name: { fa: 'اندیمشک', en: 'Andimeshk' }, province: { fa: 'خوزستان', en: 'Khuzestan' }, lat: 32.46, lng: 48.36 },
  { id: 'abadan', name: { fa: 'آبادان', en: 'Abadan' }, province: { fa: 'خوزستان', en: 'Khuzestan' }, lat: 30.35, lng: 48.29 },
  { id: 'tehran', name: { fa: 'تهران', en: 'Tehran' }, province: { fa: 'تهران', en: 'Tehran' }, lat: 35.69, lng: 51.39 },
  { id: 'lavasan', name: { fa: 'لتیان', en: 'Latian' }, province: { fa: 'تهران', en: 'Tehran' }, lat: 35.79, lng: 51.68 },
  { id: 'karaj', name: { fa: 'کرج', en: 'Karaj' }, province: { fa: 'البرز', en: 'Alborz' }, lat: 35.84, lng: 50.97 },
  { id: 'manjil', name: { fa: 'منجیل', en: 'Manjil' }, province: { fa: 'گیلان', en: 'Gilan' }, lat: 36.74, lng: 49.4 },
  { id: 'loshan', name: { fa: 'لوشان', en: 'Loshan' }, province: { fa: 'گیلان', en: 'Gilan' }, lat: 36.63, lng: 49.51 },
  { id: 'rasht', name: { fa: 'رشت', en: 'Rasht' }, province: { fa: 'گیلان', en: 'Gilan' }, lat: 37.28, lng: 49.58 },
  { id: 'poldasht', name: { fa: 'ارس', en: 'Aras' }, province: { fa: 'آذربایجان غربی', en: 'West Azerbaijan' }, lat: 39.02, lng: 45.3 },
  { id: 'mahabad', name: { fa: 'مهاباد', en: 'Mahabad' }, province: { fa: 'آذربایجان غربی', en: 'West Azerbaijan' }, lat: 36.76, lng: 45.72 },
  { id: 'naqadeh', name: { fa: 'نقده', en: 'Naqadeh' }, province: { fa: 'آذربایجان غربی', en: 'West Azerbaijan' }, lat: 36.96, lng: 45.39 },
  { id: 'tabriz', name: { fa: 'تبریز', en: 'Tabriz' }, province: { fa: 'آذربایجان شرقی', en: 'East Azerbaijan' }, lat: 38.08, lng: 46.29 },
  { id: 'gachsaran', name: { fa: 'گچساران', en: 'Gachsaran' }, province: { fa: 'کهگیلویه و بویراحمد', en: 'Kohgiluyeh and Boyer-Ahmad' }, lat: 30.36, lng: 50.8 },
  { id: 'qazvin', name: { fa: 'قزوین', en: 'Qazvin' }, province: { fa: 'قزوین', en: 'Qazvin' }, lat: 36.27, lng: 50.0 },
  { id: 'bojnurd', name: { fa: 'بجنورد', en: 'Bojnurd' }, province: { fa: 'خراسان شمالی', en: 'North Khorasan' }, lat: 37.47, lng: 57.33 },
  { id: 'sarakhs', name: { fa: 'سرخس', en: 'Sarakhs' }, province: { fa: 'خراسان رضوی', en: 'Razavi Khorasan' }, lat: 36.54, lng: 61.16 },
  { id: 'asaluyeh', name: { fa: 'عسلویه', en: 'Asaluyeh' }, province: { fa: 'بوشهر', en: 'Bushehr' }, lat: 27.47, lng: 52.61 },
  { id: 'bandar-abbas', name: { fa: 'بندرعباس', en: 'Bandar Abbas' }, province: { fa: 'هرمزگان', en: 'Hormozgan' }, lat: 27.19, lng: 56.27 },
  { id: 'sirri', name: { fa: 'جزیره سیری', en: 'Sirri Island' }, province: { fa: 'هرمزگان', en: 'Hormozgan' }, lat: 25.91, lng: 54.54 },
  { id: 'marvdasht', name: { fa: 'مرودشت', en: 'Marvdasht' }, province: { fa: 'فارس', en: 'Fars' }, lat: 29.87, lng: 52.8 },
  { id: 'chadegan', name: { fa: 'چادگان', en: 'Chadegan' }, province: { fa: 'اصفهان', en: 'Isfahan' }, lat: 32.77, lng: 50.63 },
  { id: 'jiroft', name: { fa: 'جیرفت', en: 'Jiroft' }, province: { fa: 'کرمان', en: 'Kerman' }, lat: 28.68, lng: 57.74 },
];

export const cityById = new Map(cities.map((c) => [c.id, c]));
