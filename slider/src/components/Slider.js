import React, { useState } from 'react';
import Card from './Card';
import './Slider.css';

const Slider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="slider">
      <button className="slider-button" onClick={handlePrev}>{'<'}</button>
      <Card {...cards[currentIndex]} />
      <button className="slider-button" onClick={handleNext}>{'>'}</button>
    </div>
  );
};

export default Slider;
