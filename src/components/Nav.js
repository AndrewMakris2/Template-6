import { esc, external, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/**
 * Fixed left sidebar on desktop (logo, stacked numbered links, book button,
 * socials); a slim top bar with a full-screen menu on mobile. The link for the
 * section in view is highlighted by scripts/spy.js.
 */
export function Nav({ business, nav, social, booking }) {
  const num = (i) => String(i + 1).padStart(2, '0');
  const links = nav.links
    .map(
      (l, i) =>
        `<li><a href="${esc(l.href)}" class="group flex items-center gap-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink aria-[current=true]:text-ink" data-spy-link><span class="text-[0.65rem] tabular-nums text-muted/70 group-aria-[current=true]:text-accent">${num(i)}</span><span class="h-px w-4 bg-line transition-all group-hover:w-8 group-hover:bg-ink group-aria-[current=true]:w-8 group-aria-[current=true]:bg-accent" aria-hidden="true"></span>${esc(l.label)}</a></li>`,
    )
    .join('');
  const mobileLinks = nav.links
    .map(
      (l, i) =>
        `<li class="border-b border-line"><a href="${esc(l.href)}" class="flex items-baseline justify-between py-4 font-heading text-5xl tracking-wide text-ink transition-colors hover:text-accent" data-menu-link>${esc(l.label)}<span class="font-body text-xs tabular-nums text-muted">${num(i)}</span></a></li>`,
    )
    .join('');
  const socials = social
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-accent" aria-label="${esc(s.label)}">${icon(s.platform, 'h-[18px] w-[18px]')}</a></li>`,
    )
    .join('');

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink">${esc(nav.skipLinkLabel)}</a>
<header class="sticky top-0 z-50 border-b border-line lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-b-0 lg:border-r" data-header>
  <div class="absolute inset-0 -z-10 bg-paper/90 backdrop-blur-md lg:bg-paper" aria-hidden="true"></div>
  <nav class="flex h-16 items-center justify-between px-5 lg:h-full lg:flex-col lg:items-stretch lg:justify-start lg:px-8 lg:py-10" aria-label="Primary">
    <a href="#top" class="font-heading text-3xl leading-none tracking-wide text-ink lg:text-5xl">${esc(business.name)}</a>
    <p class="mt-3 hidden text-xs leading-relaxed text-muted lg:block">${esc(business.location)}</p>

    <ul class="mt-14 hidden lg:block">${links}</ul>

    <div class="mt-auto hidden lg:block">
      <a href="${esc(booking.url)}" ${external} class="w-full whitespace-nowrap ${buttonClasses.accent} !px-4 !tracking-[0.18em]">${esc(booking.label)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
      <ul class="mt-6 flex gap-1">${socials}</ul>
    </div>

    <button type="button" class="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(nav.menuOpenLabel)}" data-menu-toggle data-label-open="${esc(nav.menuOpenLabel)}" data-label-close="${esc(nav.menuCloseLabel)}">
      <span data-icon-open>${icon('menu', 'h-6 w-6')}</span>
      <span data-icon-close hidden>${icon('close', 'h-6 w-6')}</span>
    </button>
  </nav>

  <div id="mobile-menu" class="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-paper px-5 pb-10 pt-4 lg:hidden" hidden data-menu>
    <ul>${mobileLinks}</ul>
    <a href="${esc(booking.url)}" ${external} class="mt-8 w-full ${buttonClasses.accent}">${esc(booking.label)} ${icon('arrowUpRight', 'h-4 w-4')}</a>
    <ul class="mt-6 flex justify-center gap-2">${socials}</ul>
  </div>
</header>`;
}
