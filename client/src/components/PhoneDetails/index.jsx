import React from 'react';
import { useParams } from 'react-router-dom';

const PhoneDetails = (props) => {
  const { id } = useParams();
  const { phones } = props;

  const details = phones.find(phone => {
    return phone.id === Number(id);
  })

  const {
    name,
    manufacturer,
    description,
    imageFileName,
    color,
    price,
    screen,
    processor,
    ram
  } = details;

  return (
    <div>
      <h3>{manufacturer} {name} - {color}</h3>
      <h4>${price}</h4>
      <img src={`../../assets/images/${imageFileName}`} alt={name}/>
      <p>{description}</p>
      <strong>Specs:</strong>
      <ul>
        <li>Screen: {screen}</li>
        <li>Processor: {processor}</li>
        <li>RAM: {ram}GB</li>
      </ul>
    </div>
  )
}

export default PhoneDetails
