import { pexels } from '../lib/pexels.js';

export const FEATURED_PROJECT = {
  tag: 'FEATURED · HOUSTON · 2025',
  title: 'Sterile injectable block, bare shell to signed dossier in fourteen months.',
  body:
    'Grade A through D across 1,850 m²: four dedicated air handlers, a WFI loop, dynamic pass boxes at every classified boundary, and continuous environmental monitoring. Passed an FDA pre-approval inspection and a client-commissioned EU-standard audit on first inspection.',
  stats: [
    { label: 'CLASSIFIED AREA', value: '1,850 m²' },
    { label: 'SHELL TO HANDOVER', value: '14 mo' },
    { label: 'OBSERVATIONS', value: '0' },
  ],
  photo: pexels(9574455, 1200),
};

export const PROJECTS = [
  {
    tag: 'PHARMA · HOUSTON',
    title: 'Oral solid dosage expansion',
    body:
      'Six ISO 8 granulation and compression rooms added to a live plant. Adjacent production never stopped, which set every sequencing decision on the job.',
    meta: '920 m² · 2025 · TURNKEY',
    photo: pexels(4031654, 900),
  },
  {
    tag: 'HEALTHCARE · DALLAS',
    title: 'Four modular operating theatres',
    body:
      'Laminar ceiling systems and antibacterial envelopes for a 400-bed private hospital, with redundant air handlers so a service visit never closes a theatre.',
    meta: '4 THEATRES · 2024 · DESIGN & BUILD',
    photo: pexels(33916261, 900),
  },
  {
    tag: 'FOOD · AMARILLO',
    title: 'Chilled packing hall & cold store',
    body:
      'Washdown-rated air handling over a wet line, plus a 600-pallet cold store with redundant plant for a dairy processor running seven days.',
    meta: '1,400 m² · 2024 · TURNKEY',
    photo: pexels(38336747, 900),
  },
  {
    tag: 'BIOTECH · THE WOODLANDS',
    title: 'BSL-3 containment laboratory',
    body:
      'Sealed envelope, negative cascade, bag-in/bag-out exhaust filtration, and a room integrity test before a single sample entered the building.',
    meta: '310 m² · 2023 · DESIGN & VALIDATE',
    photo: pexels(8539512, 900),
  },
  {
    tag: 'PHARMA · SUGAR LAND',
    title: 'Purified water & clean steam plant',
    body:
      'RO–EDI train feeding a 6 m³/h sanitisable loop, with sample point mapping and a full qualification campaign across sixteen user points.',
    meta: '6 m³/h · 2023 · UTILITIES',
    photo: pexels(35425761, 900),
  },
  {
    tag: 'DEVICES · AUSTIN',
    title: 'Device assembly cleanroom',
    body:
      'ISO 7 assembly and ISO 8 packing with ESD flooring, qualified against ISO 13485 expectations for an export-only manufacturer.',
    meta: '740 m² · 2022 · TURNKEY',
    photo: pexels(24193873, 900),
  },
];
