import React from 'react';
import ServiceCard from './ServiceCard';
import wheelBalancingImg from '../assets/images/wheel-balancing.jpg'; 
import wheelAlignmentImg from '../assets/images/wheel-alignment.jpg'; 

const ServicesOffered = () => {
  const handleBookNow = (service) => {
    alert(`Booking ${service}`);
    // You can navigate to a booking form or handle the booking action here
  };

  return (
    <div className="services-offered-container">
      <h2>Services Offered by This Dealer</h2>
      <div className="services-cards-container">
        <ServiceCard
          title="Wheel Balancing"
          frontImage={wheelBalancingImg}
          details="Ensure your wheels are perfectly balanced for a smoother drive."
          onBookNow={() => handleBookNow('Wheel Balancing')}
        />
        <ServiceCard
          title="Wheel Alignment"
          frontImage={wheelAlignmentImg}
          details="Get your wheels aligned for better control and tire longevity."
          onBookNow={() => handleBookNow('Wheel Alignment')}
        />
      </div>
    </div>
  );
};

export default ServicesOffered;
