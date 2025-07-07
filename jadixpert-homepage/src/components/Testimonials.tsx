import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Testimonial = {
  id: number;
  name: string;
  photo: string;
  quote: string;
};

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/testimonials')
      .then((res: { data: Testimonial[] }) => setTestimonials(res.data))
      .catch(() => setTestimonials([]));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="flex overflow-x-auto space-x-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-[300px] p-4 bg-gray-100 shadow-lg rounded-lg">
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4 object-cover" />
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;