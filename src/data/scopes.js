// The six disciplines — summarised on Home, expanded on Services.
export const SCOPES = [
  {
    no: '01',
    title: 'Cleanroom design & build',
    desc:
      'Layout, airflow modelling, panels, flooring, hermetic doors — built against the classification you have to hold, not the one on the brochure.',
    lead: 'Layout, airflow modelling, panels, flooring, and hermetic doors.',
    body:
      'We start from the classification you have to hold and work backwards: room volumes, return paths, and door swings are settled before a panel is cut. Built with PU/PIR sandwich systems, coved seamless flooring, and flush fittings that leave nowhere for particulate to sit.',
    items: [
      'Concept and GA drawings',
      'Panel, door, and window fabrication',
      'Epoxy or vinyl flooring with coving',
      'Cleanroom lighting and penetrations',
    ],
  },
  {
    no: '02',
    title: 'HVAC engineering',
    desc:
      'Double-skin AHUs, duct distribution, terminal filtration, and controls, balanced and cascade-tuned by our own commissioning crews.',
    lead: 'Air handlers, duct distribution, terminal filtration, and controls.',
    body:
      'Double-skin thermal-break air handling units with EC fans, sized against a real heat load rather than a rule of thumb. Ducting, dampers, and terminal HEPA housings installed and balanced by our own commissioning crews, then cascade-tuned room by room.',
    items: [
      'Heat load and airflow calculations',
      'AHU selection and assembly',
      'Duct fabrication and installation',
      'Balancing and cascade tuning',
    ],
  },
  {
    no: '03',
    title: 'Validation & qualification',
    desc:
      'DQ through PQ with owned, calibrated instrumentation. Protocols written by the engineers who will execute them.',
    lead: 'DQ through PQ with owned, calibrated instrumentation.',
    body:
      'Protocols are written by the engineers who will execute them, which is why they match the installation. Particle counts, air changes, recovery time, filter integrity, pressure cascade, and temperature mapping — all measured with instruments we own and calibrate annually.',
    items: [
      'DQ / IQ / OQ / PQ protocols',
      'DOP filter integrity testing',
      'Recovery and cascade studies',
      'Regulatory inspection attendance',
    ],
  },
  {
    no: '04',
    title: 'Process utilities',
    desc:
      'Purified water, WFI, clean steam, compressed air, and chiller plant — sampled and qualified to USP limits.',
    lead: 'Purified water, WFI, clean steam, compressed air, and chiller plant.',
    body:
      'Generation and distribution designed as one loop, with sanitisation strategy agreed before pipe is ordered. Sampled and qualified against USP and ASME BPE requirements, with the trend data your QA department will be asked for at inspection.',
    items: [
      'RO / EDI / distillation trains',
      'Sanitisable distribution loops',
      'Clean steam generation',
      'Oil-free compressed air to ISO 8573-1',
    ],
  },
  {
    no: '05',
    title: 'Equipment integration',
    desc:
      'Sourcing and commissioning processing and packaging machinery into hygienic flows, with operator training on handover.',
    lead: 'Sourcing and commissioning machinery into hygienic flows.',
    body:
      'We import and integrate processing and packaging equipment from manufacturers we have used before and can still get parts from. Line layout, utility connections, guarding, and operator training are part of the scope, not an afterthought.',
    items: [
      'Vendor selection and factory testing',
      'Import, delivery, and installation',
      'Utility and line integration',
      'Operator and maintenance training',
    ],
  },
  {
    no: '06',
    title: 'Maintenance & requalification',
    desc:
      'Scheduled service, filter changes, annual requalification, and emergency callout with spares held locally.',
    lead: 'Scheduled service, filter changes, annual requalification, callout.',
    body:
      'The contract does not end at handover. Maintenance agreements cover planned service visits, filter replacement on a tracked schedule, annual requalification, and emergency callout — with critical spares held at our Pasadena depot rather than in transit.',
    items: [
      'Planned preventive maintenance',
      'Filter change programme',
      'Annual requalification',
      'Emergency callout cover',
    ],
  },
];

export const GATES = [
  {
    tag: 'GATE 01',
    title: 'Survey & URS',
    body: 'Site survey, user requirements, and a costed concept layout.',
  },
  {
    tag: 'GATE 02',
    title: 'Detailed design',
    body: 'GA drawings, load calculations, P&IDs, and design qualification.',
  },
  {
    tag: 'GATE 03',
    title: 'Fabricate & supply',
    body: 'Panels, air handlers, and procured equipment with factory testing.',
  },
  {
    tag: 'GATE 04',
    title: 'Install & commission',
    body: 'Erection, balancing, controls setup, and cascade tuning.',
  },
  {
    tag: 'GATE 05',
    title: 'Qualify & hand over',
    body: 'IQ/OQ/PQ execution, dossier, training, and maintenance start.',
    highlight: true,
  },
];
