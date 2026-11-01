import { pexels } from '../lib/pexels.js';

export const SECTORS = [
  {
    no: '02',
    name: 'Pharmaceutical manufacturing',
    body:
      'Oral solid dosage, liquids, and sterile injectables. Dedicated air handlers per production zone, cascade that survives shift change, and a qualification pack written for the inspector rather than the file.',
    cls: 'ISO 5 – ISO 8',
    reg: 'FDA · cGMP',
    risk: 'Cross-contamination',
    icon: 'lucide:pill',
    photo: pexels(4031689, 1000),
  },
  {
    no: '03',
    name: 'Hospitals & healthcare',
    body:
      'Modular operating theatres, intensive care, isolation rooms, and central sterile supply. Laminar ceilings over the table, redundant plant, and monitoring that alarms before a nurse notices.',
    cls: 'ISO 5 – ISO 7',
    reg: 'Joint Commission',
    risk: 'Surgical site infection',
    icon: 'lucide:cross',
    photo: pexels(37654664, 1000),
  },
  {
    no: '04',
    name: 'Food & beverage processing',
    body:
      'Hygienic production halls, chilled packing rooms, and washdown-rated air handling for dairy, confectionery, and ready-meal plants where the line runs wet and the ceiling gets hosed.',
    cls: 'ISO 8 / hygienic',
    reg: 'FSMA · HACCP',
    risk: 'Microbial spoilage',
    icon: 'lucide:milk',
    photo: pexels(36823725, 1000),
  },
  {
    no: '05',
    name: 'Biotech & diagnostics labs',
    body:
      'BSL-2 and BSL-3 containment, PCR suites, and tissue culture rooms. Here the cascade runs the other way — negative, sealed, and proven with a room integrity test before anyone works in it.',
    cls: 'BSL-2 / BSL-3',
    reg: 'Institutional biosafety',
    risk: 'Containment breach',
    icon: 'lucide:flask-conical',
    photo: pexels(4032060, 1000),
  },
];

export const ALSO_SERVED = [
  {
    title: 'Cosmetics & personal care',
    body: 'ISO 8 filling and packing halls with humidity control for emulsions and powders.',
  },
  {
    title: 'Medical devices',
    body: 'Assembly and packaging cleanrooms qualified against ISO 13485 expectations.',
  },
  {
    title: 'Electronics & optics',
    body: 'ESD-safe low-particulate rooms with tight temperature stability.',
  },
  {
    title: 'Agro & veterinary',
    body: 'Feed premix, vaccine, and veterinary formulation suites with containment.',
  },
];
