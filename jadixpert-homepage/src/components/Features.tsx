import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const Features: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/features')
      .then((res: { data: Feature[] }) => setFeatures(res.data))
      .catch(() => setFeatures([]));
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;