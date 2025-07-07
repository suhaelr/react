import React from 'react';

const Register: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Daftar</h2>
      <form>
        <input className="w-full mb-4 p-2 border rounded" type="text" placeholder="Nama Lengkap" required />
        <input className="w-full mb-4 p-2 border rounded" type="email" placeholder="Email" required />
        <input className="w-full mb-4 p-2 border rounded" type="password" placeholder="Password" required />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700" type="submit">Daftar</button>
      </form>
    </div>
  </div>
);

export default Register;