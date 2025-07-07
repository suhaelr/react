import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-10">
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
);

export default Footer;