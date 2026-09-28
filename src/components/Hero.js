import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Full-screen, film-grain photo with the name set enormous along the bottom. */
export function Hero({ hero, booking }) {
  return `
<section id="top" class="grain relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-paper lg:min-h-svh" aria-labelledby="hero-heading">
  <img src="${esc(hero.image.src)}" alt="${esc(hero.image.alt)}" class="absolute inset-0 -z-10 h-full w-full object-cover opacity-60 grayscale contrast-125" fetchpriority="high" decoding="async" />
  <div class="absolute inset-0 -z-10 bg-gradient-to-t from-paper via-paper/40 to-paper/10" aria-hidden="true"></div>

  <div class="w-full px-5 pb-10 md:px-10 md:pb-14">
    <p class="text-xs font-semibold uppercase tracking-[0.35em] text-accent">${esc(hero.eyebrow)}</p>
    <h1 id="hero-heading" class="mt-4 font-heading text-[clamp(4.5rem,17vw,16rem)] leading-[0.82] tracking-tight text-ink">${esc(hero.heading)}</h1>
    <div class="mt-8 flex flex-col gap-8 border-t border-ink/20 pt-8 md:flex-row md:items-end md:justify-between">
      <p class="max-w-md text-lg font-light leading-relaxed text-ink/85 md:text-xl">${esc(hero.tagline)}</p>
      <div class="flex flex-wrap gap-3">
        <a href="${esc(booking.url)}" ${external} class="${buttonClasses.solid}">${esc(hero.ctaLabel)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
        <a href="${esc(hero.secondaryCtaHref)}" class="${buttonClasses.outline}">${esc(hero.secondaryCtaLabel)}</a>
      </div>
    </div>
  </div>
</section>`;
}
