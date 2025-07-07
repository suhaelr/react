const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const features = [
  {
    id: 1,
    icon: "⭐",
    title: "5.5K+ Mentor",
    description: "Belajar langsung dari mentor berpengalaman.",
  },
  {
    id: 2,
    icon: "🌍",
    title: "Alumni Global",
    description: "Alumni bekerja di perusahaan global.",
  },
  {
    id: 3,
    icon: "💼",
    title: "Portfolio Bootcamp",
    description: "Bootcamp siap pakai untuk portfolio.",
  },
  {
    id: 4,
    icon: "🎁",
    title: "Bonus Member Baru",
    description: "Dapatkan bonus untuk member baru.",
  },
  {
    id: 5,
    icon: "🏆",
    title: "4.9 Rating",
    description: "Rating tinggi dari pengguna.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Ayu Pratiwi",
    photo: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&h=256&q=80",
    quote: "JadiXpert membantu saya mendapatkan pekerjaan impian!",
  },
  {
    id: 2,
    name: "Budi Santoso",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=256&h=256&q=80",
    quote: "Mentornya sangat berpengalaman dan ramah.",
  },
  {
    id: 3,
    name: "Siti Rahma",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&h=256&q=80",
    quote: "Materi bootcamp sangat aplikatif dan mudah dipahami.",
  },
];

app.get('/api/features', (req, res) => res.json(features));
app.get('/api/testimonials', (req, res) => res.json(testimonials));

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));