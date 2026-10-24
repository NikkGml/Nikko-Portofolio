/* ================================================================
   🌿 CONFIG.JS — PUSAT KONTROL UTAMA PORTOFOLIO (TEMA NAHIDA)
   ================================================================
   Halo! File ini adalah tempat kamu bisa mengubah semua isi
   portofolio dengan mudah tanpa perlu mengedit kode HTML.
   Cukup ubah data di bawah ini, dan tampilan website akan
   otomatis menyesuaikan!
   ================================================================ */

/* ----------------------------------------------------------------
   👤 1. PROFIL UTAMA & INFORMASI PRIBADI
   ---------------------------------------------------------------- */
const CONFIG_PROFILE = {
  // Nama lengkap & panggilan
  name: "Febian Nikko Ferdi Ansyah",
  shortName: "Nikko",

  // Nama brand di navbar & footer
  brandTitle: "FEBIAN NIKKO",
  brandSubtitle: "ruang kreatif // 2026",

  // Peran / Status di widget profil
  roleBadge: "Software Developer • Siswa RPL",

  // Foto Profil (file di dalam folder assets/img/)
  photo: "assets/img/foto.jpg",

  // Kartu Magazine Editorial di Hero Kanan
  magazineNotch: "ditulis oleh @FebianNikko untuk Portofolio Kreatif",
  magazineQuote: "Halo! Saya <strong>Febian Nikko Ferdi Ansyah</strong>, seorang siswa SMK Brantas Karangkates jurusan Rekayasa Perangkat Lunak (RPL). Senang merancang antarmuka web modern yang fungsional, estetis, dan bermakna. Selalu bersemangat belajar teknologi baru dan membuat karya digital.",
  magazineFooterLeft: "@ 2026 Portofolio Nikko",
  magazineFooterRight: "SMK Brantas Karangkates • RPL",

  // Kotak Kreatif & Banner di Hero
  creativeAuthor: "dibuat oleh nikko",
  creativeTitle: "Ruang <span class=\"pill-highlight-text\">kreatif</span> Nikko!",
  performanceHeader: "PERFORMA & DEDIKASI!!",
  performanceSub: "SMK BRANTAS KARANGKATES • REKAYASA PERANGKAT LUNAK 💚<br />BELAJAR, BERKARYA, MENGUASAI MASA DEPAN",

  // Tautan CV & GitHub
  cvLink: "#",
  githubLink: "https://github.com/NikkGml",

  // Paragraf Catatan Profil di Bagian "Tentang Saya"
  bio: [
    "Saya adalah seorang <strong>siswa SMK Brantas Karangkates jurusan RPL (Rekayasa Perangkat Lunak)</strong> yang memiliki ketertarikan besar di dunia teknologi, khususnya pengembangan website, desain antarmuka, serta pembuatan konten digital.",
    "Saat ini saya berfokus mempelajari <strong>HTML, CSS, JavaScript, PHP, MySQL, Python, dan dasar-dasar Laravel</strong>. Selain itu, saya juga aktif membuat konten di YouTube, mendesain thumbnail kreatif, serta mengembangkan berbagai proyek website dan aplikasi sebagai sarana mengasah kemampuan teknis."
  ],

  // Rincian Spesifikasi di Bagian "Tentang Saya"
  specs: [
    { label: "Lokasi", value: "Blitar, Jawa Timur" },
    { label: "Pendidikan", value: "SMK Brantas Karangkates" },
    { label: "Fokus Keahlian", value: "Web & Mobile Development" },
    { label: "Bahasa", value: "Indonesia, Inggris" }
  ],

  // Teks Footer & Hak Cipta
  footerCopy: "Didesain dengan inspirasi tema Nahida (Genshin Impact) • Siswa RPL SMK Brantas Karangkates",
  copyright: "© 2026 Febian Nikko Ferdi Ansyah. Hak Cipta Dilindungi."
};


/* ----------------------------------------------------------------
   🌱 2. TIGA PILAR DI HERO SECTION (KIRI)
   ---------------------------------------------------------------- */
const CONFIG_PILLARS = [
  { num: "01", text: "Pengembang Frontend Responsif" },
  { num: "02", text: "Backend PHP, Laravel & MySQL" },
  { num: "03", text: "Pembuat Konten Digital & Desain" }
];


/* ----------------------------------------------------------------
   ✨ 3. KATA SCRAMBLE DI HERO ("Nikko KREATIF / SOLUTIF ...")
   ---------------------------------------------------------------- */
const CONFIG_SCRAMBLE_WORDS = [
  "KREATIF",
  "SOLUTIF",
  "DEDIKATIF",
  "SETIA"
];


/* ----------------------------------------------------------------
   🍃 4. TEMA NAHIDA & GELEMBUNG CHAT
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
  // Tiga pill badge di samping karakter Nahida
  personalityTags: ["RAMAH", "EMPATIK", "KREATIF"],

  // Isi gelembung sapaan Nahida
  bubbleTitle: "Halo, saya Nahida!",
  bubbleText: "Selamat datang di ruang kreatif Nikko."
};


/* ----------------------------------------------------------------
   💬 5. KUTIPAN SWITCHER TAB (WIDGET PROFIL HERO)
   ---------------------------------------------------------------- */
const CONFIG_QUOTES = [
  {
    label: "Kebijaksanaan",
    text: "“Menuntut ilmu adalah proses menumbuhkan kebijaksanaan.”"
  },
  {
    label: "Dedikasi",
    text: "“Dedikasi dan konsistensi mengubah baris kode menjadi karya nyata.”"
  },
  {
    label: "Masa Depan",
    text: "“Masa depan dibangun dari hal-hal kecil yang dipelajari hari ini.”"
  }
];


/* ----------------------------------------------------------------
   🛠️ 6. KEAHLIAN & TINGKAT PENGUASAAN (SKILLS)
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
  // Kartu Prangko Keahlian (Bisa ditambah / dikurangi)
  categories: [
    {
      denomination: "№ 01",
      barcode: "||| |||| | |||||",
      title: "PENGEMBANGAN FRONTEND",
      desc: "Membangun tampilan antarmuka web yang modern, interaktif, responsif, dan nyaman digunakan.",
      tags: ["HTML5", "CSS3", "JavaScript", "Desain Responsif"]
    },
    {
      denomination: "№ 02",
      barcode: "||| || | |||| ||",
      title: "BACKEND & BASIS DATA",
      desc: "Mengolah alur logika server, rancangan basis data relasional, dan integrasi API.",
      tags: ["PHP", "MySQL", "Dasar Laravel", "Dasar Node.js"]
    },
    {
      denomination: "№ 03",
      barcode: "|||| | |||| | ||",
      title: "STUDIO KREATIF & ALAT",
      desc: "Alat desain grafis, pengelolaan kode versi Git, serta software produksi video multimedia.",
      tags: ["Git & GitHub", "VS Code", "Figma", "OBS Studio", "CapCut / Premiere"]
    }
  ],

  // Bilah Meteran Persentase (0% - 100%)
  bars: [
    { name: "Pengembangan Frontend", pct: 75 },
    { name: "Backend PHP & MySQL", pct: 65 },
    { name: "Desain UI / UX & Grafis", pct: 60 },
    { name: "Pembuatan Konten Video", pct: 70 }
  ]
};


/* ----------------------------------------------------------------
   💼 7. GALERI PROYEK (PROJECTS)
   ----------------------------------------------------------------
   Kategori otomatis muncul di tombol filter ("Web App", "Game", dll.)
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
  }
];


/* ----------------------------------------------------------------
   📬 8. SALURAN KONTAK & MEDIA SOSIAL
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = [
  {
    label: "Surat Elektronik",
    value: "efendisetiaji07@gmail.com",
    href: "mailto:efendisetiaji07@gmail.com",
    iconImg: "assets/img/nahida/129148f167419af87b094fb68adccf78.jpg"
  },
  {
    label: "Repositori GitHub",
    value: "github.com/NikkGml",
    href: "https://github.com/NikkGml",
    iconImg: "assets/img/nahida/Nahida Settings Icon.jpeg"
  },
  {
    label: "Komunitas Discord",
    value: "Terhubung di Discord",
    href: "https://discord.com",
    iconImg: "assets/img/nahida/7aa5f3c29b29e64e461c2a42830d8432.jpg"
  }
];
