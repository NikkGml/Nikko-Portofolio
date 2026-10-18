/**
 * 🌿 NAHIDA THEME PORTOFOLIO — SCRIPT.JS
 * Logika Interaktif, Mode Terang & Gelap, Filter Proyek & Animasi
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initSkillsMeterAnimation();
  renderProjects('all');
  initFloatingDock();
  initProjectsFilter();
  initNanaToggle();
  initContactForm();
  initScrollNav();
  initTextScramble();
  initNahidaMotion();
  applyConfigData();
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
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

/* ============================================================
   2. DATA DARI CONFIG.JS
   ============================================================ */
function applyConfigData() {
  if (typeof CONFIG_PROFILE === 'undefined') return;

  const p = CONFIG_PROFILE;
  const cvBtn = document.getElementById('cvHeroBtn');
  if (cvBtn && p.cvLink) {
    cvBtn.href = p.cvLink;
  }
}

/* ============================================================
   3. RENDER PROYEK (GALERI KARYA)
   ============================================================ */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsGridContainer');
  if (!container || typeof CONFIG_PROJECTS === 'undefined') return;

  const filtered = filter === 'all'
    ? CONFIG_PROJECTS
    : CONFIG_PROJECTS.filter(item => item.category.toLowerCase() === filter.toLowerCase());

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
    <article class="project-editorial-card">
      <div class="project-img-window">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <span class="project-cat-badge">${p.category === 'Web App' ? 'Aplikasi Web' : p.category}</span>
      </div>
      <div class="project-info-body">
        <h3 class="project-card-heading">${p.title}</h3>
        <p class="project-card-summary">${p.desc}</p>
        <div class="project-pills-row">
          ${p.tags.map(t => `<span class="project-tag-item">${t}</span>`).join('')}
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
  const pills = document.querySelectorAll('.filter-btn-pill');
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
   4. FLOATING DOCK INTERAKSI (LIKE & SALIN LINK)
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
   5. SWITCHER KUTIPAN PROFIL FEBIAN NIKKO
   ============================================================ */
function initNanaToggle() {
  const bar = document.getElementById('nanaQuoteBar');
  const display = document.getElementById('widgetQuoteDisplay');
  if (!bar || !display) return;

  const quotes = [
    "“Menuntut ilmu adalah proses menumbuhkan kebijaksanaan.”",
    "“Dedikasi dan konsistensi mengubah baris kode menjadi karya nyata.”",
    "“Masa depan dibangun dari hal-hal kecil yang dipelajari hari ini.”"
  ];

  const pills = bar.querySelectorAll('.widget-pill-opt');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const idx = parseInt(pill.getAttribute('data-quote'), 10) || 0;
      
      display.style.opacity = '0';
      setTimeout(() => {
        display.textContent = quotes[idx];
        display.style.opacity = '1';
      }, 150);
    });
  });
}

/* ============================================================
   6. PENGIRIMAN FORMULIR KONTAK
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
   7. NAVIGASI SCROLL AKTIF
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
   8. ANIMASI TEKS ACAK (TEXT SCRAMBLE / DECRYPT EFFECT)
   Berganti: "CIHUY" -> "BAIK" -> "SETIA"
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
  const words = ['CIHUY', 'BAIK', 'SETIA'];
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
   9. INTERAKSI GERAKAN HALUS NAHIDA (PARALLAX ON HOVER)
   ============================================================ */
function initNahidaMotion() {
  const stage = document.querySelector('.hero-art-stage');
  const nahida = document.querySelector('.hero-nahida-character');
  if (!stage || !nahida) return;

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = (x / rect.width) * 18;
    const moveY = (y / rect.height) * 18;

    nahida.style.transform = `translate(${moveX}px, ${moveY - 8}px) scale(1.02)`;
  });

  stage.addEventListener('mouseleave', () => {
    nahida.style.transform = '';
  });
}

/* ============================================================
   10. MENU NAVIGASI MOBILE (HAMBURGER DRAWER TOGGLE)
   ============================================================ */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu-list');
  const menuIcon = document.getElementById('mobileMenuIcon');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('open');
    if (menuIcon) {
      menuIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
  });

  // Tutup menu jika klik di luar area menu
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        if (menuIcon) menuIcon.className = 'fa-solid fa-bars';
      }
    }
  });

  // Tutup menu otomatis setelah memilih salah satu menu tautan
  navMenu.querySelectorAll('.nav-link-item').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      if (menuIcon) menuIcon.className = 'fa-solid fa-bars';
    });
  });
}

/* ============================================================
   11. ANIMASI TINGKAT PENGUASAAN KEAHLIAN (0% -> TARGET%)
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

