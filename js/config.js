/* ================================================================
   ✏️  CONFIG.JS — FILE KONFIGURASI PORTOFOLIO
   ================================================================
   Halo! File ini adalah SATU-SATUNYA file yang perlu kamu ubah.
   Ikuti petunjuk di setiap bagian, lalu simpan dan refresh browser.
   Jangan ubah file lain kecuali kamu sudah paham JavaScript.
   ================================================================ */


/* ----------------------------------------------------------------
   👤 PROFIL UTAMA
   Ubah nama, tagline, deskripsi, dan info pribadimu di sini.
   ---------------------------------------------------------------- */
const CONFIG_PROFILE = {
  name: "Febian Nikko Ferdi Ansyah",   // Nama lengkap kamu
  initials: "FN",                  // 2 huruf inisial (untuk logo & avatar)
  tagline: "Software Developer • Content Creator • UI/UX Designer", // Kalimat singkat di bawah nama
  greeting: "Halo, saya",          // Kata sapaan sebelum nama besar
  bio: [
    // Paragraf pertama tentang kamu (boleh diedit bebas)
     `Saya adalah seorang <strong>siswa SMK Brantas Karangkates jurusan RPL (Rekayasa Perangkat Lunak)</strong> yang memiliki ketertarikan besar di dunia teknologi, khususnya pengembangan website, desain antarmuka, serta pembuatan konten digital. Saya senang mempelajari hal baru dan terus meningkatkan kemampuan melalui berbagai proyek pribadi maupun tugas sekolah.`,
    // Paragraf kedua (teknologi yang kamu pakai)
    `Saat ini saya berfokus mempelajari <strong>HTML, CSS, JavaScript, PHP, MySQL, Python, dan dasar-dasar Laravel</strong>. Selain itu, saya juga sering aktif membuat konten di YouTube, mendesain thumbnail, serta mengembangkan berbagai proyek website dan aplikasi sederhana sebagai bagian dari proses belajar.`,
  ],

  // Info detail di kartu about
  location: "Blitar, Jawa Timur",
  education: "SMK Brantas Karangkates — RPL",
  focus: "Web App & Mobile Development",
  languages: "Indonesia, English",

  // Status badge di hero & about (ganti teks sesuai kondisimu)
  status: "Open to Learn & Build Projects",   // contoh: "Sedang Sekolah" / "Open to Projects"
  statusOpen: true,    // true = titik hijau (aktif), false = titik merah

  // Link tombol "Unduh CV" — ganti dengan path file CV kamu
  cvLink: "#",     // contoh: "file/cv-rizky.pdf"
};


/* ----------------------------------------------------------------
   📊 STATISTIK HERO
   Angka yang muncul di bagian bawah hero dengan animasi counter.
   ---------------------------------------------------------------- */
const CONFIG_STATS = [
  { number: 0, label: "Proyek" },
  { number: 0, label: "Tahun pengalaman" },
  { number: 0, label: "Klien" },
];


/* ----------------------------------------------------------------
   🔗 SOSIAL MEDIA & KONTAK
   Ganti nilai "url" dengan link profilmu. Kosongkan ("") untuk sembunyi.
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = {
  email: "efendisetiaji07@gmail.com",
  instagram: "",   // kosongkan "" untuk sembunyikan
  github: "https://github.com/NikkGml",
  linkedin: "www.linkedin.com/in/febian-nikko-ferdi-ansyah-b26879384",
  twitter: "",   // kosongkan "" untuk sembunyikan
};


/* ----------------------------------------------------------------
   🛠️  KEAHLIAN (SKILLS)
   Tambah / hapus skill sesuai kemampuanmu.
   Skill bar: nilai 0–100 (persentase kemampuan).
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
  categories: [
    {
      icon: "fa-solid fa-desktop",
      title: "Frontend",
      tags: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
    },
    {
      icon: "fa-solid fa-server",
      title: "Backend",
      tags: ["PHP", "Laravel", "Node.js", "Express", "MySQL", "MongoDB"],
    },
    {
      icon: "fa-solid fa-wrench",
      title: "Tools & Others",
      tags: ["Git", "GitHub", "Figma", "Docker", "VS Code", "OBS Studio"],
    },
  ],

  bars: [
    { name: "Frontend Development", pct: 90 },
    { name: "Backend Development", pct: 90 },
    { name: "UI / UX Design", pct: 75 },
    { name: "Mobile Development", pct: 65 },
  ],
};


/* ----------------------------------------------------------------
   💼 PROYEK
   Tambah proyek baru dengan menambah blok { ... } di bawah.
   category harus salah satu dari: "Web App" / "Mobile" / "Game" / "Web"
   ---------------------------------------------------------------- */
const CONFIG_PROJECTS = [
  {
    title: "Zora Store",
    desc: "Aplikasi web untuk Top Up Game.",
    image: "img/zora.png",
    tags: ["HTML", "CSS"],
    category: "Web App",
    link: "https://website-top-up-sigma.vercel.app/",   // ganti dengan URL proyekmu
  },
  {
    title: "Mobile App Pemesanan",
    desc: "Aplikasi pemesanan layanan berbasis Flutter dengan sistem notifikasi realtime menggunakan Firebase.",
    tags: ["Flutter", "Firebase", "Dart"],
    category: "Mobile",
    link: "#",
  },
  {
    title: "Game Petualangan 2D",
    desc: "Game platformer 2D bertema petualangan nusantara yang dibuat menggunakan Unity dan C#.",
    tags: ["Unity", "C#", "GameDev"],
    category: "Game",
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    desc: "Dashboard analitik data penjualan dengan visualisasi interaktif menggunakan React dan Chart.js.",
    tags: ["React", "Chart.js", "Tailwind"],
    category: "Web App",
    link: "#",
  },
  {
    title: "E-Commerce Mini",
    desc: "Toko online sederhana dengan fitur keranjang belanja, autentikasi, dan dashboard admin lengkap.",
    tags: ["Laravel", "Tailwind", "MySQL"],
    category: "Web App",
    link: "#",
  },
  {
    title: "Fitness Tracker App",
    desc: "Aplikasi pelacak aktivitas olahraga harian dengan pengingat dan riwayat latihan lengkap.",
    tags: ["React Native", "AsyncStorage"],
    category: "Mobile",
    link: "#",
  },
];


/* ----------------------------------------------------------------
   🎨 WARNA TEMA  (opsional — skip jika tidak mau ubah)
   Ganti kode warna hex sesuai selera.
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
  accent:  "#7BC74D",             // Hijau utama Nahida
  accent2: "rgba(123, 199, 77, 0.35)", // Glow hijau
};
