import React from 'react';
import logo from '../assets/images/TP-logo-mbl.webp';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="car tyres">Car Tyres</a>
            <div className="dropdown-menu">
              <h3>Popular Car Tyre Brands</h3>
              <ul>
                <li>MRF Tyres</li>
                <li>CEAT Tyres</li>
                <li>Apollo Tyres</li>
                <li>Goodyear Tyres</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="Bike tyres">Bike Tyres</a>
            <div className="dropdown-menu">
              <h3>Popular Bike Tyre Brands</h3>
              <ul>
                <li>MRF Tyres</li>
                <li>CEAT Tyres</li>
                <li>Apollo Tyres</li>
                <li>Goodyear Tyres</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="tyre Pressure">Tyre Pressure</a>
          </li>
          <li className="nav-item">
            <a href="Commercial">Commercial Tyres</a>
            <div className="dropdown-menu">
              <h3>Commercial Tyres</h3>
              <ul>
                <li>Commercial Tyre 1</li>
                <li>Commercial Tyre 2</li>
                <li>Commercial Tyre 3</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="accessories">Accessories</a>
            <div className="dropdown-menu">
              <h3>Accessories</h3>
              <ul>
                <li>Battery</li>
                <li>Alloy Wheels</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="more">More</a>
            <div className="dropdown-menu">
              <ul>
                <li>Cashback Offer</li>
                <li>Find Tyre Dealers</li>
                <li>Compare Tyres</li>
                <li>Are You a Tyre Dealer?</li>
                <li>Wheel Balancing</li>
                <li>Wheel Alignment</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-login">
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
