import { esc, external, sectionLabel, buttonClasses, telHref } from './utils.js';
import { icon } from './icons.js';

const inputClasses =
  'mt-2 block w-full border-0 border-b border-line bg-transparent px-0 py-3 text-lg font-light text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-0';
const labelClasses = 'text-xs font-semibold uppercase tracking-[0.3em] text-muted';

/** Underline form beside the details, then a full-width booking bar. */
export function Contact({ contact, booking }) {
  const { form } = contact;
  const f = form.fields;

  return `
<section id="contact" class="scroll-mt-16 border-t border-line bg-paper px-5 pt-20 md:px-10 md:pt-28 lg:scroll-mt-0" aria-labelledby="contact-heading">
  ${sectionLabel(contact.label)}
  <h2 id="contact-heading" class="mt-6 font-heading text-6xl leading-[0.9] tracking-wide text-ink md:text-9xl">${esc(contact.heading)}</h2>
  <div class="mt-14 grid gap-16 lg:grid-cols-12">
    <form name="${esc(form.name)}" method="POST" action="/" data-netlify="true" netlify-honeypot="bot-field" class="space-y-8 lg:col-span-7" data-contact-form>
      <input type="hidden" name="form-name" value="${esc(form.name)}" />
      <p class="hidden" aria-hidden="true">
        <label>${esc(form.honeypotLabel)} <input name="bot-field" tabindex="-1" autocomplete="off" /></label>
      </p>
      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <label for="contact-name" class="${labelClasses}">${esc(f.name.label)}</label>
          <input id="contact-name" name="name" type="text" autocomplete="name" required class="${inputClasses}" placeholder="${esc(f.name.placeholder)}" />
        </div>
        <div>
          <label for="contact-email" class="${labelClasses}">${esc(f.email.label)}</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" required class="${inputClasses}" placeholder="${esc(f.email.placeholder)}" />
        </div>
      </div>
      <div>
        <label for="contact-phone" class="${labelClasses}">${esc(f.phone.label)}</label>
        <input id="contact-phone" name="phone" type="tel" autocomplete="tel" class="${inputClasses}" placeholder="${esc(f.phone.placeholder)}" />
      </div>
      <div>
        <label for="contact-message" class="${labelClasses}">${esc(f.message.label)}</label>
        <textarea id="contact-message" name="message" rows="4" required class="${inputClasses} resize-y" placeholder="${esc(f.message.placeholder)}"></textarea>
      </div>
      <button type="submit" class="${buttonClasses.solid} disabled:opacity-60" data-submit data-label="${esc(form.submitLabel)}" data-sending-label="${esc(form.sendingLabel)}">${esc(form.submitLabel)} ${icon('arrowRight', 'h-4 w-4')}</button>
      <p class="hidden border-l-2 border-accent pl-4 text-base text-ink" role="status" data-form-success>${esc(form.successMessage)}</p>
      <p class="hidden border-l-2 border-accent pl-4 text-base text-ink" role="alert" data-form-error>${esc(form.errorMessage)}</p>
      <p class="text-sm text-muted">${esc(form.privacyNote)} <a href="/privacy/" class="underline underline-offset-4">${esc(form.privacyLabel)}</a></p>
    </form>
    <div class="lg:col-span-4 lg:col-start-9">
      <p class="text-lg font-light leading-relaxed text-muted">${esc(contact.intro)}</p>
      <dl class="mt-10 space-y-8">
        <div><dt class="${labelClasses}">${esc(contact.detailsLabels.email)}</dt><dd class="mt-2"><a href="mailto:${esc(contact.email)}" class="text-xl text-ink hover:text-accent">${esc(contact.email)}</a></dd></div>
        <div><dt class="${labelClasses}">${esc(contact.detailsLabels.phone)}</dt><dd class="mt-2"><a href="${esc(telHref(contact.phone))}" class="text-xl text-ink hover:text-accent">${esc(contact.phone)}</a></dd></div>
        <div><dt class="${labelClasses}">${esc(contact.detailsLabels.studio)}</dt><dd class="mt-2 text-base font-light text-ink"><address class="not-italic">${esc(contact.address)}</address></dd></div>
      </dl>
    </div>
  </div>
  <div class="-mx-5 mt-24 border-t border-line md:-mx-10">
    <p class="sr-only">${esc(contact.bookingHeading)}</p>
    <a href="${esc(booking.url)}" ${external} class="group flex items-center justify-between gap-6 px-5 py-10 transition-colors hover:bg-accent md:px-10 md:py-14">
      <span class="font-heading text-5xl tracking-wide text-ink transition-colors group-hover:text-on-accent md:text-8xl">${esc(contact.bookingLabel)}</span>
      <span class="text-accent transition-all duration-300 group-hover:translate-x-2 group-hover:text-on-accent">${icon('arrowRight', 'h-12 w-12 md:h-20 md:w-20')}</span>
    </a>
  </div>
</section>`;
}
