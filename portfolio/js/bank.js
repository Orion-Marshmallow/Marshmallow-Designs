// ---- NOVAPAY (BANK) PAGE ----
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementById('bnk-hamburger');
  const nav = document.getElementById('bnk-mobile-nav');
  const closeBtn = document.getElementById('bnk-nav-close');
  if (ham && nav) ham.addEventListener('click', () => nav.classList.toggle('open'));
  if (closeBtn) closeBtn.addEventListener('click', bnkCloseNav);
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', bnkCloseNav));
});

function bnkCloseNav() {
  document.getElementById('bnk-mobile-nav')?.classList.remove('open');
}
