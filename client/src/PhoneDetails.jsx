
import React from 'react';

const PhoneDetails = ({ phone }) => {
  return (
    <div className="phone-details">
      <h3>{phone.name}</h3>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Description: {phone.description}</p>
      <p>Color: {phone.color}</p>
      <p>Price: {phone.price}</p>
      <p>Screen: {phone.screen}</p>
      <p>Processor: {phone.processor}</p>
      <p>RAM: {phone.ram}</p>
    </div>
  );
};

export default PhoneDetails;
