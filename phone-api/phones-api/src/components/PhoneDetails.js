import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneDetails = ({ match }) => {
  const [phone, setPhone] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/phones/${match.params.id}`)
      .then(response => {
        setPhone(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Phone Details</h1>
      <p>Name: {phone.name}</p>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Price: {phone.price}</p>
    </div>
  );
};

export default PhoneDetails;