import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menu = [
  { label: 'Home', path: '/' },
  { label: 'E-learning', path: '/e-learning' },
  { label: 'Bootcamp & Program', path: '/bootcamp' },
  { label: 'Review CV', path: '/review-cv' },
  { label: 'Corporate Service', path: '/corporate-service' },
  { label: 'Info Loker', path: '/info-loker' },
  { label: 'Blog', path: '/blog' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="font-bold text-xl text-blue-600">JadiXpert</Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-blue-600 ${location.pathname === item.path ? 'font-bold text-blue-600' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-2">
          <Link to="/login" className="px-4 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-50">Masuk</Link>
          <Link to="/register" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Daftar</Link>
        </div>
        {/* Hamburger */}
       <button
  className="md:hidden flex items-center px-2 py-1 bg-blue-600 rounded"
  onClick={() => setOpen(true)}
  aria-label="Open menu"
>
  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

      </nav>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
        aria-label="Sidebar menu"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b bg-blue-600">
          <span className="font-bold text-xl text-white">JadiXpert</span>
          <button
            className="p-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col py-4">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 hover:bg-blue-50 transition
                  ${location.pathname === item.path ? 'bg-blue-50 font-bold text-blue-600' : ''}
                `}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 mt-auto pb-6">
          <Link
            to="/login"
            className="block w-full mb-2 px-4 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-50 text-center"
          >
            Masuk
          </Link>
          <Link
            to="/register"
            className="block w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 text-center"
          >
            Daftar
          </Link>
        </div>
      </aside>
    </header>
  );
}

export default Header;