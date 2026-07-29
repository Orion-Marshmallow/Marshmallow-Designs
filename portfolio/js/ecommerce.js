// ---- SHOPNOVA (E-COMMERCE) PAGE ----
const ecProducts = [
  { name: 'Air Zoom Ultra',      cat: 'Footwear',    price: 119, old: 159, emoji: '👟', bg: '#f0eeff' },
  { name: 'ProBuds X3',          cat: 'Electronics', price: 89,  old: 129, emoji: '🎧', bg: '#fff0f5' },
  { name: 'Silk Blend Shirt',    cat: 'Clothing',    price: 45,  old: null, emoji: '👔', bg: '#f0fff8' },
  { name: 'Smart Watch S6',      cat: 'Electronics', price: 279, old: 349, emoji: '⌚', bg: '#fff8f0' },
  { name: 'Canvas Tote Bag',     cat: 'Accessories', price: 38,  old: null, emoji: '👜', bg: '#f5f0ff' },
  { name: 'Yoga Mat Pro',        cat: 'Sports',      price: 55,  old: 75,  emoji: '🧘', bg: '#f0faff' },
  { name: 'Ceramic Mug Set',     cat: 'Home',        price: 28,  old: null, emoji: '☕', bg: '#fff9f0' },
  { name: 'Glow Serum Kit',      cat: 'Beauty',      price: 65,  old: 89,  emoji: '✨', bg: '#fff0f9' },
];
let ecCart = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Render product grid
  const grid = document.getElementById('ec-prodGrid');
  if (grid) {
    ecProducts.forEach(p => {
      const card = document.createElement('div');
      card.className = 'prod-card';
      card.innerHTML = `
        <div class="prod-img" style="background:${p.bg}">
          <span style="font-size:60px">${p.emoji}</span>
          <div class="prod-actions">
            <div class="prod-action-btn" aria-label="Add to wishlist">❤</div>
            <div class="prod-action-btn" aria-label="Quick view">👁</div>
          </div>
        </div>
        <div class="prod-body">
          <div class="prod-cat">${p.cat}</div>
          <div class="prod-name">${p.name}</div>
          <div class="prod-footer">
            <div><span class="prod-price">$${p.price}</span>${p.old ? `<span class="old-price">$${p.old}</span>` : ''}</div>
            <button class="add-cart" type="button">+ Add</button>
          </div>
        </div>`;
      card.querySelector('.add-cart').addEventListener('click', ecAddCart);
      grid.appendChild(card);
    });
  }

  // Mobile nav
  const ham = document.getElementById('ec-hamburger');
  const nav = document.getElementById('ec-mobile-nav');
  const closeBtn = document.getElementById('ec-nav-close');
  if (ham && nav) ham.addEventListener('click', () => nav.classList.toggle('open'));
  if (closeBtn) closeBtn.addEventListener('click', ecCloseNav);
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', ecCloseNav));

  // Promo banner
  document.getElementById('ec-claimOffer')?.addEventListener('click', () => alert('Code: NOVA20'));
});

function ecCloseNav() {
  document.getElementById('ec-mobile-nav')?.classList.remove('open');
}

function ecAddCart(e) {
  ecCart++;
  const countEl = document.getElementById('ec-cartCount');
  if (countEl) countEl.textContent = ecCart;
  const btn = e.currentTarget;
  const original = btn.textContent;
  btn.textContent = '✓ Added';
  btn.style.background = '#00c97a';
  setTimeout(() => { btn.textContent = original; btn.style.background = ''; }, 1500);
}
