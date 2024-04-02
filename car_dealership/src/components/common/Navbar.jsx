import React from 'react';
import './Navbar.css'; 
import logo from '../../assets/JM LOGO1.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div><img src={logo} alt="LOGO"  className="logo"/></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/cars">Cars</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
