import { pexels } from '../lib/pexels.js';

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const CATEGORIES = ['ALL', 'CLEANROOM', 'HVAC', 'FILTRATION', 'UTILITIES', 'PROCESSING', 'COLD CHAIN'];

// name, category, description, spec, Pexels photo id
const RAW = [
  ['Modular cleanroom systems', 'CLEANROOM', 'Wall and ceiling panel envelopes with hermetic doors, vision panels, and integrated return risers.', '50 / 80 / 100 mm PU–PIR', 10514768],
  ['Pass boxes & air showers', 'CLEANROOM', 'Static and dynamic transfer hatches with electromagnetic interlocks and optional UV cycle.', 'Interlocked · HEPA H14', 11048751],
  ['Cleanroom doors & windows', 'CLEANROOM', 'Flush-fit hermetic leaves, gasketed frames, and double-glazed vision panels for classified partitions.', 'Single / double leaf', 8442543],
  ['Gowning & change rooms', 'CLEANROOM', 'Cross-over benches, lockers, and pressure-cascaded airlocks sized for peak shift changeover.', '3-step gowning', 10514721],
  ['Double-skin air handling units', 'HVAC', 'Thermal-break casing, EC plug fans, and multi-stage filtration sized against a measured heat load.', '2k – 60k m³/h', 13109834],
  ['Ducting & air distribution', 'HVAC', 'GI and pre-insulated ducting, volume control dampers, and low-turbulence terminal diffusers.', 'Leakage class C', 11538226],
  ['Environmental monitoring', 'HVAC', 'Pressure, temperature, and humidity monitoring with alarm escalation and audit-trailed records.', '21 CFR Part 11', 3942321],
  ['Dehumidification systems', 'HVAC', 'Desiccant and refrigerant units for low-humidity granulation, coating, and packing areas.', 'Down to 15% RH', 30210086],
  ['Terminal HEPA & ULPA', 'FILTRATION', 'Gel-seal frames, housings, and terminal modules supplied with factory integrity certificates.', 'H13 – U15', 13806340],
  ['Laminar flow units', 'FILTRATION', 'Horizontal and vertical benches and ceiling modules for aseptic and weighing operations.', '0.45 m/s ± 20%', 4031654],
  ['Biosafety cabinets', 'FILTRATION', 'Class II A2 and B2 cabinets certified on site for downflow and inflow velocity.', 'Class II A2 / B2', 9243565],
  ['Dust extraction & containment', 'FILTRATION', 'Reverse-pulse collectors and downflow booths for potent and high-dust compound handling.', 'OEB 3 – 4', 37726072],
  ['Purified water & WFI', 'UTILITIES', 'RO, EDI, and distillation trains with sanitisable distribution loops and sample point mapping.', 'USP / ASME BPE', 36847822],
  ['Clean steam generators', 'UTILITIES', 'Pure steam generation and distribution for sterilisation and CIP/SIP circuits.', 'HTM 2031 quality', 12726229],
  ['Chillers & utility plant', 'UTILITIES', 'Air and water-cooled chillers, pump sets, and headers sized for continuous duty with redundancy.', '50 – 800 TR', 33514501],
  ['Compressed air systems', 'UTILITIES', 'Oil-free compressors, dryers, receivers, and point-of-use filtration with quality testing.', 'ISO 8573-1 Class 1', 4440143],
  ['Processing & packaging lines', 'PROCESSING', 'Conveying, filling, and secondary packaging machinery integrated into hygienic production flows.', 'Turnkey integration', 5532664],
  ['Granulation & coating', 'PROCESSING', 'Rapid mixer granulators, fluid bed dryers, and coating pans with containment options.', '10 – 600 L', 36423815],
  ['CIP / SIP skids', 'PROCESSING', 'Automated clean- and sterilise-in-place skids with recipe control and batch reporting.', 'Recipe controlled', 18631424],
  ['Cold rooms & freezer stores', 'COLD CHAIN', 'Validated cold storage with redundant plant, alarm escalation, and continuous data logging.', '−20 to +8 °C', 39432831],
  ['Stability chambers', 'COLD CHAIN', 'ICH-condition chambers with mapped uniformity and audit-trailed environmental capture.', 'ICH Q1A conditions', 29834274],
  ['Distribution cold chain', 'COLD CHAIN', 'Insulated shippers, loggers, and qualification of distribution routes and packouts.', 'Route qualified', 5953713],
];

export const PRODUCTS = RAW.map(([name, cat, desc, spec, photoId]) => ({
  name,
  cat,
  desc,
  spec,
  slug: slugify(name),
  photo: pexels(photoId, 900),
}));

// The eight items featured in the Home page equipment teaser.
export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 8);

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

// Bespoke detail content, keyed by slug. Anything without an entry here
// falls back to a solid generic page built from the catalogue fields above
// (see products/[slug].astro).
export const PRODUCT_DETAILS = {
  'modular-cleanroom-systems': {
    eyebrow: 'CLEANROOM · TURNKEY SCOPE',
    intro:
      'The envelope and the air system quoted as one scope, because pressure cascade and leakage rate are the same problem. Panels, flooring, doors, and returns designed against the classification you have to hold at inspection.',
    facts: [
      { label: 'CLASSIFICATION', value: 'ISO 5 – ISO 8 · Grade A–D' },
      { label: 'PANEL SYSTEM', value: '50 / 80 / 100 mm PU–PIR' },
      { label: 'LEAD TIME', value: '10 – 16 weeks typical' },
      { label: 'HANDOVER', value: 'With IQ/OQ/PQ dossier' },
    ],
    specs: [
      { label: 'Panel core', value: 'PU / PIR, 0.5–0.6 mm pre-coated GI skin' },
      { label: 'Thickness options', value: '50 / 80 / 100 mm' },
      { label: 'Joint system', value: 'Flush progressive, silicone sealed' },
      { label: 'Flooring', value: 'Epoxy or PVC, 100 mm coving' },
      { label: 'Doors', value: 'Flush hermetic, interlocked' },
      { label: 'Cascade', value: '10–15 Pa per classified step' },
      { label: 'Compliance', value: 'FDA cGMP · EU Annex 1 · ISO 14644' },
    ],
    scope: [
      'Site survey, GA drawings, and design qualification package',
      'Fabrication and delivery of panels, doors, and vision panels',
      'Flooring, coving, and sealing by our own finishing crew',
      'Cleanroom lighting, sockets, and service penetrations',
      'Integration with the HVAC scope: terminals, returns, gauges',
      'IQ/OQ/PQ execution, as-built drawings, and operator training',
    ],
    optional:
      'Air showers, dynamic pass boxes, gowning suites, environmental monitoring, and annual requalification under a maintenance agreement.',
    related: ['pass-boxes-air-showers', 'double-skin-air-handling-units', 'terminal-hepa-ulpa', 'environmental-monitoring'],
    thumbs: [
      { label: 'Panel joint', photo: pexels(20770481, 500) },
      { label: 'Hermetic door', photo: pexels(19553085, 500) },
      { label: 'Terminal filter', photo: pexels(13806340, 500) },
      { label: 'Coved flooring', photo: pexels(20609660, 500) },
    ],
  },
};

// Standard facts shown on a generic (non-bespoke) product page.
export function genericFacts(product) {
  return [
    { label: 'CATEGORY', value: product.cat },
    { label: 'SPECIFICATION', value: product.spec },
    { label: 'LEAD TIME', value: '8 – 16 weeks typical' },
    { label: 'HANDOVER', value: 'With IQ/OQ/PQ dossier' },
  ];
}

// Home hero — cleanroom interior.
export const HERO_PHOTO = pexels(38688812, 2400);

export const GENERIC_SCOPE = [
  'Site survey and a costed proposal against your user requirements',
  'Detailed design, GA drawings, and design qualification package',
  'Fabrication, factory testing, and delivery to site',
  'Installation and commissioning by our own crews',
  'Integration with adjoining HVAC, utility, and cleanroom scope',
  'IQ/OQ/PQ execution, as-built drawings, and operator training',
];
