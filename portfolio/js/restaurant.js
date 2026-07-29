// ---- EMBER & THYME (RESTAURANT) PAGE ----
const rstMenuData = {
  starters: [
    { name: 'Seared Scallops', desc: 'Pan-seared hand-dived scallops, cauliflower purée, crispy capers, lemon butter', price: '$24', tag: "Chef's Pick", chef: true, emoji: '🥗' },
    { name: 'Burrata & Heritage Tomato', desc: 'Creamy burrata, charred heritage tomatoes, aged balsamic, basil oil', price: '$18', tag: 'Seasonal', chef: false, emoji: '🍅' },
    { name: 'Bone Marrow Crostini', desc: 'Roasted bone marrow, chimichurri, smoked salt, grilled sourdough', price: '$22', tag: '', chef: false, emoji: '🍞' },
    { name: 'Tuna Tartare', desc: 'Line-caught tuna, avocado, sesame, pickled cucumber, ponzu', price: '$26', tag: 'New', chef: false, emoji: '🐟' },
  ],
  mains: [
    { name: 'Dry-Aged Ribeye', desc: '400g dry-aged Black Angus ribeye, bone marrow butter, truffle fries, watercress', price: '$68', tag: 'Signature', chef: true, emoji: '🥩' },
    { name: 'Whole Roasted Sea Bass', desc: 'Line-caught sea bass, fennel, olives, roasted cherry tomatoes, saffron broth', price: '$52', tag: '', chef: false, emoji: '🐟' },
    { name: 'Mushroom Wellington', desc: 'Wild mushroom duxelle, puff pastry, truffle jus, roasted root vegetables', price: '$42', tag: 'Vegetarian', chef: false, emoji: '🍄' },
    { name: 'Slow Lamb Shoulder', desc: '12-hour braised lamb, pomegranate molasses, mint yoghurt, charred flatbread', price: '$55', tag: "Chef's Pick", chef: true, emoji: '🍖' },
  ],
  desserts: [
    { name: 'Chocolate Lava Cake', desc: 'Warm dark chocolate fondant, vanilla bean ice cream, honeycomb crumble', price: '$14', tag: 'Classic', chef: false, emoji: '🍫' },
    { name: 'Crème Brûlée', desc: 'Madagascan vanilla custard, torched caramelised sugar, tuile biscuit', price: '$12', tag: '', chef: false, emoji: '🍮' },
    { name: 'Seasonal Tart', desc: "Pastry cream tart with the season's finest fruits, candied zest, elderflower", price: '$14', tag: 'Seasonal', chef: true, emoji: '🥧' },
    { name: 'Cheese Board', desc: 'Selection of 5 artisan cheeses, house-made quince, walnut toast, grapes', price: '$18', tag: '', chef: false, emoji: '🧀' },
  ],
};

document.addEventListener('DOMContentLoaded', () => {
  rstRenderMenu('starters');

  // Mobile nav
  const ham = document.getElementById('rst-hamburger');
  const nav = document.getElementById('rst-mobile-nav');
  const closeBtn = document.getElementById('rst-nav-close');
  if (ham && nav) ham.addEventListener('click', () => nav.classList.toggle('open'));
  if (closeBtn) closeBtn.addEventListener('click', rstCloseNav);
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', rstCloseNav));
  document.querySelectorAll('button[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.rst-menu-tab').forEach(tab => {
    tab.addEventListener('click', () => rstFilter(tab.dataset.cat, tab));
  });

  document.getElementById('rst-reserveSubmit')?.addEventListener('click', () => {
    alert('Reservation confirmed! We look forward to welcoming you.');
  });
});

function rstCloseNav() {
  document.getElementById('rst-mobile-nav')?.classList.remove('open');
}

function rstRenderMenu(cat) {
  const grid = document.getElementById('rst-menuGrid');
  if (!grid) return;
  grid.innerHTML = '';
  rstMenuData[cat].forEach(item => {
    const c = document.createElement('div');
    c.className = 'rst-menu-card';
    c.innerHTML = `
      <div class="rst-menu-emoji">${item.emoji}</div>
      <div class="rst-menu-info">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="rst-menu-footer">
          <div class="rst-menu-price">${item.price}</div>
          ${item.tag ? `<span class="rst-menu-tag ${item.chef ? 'chef' : ''}">${item.tag}</span>` : ''}
        </div>
      </div>`;
    grid.appendChild(c);
  });
}

function rstFilter(cat, btn) {
  document.querySelectorAll('.rst-menu-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  rstRenderMenu(cat);
}
