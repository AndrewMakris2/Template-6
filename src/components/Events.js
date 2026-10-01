import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Optional bridal / events packages as numbered rows. Shown only when `events.enabled` is true. */
export function Events({ events }) {
  if (!events?.enabled) return '';
  const rows = events.packages
    .map(
      (p, i) => `
      <li class="flex items-start gap-4 border-b border-line py-6 md:gap-8">
        <span class="w-8 pt-2 text-xs tabular-nums text-muted" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <div class="flex-1">
          <h3 class="font-heading text-3xl tracking-wide text-ink md:text-5xl">${esc(p.name)}</h3>
          ${p.description ? `<p class="mt-2 max-w-xl text-base font-light leading-relaxed text-muted">${esc(p.description)}</p>` : ''}
        </div>
        <p class="text-right font-heading text-3xl tracking-wide text-accent md:text-4xl">${esc(p.price)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="events" class="scroll-mt-16 border-t border-line bg-paper px-5 py-20 md:px-10 md:py-28 lg:scroll-mt-0" aria-labelledby="events-heading">
  <div class="grid gap-8 lg:grid-cols-12">
    <div class="lg:col-span-4">
      ${sectionLabel(events.label)}
      <h2 id="events-heading" class="mt-6 font-heading text-6xl leading-[0.9] tracking-wide text-ink md:text-8xl">${esc(events.heading)}</h2>
      <p class="mt-6 max-w-sm text-base font-light leading-relaxed text-muted">${esc(events.intro)}</p>
    </div>
    <div class="lg:col-span-8">
      <ul class="border-t border-line">${rows}</ul>
      ${events.note ? `<p class="mt-8 text-sm font-light italic text-muted">${esc(events.note)}</p>` : ''}
      <a href="#contact" class="mt-10 ${buttonClasses.outline}">${esc(events.ctaLabel)} ${icon('arrowRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
