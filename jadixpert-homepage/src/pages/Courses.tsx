import React from 'react';

const courses = [
  {
    id: 1,
    title: "12 Bulan",
    subtitle: "PAKET VIDEO E-LEARNING",
    oldPrice: "Rp 4.200.000",
    price: "Rp 179.000",
    note: "Untuk akses semua, setara Rp 14.916 / bulan.",
    features: [
      "1400+ Materi Video",
      "1400+ Modul Praktik Portfolio",
      "Sertifikat di Tiap Materi",
      "Grup Komunitas",
      "FREE 6-12x Webinar Series",
      "Diskon untuk Bootcamp"
    ],
    button: "Mulai Berlangganan",
    soon: true,
    highlight: false,
    color: "bg-blue-600",
    textColor: "text-white",
    border: "border-blue-600"
  },
  {
    id: 2,
    title: "6 Bulan",
    subtitle: "PAKET VIDEO E-LEARNING",
    oldPrice: "Rp 2.100.000",
    price: "Rp 99.000",
    note: "Untuk akses semua, setara Rp 16.500 / bulan.",
    features: [
      "1400+ Materi Video",
      "1400+ Modul Praktik Portfolio",
      "Sertifikat di Tiap Materi",
      "Grup Komunitas",
      "FREE 6-12x Webinar Series",
      "Diskon untuk Bootcamp"
    ],
    button: "Mulai Berlangganan",
    soon: true,
    highlight: true,
    color: "bg-teal-600",
    textColor: "text-white",
    border: "border-yellow-400"
  },
  {
    id: 3,
    title: "1 Bulan",
    subtitle: "PAKET VIDEO E-LEARNING",
    oldPrice: "Rp 350.000",
    price: "Rp 29.000",
    note: "Untuk akses semua, setara Rp 7.250 / minggu.",
    features: [
      "1400+ Materi Video",
      "1400+ Modul Praktik Portfolio",
      "Sertifikat di Tiap Materi",
      "Grup Komunitas"
    ],
    button: "Mulai Berlangganan",
    soon: true,
    highlight: false,
    color: "bg-blue-600",
    textColor: "text-white",
    border: "border-blue-600"
  }
];

const Courses: React.FC = () => (
  <main className="min-h-screen bg-blue-50 py-12">
    <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Langganan Sekarang dan Jadi Lebih Hebat</h1>
    <p className="text-center mb-10 text-gray-700">Langganan bulanan untuk akses semua materi, tanpa batas. Makin lama, makin hemat dan untung banyak.</p>
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4">
      {courses.map((course, idx) => (
        <div
          key={course.id}
          className={`
            flex-1 rounded-[24px] shadow-lg overflow-hidden relative flex flex-col
            ${course.highlight ? "border-4 border-yellow-400 bg-yellow-100" : "bg-white"}
            ${!course.highlight ? "border border-blue-100" : ""}
            transition
          `}
          style={{ minWidth: 280, maxWidth: 350 }}
        >
          {/* Highlight badge */}
          {course.highlight && (
            <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-center py-2 font-bold text-sm text-gray-800 z-10">
              TERPOPULER!
            </div>
          )}
          <div className={`p-6 pb-0 ${course.highlight ? "pt-10" : ""}`}>
            <div className={`font-bold text-lg mb-1 ${course.color} ${course.textColor} rounded-t-[24px]`}>
              {course.title}
            </div>
            <div className="uppercase text-xs font-semibold text-gray-700 mb-2">{course.subtitle}</div>
            <div className="mb-2">
              <span className="line-through text-gray-400 text-sm">{course.oldPrice}</span>
            </div>
            <div className="text-3xl font-bold mb-1 text-blue-700">{course.price}</div>
            <div className="text-xs text-gray-600 mb-4">{course.note}</div>
            <ul className="mb-4 space-y-2 text-sm">
              {course.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded border font-semibold transition mb-2
                ${course.highlight
                  ? "bg-teal-600 text-white hover:bg-teal-700 border-teal-600"
                  : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"}
              `}
            >
              {course.button}
            </button>
            {/* Progress bar & soon badge */}
            {course.soon && (
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-red-500 font-semibold flex items-center">
                  Segera Habis <span className="ml-1">🔥</span>
                </span>
                <div className="flex-1 ml-2 bg-blue-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${60 + idx * 15}%` }} />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default Courses;
export {};