import React from 'react';
import '../styles.css';

const ShopInfo = () => {

  const address = "PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="shop-info-container">
      <h2 className="shop-name">SHREE HEMKUNT TYRES AND SERVICES</h2>
      <p className="shop-address">
        PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
      </p>
      <p className="shop-availability">
        Availability: Open - Monday to Sunday - 10:00AM to 8:00PM
      </p>
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="get-directions-button">
        Get Directions
      </a>
    </div>
  );
};

export default ShopInfo;
