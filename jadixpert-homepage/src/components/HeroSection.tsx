import React from 'react';
import { useNavigate } from 'react-router-dom';

type HeroSectionProps = {
  headline: string;
  subheadline: string;
  buttonLabel: string;
  illustration: string;
  alt?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  buttonLabel,
  illustration,
  alt = "Hero Illustration"
}) => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 bg-blue-50">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">{headline}</h1>
        <p className="text-gray-600 mb-6 text-lg">{subheadline}</p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
          onClick={() => navigate('/courses')}
        >
          {buttonLabel}
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={illustration}
          alt={alt}
          className="w-80 h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;