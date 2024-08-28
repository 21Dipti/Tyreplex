import React from 'react';
import '../styles.css'; 

const ServiceCard = ({ title, frontImage, details, onBookNow }) => {
  return (
    <div className="service-card">
      <div className="service-card-inner">
        <div className="service-card-front">
          <img src={frontImage} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="service-card-back">
          <p>{details}</p>
          <button onClick={onBookNow}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
