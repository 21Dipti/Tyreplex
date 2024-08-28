import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/TP-logo-mbl.webp'; 
import '../styles.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="TyrePlex Logo" />
        </div>

        <div className="footer-sections">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/terms">Terms and Policy</a></li>
              <li><a href="/corporate-sale">Corporate Sale</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="/arrange-call">Arrange a Call</a></li>
              <li><a href="/email-us">Email Us</a></li>
              <li><a href="/help-centre">Help Centre</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Work With Us</h4>
            <ul>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/partner-dealer">Partner as Dealer</a></li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <h4>Subscribe to Get Updates</h4>
            <div className="subscribe-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <FaFacebook size={24} />
          <FaTwitter size={24} />
          <FaInstagram size={24} />
        </div>

        <div className="footer-bottom">
          <p>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
