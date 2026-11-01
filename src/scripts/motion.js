// Site-wide GSAP motion layer. One module, imported once per page from
// BaseLayout, driving every generic interactive pattern via data attributes
// so individual components don't need their own GSAP wiring, plus a
// ScrollSmoother instance for inertia-style smooth scrolling on the whole
// page (skipped for prefers-reduced-motion — see initSmoothScroll below).
//
//   data-reveal            fade + rise in when scrolled into view
//   data-reveal-group      wraps a set of data-reveal-item children that
//                          stagger in together as one group
//   data-reveal-item       a member of a data-reveal-group
//   data-count             number counts up from 0 when scrolled into view
//                          (keeps whatever prefix/suffix text surrounds it,
//                          e.g. "180+", "1,850 m²", "24 / 7")
//
// Bespoke per-page interactions (accordions, tab panels, filters) import
// `gsap`/`ScrollTrigger` from this module directly rather than re-importing
// the library, so the plugin is only ever registered once.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

gsap.defaults({ ease: 'power2.out', duration: 0.7 });

document.documentElement.classList.add('js-motion');

function parseNumber(str) {
  const match = str.match(/-?[\d,]+(\.\d+)?/);
  if (!match) return null;
  return { value: parseFloat(match[0].replace(/,/g, '')), match };
}

function formatLike(original, match, value) {
  const raw = match[0];
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
  let formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  if (raw.includes(',')) formatted = Number(formatted).toLocaleString('en-US');
  return original.slice(0, match.index) + formatted + original.slice(match.index + raw.length);
}

function initReveal() {
  const singles = gsap.utils.toArray('[data-reveal]');
  const groups = gsap.utils.toArray('[data-reveal-group]');
  const items = gsap.utils.toArray('[data-reveal-item]');

  if (reduceMotion) {
    gsap.set([...singles, ...items, ...groups], { autoAlpha: 1, y: 0 });
    return;
  }

  if (singles.length) {
    gsap.set(singles, { autoAlpha: 0, y: 28 });
    ScrollTrigger.batch(singles, {
      start: 'top 87%',
      once: true,
      onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' }),
    });
  }

  if (items.length) gsap.set(items, { autoAlpha: 0, y: 24 });

  // The group wrapper itself carries visible chrome (e.g. the dark divider
  // above the SCOPE list), so fade it in alongside its items instead of
  // leaving it fully opaque while the rows underneath cascade in.
  if (groups.length) gsap.set(groups, { autoAlpha: 0 });

  groups.forEach((group) => {
    const groupItems = group.querySelectorAll('[data-reveal-item]');
    if (!groupItems.length) return;
    ScrollTrigger.create({
      trigger: group,
      start: 'top 87%',
      once: true,
      onEnter: () => {
        gsap.to(group, { autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
        gsap.to(groupItems, { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.06, ease: 'power3.out' });
      },
    });
  });
}

// Per-letter "swap up" hover, shared by the header nav links and the
// footer link columns. `selector` matches trigger elements (an <a>, say)
// each containing a `.link-flip` well with two `.link-flip-row` children
// carrying identical text (see the `.link-flip` rules in global.css).
// Splits both rows into characters and staggers them upward together on
// hover/focus so the duplicate row rides in from below as the original
// exits above.
export function initLinkFlip(selector) {
  if (reduceMotion || window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll(selector).forEach((link) => {
    const rows = link.querySelectorAll('.link-flip-row');
    if (rows.length !== 2) return;
    const [topRow, bottomRow] = rows;

    const topChars = new SplitText(topRow, { type: 'chars', charsClass: 'char' }).chars;
    const bottomChars = new SplitText(bottomRow, { type: 'chars', charsClass: 'char' }).chars;

    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.4, ease: 'power3.inOut' } });
    tl.to(topChars, { yPercent: -100, stagger: 0.02 }, 0);
    tl.to(bottomChars, { yPercent: -100, stagger: 0.02 }, 0);

    link.addEventListener('mouseenter', () => tl.play());
    link.addEventListener('mouseleave', () => tl.reverse());
    link.addEventListener('focus', () => tl.play());
    link.addEventListener('blur', () => tl.reverse());
  });
}

function initCounters() {
  if (reduceMotion) return;

  gsap.utils.toArray('[data-count]').forEach((el) => {
    const original = el.textContent.trim();
    const parsed = parseNumber(original);
    if (!parsed) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: parsed.value,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = formatLike(original, parsed.match, obj.v);
          },
          onComplete: () => {
            el.textContent = original;
          },
        });
      },
    });
  });
}

function initSmoothScroll() {
  // Header/ticker and the progress bar live outside #smooth-wrapper (see
  // BaseLayout) specifically so they keep their normal sticky/fixed
  // behaviour untouched by the wrapper's transform.
  const wrapper = document.getElementById('smooth-wrapper');
  if (reduceMotion || !wrapper) return null;

  // ScrollSmoother pins that wrapper `position: fixed; inset: 0`, flush
  // with the real viewport's top edge — it has no idea the topbar+header
  // sit on top of it. Left alone, #smooth-content's first section (the
  // hero / PageMast on every page) starts at that same y0 and renders
  // partly underneath the opaque header. Reserve the header stack's
  // height as top padding on the content so it always clears it, and keep
  // it in sync since the topbar/header can reflow across breakpoints.
  const content = document.getElementById('smooth-content');
  const topbar = document.querySelector('.topbar');
  const header = document.querySelector('.site-header');

  function syncHeaderOffset() {
    if (!content) return;
    const headerH = (topbar?.offsetHeight ?? 0) + (header?.offsetHeight ?? 0);
    content.style.paddingTop = `${headerH}px`;
    ScrollTrigger.refresh();
  }

  syncHeaderOffset();
  window.addEventListener('resize', syncHeaderOffset);

  return ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1,
    effects: false,
  });
}

function initProgressBar() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' });
  if (reduceMotion) return;

  ScrollTrigger.create({
    start: 0,
    end: () => document.documentElement.scrollHeight - window.innerHeight,
    scrub: 0.3,
    onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
  });
}

function initMagneticButtons() {
  if (reduceMotion || window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.btn').forEach((btn) => {
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.45, ease: 'power3' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.45, ease: 'power3' });

    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.22);
      yTo((e.clientY - r.top - r.height / 2) * 0.32);
    });
    btn.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

function initCardHover() {
  if (reduceMotion || window.matchMedia('(pointer: coarse)').matches) return;

  document
    .querySelectorAll('.pcard, .icard, .proj-card, .team-card, .row, .sector, .cert, .panel, .gate')
    .forEach((card) => {
      const img = card.querySelector('img');
      if (!img) return;
      const xTo = gsap.quickTo(img, 'scaleX', { duration: 0.6, ease: 'power2.out' });
      const yTo = gsap.quickTo(img, 'scaleY', { duration: 0.6, ease: 'power2.out' });
      card.addEventListener('mouseenter', () => {
        xTo(1.06);
        yTo(1.06);
      });
      card.addEventListener('mouseleave', () => {
        xTo(1);
        yTo(1);
      });
    });
}

// Created first so every ScrollTrigger below (reveal, counters, progress
// bar) registers against the smoothed scroller from the start.
initSmoothScroll();
initReveal();
initCounters();
initProgressBar();
initMagneticButtons();
initCardHover();

// Re-exported so per-page scripts (accordions, filters, tab crossfades,
// the header's nav-link letter stagger, deep-linked anchor scrolls) share
// this single registered instance instead of importing gsap again.
export { gsap, ScrollTrigger, ScrollSmoother, SplitText };
