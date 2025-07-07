import React from 'react';

const bootcamps = [
  {
    id: 1,
    title: "Digital Marketing: Praktik Portfolio",
    date: "Agustus 2025",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=400",
    badge: "Gratis Kelas Bersertifikat",
    discount: "15%",
    mentor: "Mentor A",
    price: "Rp 200.000",
    isFree: true,
  },
  // ...tambahkan data bootcamp lain sesuai kebutuhan
];

const Bootcamp: React.FC = () => (
  <div className="bg-blue-50 min-h-screen">
 

    {/* Hero Section */}
    <section className="container mx-auto flex flex-col md:flex-row items-center py-10 px-4">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Bootcamp yang Memberi Hasil. Fokus Praktik & Portfolio.
        </h1>
        <p className="mb-4 text-gray-700">
          Full Online dan Dipandu oleh Praktisi-Expert. Praktik, lebih aktif! Bersertifikat. Fokus karir. Kembangkan skill dan portfolio ribuan alumni.
        </p>
        <a href="#pilihan" className="inline-block bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition mb-2">
          Lihat Program Pilihan
        </a>
        <div className="text-xs text-gray-500 mt-2">⭐ 4.9/5 &nbsp;•&nbsp; 12.000+ Orang Telah Lulus</div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://undraw.co/api/illustrations/teaching"
          alt="Bootcamp Illustration"
          className="w-80 h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>

    {/* Testimoni Section */}
    <section className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Testimoni Alumni Bootcamp</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="min-w-[320px] bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={`https://randomuser.me/api/portraits/men/${30+i}.jpg`} alt="Alumni" className="w-16 h-16 rounded-full object-cover mb-2" />
            <div className="font-semibold">Nama Alumni</div>
            <div className="text-xs text-gray-500 mb-2">Posisi Alumni</div>
            <p className="italic text-gray-700 text-center mb-2">"Cerita alumni tentang pengalaman bootcamp di sini."</p>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Baca Cerita</a>
          </div>
        ))}
      </div>
    </section>

    {/* Search Bar */}
    <section className="container mx-auto px-4 mb-4">
      <input
        type="text"
        placeholder="Cari program yang ingin kamu ikuti..."
        className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </section>

    {/* Bootcamp List */}
    <section id="pilihan" className="container mx-auto px-4 pb-12">
      <h2 className="text-xl font-bold mb-4">Pilihan Bootcamp</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bootcamps.map((bootcamp) => (
          <div key={bootcamp.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="relative">
              <img src={bootcamp.image} alt={bootcamp.title} className="w-full h-40 object-cover" />
              {bootcamp.badge && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {bootcamp.badge}
                </span>
              )}
              {bootcamp.discount && (
                <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {bootcamp.discount} OFF
                </span>
              )}
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-1">{bootcamp.title}</h3>
              <div className="text-xs text-gray-500 mb-2">{bootcamp.date}</div>
              <div className="flex items-center mb-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mentor" className="w-6 h-6 rounded-full mr-2" />
                <span className="text-xs text-gray-600">{bootcamp.mentor}</span>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className={`font-bold ${bootcamp.isFree ? "text-green-600" : "text-blue-600"}`}>
                  {bootcamp.isFree ? "Gratis" : bootcamp.price}
                </span>
                <a href="#" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">Daftar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Corporate Service Banner */}
    <section className="container mx-auto flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md my-12 p-6">
      <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
        <img src="https://undraw.co/api/illustrations/team_work" alt="Corporate Service" className="w-64 h-auto object-contain" />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-xl font-bold mb-2">E-learning & Training Untuk Perusahaan</h3>
        <p className="mb-4">Kelas agile bersama kolaborasi MySkill telah didukung corporate training oleh perusahaan ternama. Solusi tepat untuk Human Resources untuk monitoring employee performance and development.</p>
        <a href="/corporate-service" className="inline-block bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-300 transition">
          Hubungi Tim JadiXpert
        </a>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-10 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
          <p className="text-sm">JadiXpert adalah platform pembelajaran online untuk pengembangan karir dan skill masa depan.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
          <ul className="text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/bootcamp" className="hover:underline">Bootcamp</a></li>
            <li><a href="/e-learning" className="hover:underline">E-learning</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Produk</h3>
          <ul className="text-sm">
            <li><a href="/bootcamp" className="hover:underline">Bootcamp</a></li>
            <li><a href="/e-learning" className="hover:underline">E-learning</a></li>
            <li><a href="/review-cv" className="hover:underline">Review CV</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-sm">© 2025 Jadixpert. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Bootcamp;