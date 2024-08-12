import React from 'react';
import 'tailwindcss/tailwind.css';
import ModalImage from "react-modal-image";

// Importing images
import project5 from "../../assets/img/project-5.jpg";
import service1 from "../../assets/img/service-1.jpg";
import cu3 from "../../assets/img/cu3.jpg";
import cu6 from "../../assets/img/cu6.jpg";
import project7 from "../../assets/img/project-7.jpg";
import hero2 from "../../assets/img/hero-2.jpg";
import cu4 from "../../assets/img/cu4.jpg";
import cu8 from "../../assets/img/cu8.jpg";

const MomentsWithCustomers = () => {
  const images = [
    { src: project5, delay: '0.1s' },
    { src: service1, delay: '0.1s' },
    { src: cu3, delay: '0.3s' },
    { src: cu6, delay: '0.3s' },
    { src: project7, delay: '0.5s' },
    { src: hero2, delay: '0.5s' },
    { src: cu4, delay: '0.7s' },
    { src: cu8, delay: '0.7s' }
  ];

  return (
    <div className="container-xxl bg-light py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
          <p className="text-primary text-uppercase mb-2">Our Moments With Customers</p>
          <h1 className="display-6 mb-0">Moments With Customers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {images.map((image, index) => (
            <div key={index} className="wow fadeInUp" style={{ animationDelay: image.delay }}>
              <ModalImage
                small={image.src}
                large={image.src}
                alt={`Customer Moment ${index + 1}`}
                className="img-fluid project-title h5 mb-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentsWithCustomers;
