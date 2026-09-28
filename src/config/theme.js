/**
 * ============================================================================
 *  THEME — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every color and font family on the site comes from this file, and nothing
 *  else lives here. This is a DARK template, so the tokens read:
 *
 *    colors.paper   → bg-paper              (page background — near-black)
 *    colors.cream   → bg-cream              (raised surfaces: cards, alt sections)
 *    colors.ink     → text-ink / bg-ink     (primary text, light buttons)
 *    colors.muted   → text-muted            (secondary text)
 *    colors.line    → border-line           (hairlines / dividers)
 *    colors.accent  → text-accent / bg-accent (the single accent color)
 *    colors.onAccent→ text-on-accent        (text placed on the accent)
 *    colors.onInk   → text-on-ink           (text placed on ink/light surfaces)
 *
 *    fonts.heading  → font-heading          (condensed display headings)
 *    fonts.body     → font-body             (body copy, UI, buttons)
 *
 *  Keep text colors light and backgrounds dark when reskinning.
 *  If you change font families, update `fonts.googleFontsUrl` to load them.
 * ============================================================================
 */

export const theme = {
  // Template 6 — Noir / Cinematic. All text/background pairs meet WCAG AA.
  colors: {
    paper: '#0E0E0E', // near-black page
    cream: '#171717', // raised surface
    ink: '#EFEAE2', // bone white text
    muted: '#A29C93',
    line: '#2B2B2B',
    accent: '#D4A373', // warm copper — TODO: pick the client's accent color
    onAccent: '#0E0E0E',
    onInk: '#0E0E0E',
  },

  fonts: {
    heading: "'Bebas Neue', 'Oswald', Impact, 'Arial Narrow', sans-serif",
    body: "'Barlow', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Bebas+Neue&display=swap',
  },
};
