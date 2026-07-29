// ---- SHARED: in-page anchor navigation ----
// Every page has a sticky or fixed header (class="site-header").
// Native "#anchor" jumps would land the target right under that header,
// which is why nav links can look like they "don't do anything."
// This intercepts same-page anchor clicks and scrolls to the right spot,
// offset by the header's real (current) height.
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const buffer = 16;

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    const id = link.getAttribute('href').slice(1);
    if (!id) return; // "#" placeholder links (no real target) keep default behaviour
    const target = document.getElementById(id);
    if (!target) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const offset = (header ? header.getBoundingClientRect().height : 0) + buffer;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
    });
  });
});
