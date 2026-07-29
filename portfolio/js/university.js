// ---- NEXUS UNIVERSITY PAGE ----
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('uni-hamburger');
  const nav = document.getElementById('uni-mobile-nav');
  const closeBtn = document.getElementById('uni-nav-close');
  if (ham && nav) ham.addEventListener('click', () => nav.classList.toggle('open'));
  if (closeBtn) closeBtn.addEventListener('click', uniCloseNav);
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', uniCloseNav));
});

function uniCloseNav() {
  document.getElementById('uni-mobile-nav')?.classList.remove('open');
}
