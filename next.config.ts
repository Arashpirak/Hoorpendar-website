import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// Old WordPress URLs (site-archive/crawl/index.json) and the page that replaced each one, so
// links and search rankings carry over. English pages lived at the root and Persian pages under
// /fa/. Some old slugs name third-party equipment; they exist here only as sources and never
// appear on the site. Paths are relative to /{locale}; '' is the home page.
const legacyPages: Record<string, string> = {
  'home': '',
  'author/hp': '',
  'page/2': '',
  'fusion_tb_category/content': '',
  'registration': '',
  'users': '',
  'about-us': '/about',
  'contact-us': '/contact',
  'products-2': '/products',
  'news': '/projects',
  'category/news': '/projects',
  'category/news-3': '/projects',
  'tag/news': '/projects',
  'cathodic-protection': '/products',
  'solenoid': '/products',

  // Excitation and governors
  'static-excitation-system': '/products/excitation-governor/static-excitation-system',
  'secon2000': '/products/excitation-governor/static-excitation-system',
  'secon-50': '/products/excitation-governor/brushless-excitation',
  'secon-30': '/products/excitation-governor/brushless-excitation',
  'static-ignation-system/secon50': '/products/excitation-governor/brushless-excitation',
  'protect-crowbar': '/products/excitation-governor/rotor-crowbar-protection',
  'crowbar': '/products/excitation-governor/rotor-crowbar-protection',
  'generator-governor': '/products/excitation-governor/digital-hydro-governor',
  'operation-of-digital-turbine-governor-of-dhtg-300-power-plant-and-static-excitation-system-of-secon-2000-model-produced-by-hoorpendar-company-in-self-start-up-test-of-azerbaijan-power-region':
    '/products/excitation-governor/digital-hydro-governor',

  // Flame detection
  'flame-detector': '/products/flame-detection',
  'آشکار-ساز-شعله': '/products/flame-detection',
  'flame-detector-fdu-300': '/products/flame-detection/turbine-flame-detector',
  'flame-detector-fdu-320': '/products/flame-detection/turbine-flame-detector',
  'flame-detector-fr-430d': '/products/flame-detection/flame-relay',
  'flame-detector-r430e': '/products/flame-detection/flame-relay',
  'flame-detector-relay-card': '/products/flame-detection/flame-relay',
  'flare-pilot-monitoring-model-fms-280': '/products/flame-detection/flare-pilot-monitor',
  'uvi-fire-detector-model-fdu-760': '/products/flame-detection/uv-fire-detector',
  'uvi-fire-detector-modele-fdu-760': '/products/flame-detection/uv-fire-detector',
  'sensor-rad': '/products/flame-detection/flame-sensors',
  'rad-سنسور': '/products/flame-detection/flame-sensors',

  // Ignition
  'ignition-equipment': '/products/ignition',
  'high-energy-ignition-unit': '/products/ignition/hi-energy-ignition-unit',
  'solar-turbine-ignition-unit': '/products/ignition/hi-energy-ignition-unit',
  'solar-hp-ignition-exciter': '/products/ignition/hi-energy-ignition-exciter',
  'high-voltage-ignition-unit': '/products/ignition/turbine-ignition-exciter-18kv',
  'portable-igniter-unit': '/products/ignition/portable-igniter',
  'reston-turbine-cable': '/products/ignition/ignition-cables',
  'rolls-royce-turbine-ignition-cable': '/products/ignition/ignition-cables',
  'solar-gas-turbine-ignition-cable': '/products/ignition/ignition-cables',
  'workspor-turbine-cable': '/products/ignition/ignition-cables',
  'boiler-spark-plugs': '/products/ignition/spark-plugs',
  'boiler-igniter-plug': '/products/ignition/spark-plugs',
  'furnace-spark-plug': '/products/ignition/spark-plugs',
  'reston-turbine-spark-plug': '/products/ignition/spark-plugs',
  'rolls-royce-turbine-spark-plug': '/products/ignition/spark-plugs',
  'solar-turbine-spark-plug': '/products/ignition/spark-plugs',
  'solar-gas-turbine-spark-plug': '/products/ignition/spark-plugs',

  // Turbine control
  'design-and-manufacture-of-gaidon-valve-position-sensors-for-egt-turbines': '/products/turbine-control/contactless-position-transducer',
  'displacement-transmitter': '/products/turbine-control/contactless-position-transducer',

  // Battery chargers and power supplies
  'one-phase-thyristor-battery-charger': '/products/power-supplies/thyristor-battery-charger',
  'one-phase-switching-tristor-battery-charger': '/products/power-supplies/thyristor-battery-charger',
  'three-phase-thyristor-battery-charger': '/products/power-supplies/thyristor-battery-charger',
  'process-control-equipment-sbc620': '/products/power-supplies/smart-battery-charger-controller',
  'safe-charger-battery-card': '/products/power-supplies/smart-battery-charger-controller',
  'design-and-production-of-special-charger-battery-system-for-reston-gas-turbines': '/products/power-supplies/turbine-starting-battery-charger',
  'طراحی-و-تولید-سیستم-باطری-شارژر-خاص-تور': '/products/power-supplies/turbine-starting-battery-charger',

  // Alarm annunciators and process safety
  'alarm-panel': '/products/alarm-safety',
  'alarm-panel-pal750-pal625-series': '/products/alarm-safety/programmable-alarm-annunciator',
  'pal750-pal625-series-آلارم-پنل': '/products/alarm-safety/programmable-alarm-annunciator',
  'pal-625-series': '/products/alarm-safety/programmable-alarm-annunciator',
  'alarm-panel-model-sal-82': '/products/alarm-safety/compact-alarm-panel',
  'alarm-panel-cart': '/products/alarm-safety/alarm-annunciator-cards',
  'hipps-logic-solver': '/products/alarm-safety/hipps-logic-solver',
  'hipps-سیستم-حفاظتی': '/products/alarm-safety/hipps-logic-solver',

  // Instrumentation
  'pressure-to-current-pit-315': '/products/instrumentation/pressure-to-current-converter',
  'pressure-to-cureent-pit-315': '/products/instrumentation/pressure-to-current-converter',
  '8channels-proccess-monitor': '/products/instrumentation/process-monitor-8-channel',
  'mps-series': '/products/instrumentation/multichannel-temperature-monitors',
  'multi-channel-process-monitor': '/products/instrumentation/multichannel-temperature-monitors',
  'multiple-channel-thermometers': '/products/instrumentation/multichannel-temperature-monitors',
  'strain-gauge-meter': '/products/instrumentation/strain-gauge-amplifier',
  'data-logger': '/products/instrumentation/paperless-recorders-data-loggers',
  'types-of-vibration-cards': '/products/instrumentation/vibration-monitoring',
  'vibration-monitor': '/products/instrumentation/vibration-monitoring',
  'vibration-cable': '/products/instrumentation/vibration-monitoring',

  // Dams, power plants and infrastructure
  'lvlm-100': '/products/dam-power-infrastructure/digital-level-meter',
  'blvm-100': '/products/dam-power-infrastructure/bubbler-level-meter',
  'flow-measurement-system': '/products/dam-power-infrastructure/frequency-meter',
  'cast-iron-load-resistance': '/products/dam-power-infrastructure/cast-iron-resistors',
  'creed-laser-lascope': '/products/dam-power-infrastructure/dam-safety-instruments',

  // Legacy system renewal
  'reverse-engineering': '/products/legacy-renewal',
  'syncrite': '/products/legacy-renewal',
  'zener-breyer-honeywell': '/products/legacy-renewal',
  'fuji-recorder-power-supply-unit': '/products/legacy-renewal',
};

// Every old page gets an English (root) and a Persian (/fa/) source. Requests arrive
// percent-encoded, so Persian slugs are matched in encoded form. 301 rather than Next's default
// 308 because it is the code search engines have handled longest.
const legacyRedirects = Object.entries(legacyPages).flatMap(([slug, to]) => {
  const source = encodeURI(slug);
  return [
    { source: `/${source}`, destination: `/en${to}`, statusCode: 301 as const },
    { source: `/fa/${source}`, destination: `/fa${to}`, statusCode: 301 as const },
  ];
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Photos of Iranian dams and power plants (content/iran-photos.ts). The
    // optimizer serves them from our own domain, so visitors never fetch
    // Wikimedia directly.
    remotePatterns: [{ protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/wikipedia/commons/**' }],
  },
  async redirects() {
    return [
      // The old root /products/ was the English catalogue.
      { source: '/products', destination: '/en/products', statusCode: 301 },
      { source: '/en/products-2', destination: '/en/products', statusCode: 301 },
      ...legacyRedirects,
    ];
  },
};

export default withNextIntl(nextConfig);
