// ServiceBox.js

import React from 'react';
import '../assets/OurServicesBox.css';

const OurServicesBox = ({ title, description, imageUrl }) => {
  return (
    <div className="service-box">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default OurServicesBox;
