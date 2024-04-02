import React from 'react';
import './CarCard.css'; // Import the CSS file

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} className="car-image" />
      <div className="car-details">
        <h3 className="car-model">{car.model}</h3>
        <p className="car-make">{car.make}</p>
        <p className="car-price">${car.price}</p>
      </div>
    </div>
  );
}

export default CarCard;
