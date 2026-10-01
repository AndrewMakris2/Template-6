import { esc, sectionLabel } from './utils.js';

/** Optional booking policies. Shown only when `policies.enabled` is true. */
export function Policies({ policies }) {
  if (!policies?.enabled) return '';
  const items = policies.items
    .map(
      (p) => `
      <div class="border-t border-line pt-6">
        <dt class="font-heading text-3xl tracking-wide text-ink md:text-4xl">${esc(p.title)}</dt>
        <dd class="mt-3 max-w-md text-base font-light leading-relaxed text-muted">${esc(p.text)}</dd>
      </div>`,
    )
    .join('');

  return `
<section id="policies" class="scroll-mt-16 border-t border-line bg-cream px-5 py-20 md:px-10 md:py-28 lg:scroll-mt-0" aria-labelledby="policies-heading">
  <div class="grid gap-8 lg:grid-cols-12">
    <div class="lg:col-span-4">
      ${sectionLabel(policies.label)}
      <h2 id="policies-heading" class="mt-6 font-heading text-6xl leading-[0.9] tracking-wide text-ink md:text-7xl">${esc(policies.heading)}</h2>
    </div>
    <dl class="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">${items}</dl>
  </div>
</section>`;
}
