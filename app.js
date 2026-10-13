/**
 * ROWI'S CUTE GAME SHOP
 * Comprehensive Application Logic
 * Owner: Rose Mae Rama
 * Contact: 09912748872 | ramarosemae3@gmail.com
 */

// ============================================================================
// DATA REPOSITORY: GAME PACKAGES
// ============================================================================
const PRODUCTS = [
  // --- ROBUX: COVERED TAX ---
  { id: 'rbx-cov-100', game: 'robux', category: 'robux', name: '100 Robux', tax: 'covered', price: 60, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: false },
  { id: 'rbx-cov-200', game: 'robux', category: 'robux', name: '200 Robux', tax: 'covered', price: 96, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: false },
  { id: 'rbx-cov-300', game: 'robux', category: 'robux', name: '300 Robux', tax: 'covered', price: 145, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: false },
  { id: 'rbx-cov-400', game: 'robux', category: 'robux', name: '400 Robux', tax: 'covered', price: 180, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: false },
  { id: 'rbx-cov-500', game: 'robux', category: 'robux', name: '500 Robux', tax: 'covered', price: 215, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: true, tag: 'Best Seller' },
  { id: 'rbx-cov-600', game: 'robux', category: 'robux', name: '600 Robux', tax: 'covered', price: 245, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: false },
  { id: 'rbx-cov-700', game: 'robux', category: 'robux', name: '700 Robux', tax: 'covered', price: 280, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: false },
  { id: 'rbx-cov-800', game: 'robux', category: 'robux', name: '800 Robux', tax: 'covered', price: 320, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: false },
  { id: 'rbx-cov-900', game: 'robux', category: 'robux', name: '900 Robux', tax: 'covered', price: 360, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: false },
  { id: 'rbx-cov-1000', game: 'robux', category: 'robux', name: '1,000 Robux', tax: 'covered', price: 390, icon: '🎀', note: '5-7 days pending, 0-1 day process', popular: true, tag: 'Popular Pack' },

  // --- ROBUX: NOT COVERED TAX ---
  { id: 'rbx-not-100', game: 'robux', category: 'robux', name: '100 Robux', tax: 'not-covered', price: 50, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: false },
  { id: 'rbx-not-200', game: 'robux', category: 'robux', name: '200 Robux', tax: 'not-covered', price: 80, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: false },
  { id: 'rbx-not-300', game: 'robux', category: 'robux', name: '300 Robux', tax: 'not-covered', price: 110, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: false },
  { id: 'rbx-not-400', game: 'robux', category: 'robux', name: '400 Robux', tax: 'not-covered', price: 140, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: false },
  { id: 'rbx-not-500', game: 'robux', category: 'robux', name: '500 Robux', tax: 'not-covered', price: 165, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: true, tag: 'Super Tipid' },
  { id: 'rbx-not-600', game: 'robux', category: 'robux', name: '600 Robux', tax: 'not-covered', price: 185, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: false },
  { id: 'rbx-not-700', game: 'robux', category: 'robux', name: '700 Robux', tax: 'not-covered', price: 205, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: false },
  { id: 'rbx-not-800', game: 'robux', category: 'robux', name: '800 Robux', tax: 'not-covered', price: 235, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: false },
  { id: 'rbx-not-900', game: 'robux', category: 'robux', name: '900 Robux', tax: 'not-covered', price: 255, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: false },
  { id: 'rbx-not-1000', game: 'robux', category: 'robux', name: '1,000 Robux', tax: 'not-covered', price: 285, icon: '🎀', note: 'Tax not covered • 5-7 days pending', popular: true, tag: 'Best Value' },

  // --- VALORANT POINTS (VP) ---
  { id: 'vp-475', game: 'valorant', category: 'valorant', name: '475 VP', price: 190, icon: '⚡', note: 'Fast ID / Riot Tag reload', popular: false },
  { id: 'vp-1000', game: 'valorant', category: 'valorant', name: '1,000 VP', price: 395, icon: '⚡', note: 'Battlepass / Agent contract reload', popular: true, tag: 'Popular' },
  { id: 'vp-1475', game: 'valorant', category: 'valorant', name: '1,475 VP', price: 570, icon: '⚡', note: 'Fast reload via Riot ID', popular: false },
  { id: 'vp-2050', game: 'valorant', category: 'valorant', name: '2,050 VP', price: 770, icon: '⚡', note: 'Great for Deluxe Weapon Skins', popular: true, tag: 'Best Seller' },
  { id: 'vp-2525', game: 'valorant', category: 'valorant', name: '2,525 VP', price: 960, icon: '⚡', note: 'Fast credit directly to Riot account', popular: false },
  { id: 'vp-3050', game: 'valorant', category: 'valorant', name: '3,050 VP', price: 1150, icon: '⚡', note: 'Discounted Riot Games Points', popular: false },
  { id: 'vp-3650', game: 'valorant', category: 'valorant', name: '3,650 VP', price: 1330, icon: '⚡', note: 'Official and 100% safe', popular: false },
  { id: 'vp-4125', game: 'valorant', category: 'valorant', name: '4,125 VP', price: 1520, icon: '⚡', note: 'Fast credit directly to Riot account', popular: false },
  { id: 'vp-4650', game: 'valorant', category: 'valorant', name: '4,650 VP', price: 1710, icon: '⚡', note: 'Discounted Riot Games Points', popular: false },
  { id: 'vp-5350', game: 'valorant', category: 'valorant', name: '5,350 VP', price: 1920, icon: '⚡', note: 'Great for Premium Skin Bundles', popular: true, tag: 'Bundle Pack' },
  { id: 'vp-5825', game: 'valorant', category: 'valorant', name: '5,825 VP', price: 2110, icon: '⚡', note: 'Fast reload via Riot ID', popular: false },
  { id: 'vp-6350', game: 'valorant', category: 'valorant', name: '6,350 VP', price: 2300, icon: '⚡', note: 'Super sulit high VP pack', popular: false },
  { id: 'vp-7400', game: 'valorant', category: 'valorant', name: '7,400 VP', price: 2690, icon: '⚡', note: 'Ultra big savings on Riot Store', popular: false },
  { id: 'vp-7875', game: 'valorant', category: 'valorant', name: '7,875 VP', price: 2840, icon: '⚡', note: 'Official reload from Rose Mae Rama', popular: false },
  { id: 'vp-8400', game: 'valorant', category: 'valorant', name: '8,400 VP', price: 3060, icon: '⚡', note: 'High roller package', popular: false },
  { id: 'vp-10700', game: 'valorant', category: 'valorant', name: '10,700 VP', price: 3840, icon: '⚡', note: 'Ultimate VP pack • Maximum savings', popular: true, tag: 'Ultimate Sulit' },

  // --- MOBILE LEGENDS: BANG BANG (MLBB) DIAMONDS ---
  { id: 'ml-11', game: 'mlbb', category: 'mlbb', name: '11 Diamonds', price: 10, icon: '💎', note: 'Instant top-up via User & Zone ID', popular: false },
  { id: 'ml-22', game: 'mlbb', category: 'mlbb', name: '22 Diamonds', price: 20, icon: '💎', note: 'Fast crediting directly to account', popular: false },
  { id: 'ml-56', game: 'mlbb', category: 'mlbb', name: '56 Diamonds', price: 50, icon: '💎', note: 'Great for weekly spin & micro top-up', popular: false },
  { id: 'ml-112', game: 'mlbb', category: 'mlbb', name: '112 Diamonds', price: 96, icon: '💎', note: 'Fast MLBB diamond reload', popular: false },
  { id: 'ml-168', game: 'mlbb', category: 'mlbb', name: '168 Diamonds', price: 145, icon: '💎', note: 'Fast MLBB diamond reload', popular: false },
  { id: 'ml-223', game: 'mlbb', category: 'mlbb', name: '223 Diamonds', price: 195, icon: '💎', note: 'Great for elite skin recharge', popular: false },
  { id: 'ml-279', game: 'mlbb', category: 'mlbb', name: '279 Diamonds', price: 242, icon: '💎', note: 'Fast top-up via User ID & Zone ID', popular: false },
  { id: 'ml-301', game: 'mlbb', category: 'mlbb', name: '301 Diamonds', price: 265, icon: '💎', note: 'Fast top-up via User ID & Zone ID', popular: false },
  { id: 'ml-336', game: 'mlbb', category: 'mlbb', name: '336 Diamonds', price: 295, icon: '💎', note: 'Fast top-up via User ID & Zone ID', popular: false },
  { id: 'ml-448', game: 'mlbb', category: 'mlbb', name: '448 Diamonds', price: 385, icon: '💎', note: 'Popular for event draw tokens', popular: true, tag: 'Popular' },
  { id: 'ml-570', game: 'mlbb', category: 'mlbb', name: '570 Diamonds', price: 480, icon: '💎', note: 'Fast top-up via User ID & Zone ID', popular: false },
  { id: 'ml-626', game: 'mlbb', category: 'mlbb', name: '626 Diamonds', price: 525, icon: '💎', note: 'Fast top-up via User ID & Zone ID', popular: false },
  { id: 'ml-749', game: 'mlbb', category: 'mlbb', name: '749 Diamonds', price: 628, icon: '💎', note: 'Epic skin budget reload', popular: false },
  { id: 'ml-849', game: 'mlbb', category: 'mlbb', name: '849 Diamonds', price: 715, icon: '💎', note: 'Fast top-up via User ID & Zone ID', popular: false },
  { id: 'ml-906', game: 'mlbb', category: 'mlbb', name: '906 Diamonds', price: 760, icon: '💎', note: 'Fast top-up via User ID & Zone ID', popular: false },
  { id: 'ml-1018', game: 'mlbb', category: 'mlbb', name: '1,018 Diamonds', price: 855, icon: '💎', note: 'Great for collector events & draws', popular: true, tag: 'Best Seller' },
  { id: 'ml-1163', game: 'mlbb', category: 'mlbb', name: '1,163 Diamonds', price: 945, icon: '💎', note: 'Fast top-up via User ID & Zone ID', popular: false },
  { id: 'ml-1219', game: 'mlbb', category: 'mlbb', name: '1,219 Diamonds', price: 992, icon: '💎', note: 'Under 1k PHP high diamond pack', popular: true, tag: 'Super Sulit' },

  // --- PASSES & STARLIGHT SPECIALS ---
  { id: 'pass-wdp', game: 'mlbb', category: 'passes', name: 'Weekly Diamond Pass (WDP)', price: 95, icon: '⭐', note: 'MLBB WDP • Claim daily diamonds & tokens', popular: true, tag: 'Must Buy! 🌸' },
  { id: 'pass-nsl', game: 'mlbb', category: 'passes', name: 'Normal Starlight (NSL)', price: 155, icon: '⭐', note: 'Official MLBB Normal Starlight Pass', popular: false, tag: 'Special' },
  { id: 'pass-psl', game: 'mlbb', category: 'passes', name: 'Premium Starlight (PSL)', price: 350, icon: '⭐', note: 'Full Premium Starlight perks and badges', popular: false },
  { id: 'promo-haya-normal', game: 'mlbb', category: 'passes', name: 'October Starlight Hayabusa Normal', price: 150, icon: '🦊', note: 'Kitsune Shadow promo • Follow Gifting Rules', popular: true, tag: 'Promo ₱150' },
  { id: 'promo-haya-premium', game: 'mlbb', category: 'passes', name: 'October Starlight Hayabusa Premium', price: 290, icon: '🦊', note: 'Kitsune Shadow promo • Follow Gifting Rules', popular: true, tag: 'Promo ₱290' },
];

// ============================================================================
// APP STATE
// ============================================================================
let currentCategory = 'all';
let currentRobuxTax = 'covered';
let searchQuery = '';
let cart = [];
let soundEnabled = true;

// Initialize Web Audio API for cute chimes & bubbles
let audioCtx = null;
function playCuteSound(type = 'bubble') {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'bubble') {
      // Cute pleasant pop / bubble
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'chime') {
      // Kawaii sparkling double chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.setValueAtTime(880, now + 0.08); // A5
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.36);
    } else if (type === 'remove') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(220, now + 0.1);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    }
  } catch (err) {
    console.debug('AudioContext autoplay policy or not supported');
  }
}

// Load cart from LocalStorage
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('rowi_game_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCartToStorage() {
  try {
    localStorage.setItem('rowi_game_cart', JSON.stringify(cart));
  } catch (e) { }
}

// ============================================================================
// DOM ELEMENTS & INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  initMainNav();
  initCategoryTabs();
  initSearch();
  initRobuxTaxToggle();
  initSoundToggle();
  initCartDrawer();
  renderProducts();

  // Gentle particle sparkle on click anywhere
  document.addEventListener('pointerdown', (e) => {
    // Only spawn occasional sparkles
    if (Math.random() > 0.4) spawnSparkle(e.clientX, e.clientY);
  });
});

// Sparkle Particle Animation
function spawnSparkle(x, y) {
  const container = document.getElementById('sparkle-container');
  if (!container) return;
  const emojis = ['✨', '🌸', '💖', '⭐', '🎀', '💜'];
  const particle = document.createElement('div');
  particle.className = 'sparkle-particle';
  particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  particle.style.left = `${x - 10}px`;
  particle.style.top = `${y - 10}px`;
  container.appendChild(particle);

  setTimeout(() => {
    if (particle && particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 1200);
}

// Toast System
let toastTimer = null;
function showToast(message, icon = '✨') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toast.querySelector('.toast-icon').textContent = icon;
  toastMsg.textContent = message;
  toast.classList.add('show');

  playCuteSound('chime');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Copy to Clipboard Utility
function copyToClipboard(text, customSuccessMsg = 'Copied to clipboard! 🌸') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(customSuccessMsg, '📋');
    }).catch(() => {
      fallbackCopy(text, customSuccessMsg);
    });
  } else {
    fallbackCopy(text, customSuccessMsg);
  }
}

function fallbackCopy(text, customSuccessMsg) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast(customSuccessMsg, '📋');
  } catch (err) {
    alert(`Could not automatically copy. Text: ${text}`);
  }
  document.body.removeChild(tempInput);
}

// ============================================================================
// MAIN NAVIGATION (active item follows click + scroll)
// ============================================================================
let navScrollLock = null;
let navScrollLockTimer = null;

function setActiveNavItem(hash) {
  const items = document.querySelectorAll('#main-nav .nav-item');
  items.forEach((item) => {
    item.classList.toggle('active', item.getAttribute('href') === hash);
  });
}

function lockNavActive(hash) {
  navScrollLock = hash;
  setActiveNavItem(hash);
  clearTimeout(navScrollLockTimer);
  navScrollLockTimer = setTimeout(() => {
    navScrollLock = null;
  }, 900);
}

function initMainNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const items = nav.querySelectorAll('.nav-item');
  const sectionIds = [...items]
    .map((item) => item.getAttribute('href'))
    .filter(Boolean);

  items.forEach((item) => {
    item.addEventListener('click', () => {
      lockNavActive(item.getAttribute('href'));
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const hash = link.getAttribute('href');
    if (!sectionIds.includes(hash) || link.classList.contains('nav-item')) return;
    link.addEventListener('click', () => lockNavActive(hash));
  });

  window.addEventListener('hashchange', () => {
    if (sectionIds.includes(window.location.hash)) {
      lockNavActive(window.location.hash);
    }
  });

  const sections = sectionIds
    .map((hash) => document.querySelector(hash))
    .filter(Boolean)
    .sort((a, b) => a.offsetTop - b.offsetTop);

  const updateFromScroll = () => {
    if (navScrollLock) return;

    const header = document.querySelector('.site-header');
    const offset = (header ? header.offsetHeight : 80) + 12;
    let currentHash = '';

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top - offset <= 0) {
        currentHash = `#${section.id}`;
      }
    });

    if (currentHash) setActiveNavItem(currentHash);
  };

  window.addEventListener('scroll', updateFromScroll, { passive: true });

  if (sectionIds.includes(window.location.hash)) {
    setActiveNavItem(window.location.hash);
  } else {
    updateFromScroll();
  }
}

// ============================================================================
// CATEGORY TABS & FILTERING
// ============================================================================
function initCategoryTabs() {
  const tabs = document.querySelectorAll('#game-filter-tabs .tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      playCuteSound('bubble');

      // Show/Hide Robux Tax toggle when relevant
      const taxFilter = document.getElementById('robux-tax-filter');
      if (taxFilter) {
        if (currentCategory === 'robux' || currentCategory === 'all') {
          taxFilter.style.display = 'flex';
        } else {
          taxFilter.style.display = 'none';
        }
      }

      renderProducts();
      updateNoticeText();
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('catalog-search');
  const clearBtn = document.getElementById('clear-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearBtn.style.display = searchQuery ? 'block' : 'none';
    renderProducts();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    renderProducts();
    playCuteSound('bubble');
  });
}

function resetFilters() {
  const searchInput = document.getElementById('catalog-search');
  const clearBtn = document.getElementById('clear-search');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  searchQuery = '';

  const allTab = document.querySelector('#game-filter-tabs .tab-btn[data-category="all"]');
  if (allTab) {
    document.querySelectorAll('#game-filter-tabs .tab-btn').forEach(t => t.classList.remove('active'));
    allTab.classList.add('active');
  }
  currentCategory = 'all';

  renderProducts();
  updateNoticeText();
}

function initRobuxTaxToggle() {
  const covBtn = document.getElementById('tax-covered-btn');
  const notCovBtn = document.getElementById('tax-not-covered-btn');
  if (!covBtn || !notCovBtn) return;

  covBtn.addEventListener('click', () => {
    covBtn.classList.add('active');
    notCovBtn.classList.remove('active');
    currentRobuxTax = 'covered';
    playCuteSound('bubble');
    renderProducts();
  });

  notCovBtn.addEventListener('click', () => {
    notCovBtn.classList.add('active');
    covBtn.classList.remove('active');
    currentRobuxTax = 'not-covered';
    playCuteSound('bubble');
    renderProducts();
  });
}

function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      soundBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      soundBtn.classList.remove('muted');
      showToast('Cute sounds enabled! 🎵', '🔔');
      playCuteSound('chime');
    } else {
      soundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      soundBtn.classList.add('muted');
      showToast('Sound muted.', '🔕');
    }
  });
}

function updateNoticeText() {
  const noticeText = document.getElementById('notice-text');
  if (!noticeText) return;

  if (currentCategory === 'robux') {
    noticeText.innerHTML = `Showing <strong>Robux Pricelist</strong> (${currentRobuxTax === 'covered' ? 'Covered Tax ₱60+' : 'Not Covered Tax ₱50+'}). <em>5-7 Days Pending, No Rush Orders!</em>`;
  } else if (currentCategory === 'valorant') {
    noticeText.innerHTML = `Showing <strong>Valorant Points</strong> (475 to 10,700 VP). Credited via Riot ID / Tag. Mode of payment: GCash / Maya.`;
  } else if (currentCategory === 'mlbb') {
    noticeText.innerHTML = `Showing <strong>MLBB Diamonds</strong> (11 to 1,219 Diamonds). Direct credit via User ID & Zone ID!`;
  } else if (currentCategory === 'passes') {
    noticeText.innerHTML = `Showing <strong>Weekly Diamond Pass & Starlight Passes</strong> (WDP ₱95, October Starlight Hayabusa Kitsune Shadow).`;
  } else {
    noticeText.innerHTML = `Showing all packages. Click <strong>"Order Now"</strong> or <strong>"+"</strong> to add any package to your order!`;
  }
}

// ============================================================================
// PRODUCT RENDERING
// ============================================================================
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const emptyState = document.getElementById('no-results');
  if (!grid) return;

  // Filter products based on Category, Robux Tax Mode, and Search Query
  const filtered = PRODUCTS.filter(prod => {
    // 1. Category filter
    if (currentCategory !== 'all') {
      if (prod.category !== currentCategory) return false;
    }

    // 2. Robux Tax mode filter
    if (prod.game === 'robux') {
      if (prod.tax !== currentRobuxTax) return false;
    }

    // 3. Search query filter
    if (searchQuery) {
      const matchName = prod.name.toLowerCase().includes(searchQuery);
      const matchGame = prod.game.toLowerCase().includes(searchQuery);
      const matchPrice = prod.price.toString().includes(searchQuery);
      const matchNote = prod.note ? prod.note.toLowerCase().includes(searchQuery) : false;
      const matchTag = prod.tag ? prod.tag.toLowerCase().includes(searchQuery) : false;
      if (!matchName && !matchGame && !matchPrice && !matchNote && !matchTag) {
        return false;
      }
    }

    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(prod => {
    const gameClass = `tag-${prod.category}`;
    const gameLabel = prod.category === 'robux'
      ? `Robux (${prod.tax === 'covered' ? 'Covered' : 'Not Covered'})`
      : prod.category === 'valorant'
        ? 'Valorant Points'
        : prod.category === 'mlbb'
          ? 'MLBB Diamonds'
          : 'Pass / Bundle';

    return `
      <div class="product-card" data-id="${prod.id}">
        <div class="card-top-row">
          <span class="game-tag ${gameClass}">
            ${prod.icon} ${gameLabel}
          </span>
          ${prod.tag ? `<span class="promo-tag">${prod.tag}</span>` : ''}
        </div>

        <div class="card-center">
          <div class="product-icon-wrap">
            <span>${prod.icon}</span>
          </div>
          <h3 class="product-name">${prod.name}</h3>
          <p class="product-meta">${prod.note}</p>

          <div class="card-price-row">
            <span class="currency-sym">₱</span>
            <span class="price-val">${prod.price.toLocaleString()}</span>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn-card-buy" onclick="buyNowItem('${prod.id}')">
            <i class="fa-solid fa-bolt"></i> Order Now
          </button>
          <button class="btn-card-add" onclick="addItemToCart('${prod.id}')" title="Add to Order Cart" aria-label="Add to cart">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================================
// CART SYSTEM
// ============================================================================
function initCartDrawer() {
  const openBtn = document.getElementById('open-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('cart-drawer');

  if (openBtn) openBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (overlay) overlay.addEventListener('click', closeCartDrawer);
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    playCuteSound('bubble');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
}

function addItemToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      game: product.game,
      category: product.category,
      price: product.price,
      icon: product.icon,
      note: product.note,
      quantity: 1
    });
  }

  saveCartToStorage();
  updateCartUI();
  playCuteSound('chime');
  showToast(`Added ${product.name} to order! 🛍️`, '💖');
}

function buyNowItem(productId) {
  addItemToCart(productId);
  openCartDrawer();
}

function updateItemQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== productId);
    playCuteSound('remove');
  } else {
    playCuteSound('bubble');
  }

  saveCartToStorage();
  updateCartUI();
}

function removeItemFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  playCuteSound('remove');
  saveCartToStorage();
  updateCartUI();
  showToast('Item removed from order.', '🗑️');
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  playCuteSound('remove');
  saveCartToStorage();
  updateCartUI();
  showToast('Order cart cleared.', '🧹');
}

function updateCartUI() {
  const counter = document.getElementById('cart-counter');
  const itemsContainer = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-message');
  const drawerFooter = document.getElementById('drawer-footer');
  const totalDisplay = document.getElementById('cart-total-price');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (counter) counter.textContent = totalCount;

  if (totalCount === 0) {
    if (itemsContainer) itemsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (drawerFooter) drawerFooter.style.display = 'none';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (drawerFooter) drawerFooter.style.display = 'block';

    if (itemsContainer) {
      itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item-card">
          <div class="item-left">
            <span class="item-emoji">${item.icon}</span>
            <div class="item-info">
              <h4>${item.name}</h4>
              <span>₱${item.price} each</span>
              <strong class="item-price-unit">₱${(item.price * item.quantity).toLocaleString()}</strong>
            </div>
          </div>

          <div class="item-right">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateItemQuantity('${item.id}', -1)" title="Decrease">－</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateItemQuantity('${item.id}', 1)" title="Increase">＋</button>
            </div>
            <button class="item-remove-btn" onclick="removeItemFromCart('${item.id}')" title="Remove item">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      `).join('');
    }

    if (totalDisplay) {
      totalDisplay.textContent = `₱${totalPrice.toLocaleString()}`;
    }
  }
}

// ============================================================================
// CHECKOUT & ORDER MODAL
// ============================================================================
let generatedReceiptText = '';

function openOrderModal() {
  if (cart.length === 0) {
    showToast('Please add items to your cart first! 🛒', '⚠️');
    return;
  }

  closeCartDrawer();
  const modal = document.getElementById('order-modal');
  const summaryList = document.getElementById('modal-items-summary');
  const totalDisplay = document.getElementById('modal-total-display');
  const receiptResult = document.getElementById('order-receipt-result');

  if (receiptResult) receiptResult.style.display = 'none';

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (summaryList) {
    summaryList.innerHTML = cart.map(item => `
      <li>
        <span>${item.quantity}x ${item.name}</span>
        <strong>₱${(item.price * item.quantity).toLocaleString()}</strong>
      </li>
    `).join('');
  }

  if (totalDisplay) {
    totalDisplay.textContent = `₱${totalPrice.toLocaleString()}`;
  }

  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    playCuteSound('chime');
  }
}

function closeOrderModal() {
  const modal = document.getElementById('order-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function handleOrderSubmit(e) {
  e.preventDefault();

  const custName = document.getElementById('order-cust-name').value.trim();
  const custPhone = document.getElementById('order-cust-phone').value.trim();
  const gameIgn = document.getElementById('order-game-ign').value.trim();
  const gameId = document.getElementById('order-game-id').value.trim();
  const paymentMethod = document.getElementById('order-payment-method').value;
  const custEmail = document.getElementById('order-cust-email').value.trim() || 'N/A';
  const notes = document.getElementById('order-notes').value.trim() || 'None';

  const orderId = `ROWI-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateStr = new Date().toLocaleString('en-PH', { dateStyle: 'medium', timeStyle: 'short' });
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let itemsSummaryLines = cart.map(item => `• ${item.quantity}x ${item.name} = ₱${(item.price * item.quantity).toLocaleString()}`).join('\n');

  // Formatted Clean Receipt
  generatedReceiptText =
    `🌸 ROWI'S CUTE GAME SHOP - ORDER RECEIPT 🌸
Order ID: #${orderId}
Date: ${dateStr}

🎀 CUSTOMER DETAILS:
• Name: ${custName}
• Contact No: ${custPhone}
• Email: ${custEmail}

🎮 IN-GAME DETAILS:
• IGN: ${gameIgn}
• ID / Server / Riot Tag: ${gameId}

🛍️ ITEMS ORDERED:
${itemsSummaryLines}

💰 TOTAL AMOUNT: ₱${totalPrice.toLocaleString()}
💳 PAYMENT METHOD: ${paymentMethod}
📝 NOTE: ${notes}

----------------------------------------
💌 SELLER INFO & PAYMENT:
• GCash / Maya: 09912748872 (Rose Mae Rama)
• Official Gmail: ramarosemae3@gmail.com
• Facebook: Rose Mae Rama
----------------------------------------
✨ Please send screenshot of payment proof after transferring to 09912748872! Thank you for ordering! 💕`;

  // Display receipt preview
  const resultBox = document.getElementById('order-receipt-result');
  const previewBox = document.getElementById('receipt-text-preview');
  const smsLink = document.getElementById('send-sms-link');
  const emailLink = document.getElementById('send-email-link');

  if (previewBox) previewBox.textContent = generatedReceiptText;
  if (resultBox) {
    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth' });
  }

  // Pre-fill SMS Link to Rose Mae's phone number
  if (smsLink) {
    const encodedSms = encodeURIComponent(generatedReceiptText);
    smsLink.href = `sms:09912748872?body=${encodedSms}`;
  }

  // Pre-fill Email Link to Rose Mae's Gmail
  if (emailLink) {
    const emailSubject = encodeURIComponent(`Game Order #${orderId} - ${custName}`);
    const emailBody = encodeURIComponent(generatedReceiptText);
    emailLink.href = `mailto:ramarosemae3@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  }

  playCuteSound('chime');
  showToast('Order generated! Please copy and send to Rose Mae Rama 💌', '🎉');
}

function copyOrderReceipt() {
  if (!generatedReceiptText) return;
  copyToClipboard(generatedReceiptText, 'Receipt copied! Ready to paste in Messenger / DM! 💌');
}

// ============================================================================
// FLYER LIGHTBOX MODAL
// ============================================================================
function openFlyerModal(imgSrc, title) {
  const modal = document.getElementById('flyer-lightbox-modal');
  const modalImg = document.getElementById('flyer-modal-img');
  const modalTitle = document.getElementById('flyer-modal-title');
  const openLink = document.getElementById('flyer-modal-open-link');

  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalTitle) modalTitle.textContent = title;
  if (openLink) openLink.href = imgSrc;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  playCuteSound('bubble');
}

function closeFlyerModal() {
  const modal = document.getElementById('flyer-lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeOrderModal();
    closeFlyerModal();
    closeCartDrawer();
  }
});
