import { pexels } from '../lib/pexels.js';

export const TEAM = [
  { name: 'James Whitfield', role: 'Founder & CEO', photo: pexels(37894130, 700) },
  { name: 'Robert Calhoun', role: 'Director — Operations', photo: pexels(30133730, 700) },
  { name: 'David Alvarez, P.E.', role: 'Head of Engineering', photo: pexels(8278917, 700) },
  { name: 'Marcus Doyle', role: 'Project Manager — Cleanroom', photo: pexels(7580937, 700) },
  { name: 'Kevin Ostrowski', role: 'Manager — HVAC & Utility Systems', photo: pexels(7580640, 700) },
  { name: 'Brian Delgado', role: 'Manager — Sales & Business Development', photo: pexels(7580910, 700) },
  { name: 'Sarah Kowalski, P.E.', role: 'Validation & Quality Assurance Lead', photo: pexels(34078749, 700) },
  { name: 'Michael Reyes', role: 'After-Sales & Technical Support Manager', photo: pexels(7580987, 700) },
];

export const HEADCOUNT = [
  {
    count: 12,
    title: 'Design & engineering',
    body: 'HVAC designers, draughtsmen, and process utility engineers.',
  },
  {
    count: 18,
    title: 'Installation',
    body: 'Panel fitters, duct crews, pipefitters, and site supervisors.',
  },
  {
    count: 8,
    title: 'Validation & QA',
    body: 'Protocol authors and test engineers with calibrated instruments.',
  },
  {
    count: 7,
    title: 'Service',
    body: 'Maintenance technicians on rotation with the Pasadena spares depot.',
  },
];
