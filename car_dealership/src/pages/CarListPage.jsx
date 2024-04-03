import React, { useState, useEffect } from 'react';
import CarList from '../components/car/CarList.jsx'; 
import LoadingSpinner from '../components/shared/LoadingSpinner.jsx'; 
import './CarListPage.css'; 

const CarListPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching car data from an API
    fetch('https://api.example.com/cars')
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="car-list-page">
      <h2>Our Cars</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <CarList cars={cars} />
      )}
    </div>
  );
}

export default CarListPage;
