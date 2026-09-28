/**
 * Shared helpers for components. Structural only — no content, no colors.
 */

/** Escape a value for safe use in HTML text or attribute values. */
export function esc(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Attributes for links that leave the site. */
export const external = 'target="_blank" rel="noopener noreferrer"';

/** Section label: accent rule + uppercase text. */
export function sectionLabel(text) {
  return `<p class="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent"><span class="h-px w-8 bg-accent" aria-hidden="true"></span>${esc(text)}</p>`;
}

/** Turn a display phone number into a tel: href. */
export function telHref(phone) {
  return `tel:${String(phone).replace(/[^\d+]/g, '')}`;
}

/** Shared button styles — sharp, uppercase, high contrast on dark. */
export const buttonClasses = {
  solid:
    'inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-on-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  accent:
    'inline-flex items-center justify-center gap-3 bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-on-accent transition-colors duration-300 hover:bg-ink hover:text-on-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
  outline:
    'inline-flex items-center justify-center gap-3 border border-ink/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-on-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
};
