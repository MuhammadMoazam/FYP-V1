import image1 from 'Assets/Slider/1.jpg';
import image2 from 'Assets/Slider/2.jpg';
import image3 from 'Assets/Slider/3.jpg';
import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
  {
    title: "FASHION THAT",
    subtitle: "FITS YOUR",
    lifestyle: "LIFESTYLE",
    description: "Stylish, comfortable, and ready for any occasion.",
    image: image1 // Replace with your first image path
  },
  {
    title: "EXPLORE OUR",
    subtitle: "NEW COLLECTION",
    lifestyle: "FOR EVERYONE",
    description: "Discover the latest trends and styles.",
    image: image2 // Replace with your second image path
  },
  {
    title: "UNMATCHED",
    subtitle: "QUALITY & STYLE",
    lifestyle: "Low Prices",
    description: "Shop with confidence and style.",
    image: image3 // Replace with your third image path
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    
    console.log(currentSlide);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentSlide]);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div className="slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index} style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="overlay"></div>
            <div className="text-overlay" style={{ fontSize: currentSlide === 2 ? '20px' : '56px' }}>
              <p className="slider-title">{slide.title}</p>
              <p className="slider-title">{slide.subtitle}</p>
              <p className="slider-title lifestyle">{slide.lifestyle}</p>
              <p className="slider-description">{slide.description}</p>
              <button className="slider-button">Shop Now ➔</button>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
      <div className="slider-arrow left-arrow" onClick={prevSlide}>❮</div>
      <div className="slider-arrow right-arrow" onClick={nextSlide}>❯</div>
    </div>
  );
};

export default Slider;