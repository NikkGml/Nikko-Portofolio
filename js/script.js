/**
 * 🌿 NAHIDA THEME PORTOFOLIO — SCRIPT.JS
 * Logika Interaktif, Mode Terang & Gelap, Filter Proyek,
 * Animasi & Integrasi Penuh dengan CONFIG.JS
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  applyConfigData();
  renderSkills();
  renderContacts();
  renderProjects('all');
  initProjectsFilter();
  initSkillsMeterAnimation();
  initNanaToggle();
  initTextScramble();
  initMobileMenu();
  initFloatingDock();
  initContactForm();
  initScrollNav();
  initNahidaMotion();
  initBackToTop();
});

/* ============================================================
   1. MODE TERANG & GELAP (LIGHT / DARK THEME TOGGLE)
   ============================================================ */
function initTheme() {
  const savedTheme = localStorage.getItem('nikko_portfolio_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('nikko_portfolio_theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeToggleIcon');
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (theme === 'dark') {
    if (icon) icon.className = 'fa-solid fa-sun';
    if (toggleBtn) {
      toggleBtn.setAttribute('title', 'Beralih ke Mode Terang');
      toggleBtn.setAttribute('aria-label', 'Beralih ke Mode Terang');
    }
  } else {
    if (icon) icon.className = 'fa-solid fa-moon';
    if (toggleBtn) {
      toggleBtn.setAttribute('title', 'Beralih ke Mode Gelap');
      toggleBtn.setAttribute('aria-label', 'Beralih ke Mode Gelap');
    }
  }
}

/* ============================================================
   2. INTEGRASI DATA DARI CONFIG.JS
   Menerapkan semua konfigurasi profil, pilar, dan tema ke HTML
   ============================================================ */
function applyConfigData() {
  // 1. Data Profil Utama
  if (typeof CONFIG_PROFILE !== 'undefined') {
    const p = CONFIG_PROFILE;

    // Header Brand
    const navTitle = document.getElementById('navBrandTitle');
    const navSub = document.getElementById('navBrandSubtitle');
    if (navTitle && p.brandTitle) navTitle.textContent = p.brandTitle;
    if (navSub && p.brandSubtitle) navSub.textContent = p.brandSubtitle;

    // Hero Script Title ("Nikko")
    const heroScript = document.getElementById('heroScriptTitle');
    if (heroScript && p.shortName) heroScript.textContent = p.shortName;

    // Magazine Card
    const magNotch = document.getElementById('magNotchHeader');
    const magBody = document.getElementById('magBodyQuote');
    const magFooter = document.getElementById('magFooterLine');
    if (magNotch && p.magazineNotch) magNotch.textContent = p.magazineNotch;
    if (magBody && p.magazineQuote) magBody.innerHTML = p.magazineQuote;
    if (magFooter && (p.magazineFooterLeft || p.magazineFooterRight)) {
      magFooter.innerHTML = `
        <span>${p.magazineFooterLeft || ''}</span>
        <span>${p.magazineFooterRight || ''}</span>
      `;
    }

    // Creative Cluster & Buttons
    const creativeAuthor = document.getElementById('creativeAuthor');
    const creativeLockup = document.getElementById('creativeLockup');
    const cvBtn = document.getElementById('cvHeroBtn');
    const githubBtn = document.getElementById('githubHeroBtn');
    if (creativeAuthor && p.creativeAuthor) creativeAuthor.textContent = p.creativeAuthor;
    if (creativeLockup && p.creativeTitle) creativeLockup.innerHTML = p.creativeTitle;
    if (cvBtn && p.cvLink) cvBtn.href = p.cvLink;
    if (githubBtn && p.githubLink) githubBtn.href = p.githubLink;

    // Performance Banner
    const perfHeader = document.getElementById('perfHeader');
    const perfSub = document.getElementById('perfSub');
    if (perfHeader && p.performanceHeader) perfHeader.innerHTML = p.performanceHeader;
    if (perfSub && p.performanceSub) perfSub.innerHTML = p.performanceSub;

    // Profile Widget di Hero
    const widgetName = document.getElementById('widgetFullName');
    const widgetRole = document.getElementById('widgetRoleBadge');
    if (widgetName && p.name) widgetName.textContent = p.name;
    if (widgetRole && p.roleBadge) widgetRole.textContent = p.roleBadge;

    // About Section Avatar Photo & Name Tag
    const aboutPhoto = document.getElementById('aboutPhotoImg');
    const aboutNameTag = document.getElementById('aboutNameTag');
    if (aboutPhoto && p.photo) {
      aboutPhoto.src = p.photo;
      if (p.name) aboutPhoto.alt = `Foto ${p.name}`;
    }
    if (aboutNameTag && (p.brandTitle || p.name)) {
      aboutNameTag.textContent = p.brandTitle || p.name;
    }

    // About Section Bio Paragraphs
    const bioContainer = document.getElementById('aboutBioText');
    if (bioContainer && Array.isArray(p.bio)) {
      bioContainer.innerHTML = p.bio.map(paragraph => `<p>${paragraph}</p>`).join('');
    }

    // About Section Specs
    const specsContainer = document.getElementById('aboutSpecsGrid');
    if (specsContainer && Array.isArray(p.specs)) {
      specsContainer.innerHTML = p.specs.map(spec => `
        <div class="spec-tile">
          <span class="spec-tile-label">${spec.label}</span>
          <span class="spec-tile-val">${spec.value}</span>
        </div>
      `).join('');
    }

    // Footer
    const footerTitle = document.getElementById('footerBrandTitle');
    const footerSub = document.getElementById('footerBrandSubtitle');
    const footerCopy = document.getElementById('footerCopyText');
    const footerCopyright = document.getElementById('footerCopyrightText');
    if (footerTitle && p.brandTitle) footerTitle.textContent = p.brandTitle;
    if (footerSub && p.brandSubtitle) footerSub.textContent = p.brandSubtitle;
    if (footerCopy && p.footerCopy) footerCopy.innerHTML = p.footerCopy;
    if (footerCopyright && p.copyright) footerCopyright.textContent = p.copyright;
  }

  // 2. Tiga Pilar Hero (Kiri)
  if (typeof CONFIG_PILLARS !== 'undefined' && Array.isArray(CONFIG_PILLARS)) {
    const pillarsContainer = document.getElementById('heroPillarsList');
    if (pillarsContainer && CONFIG_PILLARS.length > 0) {
      pillarsContainer.innerHTML = CONFIG_PILLARS.map(item => `
        <div class="pillar-item-row">
          <span class="pillar-num">${item.num}</span>
          <span class="pillar-text">${item.text}</span>
          <i class="fa-solid fa-heart pillar-heart"></i>
        </div>
      `).join('');
    }
  }

  // 3. Tema Nahida (Tag Kepribadian & Bubble Chat)
  if (typeof CONFIG_THEME !== 'undefined') {
    const t = CONFIG_THEME;
    const tagsContainer = document.getElementById('heroTagsStack');
    if (tagsContainer && Array.isArray(t.personalityTags)) {
      tagsContainer.innerHTML = t.personalityTags.map(tag => `
        <span class="pill-badge-dark">${tag}</span>
      `).join('');
    }

    const bubbleContainer = document.getElementById('heroBubbleText');
    if (bubbleContainer && (t.bubbleTitle || t.bubbleText)) {
      bubbleContainer.innerHTML = `
        <strong>${t.bubbleTitle || 'Halo, saya Nahida!'}</strong>
        ${t.bubbleText || ''}
      `;
    }
  }
}

/* ============================================================
   3. RENDER KEAHLIAN & PROGRESS METERS (SKILLS)
   ============================================================ */
function renderSkills() {
  if (typeof CONFIG_SKILLS === 'undefined') return;

  // Render Kartu Prangko Keahlian
  const postageContainer = document.getElementById('skillsPostageGrid');
  if (postageContainer && Array.isArray(CONFIG_SKILLS.categories)) {
    postageContainer.innerHTML = CONFIG_SKILLS.categories.map(cat => `
      <div class="postage-stamp-card">
        <div class="stamp-header-row">
          <span class="stamp-denomination">${cat.denomination || '№ 01'}</span>
          <span class="stamp-barcode">${cat.barcode || '||| |||| | |||||'}</span>
        </div>
        <div class="stamp-title-banner">${cat.title}</div>
        <p class="stamp-desc">${cat.desc}</p>
        <div class="stamp-tags-list">
          ${(cat.tags || []).map(t => `<span class="stamp-tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Render Meteran Penguasaan
  const meterGrid = document.getElementById('skillsMeterGrid');
  if (meterGrid && Array.isArray(CONFIG_SKILLS.bars)) {
    meterGrid.innerHTML = CONFIG_SKILLS.bars.map(bar => `
      <div class="meter-unit">
        <div class="meter-top">
          <span>${bar.name}</span>
          <span class="meter-pct" data-target="${bar.pct}">0%</span>
        </div>
        <div class="meter-track">
          <div class="meter-fill" data-width="${bar.pct}" style="width: 0%;"></div>
        </div>
      </div>
    `).join('');
  }
}

/* ============================================================
   4. RENDER SALURAN KONTAK
   ============================================================ */
function renderContacts() {
  if (typeof CONFIG_SOCIAL === 'undefined') return;
  const container = document.getElementById('contactChannelsList');
  if (!container) return;

  let channels = [];
  if (Array.isArray(CONFIG_SOCIAL)) {
    channels = CONFIG_SOCIAL;
  } else if (typeof CONFIG_SOCIAL === 'object') {
    channels = Object.values(CONFIG_SOCIAL).filter(Boolean);
  }

  if (channels.length === 0) return;

  container.innerHTML = channels.map(c => `
    <a href="${c.href || '#'}" ${c.href && c.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="nahida-icon-channel-card">
      <div class="channel-icon-avatar">
        ${c.iconImg ? `<img src="${c.iconImg}" alt="${c.label}" />` : '<i class="fa-solid fa-link" style="margin:auto;"></i>'}
      </div>
      <div class="channel-info-col">
        <span class="channel-label-mini">${c.label}</span>
        <span class="channel-main-val">${c.value}</span>
      </div>
    </a>
  `).join('');
}

/* ============================================================
   5. RENDER PROYEK (GALERI KARYA)
   ============================================================ */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsGridContainer');
  if (!container || typeof CONFIG_PROJECTS === 'undefined') return;

  const filtered = filter === 'all'
    ? CONFIG_PROJECTS
    : CONFIG_PROJECTS.filter(item => (item.category || '').toLowerCase() === filter.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--c-text-muted);">
        <i class="fa-solid fa-leaf" style="font-size: 2rem; color: var(--c-moss-medium); margin-bottom: 0.75rem; display:block;"></i>
        Belum ada proyek di kategori ini.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <article class="project-editorial-card ${p.featured ? 'is-featured' : ''}">
      <div class="project-img-window">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <span class="project-cat-badge">${p.category === 'Web App' ? 'Aplikasi Web' : p.category}</span>
        ${p.featured ? '<span class="project-featured-badge"><i class="fa-solid fa-star"></i> Unggulan</span>' : ''}
      </div>
      <div class="project-info-body">
        <h3 class="project-card-heading">${p.title}</h3>
        <p class="project-card-summary">${p.desc}</p>
        <div class="project-pills-row">
          ${(p.tags || []).map(t => `<span class="project-tag-item">${t}</span>`).join('')}
        </div>
        <div class="project-card-action-bar">
          <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-primary-link">
            <span>LIHAT PROYEK</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-primary-link" title="Kode Sumber GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function initProjectsFilter() {
  const filterBar = document.getElementById('galleryFilterBar');
  if (!filterBar || typeof CONFIG_PROJECTS === 'undefined') return;

  // Ambil semua kategori unik dari CONFIG_PROJECTS
  const categories = Array.from(new Set(CONFIG_PROJECTS.map(p => p.category).filter(Boolean)));

  filterBar.innerHTML = `
    <button class="filter-btn-pill active" data-filter="all">SEMUA PROYEK</button>
    ${categories.map(cat => {
      const label = cat === 'Web App' ? 'APLIKASI WEB' : cat.toUpperCase();
      return `<button class="filter-btn-pill" data-filter="${cat}">${label}</button>`;
    }).join('')}
  `;

  const pills = filterBar.querySelectorAll('.filter-btn-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

/* ============================================================
   6. FLOATING DOCK INTERAKSI (LIKE & SALIN LINK)
   ============================================================ */
function initFloatingDock() {
  const heartBtn = document.getElementById('dockHeartBtn');
  const shareBtn = document.getElementById('dockShareBtn');
  const toast = document.getElementById('dockToast');

  let likes = 32;
  if (heartBtn) {
    heartBtn.addEventListener('click', () => {
      likes++;
      heartBtn.style.transform = 'scale(1.3)';
      const heartIcon = heartBtn.querySelector('i');
      if (heartIcon) heartIcon.style.color = '#E63946';
      setTimeout(() => {
        heartBtn.style.transform = 'scale(1)';
      }, 250);

      showToast(`Terima kasih atas apresiasinya! 💚 (${likes})`);
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Tautan portofolio berhasil disalin! 🌿');
    });
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* ============================================================
   7. SWITCHER KUTIPAN PROFIL (DARI CONFIG_QUOTES)
   ============================================================ */
function initNanaToggle() {
  const bar = document.getElementById('nanaQuoteBar');
  const display = document.getElementById('widgetQuoteDisplay');
  if (!bar || !display) return;

  const quoteList = (typeof CONFIG_QUOTES !== 'undefined' && Array.isArray(CONFIG_QUOTES) && CONFIG_QUOTES.length > 0)
    ? CONFIG_QUOTES
    : [
        { label: "Kebijaksanaan", text: "“Menuntut ilmu adalah proses menumbuhkan kebijaksanaan.”" },
        { label: "Dedikasi", text: "“Dedikasi dan konsistensi mengubah baris kode menjadi karya nyata.”" },
        { label: "Masa Depan", text: "“Masa depan dibangun dari hal-hal kecil yang dipelajari hari ini.”" }
      ];

  // Render pill switcher tabs dari config
  bar.innerHTML = quoteList.map((q, idx) => `
    <span class="widget-pill-opt ${idx === 0 ? 'active' : ''}" data-quote="${idx}">${q.label}</span>
  `).join('');

  // Set kutipan awal
  display.textContent = quoteList[0].text;

  const pills = bar.querySelectorAll('.widget-pill-opt');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const idx = parseInt(pill.getAttribute('data-quote'), 10) || 0;

      display.style.opacity = '0';
      setTimeout(() => {
        display.textContent = quoteList[idx].text;
        display.style.opacity = '1';
      }, 150);
    });
  });
}

/* ============================================================
   8. PENGIRIMAN FORMULIR KONTAK
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactEditorialForm');
  const successToast = document.getElementById('editorialSuccessToast');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>MENGIRIM PESAN...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (successToast) {
        successToast.style.display = 'flex';
        form.reset();
        setTimeout(() => {
          successToast.style.display = 'none';
        }, 5000);
      }
    }, 1200);
  });
}

/* ============================================================
   9. NAVIGASI SCROLL AKTIF
   Urut: home -> about -> skills -> projects -> contact
   ============================================================ */
function initScrollNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ============================================================
   10. ANIMASI TEKS ACAK (TEXT SCRAMBLE / DECRYPT EFFECT)
   Berganti otomatis dari array CONFIG_SCRAMBLE_WORDS
   ============================================================ */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________✦🍃ABCDEFGHIJKLMN';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 15);
      const end = start + Math.floor(Math.random() * 20);
      this.queue.push({ from, to, start, end, char: '' });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="scramble-dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

function initTextScramble() {
  const el = document.getElementById('scrambleWord');
  if (!el) return;

  const scrambler = new TextScramble(el);
  const words = (typeof CONFIG_SCRAMBLE_WORDS !== 'undefined' && Array.isArray(CONFIG_SCRAMBLE_WORDS) && CONFIG_SCRAMBLE_WORDS.length > 0)
    ? CONFIG_SCRAMBLE_WORDS
    : ['KREATIF', 'SOLUTIF', 'DEDIKATIF', 'SETIA'];

  // Set teks awal agar sinkron dengan kata pertama
  el.textContent = words[0];

  let counter = 0;

  const next = () => {
    counter = (counter + 1) % words.length;
    scrambler.setText(words[counter]).then(() => {
      setTimeout(next, 2800);
    });
  };

  setTimeout(next, 2200);
}

/* ============================================================
   11. INTERAKSI GERAKAN HALUS NAHIDA (PARALLAX ON HOVER)
   ============================================================ */
function initNahidaMotion() {
  const stage = document.querySelector('.hero-art-stage');
  const nahida = document.querySelector('.hero-nahida-character');
  if (!stage || !nahida) return;

  // Hanya jalankan parallax di desktop / pointer device
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const moveX = (x / rect.width) * 16;
      const moveY = (y / rect.height) * 16;

      nahida.style.transform = `translate(${moveX}px, ${moveY - 8}px) scale(1.02)`;
    });

    stage.addEventListener('mouseleave', () => {
      nahida.style.transform = '';
    });
  }
}

/* ============================================================
   12. MENU NAVIGASI MOBILE (HAMBURGER DRAWER & BACKDROP)
   ============================================================ */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu-list');
  const menuIcon = document.getElementById('mobileMenuIcon');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!toggleBtn || !navMenu) return;

  const openMenu = () => {
    navMenu.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
    if (menuIcon) menuIcon.className = 'fa-solid fa-xmark';
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    navMenu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
    if (menuIcon) menuIcon.className = 'fa-solid fa-bars';
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Klik backdrop untuk menutup menu
  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Tutup menu jika klik di luar area menu
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      if (navMenu.classList.contains('open')) {
        closeMenu();
      }
    }
  });

  // Tutup menu dengan tombol Escape di keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Tutup menu otomatis setelah memilih salah satu menu tautan
  navMenu.querySelectorAll('.nav-link-item').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

/* ============================================================
   13. ANIMASI TINGKAT PENGUASAAN KEAHLIAN (0% -> TARGET%)
   Animasi angka berhitung halus & bilah persentase meluncur saat di-scroll
   ============================================================ */
function initSkillsMeterAnimation() {
  const meterCard = document.getElementById('skillsMeterCard');
  if (!meterCard) return;

  let animated = false;

  const triggerAnimation = () => {
    if (animated) return;
    animated = true;

    const units = meterCard.querySelectorAll('.meter-unit');
    units.forEach((unit, idx) => {
      const pctEl = unit.querySelector('.meter-pct');
      const fillEl = unit.querySelector('.meter-fill');
      if (!pctEl || !fillEl) return;

      const targetVal = parseInt(pctEl.getAttribute('data-target') || '0', 10);
      const duration = 1500; // 1.5 detik durasi animasi berhitung

      // Delay sedikit antar baris agar ada efek beruntun yang elegan
      setTimeout(() => {
        // Meluncurkan bilah progress
        fillEl.style.width = `${targetVal}%`;

        // Animasi angka dari 0 ke target%
        const startTime = performance.now();

        function countStep(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing cubic out: cepat di awal, melambat lembut saat mendekati target
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.round(easeProgress * targetVal);

          pctEl.textContent = `${currentCount}%`;

          if (progress < 1) {
            requestAnimationFrame(countStep);
          } else {
            pctEl.textContent = `${targetVal}%`;
          }
        }

        requestAnimationFrame(countStep);
      }, idx * 120);
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(meterCard);
  } else {
    // Fallback jika browser lama tidak mendukung IntersectionObserver
    triggerAnimation();
  }
}

/* ============================================================
   14. TOMBOL KEMBALI KE ATAS (BACK TO TOP)
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  const handleScroll = () => {
    if (window.scrollY > 350) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Initial check
  handleScroll();

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
