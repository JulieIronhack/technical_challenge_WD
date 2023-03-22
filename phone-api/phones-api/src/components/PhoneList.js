import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/phones')
      .then(response => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Phone List</h1>
      {phones.map(phone => (
        <div key={phone.id}>
          <p>{phone.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PhoneList;