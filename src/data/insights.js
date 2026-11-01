import { pexels } from '../lib/pexels.js';
import { TEAM } from './team.js';

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Looks an author up against the real team roster so a byline always
// carries their actual title and photo instead of a second, driftable
// copy of it.
function byline(name) {
  return TEAM.find((t) => t.name === name) ?? { name, role: '', photo: undefined };
}

export const CATEGORIES = ['ALL', 'DESIGN', 'COMMISSIONING', 'COMPLIANCE', 'MAINTENANCE', 'CASE NOTES'];

// Field notes from the people who actually run the jobs — not marketing
// copy. Newest first. `quote` is a single pull-line the detail page sets
// off in the blue rule; `takeaways` closes the article as a short list.
const RAW = [
  {
    title: 'How many air changes per hour is actually enough?',
    category: 'DESIGN',
    excerpt:
      'ACH gets treated like a badge of honour on a spec sheet. It should be a design output, not the number you start from.',
    date: '2026-08-28',
    author: 'David Alvarez, P.E.',
    photo: pexels(32497161, 1000),
    intro:
      'A client asked us last month to "just quote 60 ACH" for a Grade C suite because a competitor had specified it. Sixty air changes will hold classification in a well laid-out room and fail in a badly laid-out one — the number on its own tells you almost nothing.',
    body: [
      'Air changes per hour is a ratio: supply airflow over room volume. It says nothing about where that air enters, where it leaves, or what is generating particles in between. A terminal HEPA directly above a filling head recovers a local excursion in seconds; the same filter offset two metres away, feeding a room with a poorly placed return, can leave that excursion circulating for minutes regardless of how high the ACH number reads.',
      'ISO 14644-1 and Annex 1 give ranges, not answers: roughly 20–40 ACH is typical for ISO 8 / Grade D, 40–60 for ISO 7 / Grade C, and unidirectional (laminar) flow rather than a simple ACH count for ISO 5 / Grade A. Those ranges assume a competent layout. They are a starting point for the calculation, not a substitute for it.',
      'The number we actually design to is recovery time — how long the room takes to return to its at-rest particle count after a defined disturbance, typically 15–20 minutes for a classified space. We work backward from that target: room volume, particle generation rate from the process and personnel, diffuser and return placement, then the airflow needed to hit recovery. ACH falls out of that calculation; it is the last number we write down, not the first.',
      'This is also why two rooms with identical ACH can behave completely differently at qualification. Diffuser coverage, return low-wall placement, and door swing direction move recovery time far more than another 10 ACH of brute-force airflow — and the extra airflow costs you in AHU sizing, duct velocity noise, and energy for the life of the room.',
    ],
    quote:
      'An ISO 7 room with the wrong diffuser layout can fail its recovery time test at 60 ACH. A well laid-out room can hold classification at 35.',
    takeaways: [
      'Treat ACH as a calculated output, not a target you specify up front',
      'Recovery time (typically 15–20 min) is the number that actually predicts qualification',
      'Diffuser and return placement move recovery time more than raw airflow does',
    ],
  },
  {
    title: 'How to read a filter integrity certificate',
    category: 'COMPLIANCE',
    excerpt:
      'A factory efficiency certificate tells you about the filter. An installed leak scan tells you about the room it went into.',
    date: '2026-08-14',
    author: 'Sarah Kowalski, P.E.',
    photo: pexels(33693530, 1000),
    intro:
      'Every HEPA and ULPA we install ships with a factory test certificate, and every one gets a second, different certificate once it is sealed into the ceiling grid. Auditors ask for both, and inspectors are increasingly checking that the second one exists at all.',
    body: [
      'The factory certificate — usually a scan efficiency test against a DOP or PAO aerosol challenge — proves the media and the frame meet H13, H14, or the ULPA grade printed on the label. It carries a serial number, a rated efficiency (99.995% for H14, for example), and a test aerosol concentration. This document tells you the filter, in isolation, is good.',
      'It does not tell you anything about how it sits in your ceiling grid. That is what the installed leak scan (DOP/PAO scan test, done in place after commissioning) is for: a calibrated photometer is swept across the entire face of the filter and its gasket or gel seal in overlapping passes, checking for any point where penetration exceeds 0.01% of the upstream challenge concentration. A pinhole in the media, a gap in the gel seal, or a poorly torqued clamping frame all show up here — none of them show up on the factory certificate.',
      'When you are handed a binder of these at handover, check three things: the scan report references the same filter serial number as the factory certificate it is paired with, the photometer used has a calibration date within the last twelve months, and the report records a pass at every scanned point rather than a single averaged reading. A single "PASS" with no point-by-point data is not a scan report — it is a summary someone wrote after the fact.',
    ],
    quote:
      'A pinhole in the media or a gap in the gel seal will pass the factory certificate every time. Only the installed scan finds it.',
    takeaways: [
      'Factory certificate proves the filter; installed DOP/PAO scan proves the installation',
      'Match serial numbers between the two documents before you file either',
      'Insist on point-by-point scan data, not a single summarised pass/fail line',
    ],
  },
  {
    title: 'Why cascade pressure drifts in the first year after handover',
    category: 'MAINTENANCE',
    excerpt:
      'The pressure cascade you commissioned and the one you are running eighteen months later are rarely the same, and it is rarely dramatic.',
    date: '2026-07-30',
    author: 'Kevin Ostrowski',
    photo: pexels(10290630, 1000),
    intro:
      'We get called back to sites that qualified cleanly less than two years earlier because a pressure differential has quietly walked outside its alarm band. Almost none of these are equipment failures. Most are small, cumulative changes nobody was tracking.',
    body: [
      'Door seals compress and wear with traffic — an airlock door swept a thousand times a month loses gasket contact well before it looks visibly damaged, and every degraded seal is a leak path the cascade has to fight. Terminal filters load with particulate over time, which raises their resistance and quietly reduces the airflow a fixed-speed fan pushes through them — the room slowly under-delivers relative to its commissioned figure even though nothing has been touched.',
      'Dampers and VFDs drift too: a volume control damper that was locked at a commissioning setpoint can creep a few degrees over hundreds of thermal cycles, and a VFD left on a fixed frequency rather than a pressure-feedback loop has no way to correct for any of this on its own. None of these show up as a fault code — they show up eighteen months later as a pressure reading that has quietly walked from 12 Pa to 6 Pa.',
      'The fix is not usually new equipment. It is a rebalance against the original commissioning data — we schedule that at 12 months and then annually, checking magnehelic and digital gauge readings against calibrated reference instruments at the same time, since an uncalibrated gauge can itself be the whole story. Facilities that skip this step are the ones that fail an inspection on a pressure reading that has been wrong for the better part of a year.',
    ],
    quote:
      'None of it shows up as a fault code. It shows up eighteen months later as a pressure reading that has quietly walked from 12 Pa to 6 Pa.',
    takeaways: [
      'Door seal wear and filter loading are the two most common causes, not equipment failure',
      'A fixed-speed fan or a locked damper cannot correct for either on its own',
      'Rebalance against the original commissioning data at 12 months, then annually',
    ],
  },
  {
    title: 'DX or chilled water: choosing an AHU for a classified space',
    category: 'DESIGN',
    excerpt:
      'The right answer depends less on tonnage and more on how tightly you have to hold humidity, and whether you already have a chilled water loop.',
    date: '2026-07-16',
    author: 'David Alvarez, P.E.',
    photo: pexels(7937299, 1000),
    intro:
      'This is the single most common design question we get from clients scoping their first classified space, and the honest answer is that neither option is universally right — the decision turns on humidity tolerance, redundancy, and what utilities already exist on site.',
    body: [
      'Direct expansion (DX) units are simpler to install, cheaper up front, and need no chilled water infrastructure — a real advantage for a single standalone room or a smaller retrofit. Their weakness is latent load control: a DX coil at a fixed evaporating temperature has a fixed sensible heat ratio, which makes holding a tight relative humidity setpoint (45% RH ± 5, say, in a hygroscopic packaging area) far harder without adding reheat or a dedicated dehumidification stage, and refrigerant charge limits under most classified-space fire codes cap how large a single DX system can get.',
      'Chilled water air handling units decouple cooling capacity from humidity control — a cooling coil fed from a stable chilled water loop, followed by reheat, gives independent control of temperature and RH, which is why almost every multi-room GMP facility with a real humidity specification ends up on chilled water. The trade-off is upfront cost and complexity: you are now designing and maintaining a chiller plant, pump sets, and distribution headers, typically sized N+1 for redundancy, rather than a self-contained package unit.',
      'Our rule of thumb: DX for a single room or a facility with no existing chilled water loop and a humidity tolerance wider than about ±10% RH; chilled water for anything multi-room, anything with a tight RH specification, or anything where a single point of mechanical failure taking down cooling is not an acceptable risk.',
    ],
    quote:
      'A DX coil has a fixed sensible heat ratio. Chilled water with reheat gives you temperature and humidity as two separate dials.',
    takeaways: [
      'DX: lower upfront cost, simpler, but limited latent (humidity) control',
      'Chilled water: decouples temperature and RH control, but commits you to plant redundancy',
      'Tight RH tolerance or multi-room scope almost always points to chilled water',
    ],
  },
  {
    title: 'What actually happens during IQ, OQ, and PQ',
    category: 'COMMISSIONING',
    excerpt:
      'Three letters get used almost interchangeably by people who have never sat through one. Each stage answers a different question.',
    date: '2026-07-02',
    author: 'Sarah Kowalski, P.E.',
    photo: pexels(39174644, 1000),
    intro:
      "Clients often assume qualification is one event on the handover date. It is three separate, sequential stages, each with its own protocol, its own pass/fail criteria, and its own paper trail — and skipping the order gets a dossier rejected at audit.",
    body: [
      "Installation Qualification (IQ) asks one question: is what got built the same as what was designed and specified? We verify equipment against approved drawings and datasheets, check utility connections, confirm calibration certificates on every instrument that will be used downstream, and record serial numbers. Nothing is switched on and tested for performance yet — IQ is a paperwork and as-built exercise, and it is the foundation every later stage cites.",
      'Operational Qualification (OQ) tests the system doing its job under controlled, unoccupied conditions: airflow velocity and volume, filter integrity scans, pressure cascade across every door and hatch, recovery time after a simulated disturbance, and alarm response — does the system actually alarm when a differential pressure gauge is pulled outside its band, and does it log the event. This is where most deviations surface, because it is the first time the installed system is actually exercised against its design intent.',
      'Performance Qualification (PQ) is the one people forget has a duration: it demonstrates the space performs to specification during actual, occupied operation, not a simulated one. That means a monitoring campaign — typically a minimum of three non-consecutive days for a lower-grade support space, extended to a full multi-week campaign with viable and non-viable particle counts for an aseptic Grade A/B suite — run while people and process are genuinely in the room.',
      'Every stage produces a protocol (written and approved before execution, never after), raw data sheets, a summary report, and a deviation log for anything that did not pass first time with its resolution recorded. An auditor who cannot trace a straight line from IQ through OQ to a PQ summary report will not accept the dossier regardless of how the room actually performs.',
    ],
    quote:
      'IQ asks: is it what we specified? OQ asks: does it work? PQ asks: does it keep working with real people and real product in the room?',
    takeaways: [
      'IQ verifies as-built against design — no performance testing happens yet',
      'OQ exercises the system unoccupied; this is where most deviations surface',
      'PQ runs a monitoring campaign under real, occupied operation — it has a duration, not a date',
    ],
  },
  {
    title: 'Retro-commissioning a decade-old cleanroom',
    category: 'CASE NOTES',
    excerpt:
      "A twelve-year-old Grade C suite had drifted quietly out of spec. Nothing had failed outright — which was exactly the problem.",
    date: '2026-06-18',
    author: 'Marcus Doyle',
    photo: pexels(8442618, 1000),
    intro:
      "A packaging client called us in ahead of a routine inspection because their own particle counts had been trending upward for two quarters. Nothing had alarmed. Nothing had broken. That, on a facility this age, is usually the tell that something has drifted, not the sign that nothing has.",
    body: [
      "We started with the paper trail before touching a single filter: as-built drawings against what was actually installed, the filter change log against the maintenance contract's stated schedule, and eighteen months of pressure and particle trend data. Two changes had happened that were never documented — a partition wall moved during a line reconfiguration three years earlier, and a return grille had been partially blocked by a since-removed piece of equipment's mounting frame.",
      'The walkthrough tests told the rest of the story: recovery time in the affected room had crept from 14 minutes at original qualification to just over 22, still inside most alarm bands individually but compounding with a filter bank that was six months past its scheduled change date on paper — a date the maintenance log showed had actually been skipped twice. Door interlock testing found one airlock door that could be forced open against its interlock with moderate effort, a seal issue rather than an electrical fault, but one that had been letting a leak path exist unnoticed on every shift change.',
      'Remediation was mechanical rather than dramatic: replace the loaded filter bank, reseal and adjust the airlock door, restore the return grille to its original free area, and rebalance the room against the original commissioning setpoints rather than whatever the drifted current state suggested. We requalified with a fresh recovery time test and a short particle count campaign, and it passed comfortably — the room had never needed new equipment, only its original condition restored and documented.',
      'The client is now on a structured maintenance agreement with us rather than an ad hoc one, specifically so the next undocumented change gets caught in a quarterly review rather than by an inspector.',
    ],
    quote:
      'Nothing had alarmed and nothing had broken — on a facility this age, that is usually the tell that something has drifted, not the sign that nothing has.',
    takeaways: [
      'Undocumented layout changes are a common, quiet cause of long-term drift',
      'Compounding small issues (filter loading + a partial leak path) can pass individually while failing together',
      'Requalification restored the original design intent — it did not require new equipment',
    ],
  },
  {
    title: '21 CFR Part 11 and your environmental monitoring system',
    category: 'COMPLIANCE',
    excerpt:
      "Most environmental monitoring systems we inspect were bought for the sensors. Few were scoped for what an FDA inspector will actually ask to see.",
    date: '2026-06-04',
    author: 'Sarah Kowalski, P.E.',
    photo: pexels(32026165, 1000),
    intro:
      'An environmental monitoring system that logs temperature, humidity, and differential pressure is not automatically a Part 11-compliant record. Whether it qualifies depends on how the data is stored, who can touch it, and whether every touch is provable after the fact.',
    body: [
      "Part 11 rests on data integrity — the ALCOA+ principles: records need to be attributable to a specific person, legible, contemporaneous, original, and accurate, with an audit trail that captures who changed what, when, and why for anything altered after the original entry. An EMS that logs values but has no exportable, tamper-evident audit trail is generating data, not records an inspector will accept as evidence of control.",
      "The gaps we find most often on retrofits are almost never the sensors themselves. Shared logins are the single most common finding — if three technicians log in as 'operator', no record is attributable to a specific person, full stop. Close behind that: alarm acknowledgements with no requirement to record a reason, e-signatures that are just a typed name with no password re-entry, and historical data that lives only in a proprietary format the software vendor can export but nobody on site actually knows how to.",
      'Scoping a retrofit properly means auditing the software configuration, not just adding sensors: individual user accounts with role-based permissions, a genuine audit trail export, password-based e-signature on any GxP-relevant action, and a documented backup and archival procedure that survives a server replacement. None of it is expensive to fix. All of it has to be found before an inspection, not during one.',
    ],
    quote:
      "Three technicians logging in as 'operator' means no record in the system is attributable to a specific person — the single most common finding we make.",
    takeaways: [
      'Data integrity, not sensor accuracy, is what Part 11 compliance actually turns on',
      'Individual logins and a genuine audit trail export are non-negotiable, not nice-to-haves',
      'Scope a retrofit as a software and process audit, not just a sensor upgrade',
    ],
  },
  {
    title: 'A filter change programme that survives an audit',
    category: 'MAINTENANCE',
    excerpt:
      "A calendar reminder is not a filter change programme. What an auditor wants to see is a trail that proves the room stayed in spec the whole time.",
    date: '2026-05-21',
    author: 'Michael Reyes',
    photo: pexels(32032996, 1000),
    intro:
      'We take over maintenance contracts from facilities where filters were changed on a fixed calendar schedule regardless of actual loading, with a paper log that says little more than a date and an initial. It passes casually. It does not survive a real audit.',
    body: [
      'Filters should be changed against measured loading — rising differential pressure across the bank — not a blanket calendar interval, because two identical filters in two different rooms can load at very different rates depending on process, occupancy, and upstream pre-filtration. A programme built purely on hours-run or a fixed calendar date either wastes good filter life or leaves a loaded filter in place past the point where airflow and recovery time have already started to suffer, which is exactly the drift we cover in a companion piece on cascade pressure.',
      'Every replacement needs a documented trail: the differential pressure reading that triggered it, the new filter serial number and its factory certificate, a post-install DOP/PAO leak scan with point-by-point data, and the training record of the technician who performed the change — gowning, no bypassing an interlock to get access, correct torque sequence on the clamping frame. Spare filters themselves need traceability back to a supplier certificate of conformance, stored in a way that protects the media and gasket before installation.',
      "None of this needs to be complicated. It needs to exist, and it needs to be the same technician's signature style and the same format every time rather than whatever the shift happened to write down. An auditor who can pull one filter's full history — trigger, replacement, scan, technician training — in under two minutes is looking at a programme they will sign off. One that requires cross-referencing three separate logbooks is not.",
    ],
    quote:
      'An auditor who can pull one filter’s full history — trigger, replacement, scan, technician — in under two minutes is looking at a programme they will sign off.',
    takeaways: [
      'Trigger changes on measured differential pressure, not a blanket calendar interval',
      'Every change needs a linked trail: trigger reading, new filter certificate, post-install scan, technician record',
      'Consistency of format matters as much as the data itself when an auditor is tracing history',
    ],
  },
];

function readTimeFor(post) {
  const words = [post.intro, ...post.body].join(' ').trim().split(/\s+/).length;
  return `${Math.max(3, Math.round(words / 200))} min read`;
}

export const INSIGHTS = RAW.map((p) => ({
  ...p,
  slug: slugify(p.title),
  readTime: readTimeFor(p),
  author: byline(p.author),
}));

export function getInsight(slug) {
  return INSIGHTS.find((p) => p.slug === slug);
}

export function getRelatedInsights(post, count = 3) {
  const sameCategory = INSIGHTS.filter((p) => p.category === post.category && p.slug !== post.slug);
  const rest = INSIGHTS.filter((p) => p.category !== post.category && p.slug !== post.slug);
  return [...sameCategory, ...rest].slice(0, count);
}

export function formatInsightDate(iso) {
  return new Date(`${iso}T00:00:00`)
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .toUpperCase();
}
