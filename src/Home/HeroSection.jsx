import React, { useState, useEffect } from 'react';
import c1 from "../assets/img/c1.jpg";
import c2 from "../assets/img/c2.jpg";
import c5 from "../assets/img/c5.jpg";
import b4 from "../assets/img/b4.jpg";
import b5 from "../assets/img/b5.jpg";
import b6 from "../assets/img/b6.jpg";
import videoSrc from "../assets/hero.mp4"; // Example video

const HeroSection = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const leftImages = [c1, c2, c5];
  const rightImages = [b4, b5, b6];

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
    }, 3000); // Change image every 3 seconds

    const rightInterval = setInterval(() => {
      setRightIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [leftImages.length, rightImages.length]);

  return (
    <div className="container pb-8 bg-light mb-5">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Left Column */}
        <div className="lg:w-1/3 mb-6 lg:mb-0 relative h-[600px]">
          <img
            src={leftImages[leftIndex]}
            alt="Left Image"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
        </div>

        {/* Middle Column */}
        <div className="lg:w-1/3 mb-6 lg:mb-0 relative h-[600px]">
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/3 mb-6 lg:mb-0 relative h-[600px]">
          <img
            src={rightImages[rightIndex]}
            alt="Right Image"
            className="w-full h-full object-cover transition-opacity duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
