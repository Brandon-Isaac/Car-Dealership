import React, { useState, useEffect } from 'react';
import './home.css';

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      <img src={images[currentSlide]} alt="Slide" />
    </div>
  );
};

const Home = () => {
  const images = [
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02.jpg',
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_over_rev_01.jpg',
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/images-s/S2_502326.jpg',
  ];

  return (
    <div className="home">
      <Slideshow images={images} />
      <div className="content">
        <h2>Welcome to our Car Dealership</h2>
        <p>Find your dream car with us!</p>
      </div>
    </div>
  );
};

export default Home;
