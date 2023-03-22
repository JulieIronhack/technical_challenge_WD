import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpinnerComponent from "./Spinner";

function PhoneDetails({ phones }) {
  const [phone, setPhone] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    async function fetchPhone() {
      const response = await axios.get(`http://localhost:5005/phones/${id}`);
      setPhone(response.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
    fetchPhone();
  }, [id]);
  return (
    <div>
      {isLoading ? <SpinnerComponent /> : null}
      <h2>Name: {phone.name}</h2>
      <h4>Manufacturer: {phone.manufacturer}</h4>
      <h6>Description: {phone.description}</h6>
      <h6>Color: {phone.color}</h6>
      <h6>Price: {phone.price}</h6>
      <h6>Screen: {phone.screen}</h6>
      <h6>Processor: {phone.processor}</h6>
      <h6>RAM: {phone.ram}</h6>
    </div>
  );
}

export default PhoneDetails;
