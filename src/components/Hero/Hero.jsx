import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  
  const backgroundImages = [
    'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg',
    'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg',
    'https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg',
   
  ];

  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`
      }}
    >
      <div className="hero-content">
       
        <h1>Welcome to Our Conference</h1>
        <p>Join us for an exciting event!</p>
      </div>
    </div>
  );
};

export default Hero;
