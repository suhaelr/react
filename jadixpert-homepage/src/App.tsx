// At the top of your file
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import ELearning from './pages/ELearning';
import Courses from './pages/Courses';
import Bootcamp from './pages/Bootcamp';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection
        headline="Kuasai Ratusan Skill, Bangun Portfolio & Bersertifikat"
        subheadline="Belajar online dengan mentor profesional, kurikulum praktis, dan komunitas supportif."
        buttonLabel="Mulai Belajar Sekarang"
        illustration="https://undraw.co/api/illustrations/online_learning"
        alt="Online Learning"
      />
      <Features />
      <Testimonials />
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/e-learning" element={<ELearning />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;