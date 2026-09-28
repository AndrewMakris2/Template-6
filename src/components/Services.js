import { esc, external, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Expandable list: each service is a native <details> row that opens to show its description. */
export function Services({ services, booking }) {
  const rows = services.items
    .map(
      (s, i) => `
      <li class="border-b border-line">
        <details class="group"${i === 0 ? ' open' : ''}>
          <summary class="flex cursor-pointer list-none items-center gap-4 py-6 transition-colors hover:text-accent md:gap-8 [&::-webkit-details-marker]:hidden">
            <span class="w-8 text-xs tabular-nums text-muted" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
            <h3 class="flex-1 font-heading text-3xl tracking-wide text-ink transition-colors group-hover:text-accent md:text-5xl">${esc(s.name)}</h3>
            <span class="hidden text-xs uppercase tracking-[0.2em] text-muted sm:block"><span class="sr-only">${esc(services.columnLabels.duration)}: </span>${esc(s.duration)}</span>
            <span class="font-heading text-3xl tracking-wide text-accent md:text-4xl"><span class="sr-only">${esc(services.columnLabels.price)}: </span>${esc(s.price)}</span>
            <span class="text-muted transition-transform duration-300 group-open:rotate-45" aria-hidden="true">${icon('plus', 'h-6 w-6')}</span>
          </summary>
          <div class="flex flex-col gap-4 pb-8 pl-12 md:flex-row md:items-center md:justify-between md:pl-16">
            <p class="max-w-xl text-base font-light leading-relaxed text-muted">${s.description ? esc(s.description) : ''} <span class="text-xs uppercase tracking-[0.2em] sm:hidden">&middot; ${esc(s.duration)}</span></p>
            <a href="${esc(booking.url)}" ${external} class="shrink-0 ${buttonClasses.outline} !px-6 !py-3">${esc(services.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
          </div>
        </details>
      </li>`,
    )
    .join('');

  return `
<section id="services" class="scroll-mt-16 border-t border-line bg-cream px-5 py-20 md:px-10 md:py-28 lg:scroll-mt-0" aria-labelledby="services-heading">
  <div class="grid gap-8 lg:grid-cols-12">
    <div class="lg:col-span-4">
      ${sectionLabel(services.label)}
      <h2 id="services-heading" class="mt-6 font-heading text-6xl leading-[0.9] tracking-wide text-ink md:text-8xl">${esc(services.heading)}</h2>
      <p class="mt-6 max-w-sm text-base font-light leading-relaxed text-muted">${esc(services.intro)}</p>
    </div>
    <div class="lg:col-span-8">
      <ul class="border-t border-line">${rows}</ul>
      ${services.note ? `<p class="mt-8 text-sm font-light italic text-muted">${esc(services.note)}</p>` : ''}
    </div>
  </div>
</section>`;
}
