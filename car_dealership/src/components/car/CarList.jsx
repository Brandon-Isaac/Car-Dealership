import React from 'react';
import CarCard from './CarCard'; // Import the CarCard component
import './CarList.css'; // Import the CSS file

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
