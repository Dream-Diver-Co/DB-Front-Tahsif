// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaCheckCircle, FaHeart, FaStar } from 'react-icons/fa';

const reasons = [
  {
    id: 1,
    icon: <FaCheckCircle className="text-4xl text-green-500" />,
    title: 'Premium Quality',
    description: 'Our bridal dresses are made from the finest fabrics with exceptional craftsmanship.'
  },
  {
    id: 2,
    icon: <FaHeart className="text-4xl text-red-500" />,
    title: 'Exclusive Designs',
    description: 'Find unique and exclusive designs that make your special day truly memorable.'
  },
  {
    id: 3,
    icon: <FaStar className="text-4xl text-yellow-500" />,
    title: 'Top Ratings',
    description: 'We are highly rated by brides for our quality, service, and attention to detail.'
  }
];

const Choose = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light text-center mb-12 italic">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
