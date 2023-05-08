import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PhoneDetails() {
  const { phoneId } = useParams();
  const API_URL = process.env.REACT_APP_API_URL;
  const [phone, setPhone] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/phones/${phoneId}`, {})
      .then((result) => {
        console.log(result.data);
        setPhone(result.data);
      })
      .catch((err) =>
        console.log("Error while retrieving specific phone:", err)
      );
  }, []);

  return (
    <div>
      <img
        src={require(`../../public/images/${phone.imageFileName}`)}
        alt={phone.name}
      />
      <h1>{phone.name}</h1>
      <p>{phone.description}</p>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Price: {phone.price}</p>
      <p>Screen: {phone.screen}</p>
      <p>Processor: {phone.processor}</p>
      <p>RAM: {phone.ram}</p>
    </div>
  );
}

export default PhoneDetails;
