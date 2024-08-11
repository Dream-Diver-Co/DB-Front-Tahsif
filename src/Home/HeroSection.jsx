import React from 'react';
import { useState, useEffect } from 'react';
import leftImage from '../assets/img/c2.jpg';  // Replace with your image paths
import rightImage from '../assets/img/c3.jpg'; // Replace with your image paths
import videoSrc from '../assets/hero.mp4'; // Replace with your video path

const HeroSection = () => {
  return (
    <div className="container-fluid bg-light mb-5">
      <div className="flex flex-col lg:flex-row justify-center px-4 lg:px-5">
        {/* Left Image */}
        <div className="lg:w-1/4 mb-6 lg:mb-0 relative">
          <img 
            src={leftImage} 
            alt="Left Image" 
            className="w-full h-[900px] object-cover" 
          />
        </div>

        {/* Middle Video */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 relative">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-[900px] object-cover" 
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/4 mb-6 lg:mb-0 relative">
          <img 
            src={rightImage} 
            alt="Right Image" 
            className="w-full h-[900px] object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
