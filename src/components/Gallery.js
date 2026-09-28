import { esc, sectionLabel } from './utils.js';
import { icon } from './icons.js';

/**
 * Rows of two that alternate wide/narrow (8+4, then 4+8). Photos are
 * monochrome until hovered. A lone final image spans the full row.
 */
export function Gallery({ gallery }) {
  const n = gallery.images.length;
  const span = (i) => {
    if (i === n - 1 && n % 2 === 1) return 'md:col-span-12';
    const row = Math.floor(i / 2);
    const first = i % 2 === 0;
    return (row % 2 === 0) === first ? 'md:col-span-8' : 'md:col-span-4';
  };
  const items = gallery.images
    .map(
      (img, i) => `
      <li class="${span(i)}">
        <button type="button" class="group relative block aspect-[4/5] w-full overflow-hidden bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:aspect-auto md:h-[26rem] xl:h-[32rem]" data-lightbox-item="${i}" data-full="${esc(img.full || img.src)}" aria-label="${esc(`${gallery.openImageLabel}: ${img.alt}`)}">
          <img src="${esc(img.src)}" alt="${esc(img.alt)}" class="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" loading="lazy" decoding="async" />
          <span class="absolute bottom-4 left-4 font-heading text-2xl tracking-wide text-ink/80 transition-colors group-hover:text-accent" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        </button>
      </li>`,
    )
    .join('');

  return `
<section id="gallery" class="scroll-mt-16 border-t border-line bg-paper px-5 py-20 md:px-10 md:py-28 lg:scroll-mt-0" aria-labelledby="gallery-heading">
  <div class="flex flex-wrap items-end justify-between gap-6">
    <div>
      ${sectionLabel(gallery.label)}
      <h2 id="gallery-heading" class="mt-6 font-heading text-6xl tracking-wide text-ink md:text-8xl">${esc(gallery.heading)}</h2>
    </div>
  </div>
  <ul class="mt-12 grid gap-3 md:grid-cols-12">${items}</ul>

  <dialog class="lightbox m-0 h-full max-h-none w-full max-w-none bg-paper/95 p-0 backdrop:bg-transparent" aria-label="${esc(gallery.heading)}" data-lightbox>
    <div class="flex h-full w-full items-center justify-center p-4 md:p-16" data-lightbox-backdrop>
      <img src="" alt="" class="max-h-full max-w-full object-contain" data-lightbox-img />
    </div>
    <button type="button" class="absolute right-3 top-3 inline-flex h-12 w-12 items-center justify-center text-ink hover:text-accent" aria-label="${esc(gallery.lightboxCloseLabel)}" data-lightbox-close>${icon('close', 'h-7 w-7')}</button>
    <button type="button" class="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ink hover:text-accent md:left-6" aria-label="${esc(gallery.lightboxPrevLabel)}" data-lightbox-prev>${icon('chevronLeft', 'h-8 w-8')}</button>
    <button type="button" class="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ink hover:text-accent md:right-6" aria-label="${esc(gallery.lightboxNextLabel)}" data-lightbox-next>${icon('chevronRight', 'h-8 w-8')}</button>
    <p class="absolute bottom-4 left-1/2 -translate-x-1/2 font-heading text-xl tracking-wide text-ink/70" aria-live="polite" data-lightbox-counter></p>
  </dialog>
</section>`;
}
