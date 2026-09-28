/** Highlights the sidebar link for the section currently in view. */
export function initSpy() {
  const links = [...document.querySelectorAll('[data-spy-link]')];
  const sections = links.map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.setAttribute('aria-current', String(l.getAttribute('href') === `#${entry.target.id}`)));
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((s) => observer.observe(s));
}
