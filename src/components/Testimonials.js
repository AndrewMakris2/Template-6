import { esc, sectionLabel } from './utils.js';

/** Quote cards that stick and pile on top of each other as you scroll. */
export function Testimonials({ testimonials }) {
  const cards = testimonials.items
    .map(
      (t, i) => `
      <li class="sticky" style="top: calc(6rem + ${i * 1.75}rem)">
        <figure class="flex min-h-[20rem] flex-col justify-between border border-line bg-cream p-8 shadow-2xl shadow-black/60 md:min-h-[24rem] md:p-14">
          <div class="flex items-start justify-between gap-6">
            <span class="font-heading text-8xl leading-[0.7] text-accent" aria-hidden="true">&ldquo;</span>
            <span class="font-heading text-2xl tracking-wide text-muted" aria-hidden="true">${String(i + 1).padStart(2, '0')} / ${String(testimonials.items.length).padStart(2, '0')}</span>
          </div>
          <blockquote class="mt-6 text-2xl font-light leading-snug text-ink md:text-4xl md:leading-snug"><p>${esc(t.quote)}</p></blockquote>
          <figcaption class="mt-10 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-ink">
            <span class="h-px w-8 bg-accent" aria-hidden="true"></span>${esc(t.name)}${t.detail ? `<span class="font-normal normal-case tracking-normal text-muted">${esc(t.detail)}</span>` : ''}
          </figcaption>
        </figure>
      </li>`,
    )
    .join('');

  return `
<section id="testimonials" class="scroll-mt-16 border-t border-line bg-paper px-5 py-20 md:px-10 md:py-28 lg:scroll-mt-0" aria-labelledby="testimonials-heading">
  ${sectionLabel(testimonials.label)}
  <h2 id="testimonials-heading" class="mt-6 font-heading text-6xl tracking-wide text-ink md:text-8xl">${esc(testimonials.heading)}</h2>
  <ul class="mx-auto mt-14 max-w-4xl space-y-10 pb-10">${cards}</ul>
</section>`;
}
