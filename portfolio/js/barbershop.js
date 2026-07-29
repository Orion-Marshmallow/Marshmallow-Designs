// ---- ELITE CUTS (BARBERSHOP) PAGE ----
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('bar-hamburger');
  const nav = document.getElementById('bar-mobile-nav');
  const closeBtn = document.getElementById('bar-nav-close');
  if (ham && nav) ham.addEventListener('click', () => nav.classList.toggle('open'));
  if (closeBtn) closeBtn.addEventListener('click', barCloseNav);
  // Close the mobile menu whenever a link inside it is used (shared.js handles the actual scrolling)
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', barCloseNav));

  // CTA buttons (not <a> tags, so shared.js's anchor handler doesn't cover these)
  document.querySelectorAll('button[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.getElementById('bar-bookSubmit')?.addEventListener('click', () => {
    alert('Booking confirmed! See you soon.');
  });
});

function barCloseNav() {
  document.getElementById('bar-mobile-nav')?.classList.remove('open');
}
