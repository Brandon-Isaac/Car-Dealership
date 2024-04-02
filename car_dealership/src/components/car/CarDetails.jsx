import React from 'react';
import './CarDetails.css'; // Import the CSS file

const CarDetails = ({ car }) => {
  return (
    <div className="car-details-container">
      <div className="car-image-container">
        <img src={car.image} alt={car.model} className="car-image" />
      </div>
      <div className="car-info">
        <h2 className="car-model">{car.model}</h2>
        <p className="car-make">Make: {car.make}</p>
        <p className="car-year">Year: {car.year}</p>
        <p className="car-price">Price: ${car.price}</p>
        <p className="car-description">{car.description}</p>
      </div>
    </div>
  );
}

export default CarDetails;
