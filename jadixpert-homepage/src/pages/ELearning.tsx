import React from 'react';import HeroSection from '../components/HeroSection';import Testimonials from '../components/Testimonials';import Features from '../components/Features';const ELearning: React.FC = () => (  <main>    {/* Hero Section */}
    <HeroSection
      headline="Belajar Online, Kapan Saja & Di Mana Saja"
      subheadline="Akses ratusan kelas, mentor profesional, dan komunitas supportif hanya di JadiXpert."
      buttonLabel="Mulai Belajar Sekarang"
      illustration="https://undraw.co/api/illustrations/online_learning"
      alt="E-learning Illustration"
    />

    {/* Features Section */}
    <Features />

    {/* Testimonials Section */}
    <Testimonials />
  </main>
);

export default ELearning;