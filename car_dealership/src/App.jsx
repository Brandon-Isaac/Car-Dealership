import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar.jsx'; // Import the Navbar component
import Footer from './components/common/Footer.jsx'; // Import the Footer component
import Home from './components/home/HomePage.jsx'; // Import the Home page component
import CarListPage from './pages/CarListPage.jsx'; // Import the CarListPage component
import CarDetailsPage from './pages/CarDetailsPage.jsx'; // Import the CarDetailsPage component
import ContactPage from './pages/ContactPage.jsx'; // Import the ContactPage component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cars" element={<CarListPage/>} />
          <Route exact path="/cars/:id" element={<CarDetailsPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
