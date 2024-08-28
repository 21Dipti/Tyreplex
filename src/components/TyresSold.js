import React, { useState } from 'react';
import tyresData from '../data/tyresData'; 
import '../styles.css'; 

const TyresSold = () => {
  const [filteredTyres, setFilteredTyres] = useState(tyresData);
  const [filters, setFilters] = useState({
    tyreName: '',
    sortPrice: '',
    vehicleType: '',
    brand: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filtered = tyresData;

    if (filters.tyreName) {
      filtered = filtered.filter(tyre => tyre.name.includes(filters.tyreName));
    }

    if (filters.vehicleType) {
      filtered = filtered.filter(tyre => tyre.vehicleType === filters.vehicleType);
    }

    if (filters.brand) {
      filtered = filtered.filter(tyre => tyre.brand === filters.brand);
    }

    if (filters.sortPrice === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortPrice === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredTyres(filtered);
  };

  return (
    <div className="tyres-sold-container">
      <h2>Tyres Sold by This Dealer</h2>

      <div className="filters">
        <input
          type="text"
          name="tyreName"
          placeholder="Filter by Tyre Name"
          value={filters.tyreName}
          onChange={handleFilterChange}
        />

        <select name="sortPrice" value={filters.sortPrice} onChange={handleFilterChange}>
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>

        <select name="vehicleType" value={filters.vehicleType} onChange={handleFilterChange}>
          <option value="">Filter by Vehicle Type</option>
          <option value="car">Car</option>
          <option value="scooter">Scooter</option>
          <option value="bike">Bike</option>
        </select>

        <select name="brand" value={filters.brand} onChange={handleFilterChange}>
          <option value="">Choose Brand</option>
          <option value="Maruti Suzuki">Maruti Suzuki</option>
          <option value="Tata">Tata</option>
          <option value="Toyota">Toyota</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Honda">Honda</option>
        </select>

        <button onClick={applyFilters} className='filterbutton'>Apply Filters</button>
      </div>

      <div className="tyres-grid">
        {filteredTyres.map((tyre, index) => (
          <div key={index} className="tyre-card">
            <div className="tyre-logo">{/* Add tyre logo here */}</div>
            <div className="tyre-details">
              <h3>{tyre.name}</h3>
              <p>Model: {tyre.model}</p>
              <p>Rating: {tyre.rating} ⭐</p>
              <p>Price: ₹{tyre.price}</p>
              <p>Type: {tyre.type}</p>
            </div>
            <div className="tyre-image">
              <img src={tyre.image} alt={`${tyre.name} tyre`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TyresSold;
