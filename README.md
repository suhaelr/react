# Jadixpert Homepage

Jadixpert Homepage adalah aplikasi web e-learning berbasis React + TypeScript yang meniru tampilan dan UX MySkill.id, dengan backend Node.js/Express untuk data dinamis. Proyek ini menggunakan Tailwind CSS untuk styling dan terstruktur secara modular.

## Spesifikasi Versi

- **Frontend**
  - React: ^18.2.0
  - TypeScript: ^4.4.4
  - Tailwind CSS: ^2.2.19
  - React Router DOM: ^6.30.1
  - Axios: ^1.10.0
- **Backend**
  - Node.js: v16+ (disarankan)
  - Express: ^5.1.0
  - CORS: ^2.8.5

## Struktur Proyek

```
jadixpert-homepage/
├── src/
│   ├── components/
│   │   ├── common/         # Semua komponen UI modular (Header, HeroSection, Features, Testimonials, Footer, dsb)
│   ├── data/               # Data dummy (JSON/TS) untuk fitur, testimoni, dsb
│   ├── pages/              # Halaman utama & menu (Home, Blog, Bootcamp, InfoLoker, Login, Register, ReviewCV, dsb)
│   ├── App.tsx             # Routing & layout utama
│   ├── index.tsx           # Entry point React
│   └── index.css           # Import Tailwind
├── tailwind.config.js      # Konfigurasi Tailwind
├── postcss.config.js       # Konfigurasi PostCSS
├── package.json            # Dependensi frontend
├── tsconfig.json           # Konfigurasi TypeScript
└── README.md

jadixpert-backend/
├── server.js               # Entry point backend (Express API)
└── package.json            # Dependensi backend
```

## Cara Menjalankan Project

### 1. Jalankan Backend (API)
```bash
cd jadixpert-backend
npm install
npm start
```
Backend akan berjalan di http://localhost:5000 dan menyediakan endpoint:
- `/api/features` (fitur utama)
- `/api/testimonials` (testimoni user)

### 2. Jalankan Frontend (React)
```bash
cd jadixpert-homepage
npm install
npm start
```
Frontend dapat diakses di http://localhost:3000

## Penjelasan Frontend
- **Navigasi & Footer**: Selalu responsif, terdapat hamburger menu sidebar di mobile.
- **HeroSection**: Headline, subheadline, ilustrasi (unDraw), dan tombol CTA.
- **Features**: Menampilkan fitur utama, data dari backend.
- **Testimonials**: Slider horizontal testimoni user, data dari backend.
- **Pages**: Terdapat halaman Blog, Bootcamp, InfoLoker, Login, Register, ReviewCV, dsb.
- **Komponen Modular**: Semua UI reusable, mudah dikembangkan.
- **Routing**: Menggunakan React Router DOM.
- **Styling**: Utility-first dengan Tailwind, responsif di semua perangkat.

## Penjelasan Backend
- **API**: Menyediakan data fitur dan testimoni (bisa dikembangkan untuk data lain).
- **Teknologi**: Node.js + Express, CORS untuk akses frontend.
- **Dummy Data**: Data fitur dan testimoni di-hardcode di server.js, bisa diganti dengan database.

## Catatan
- Semua gambar dan ilustrasi menggunakan sumber bebas lisensi (unDraw, Pexels, Pixabay, randomuser.me).
- Untuk pengembangan lebih lanjut, backend dapat diperluas untuk autentikasi, kursus, dsb.

---

**Untuk pertanyaan atau pengembangan lebih lanjut, silakan hubungi tim Jadixpert.**
