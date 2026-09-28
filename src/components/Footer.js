import { esc, external, telHref } from './utils.js';
import { icon } from './icons.js';

/** Slim dark footer: one row of info, then legal. */
export function Footer({ business, contact, social, footer }) {
  const year = new Date().getFullYear();
  const hours = footer.hours.map((h) => `<div class="flex justify-between gap-6"><dt>${esc(h.days)}</dt><dd class="text-ink">${esc(h.time)}</dd></div>`).join('');
  const socials = social
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" ${external} class="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-accent hover:text-accent" aria-label="${esc(s.label)}">${icon(s.platform, 'h-[18px] w-[18px]')}</a></li>`,
    )
    .join('');
  const heading = 'text-xs font-semibold uppercase tracking-[0.3em] text-accent';

  return `
<footer class="border-t border-line bg-cream text-muted">
  <div class="grid gap-12 px-5 py-16 md:grid-cols-4 md:px-10">
    <div>
      <a href="#top" class="font-heading text-4xl tracking-wide text-ink">${esc(business.name)}</a>
      <p class="mt-3 text-sm font-light">${esc(business.tagline)}</p>
    </div>
    <div>
      <h2 class="${heading}">${esc(footer.hoursHeading)}</h2>
      <dl class="mt-4 max-w-xs space-y-1 text-sm">${hours}</dl>
    </div>
    <div>
      <h2 class="${heading}">${esc(footer.contactHeading)}</h2>
      <address class="mt-4 space-y-1 text-sm not-italic">
        <p>${esc(contact.address)}</p>
        <p><a href="mailto:${esc(contact.email)}" class="text-ink hover:text-accent">${esc(contact.email)}</a></p>
        <p><a href="${esc(telHref(contact.phone))}" class="text-ink hover:text-accent">${esc(contact.phone)}</a></p>
      </address>
    </div>
    <div>
      <h2 class="${heading}">${esc(footer.socialHeading)}</h2>
      <ul class="mt-4 flex gap-2">${socials}</ul>
    </div>
  </div>
  <div class="flex flex-col gap-3 border-t border-line px-5 py-6 text-xs uppercase tracking-[0.2em] sm:flex-row sm:justify-between md:px-10">
    <p>&copy; ${year} ${esc(footer.copyrightName)}. ${esc(footer.copyrightSuffix)}</p>
    <a href="#top" class="inline-flex items-center gap-2 text-ink hover:text-accent">${esc(footer.backToTopLabel)} ${icon('arrowUp', 'h-4 w-4')}</a>
  </div>
</footer>`;
}
