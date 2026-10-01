import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

/** Optional FAQ as expandable rows (native <details>), matching Services. Shown only when `faq.enabled` is true. */
export function Faq({ faq }) {
  if (!faq?.enabled) return '';
  const rows = faq.items
    .map(
      (item, i) => `
      <li class="border-b border-line">
        <details class="group">
          <summary class="flex cursor-pointer list-none items-center gap-4 py-6 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:gap-8 [&::-webkit-details-marker]:hidden">
            <span class="w-8 text-xs tabular-nums text-muted" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
            <span class="flex-1 font-heading text-2xl tracking-wide text-ink transition-colors group-hover:text-accent md:text-4xl">${esc(item.q)}</span>
            <span class="text-muted transition-transform duration-300 group-open:rotate-45" aria-hidden="true">${icon('plus', 'h-6 w-6')}</span>
          </summary>
          <p class="max-w-2xl pb-8 pl-12 text-base font-light leading-relaxed text-muted md:pl-16">${esc(item.a)}</p>
        </details>
      </li>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-16 border-t border-line bg-paper px-5 py-20 md:px-10 md:py-28 lg:scroll-mt-0" aria-labelledby="faq-heading">
  <div class="grid gap-8 lg:grid-cols-12">
    <div class="lg:col-span-4">
      ${sectionLabel(faq.label)}
      <h2 id="faq-heading" class="mt-6 font-heading text-6xl leading-[0.9] tracking-wide text-ink md:text-7xl">${esc(faq.heading)}</h2>
    </div>
    <ul class="border-t border-line lg:col-span-8">${rows}</ul>
  </div>
</section>`;
}
