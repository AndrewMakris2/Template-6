import { esc, sectionLabel } from './utils.js';

/** Sticky full-height portrait on one side; story and outlined specialties scroll past it. */
export function About({ about }) {
  const bio = about.bio.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = about.specialties
    .map(
      (t) =>
        `<li class="font-heading text-6xl leading-[0.95] tracking-wide text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_var(--color-ink)] hover:text-ink md:text-7xl xl:text-8xl">${esc(t)}</li>`,
    )
    .join('');

  return `
<section id="about" class="scroll-mt-16 border-t border-line bg-paper lg:scroll-mt-0" aria-labelledby="about-heading">
  <div class="grid lg:grid-cols-2">
    <figure class="relative h-[70svh] lg:sticky lg:top-0 lg:h-svh">
      <img src="${esc(about.image.src)}" alt="${esc(about.image.alt)}" class="h-full w-full object-cover grayscale" loading="lazy" decoding="async" width="900" height="1125" />
      <div class="absolute inset-0 bg-gradient-to-t from-paper/60 to-transparent" aria-hidden="true"></div>
    </figure>
    <div class="px-5 py-20 md:px-12 md:py-28 lg:py-32 xl:px-20">
      ${sectionLabel(about.label)}
      <h2 id="about-heading" class="mt-8 font-heading text-5xl leading-[0.95] tracking-wide text-ink md:text-7xl">${esc(about.heading)}</h2>
      <div class="mt-10 max-w-xl space-y-5 text-lg font-light leading-relaxed text-muted">${bio}</div>
      <h3 class="mt-20 text-xs font-semibold uppercase tracking-[0.35em] text-muted">${esc(about.specialtiesLabel)}</h3>
      <ul class="mt-6 space-y-2">${tags}</ul>
    </div>
  </div>
</section>`;
}
