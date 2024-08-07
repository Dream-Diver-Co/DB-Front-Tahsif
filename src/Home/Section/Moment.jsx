// src/components/CustomerMoments.jsx
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import testimonialImage1 from '../../assets/customer1.jpg';
import testimonialImage2 from '../../assets/customer2.jpg';
import testimonialImage3 from '../../assets/customer3.jpg';

const testimonials = [
  {
    id: 1,
    image: testimonialImage1,
    name: 'Emily Johnson',
    quote: 'The dress was absolutely stunning and made my special day even more memorable. The quality and fit were perfect!',
  },
  {
    id: 2,
    image: testimonialImage2,
    name: 'Sophia Martinez',
    quote: 'I had an amazing experience with this bridal shop. The staff was incredibly helpful, and the dress was beyond my expectations!',
  },
  {
    id: 3,
    image: testimonialImage3,
    name: 'Olivia Smith',
    quote: 'I felt like a princess in my dress. The attention to detail and customer service were top-notch. Thank you for making my wedding perfect!',
  },
];

const Moment = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light text-center mb-12 italic">Moments with Our Customers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-white shadow-md"/>
              <div className="text-gray-700 mb-4">
                <FaQuoteLeft className="text-gray-400 text-2xl mb-2" />
                <p className="italic">"{testimonial.quote}"</p>
              </div>
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Moment;
