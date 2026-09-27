import type { L, ProductCategorySlug } from '../types';

// Long-form text under the product grid of a category page: types, applications, voltage and
// current ranges, custom builds and support. Every claim here was confirmed by the company
// (September 2026); check with them before adding new ones.

export type Guide = { sections: { heading: L; body: L[] }[] };

export const categoryGuides: Partial<Record<ProductCategorySlug, Guide>> = {
  ignition: {
    sections: [
      {
        heading: { fa: 'انواع جرقه‌زن صنعتی', en: 'Types of industrial igniter' },
        body: [
          {
            fa: 'جرقه‌زن یا ایگنایتر سوخت مشعل را هنگام راه‌اندازی روشن می‌کند و نوع مناسب آن به مشعل و سوخت بستگی دارد. توربین گازی صنعتی معمولاً جرقه‌زن پرانرژی (Hi-Energy) لازم دارد. اکسایتر جرقه در این سیستم چند بار در ثانیه جرقه‌ای کوتاه با ولتاژ حدود 2000Vdc و انرژی تا ۱۲ ژول روی شمع می‌زند که گاز و گازوئیل را سریع روشن می‌کند.',
            en: 'An igniter lights the burner fuel at start-up, and the right type depends on the burner and the fuel. Industrial gas turbines usually need a high-energy igniter: its exciter fires a short spark of about 2000 V DC and up to 12 J across the plug several times a second, which lights gas and diesel quickly.',
          },
          {
            fa: 'مشعل کوره و بویلر بیشتر با ترانس جرقه کار می‌کند. ترانسفورماتور جرقه‌ی ما ولتاژ 115Vac را به 15000Vac می‌رساند و جرقه‌ی پیوسته می‌دهد. برای روشن کردن دستی مشعل‌ها جرقه‌زن پرتابل می‌سازیم که با برق شهر یا باتری کار می‌کند. پایلوت فلر هم سامانه‌ی جرقه‌زن پالسی خودش را دارد که اگر شعله خاموش شود، آن را دوباره روشن می‌کند.',
            en: 'Furnace and boiler burners mostly use an ignition transformer. Ours steps 115 V AC up to 15,000 V AC for a continuous spark. For lighting burners by hand we build a portable igniter that runs on mains power or a battery, and flare pilots get a pulse ignition system that relights the pilot if it goes out.',
          },
        ],
      },
      {
        heading: { fa: 'شمع و کابل جرقه‌زن', en: 'Spark plugs and ignition leads' },
        body: [
          {
            fa: 'جرقه‌زن بدون شمع و کابل سالم کار نمی‌کند. شمع جرقه‌زن توربین را از فولاد زنگ‌نزن و برای دمای تا 1250°C می‌سازیم. شمع الکترودبلند کوره فاصله‌ی جرقه‌ی قابل تنظیم دارد و شمع بویلر برای جرقه‌ی پرانرژی ضربه‌ای طراحی شده است. کابل جرقه‌زن در نوع زره‌دار با زره فولاد زنگ‌نزن و در نوع سیلیکونی تا 30kV ساخته می‌شود و طولش را مطابق محل نصب انتخاب می‌کنیم.',
            en: 'An igniter is only as good as its plug and lead. We make stainless steel turbine plugs rated to 1250 °C, long-electrode furnace plugs with an adjustable gap, and boiler plugs for high-energy pulsed sparks. Ignition leads come with stainless steel armour or in silicone up to 30 kV, cut to the length the installation needs.',
          },
        ],
      },
      {
        heading: { fa: 'ولتاژ ورودی و خروجی', en: 'Input and output voltages' },
        body: [
          {
            fa: 'جرقه‌زن‌ها با ورودی 24Vdc، 48V، 110V، 115/230Vac یا 220V ساخته می‌شوند و نوع ورودی را با تغذیه‌ای که در محل هست هماهنگ می‌کنیم. خروجی اکسایترهای پرانرژی 2000Vdc و در مدل ولتاژبالا 18kV است و هر ثانیه ۳ تا ۵ جرقه می‌زنند. ترانس جرقه خروجی 15kV AC دارد و شمع‌ها برای جرقه‌ی تا 20kV ساخته می‌شوند.',
            en: 'Igniters are built for 24 V DC, 48 V, 110 V, 115/230 V AC or 220 V input, matched to the supply available on site. High-energy exciters deliver 2000 V DC, or 18 kV in the high-voltage model, at three to five sparks a second. The ignition transformer gives 15 kV AC, and plugs are rated for sparks up to 20 kV.',
          },
        ],
      },
      {
        heading: { fa: 'ساخت سفارشی، تعمیر و آزمون پیش از تحویل', en: 'Custom builds, repair and testing before delivery' },
        body: [
          {
            fa: 'اگر جرقه‌زن فعلی شما ابعاد، کانکتور یا ولتاژ خاصی دارد، دستگاه جدید را مطابق نمونه یا نقشه‌ی آن می‌سازیم تا بدون تغییر در سیم‌کشی و محل نصب جایگزین شود. در صورت نیاز دستگاه را در جعبه‌ی ضدانفجار Exd قرار می‌دهیم. جرقه‌زن و اکسایتر ساخت شرکت‌های دیگر را هم تعمیر و آزمایش می‌کنیم. هر دستگاه پیش از تحویل آزمون جرقه می‌شود و گزارش آزمون همراهش ارسال می‌شود.',
            en: 'If your current igniter has an unusual size, connector or voltage, we build the new one to its sample or drawing so it drops in without changes to wiring or mounting, and fit it in an Exd explosion-proof enclosure where needed. We also repair and test igniters and exciters from other makers. Every unit is spark-tested before delivery and ships with its test report.',
          },
        ],
      },
      {
        heading: { fa: 'نصب و پشتیبانی در محل', en: 'Installation and on-site support' },
        body: [
          {
            fa: 'پشتیبانی با تماس تلفنی یا پیام در واتس‌اپ شروع می‌شود. اگر دستگاه باید تعمیر شود، به کارگاه ما در کرج فرستاده و پس از تعمیر برگردانده می‌شود. برای نصب، راه‌اندازی و عیب‌یابی، مهندسان ما به محل می‌آیند؛ از جمله به اهواز و شهرهای دیگر خوزستان که بیش از نیمی از پروژه‌های ما در آن اجرا شده است.',
            en: 'Support starts with a phone call or a WhatsApp message. A unit that needs repair comes to our workshop in Karaj and is sent back once fixed. For installation, commissioning and fault finding our engineers come to site, including Ahvaz and the rest of Khuzestan, where more than half of our projects have been carried out.',
          },
        ],
      },
    ],
  },
  'power-supplies': {
    sections: [
      {
        heading: { fa: 'انواع شارژر باتری صنعتی', en: 'Types of industrial battery charger' },
        body: [
          {
            fa: 'در پست برق، نیروگاه و تأسیسات نفت و گاز، بانک باتری هنگام قطع برق رله‌های حفاظتی، مدارهای فرمان و روشنایی اضطراری را تغذیه می‌کند و شارژر باتری آن را همیشه پر نگه می‌دارد. شارژر باتری تریستوری (یکسوساز) رایج‌ترین نوع صنعتی است. نوع تک‌فاز را برای توان‌های کم و جاهایی که برق سه‌فاز ندارند می‌سازیم و نوع سه‌فاز را برای جریان‌های بیشتر.',
            en: 'In substations, power plants and oil and gas facilities, a battery bank keeps protection relays, control circuits and emergency lighting running when the supply fails, and the battery charger keeps it full. The thyristor charger (rectifier) is the most common industrial type. We build single-phase units for low power and sites without three-phase supply, and three-phase units for higher currents.',
          },
          {
            fa: 'شارژر هوشمند SMART-128 منحنی شارژ را متناسب با نوع و تعداد باتری‌ها دنبال می‌کند و حالت‌های Float، Boost و Initial دارد. جایی که حجم و وزن مهم است، شارژر سوئیچینگ می‌سازیم، مثل PSB-1000 که قابل حمل است. برای سیستم راه‌اندازی توربین گازی هم شارژر RTB-100 را داریم که هم‌زمان باتری را شارژ می‌کند و جریان پمپ هیدرولیک راه‌اندازی را می‌دهد.',
            en: 'The SMART-128 smart charger follows the charging curve for the battery type and count, with float, boost and initial modes. Where size and weight matter we build switching chargers such as the portable PSB-1000. For gas turbine starting systems the RTB-100 charges the battery while it also feeds the hydraulic start pump.',
          },
        ],
      },
      {
        heading: { fa: 'بازه‌ی ولتاژ و جریان', en: 'Voltage and current range' },
        body: [
          {
            fa: 'شارژرهای تک‌فاز را با خروجی 6 تا 250Vdc و توان تا 5kW و شارژرهای سه‌فاز را با جریان تا حدود 200A می‌سازیم. ولتاژ خروجی را مطابق بانک باتری شما انتخاب می‌کنیم؛ از 24Vdc برای تجهیزات ابزار دقیق تا 110Vdc و بالاتر برای پست‌ها و نیروگاه‌ها.',
            en: 'Single-phase chargers are built from 6 to 250 V DC and up to 5 kW, and three-phase chargers up to about 200 A. The output voltage is chosen to suit your battery bank, from 24 V DC for instrumentation to 110 V DC and above for substations and power plants.',
          },
        ],
      },
      {
        heading: { fa: 'نوسازی شارژرهای قدیمی', en: 'Upgrading older chargers' },
        body: [
          {
            fa: 'بسیاری از شارژرهای تریستوری سالم‌اند و فقط کارت کنترلشان دیگر یدکی ندارد. کنترلر هوشمند SBC-600 روی این شارژرها نصب می‌شود و نمایشگر LCD، کنترل PID، ثبت خطا و ارتباط Modbus را به آن‌ها اضافه می‌کند. مدل SBC-620 برای شارژرهای سه‌فاز است. سلکتور باتری SDS-120 هم دو شارژر و دو بانک باتری را مدیریت می‌کند.',
            en: 'Many thyristor chargers are healthy apart from a control card that can no longer be replaced. The SBC-600 smart controller fits these chargers and adds an LCD, PID control, a fault log and Modbus; the SBC-620 does the same for three-phase units. The SDS-120 battery selector manages two chargers and two battery banks.',
          },
        ],
      },
      {
        heading: { fa: 'ساخت سفارشی و پشتیبانی', en: 'Custom builds and support' },
        body: [
          {
            fa: 'ولتاژ، جریان، نوع ورودی و ابعاد تابلو را مطابق مشخصات پروژه تعیین می‌کنیم. پشتیبانی با تماس تلفنی یا واتس‌اپ شروع می‌شود و اگر لازم باشد، مهندسان ما برای نصب، راه‌اندازی یا عیب‌یابی به محل می‌آیند. کنترلرهای SBC-620 را در مسجدسلیمان خودمان نصب و راه‌اندازی کرده‌ایم.',
            en: 'Voltage, current, input type and cabinet size are set to the project’s specification. Support starts by phone or WhatsApp, and when needed our engineers come to site to install, commission or find faults. We installed and commissioned the SBC-620 controllers in Masjed Soleyman ourselves.',
          },
        ],
      },
    ],
  },
};
