// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We will create this CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Henry</Link> {/* This is your logo, linking to the homepage */}
      </div>
      <div className="nav-links">
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/bookings">BOOKING</Link>
      </div>
    </nav>
  );
}

export default Navbar;
