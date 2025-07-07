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

## Cara Menambah/Mengedit Page (Frontend)

1. **Menambah Page Baru:**
   - Buat file baru di `src/pages/`, misal: `src/pages/Promo.tsx`.
   - Isi dengan komponen React, contoh:
     ```tsx
     import React from 'react';
     const Promo: React.FC = () => (<div>Promo Page</div>);
     export default Promo;
     ```
   - Tambahkan route di `src/App.tsx`:
     ```tsx
     import Promo from './pages/Promo';
     // ...
     <Route path="/promo" element={<Promo />} />
     ```
   - Tambahkan link di navbar jika perlu (edit `src/components/Header.tsx`).

2. **Mengedit Page yang Ada:**
   - Edit file di `src/pages/` sesuai nama page, misal `src/pages/Bootcamp.tsx`.
   - Untuk custom komponen, edit file di `src/components/common/`.

3. **Menambah/Mengedit Komponen:**
   - Semua komponen UI ada di `src/components/common/`. Tambahkan file baru atau edit sesuai kebutuhan.

4. **Menambah Data Dummy:**
   - Tambahkan file/data di `src/data/` (format .json atau .ts), lalu import ke komponen/page yang membutuhkan.

## Cara Membuat Endpoint Baru (Backend)

1. Buka `jadixpert-backend/server.js`.
2. Tambahkan data baru, misal:
   ```js
   const courses = [ { id: 1, title: "React", ... } ];
   ```
3. Tambahkan endpoint baru:
   ```js
   app.get('/api/courses', (req, res) => res.json(courses));
   ```
4. Restart backend (`npm start`).
5. Frontend bisa fetch ke endpoint baru, misal dengan axios/fetch ke `http://localhost:5000/api/courses`.

## Catatan Routing
- Semua route frontend diatur di `src/App.tsx` menggunakan `<Route path=... element=... />`.
- Untuk navigasi, gunakan `<Link to="/namaroute">...</Link>` dari `react-router-dom`.

---

<<<<<<< HEAD:jadixpert-homepage/README.md
## Cara Menambah Menu & Page di Navbar dan Footer

### Navbar (Header)
1. **Menambah Menu di Navbar:**
   - Buka `src/components/Header.tsx`.
   - Temukan array/menu list (biasanya berupa array objek atau elemen `<Link>`).
   - Tambahkan item baru, contoh:
     ```tsx
     <Link to="/promo" className="...">Promo</Link>
     ```
   - Jika menggunakan array, tambahkan objek baru:
     ```tsx
     const menu = [
       { name: "Home", path: "/" },
       { name: "Promo", path: "/promo" }, // menu baru
       // ...menu lain
     ];
     ```
   - Pastikan route `/promo` sudah ada di `src/App.tsx` dan page `Promo.tsx` sudah dibuat di `src/pages/`.

2. **Mengatur Urutan & Responsif:**
   - Urutan menu bisa diubah dengan mengurutkan array/menu.
   - Untuk responsif, pastikan menu juga muncul di sidebar hamburger (mobile).

### Footer
1. **Menambah Menu di Footer:**
   - Buka `src/components/Footer.tsx`.
   - Temukan bagian menu/link (biasanya array atau list `<Link>`).
   - Tambahkan item baru, contoh:
     ```tsx
     <Link to="/promo" className="...">Promo</Link>
     ```
   - Jika menggunakan array, tambahkan objek baru:
     ```tsx
     const footerLinks = [
       { name: "Tentang", path: "/about" },
       { name: "Promo", path: "/promo" }, // menu baru
       // ...menu lain
     ];
     ```
   - Pastikan page dan route sudah tersedia.

---

## Cara Integrasi PostgreSQL di Backend

1. **Install Library PostgreSQL:**
   ```bash
   npm install pg
   ```
2. **Konfigurasi Koneksi di `jadixpert-backend/server.js`:**
   ```js
   const { Pool } = require('pg');
   const pool = new Pool({
     user: 'postgres',
     host: 'localhost',
     database: 'jadixpert',
     password: 'passwordAnda',
     port: 5432,
   });
   ```
3. **Contoh Query di Endpoint:**
   ```js
   app.get('/api/courses', async (req, res) => {
     try {
       const result = await pool.query('SELECT * FROM courses');
       res.json(result.rows);
     } catch (err) {
       res.status(500).json({ error: err.message });
     }
   });
   ```
4. **Migrasi Data:**
   - Buat database dan tabel di PostgreSQL:
     ```sql
     CREATE DATABASE jadixpert;
     \c jadixpert
     CREATE TABLE courses (
       id SERIAL PRIMARY KEY,
       title VARCHAR(100),
       description TEXT
     );
     ```
   - Insert data sesuai kebutuhan.

5. **.env (Opsional):**
   - Simpan konfigurasi di file `.env` dan gunakan `dotenv`:
     ```bash
     npm install dotenv
     ```
     ```js
     require('dotenv').config();
     const pool = new Pool({
       user: process.env.DB_USER,
       host: process.env.DB_HOST,
       database: process.env.DB_NAME,
       password: process.env.DB_PASS,
       port: process.env.DB_PORT,
     });
     ```

---

## Cara Hosting Frontend & Backend

### 1. Build Frontend (React)
```bash
cd jadixpert-homepage
npm run build
```
- Hasil build ada di folder `build/`.

### 2. Hosting Backend (Express)
- Deploy backend ke server (VPS, cloud, dsb).
- Copy folder `jadixpert-backend` ke server.
- Install dependensi:
  ```bash
  npm install
  ```
- Jalankan backend (gunakan PM2 untuk production):
  ```bash
  npm install -g pm2
  pm2 start server.js
  ```

### 3. Hosting Frontend (Static)
- Upload folder `build/` ke layanan static hosting (Vercel, Netlify, Firebase Hosting, atau server sendiri).
- Jika di server sendiri (misal Nginx/Apache), arahkan root ke folder `build/`.

### 4. Reverse Proxy & SSL (Nginx)
- **Contoh konfigurasi Nginx:**
  ```nginx
  server {
    listen 80;
    server_name jadixpert.com;

    location / {
      root /path/to/jadixpert-homepage/build;
      try_files $uri /index.html;
    }

    location /api/ {
      proxy_pass http://localhost:5000/api/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
    }
  }
  ```
- **SSL (HTTPS):**
  - Gunakan [Certbot](https://certbot.eff.org/) untuk mendapatkan SSL gratis dari Let's Encrypt:
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx
    ```
  - Ikuti instruksi untuk mengaktifkan HTTPS.

### 5. Domain
- Arahkan domain ke IP server.
- Pastikan port 80 dan 443 terbuka.

---

Dengan langkah di atas, Anda dapat menambah menu/page, integrasi database PostgreSQL, dan hosting project secara production-ready.

**Untuk pertanyaan atau pengembangan lebih lanjut, silakan hubungi tim Jadixpert.**
=======
**Untuk pertanyaan atau pengembangan lebih lanjut, silakan hubungi tim Jadixpert.**
>>>>>>> f617bae4570f4177b688ea157d5c6670ce25f304:README.md
