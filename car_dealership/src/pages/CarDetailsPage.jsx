import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook for accessing URL parameters
import CarDetails from '../components/car/CarDetails.jsx'; // Import the CarDetails component
import carsData from '../data/CarData.jsx'; // Import sample car data (replace with your actual data)

const CarDetailsPage = () => {
  // Access the carId parameter from the URL
  const { carId } = useParams();

  // Find the car object with the matching ID
  const car = carsData.find(car => car.id === parseInt(carId));

  return (
    <div>
      <h2>Car Details</h2>
      {car ? (
        <CarDetails car={car} />
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
}

export default CarDetailsPage;
