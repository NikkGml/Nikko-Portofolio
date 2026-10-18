/* ================================================================
   🌿 CONFIG.JS — FILE KONFIGURASI PORTOFOLIO (TEMA NAHIDA)
   ================================================================
   Halo Nikko! File ini adalah tempat utama untuk mengubah semua isi
   portofoliomu: profil, proyek, keahlian, kontak, dan teks tema.
   Semua data otomatis tersambung ke tampilan website.
   ================================================================ */

/* ----------------------------------------------------------------
   👤 PROFIL UTAMA
   ---------------------------------------------------------------- */
const CONFIG_PROFILE = {
  name: "Febian Nikko Ferdi Ansyah",   // Nama lengkap
  shortName: "Nikko",                  // Nama panggilan
  initials: "FN",                      // Inisial untuk logo & avatar
  tagline: "Software Developer • Content Creator • Frontend Enthusiast",
  greeting: "Halo, saya",              // Kata sapaan
  subGreeting: "Selamat datang di Digital Sanctuary saya 🌿",

  bio: [
    `Saya adalah seorang <strong>siswa SMK Brantas Karangkates jurusan RPL (Rekayasa Perangkat Lunak)</strong> yang memiliki ketertarikan besar di dunia teknologi, khususnya pengembangan website, desain antarmuka, serta pembuatan konten digital. Saya senang mempelajari hal baru dan terus meningkatkan kemampuan melalui berbagai proyek pribadi maupun tugas sekolah.`,
    `Saat ini saya berfokus mempelajari <strong>HTML, CSS, JavaScript, PHP, MySQL, Python, dan dasar-dasar Laravel</strong>. Selain itu, saya juga aktif membuat konten di YouTube, mendesain thumbnail kreatif, serta mengembangkan berbagai proyek aplikasi web interaktif sebagai bagian dari petualangan belajar saya.`,
  ],

  // Info detail di kartu About
  location: "Blitar, Jawa Timur",
  education: "SMK Brantas Karangkates — RPL",
  focus: "Web App & Mobile Development",
  languages: "Indonesia, English",
  status: "Open to Learn & Build Projects",
  statusOpen: true,    // true = dot hijau (aktif)

  // Link Unduh CV
  cvLink: "#",
};


/* ----------------------------------------------------------------
   🍃 TEMA NAHIDA & AKASHA TERMINAL
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
  // Palet Warna Utama
  primary: "#52B788",         // Nahida Dendro Green
  primaryDark: "#2D6A4F",     // Forest Deep Green
  primaryLight: "#74C69D",    // Sage Bright
  accentGold: "#D4AF37",      // Sumeru Gold Accent
  bgLight: "#F7FAF5",         // Cream Sage Light
  bgDark: "#0D1812",          // Deep Sanctuary Slate Dark
  
  // Kutipan Nahida & Dialog Mascot
  dialogueQuote: "“To learn is to cultivate wisdom. Mari ciptakan sesuatu yang luar biasa bersama!”",
  mascotQuotes: [
    "“Semua mimpi besar dimulai dari baris kode pertama!”",
    "“Pengetahuan adalah lentera yang menerangi masa depan.”",
    "“Jangan lupa istirahat dan minum air ya! 🌿”",
    "“Setiap bug adalah kesempatan untuk belajar hal baru!”",
    "“Selamat menjelajahi portofolio Febian Nikko!”"
  ],
  mascotEnabled: true // Tampilkan mascot interaktif Nahida di pojok
};


/* ----------------------------------------------------------------
   📊 STATISTIK HERO
   ---------------------------------------------------------------- */
const CONFIG_STATS = [
  { number: 3, label: "Proyek Selesai", suffix: "+" },
  { number: 10, label: "Tahun Pengalaman", suffix: "th" },
  { number: 100, label: "Passion & Belajar", suffix: "%" },
];


/* ----------------------------------------------------------------
   🔗 SOSIAL MEDIA & KONTAK
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = {
  email: "efendisetiaji07@gmail.com",
  instagram: "",                                                  // Kosongkan jika belum aktif
  github: "https://github.com/NikkGml",
  linkedin: "https://www.linkedin.com/in/febian-nikko-ferdi-ansyah-b26879384",
  twitter: "",
  discord: "https://discord.com",                                 // Opsional link Discord
};


/* ----------------------------------------------------------------
   🛠️ KEAHLIAN (SKILLS)
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
  categories: [
    {
      icon: "fa-solid fa-code",
      title: "Frontend Development",
      desc: "Membangun antarmuka modern, responsif, dan interaktif.",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind / Bootstrap", "Responsive Design"],
    },
    {
      icon: "fa-solid fa-server",
      title: "Backend & Database",
      desc: "Logika server, API, dan pengelolaan basis data relasional.",
      tags: ["PHP", "Laravel Basics", "MySQL", "Node.js Basics", "REST API"],
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Creative Tools & Dev",
      desc: "Tooling desain, video editing, dan lingkungan pengembangan.",
      tags: ["Git & GitHub", "VS Code", "Figma", "OBS Studio", "CapCut / Premiere", "Python Basics"],
    },
  ],

  bars: [
    { name: "Frontend Development", pct: 75, icon: "fa-brands fa-html5" },
    { name: "Backend & PHP / MySQL", pct: 65, icon: "fa-brands fa-php" },
    { name: "UI / UX & Graphic Design", pct: 60, icon: "fa-solid fa-palette" },
    { name: "Content Creation & Video", pct: 70, icon: "fa-solid fa-video" },
  ],
};


/* ----------------------------------------------------------------
   💼 PROYEK UNGGULAN
   ---------------------------------------------------------------- */
const CONFIG_PROJECTS = [
  {
    id: "zora-store",
    title: "Zora Store — Top Up Game",
    desc: "Aplikasi website modern bertema marketplace untuk layanan Top Up game dengan antarmuka yang bersih dan mudah digunakan.",
    image: "assets/img/zora.png",
    tags: ["HTML5", "CSS3", "JavaScript", "UI Design"],
    category: "Web App",
    link: "https://website-top-up-sigma.vercel.app/",
    github: "https://github.com/NikkGml",
    featured: true
  },
  {
    id: "smk-17-agustus",
    title: "SMK 17 Agustus 1945 Surabaya",
    desc: "Proyek website profil sekolah edukasi dengan struktur navigasi terorganisir untuk mempermudah akses informasi guru & siswa.",
    image: "assets/img/smk.png",
    tags: ["HTML5", "CSS3", "School Web"],
    category: "Web App",
    link: "https://smk-17-agustus.vercel.app/",
    github: "https://github.com/NikkGml",
    featured: true
  },
  {
    id: "game-petualangan-2d",
    title: "Game Petualangan 2D",
    desc: "Game platformer 2D bertema petualangan berbasis Scratch Blocks dengan sistem rintangan interaktif dan mekanik melompat responsif.",
    image: "assets/img/gameloncat.png",
    tags: ["Scratch Blocks", "GameDev", "Interactive"],
    category: "Game",
    link: "https://scratch.mit.edu/projects/1131604996",
    github: "",
    featured: false
  },
];
