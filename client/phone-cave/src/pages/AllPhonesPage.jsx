import React from 'react'
import { useState } from 'react';
// import the array of phone objects
import axios from "axios"; 


function AllPhonesPage() {

  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  return (
    <>
    <h1>All Phones List</h1>
    {phones.map(phone => {
      return (
        <div key={phone.id} className="PhoneCard">
          <h2>{phone.name}</h2>
          <img src={phone.imageFileName} alt={phone.name} />
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Description: {phone.description}</p>
          <p>Color: {phone.color}</p>
          <p>Price: {phone.price}€</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>Ram: {phone.ram}</p>
        </div>
      )
    })}
    </>
  )
}

export default AllPhonesPage
