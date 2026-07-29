// ---- PORTFOLIO PAGE ----
document.addEventListener('DOMContentLoaded', () => {
  // Sticky nav background on scroll
  window.addEventListener('scroll', () => {
    const pfNav = document.getElementById('pf-nav');
    if (pfNav) pfNav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile hamburger menu
  const ham = document.getElementById('pf-hamburger');
  const mobileNav = document.getElementById('pf-mobile-nav');
  const closeBtn = document.getElementById('pf-nav-close');
  if (ham && mobileNav) ham.addEventListener('click', () => mobileNav.classList.toggle('open'));
  if (closeBtn && mobileNav) closeBtn.addEventListener('click', pfCloseMobileNav);
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', pfCloseMobileNav));

  // Typewriter effect
  const words = ['Web Developer.', 'UI Designer.', 'Frontend Engineer.', 'Problem Solver.'];
  let wi = 0, ci = 0, deleting = false;
  const el = document.getElementById('pf-typed');
  function type() {
    if (!el) return;
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  if (el) type();

  // Contact form
  document.getElementById('pf-contact-form')?.addEventListener('submit', pfHandleForm);

  // Animate skill bars into view
  const bars = document.querySelectorAll('#pf-skills-grid .skill-fill');
  if (bars.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(bar => observer.observe(bar));
  }
});

function pfCloseMobileNav() {
  document.getElementById('pf-mobile-nav')?.classList.remove('open');
}

function pfHandleForm(e) {
  e.preventDefault();
  const s = document.getElementById('pfSuccess');
  s.classList.add('show');
  e.target.reset();
  setTimeout(() => s.classList.remove('show'), 5000);
}
