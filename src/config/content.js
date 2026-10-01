/**
 * ============================================================================
 *  CONTENT — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every piece of text, every link, and every image path on the site comes
 *  from this file. Components never hardcode copy — they read it from here.
 *
 *  Everything below is PLACEHOLDER content. Each placeholder is marked with
 *  `// TODO: replace with real client content`. Search for "TODO" before
 *  launching a client site and make sure none are left.
 *
 *  Images:
 *    Placeholders point at picsum.photos. For a real client, drop their photos
 *    into /public/images and reference them here with root-relative paths,
 *    e.g.  src: '/images/hero.jpg'   (files in /public are served from "/").
 *    Every image needs meaningful `alt` text describing the photo.
 * ============================================================================
 */

export const content = {
  // --------------------------------------------------------------------------
  // SEO & SITE META — used for <title>, meta description and Open Graph tags
  // --------------------------------------------------------------------------
  site: {
    lang: 'en',
    // Full production URL, no trailing slash. Used for canonical + og:url.
    url: 'https://hairstylist-template-6.netlify.app', // Template 6 demo URL — TODO: replace with real client content
    title: 'Nico Vance — Fades, Editorial Cuts & Grooming, Brooklyn', // TODO: replace with real client content
    description:
      'Brooklyn barber and stylist known for razor-clean fades, editorial cuts and beard design, in a moody one-chair studio. Book online.', // TODO: replace with real client content
    // Absolute URL recommended for social previews (1200×630 works best).
    ogImage: 'https://picsum.photos/seed/t6-og/1200/630', // TODO: replace with real client content
    ogImageAlt: 'Placeholder: sharp skin fade photographed in low, dramatic light', // TODO: replace with real client content
  },

  // --------------------------------------------------------------------------
  // BUSINESS BASICS
  // --------------------------------------------------------------------------
  business: {
    name: 'Nico Vance', // TODO: replace with real client content — shown as the text logo
    tagline: 'Sharp cuts for people who notice the details.', // TODO: replace with real client content
    location: 'Brooklyn, New York', // TODO: replace with real client content
  },

  // External booking platform (StyleSeat, Vagaro, Booksy, Schedulicity, …).
  // The site never takes bookings itself — every "Book" button links here.
  booking: {
    url: 'https://styleseat.com/PLACEHOLDER', // TODO: replace with real client content
    label: 'Book a chair',
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — `href` must match a section id below
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Words', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: 'Barber & stylist — Brooklyn, NY', // TODO: replace with real client content
    heading: 'Nico Vance', // TODO: replace with real client content
    tagline: 'Sharp cuts for people who notice the details.', // TODO: replace with real client content
    ctaLabel: 'Book a chair',
    secondaryCtaLabel: 'See the work',
    secondaryCtaHref: '#gallery',
    image: {
      src: 'https://picsum.photos/seed/t6-hero/2000/1400', // TODO: replace with real client content
      alt: 'Placeholder: barber finishing a sharp fade under a single spotlight', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------------
  about: {
    label: 'About',
    heading: 'Ten years of clean lines and quiet confidence.', // TODO: replace with real client content
    // One string per paragraph.
    bio: [
      'I’m Nico. I started sweeping floors in a Bed-Stuy barbershop at sixteen and never left the chair. Today I run a one-chair studio in Williamsburg: low lights, good records, no rush.', // TODO: replace with real client content
      'Every cut starts with a conversation about your hair, your face shape and your routine. Then I get precise, so it looks as good on day twenty as it does walking out the door.', // TODO: replace with real client content
    ],
    specialtiesLabel: 'Specialties',
    specialties: ['Fades & tapers', 'Editorial cuts', 'Beard design'], // TODO: replace with real client content
    image: {
      src: 'https://picsum.photos/seed/t6-about/900/1125', // TODO: replace with real client content
      alt: 'Placeholder: portrait of the barber leaning against his chair in a dim studio', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // GALLERY — any number of images; 9+ recommended. `full` is the larger
  // version shown in the lightbox (falls back to `src` if omitted).
  // --------------------------------------------------------------------------
  gallery: {
    label: 'Work',
    heading: 'Recent cuts',
    lightboxCloseLabel: 'Close image',
    lightboxPrevLabel: 'Previous image',
    lightboxNextLabel: 'Next image',
    openImageLabel: 'Enlarge image', // prefixed to each image's alt for screen readers
    // TODO: replace with real client content — all 9 images below
    images: [
      { src: 'https://picsum.photos/seed/t6-g1/1200/900', full: 'https://picsum.photos/seed/t6-g1/2000/1500', alt: 'Placeholder: high skin fade with a textured crop' },
      { src: 'https://picsum.photos/seed/t6-g2/800/1000', full: 'https://picsum.photos/seed/t6-g2/1600/2000', alt: 'Placeholder: sculpted full beard with a crisp cheek line' },
      { src: 'https://picsum.photos/seed/t6-g3/800/1000', full: 'https://picsum.photos/seed/t6-g3/1600/2000', alt: 'Placeholder: classic side part with a low taper' },
      { src: 'https://picsum.photos/seed/t6-g4/1200/900', full: 'https://picsum.photos/seed/t6-g4/2000/1500', alt: 'Placeholder: editorial curly top with a burst fade' },
      { src: 'https://picsum.photos/seed/t6-g5/1200/900', full: 'https://picsum.photos/seed/t6-g5/2000/1500', alt: 'Placeholder: slicked-back undercut with a matte finish' },
      { src: 'https://picsum.photos/seed/t6-g6/800/1000', full: 'https://picsum.photos/seed/t6-g6/1600/2000', alt: 'Placeholder: hot towel shave in progress' },
      { src: 'https://picsum.photos/seed/t6-g7/800/1000', full: 'https://picsum.photos/seed/t6-g7/1600/2000', alt: 'Placeholder: buzz cut with a sharp line-up' },
      { src: 'https://picsum.photos/seed/t6-g8/1200/900', full: 'https://picsum.photos/seed/t6-g8/2000/1500', alt: 'Placeholder: shoulder-length scissor cut with soft layers' },
      { src: 'https://picsum.photos/seed/t6-g9/1200/900', full: 'https://picsum.photos/seed/t6-g9/2000/1500', alt: 'Placeholder: grey blending on a short textured cut' },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    label: 'Services',
    heading: 'Services & pricing',
    intro: 'Every service includes a consultation, a hot towel and a finish with product advice. Tap a service for details.', // TODO: replace with real client content
    columnLabels: { service: 'Service', duration: 'Duration', price: 'Price' },
    // TODO: replace with real client content — all services below
    items: [
      { name: 'Signature cut', description: 'Consultation, scissor and clipper cut, wash and style.', duration: '45 min', price: '$65' },
      { name: 'Skin fade', description: 'Seamless fade down to the skin, detailed with a straight razor.', duration: '45 min', price: '$60' },
      { name: 'Long scissor cut', description: 'Scissor-only cut for longer lengths and texture.', duration: '60 min', price: '$80' },
      { name: 'Beard sculpt', description: 'Shape, line and condition with a hot towel finish.', duration: '30 min', price: '$40' },
      { name: 'Hot towel shave', description: 'Traditional straight-razor shave with hot towels and balm.', duration: '45 min', price: '$55' },
      { name: 'Cut & beard', description: 'Signature cut plus a full beard sculpt.', duration: '75 min', price: '$95' },
      { name: 'Line-up', description: 'Edges and neckline cleaned up between cuts.', duration: '15 min', price: '$25' },
      { name: 'Grey blending', description: 'Subtle colour to soften grey while keeping it natural.', duration: '30 min', price: '$45' },
    ],
    note: 'Running late? Please call. Arrivals more than 15 minutes late may need to rebook.', // TODO: replace with real client content
    ctaLabel: 'Book a chair',
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    label: 'Words',
    heading: 'What clients say',
    // TODO: replace with real client content — all testimonials below
    items: [
      { quote: 'Best fade I’ve had in this city, and I’ve tried them all. Nico is meticulous without ever making it feel slow.', name: 'Andre W.', detail: 'Client since 2019' },
      { quote: 'The studio feels like a secret. Great music, zero small talk unless you want it, and a perfect cut every time.', name: 'Sam K.', detail: 'Editorial cut client' },
      { quote: 'He redesigned my beard and suddenly my whole face made sense. People ask who does it every week.', name: 'Jonah P.', detail: 'Beard design client' },
    ],
  },

  // --------------------------------------------------------------------------
  // OPTIONAL SECTIONS — hidden until `enabled: true`. When you switch one on,
  // also add it to nav.links if it should appear in the menu, e.g.
  // { label: 'FAQ', href: '#faq' }. Events sits after Services; Policies and
  // FAQ sit just before Contact.
  // --------------------------------------------------------------------------
  events: {
    enabled: false,
    label: 'Bridal & events',
    heading: 'For the big days.',
    intro: 'Wedding mornings, engagements and special occasions, in the studio or on location.', // TODO: replace with real client content
    // TODO: replace with real client content — all packages below
    packages: [
      { name: 'Bridal trial', price: '$150', description: 'A full run-through of your wedding-day look, about 90 minutes.' },
      { name: 'Wedding day', price: 'from $250', description: 'Styling on the morning, on location or in the studio.' },
      { name: 'Bridal party', price: 'from $95 each', description: 'Bridesmaids, mothers and anyone else getting ready with you.' },
    ],
    note: 'Travel within 20 miles is included. Dates book up early, so enquire as soon as you can.', // TODO: replace with real client content
    ctaLabel: 'Enquire about your date', // links to the contact form
  },

  policies: {
    enabled: false,
    label: 'Policies',
    heading: 'Good to know before you book.',
    // TODO: replace with real client content — all policies below
    items: [
      { title: 'Deposits', text: 'A 25% deposit secures your appointment and comes off your final bill.' },
      { title: 'Cancellations', text: 'Please give at least 48 hours’ notice to move or cancel. Late cancellations lose the deposit.' },
      { title: 'Running late', text: 'Arriving more than 15 minutes late may mean a shorter service or a new booking.' },
      { title: 'Colour services', text: 'New colour clients need a patch test at least 48 hours before their first appointment.' },
    ],
  },

  faq: {
    enabled: false,
    label: 'FAQ',
    heading: 'Questions, answered.',
    // TODO: replace with real client content — all questions below
    items: [
      { q: 'Do you offer consultations?', a: 'Yes. Free 15-minute consultations, in person or by video. Book one online or send a message.' },
      { q: 'How should I arrive?', a: 'With clean, dry hair unless your service includes a wash, plus any inspiration photos you love.' },
      { q: 'How long will my appointment take?', a: 'Each service lists a typical time. Colour and big changes can run longer, so plan a little extra.' },
      { q: 'How can I pay?', a: 'All major cards, Apple Pay and cash.' },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    label: 'Contact',
    heading: 'Pull up a chair.',
    intro: 'Questions about a cut, a group booking or a shoot? Send a message and I’ll reply within two business days.', // TODO: replace with real client content
    email: 'hello@example.com', // TODO: replace with real client content
    phone: '(718) 555-0149', // TODO: replace with real client content
    address: '245 Placeholder Ave, Brooklyn, NY 11211', // TODO: replace with real client content
    detailsLabels: { email: 'Email', phone: 'Phone', studio: 'Studio' },
    bookingHeading: 'Ready for a fresh cut?',
    bookingLabel: 'Book an appointment',
    form: {
      name: 'contact', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Name', placeholder: '' },
        email: { label: 'Email', placeholder: '' },
        phone: { label: 'Phone (optional)', placeholder: '' },
        message: { label: 'Message', placeholder: 'What can I help with?' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send message',
      sendingLabel: 'Sending…',
      successMessage: 'Message received. I’ll get back to you soon.',
      errorMessage: 'Sorry, something went wrong. Please try again, or email me directly.',
    },
  },

  // --------------------------------------------------------------------------
  // SOCIAL LINKS — `platform` picks the icon. Supported: instagram, facebook,
  // tiktok, pinterest, youtube, x. The first `instagram` entry also appears
  // in the nav. Remove any the client doesn't use.
  // --------------------------------------------------------------------------
  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'youtube', label: 'YouTube', url: 'https://youtube.com/@PLACEHOLDER' }, // TODO: replace with real client content
  ],

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    hoursHeading: 'Hours',
    // TODO: replace with real client content
    hours: [
      { days: 'Tue – Fri', time: '10am – 8pm' },
      { days: 'Saturday', time: '9am – 6pm' },
      { days: 'Sun – Mon', time: 'Closed' },
    ],
    contactHeading: 'Studio',
    socialHeading: 'Follow',
    // "© {year} {copyrightName}. {copyrightSuffix}" — year is filled in at build time
    copyrightName: 'Nico Vance Barbering', // TODO: replace with real client content
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
  },

  // --------------------------------------------------------------------------
  // GOOGLE BUSINESS DETAILS — read by search engines, not shown on the page.
  // Name, phone, email, socials and booking link come from the sections above;
  // keep the address and hours here in step with Contact and the footer.
  // Hours use 24-hour times; leave out closed days.
  // --------------------------------------------------------------------------
  localBusiness: {
    type: 'HairSalon', // or 'BeautySalon' for wider beauty services
    priceRange: '$$', // $ – $$$$
    // TODO: replace with real client content
    address: { street: '245 Placeholder Ave', city: 'Brooklyn', region: 'NY', postalCode: '11211', country: 'US' },
    // TODO: replace with real client content
    hours: [
      { days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '20:00' },
      { days: ['Saturday'], opens: '09:00', closes: '18:00' },
    ],
  },

  // --------------------------------------------------------------------------
  // ANALYTICS — counts visitors plus taps on Book, phone and email links.
  // Off until an ID is filled in. Use one of:
  //   Umami (umami.is, no cookies)  → the site's Website ID
  //   Google Analytics 4            → the Measurement ID, e.g. 'G-XXXXXXXXXX'
  // --------------------------------------------------------------------------
  analytics: {
    umamiWebsiteId: '',
    ga4MeasurementId: '',
  },
};
