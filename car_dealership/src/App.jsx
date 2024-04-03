import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar.jsx'; 
import Footer from './components/common/Footer.jsx'; 
import Home from './pages/home.jsx'; 
import CarListPage from './pages/CarListPage.jsx'; 
import CarDetailsPage from './pages/CarDetailsPage.jsx'; 
import ContactPage from './pages/ContactPage.jsx'; 
import AdminPage from './pages/Admin.jsx';

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
          <Route exact path="/Admin" element={<AdminPage/>} />
        
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
