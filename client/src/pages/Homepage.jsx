import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Homepage() {
  const [phones, setPhones] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5005/phones');
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching phones:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handlePhoneClick = (phone) => {
    setSelectedPhone(phone);
  };
  return (
    <div>
      <h1>Phone App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Phone List</h2>

          <ul>
            {phones.map((phone) => (
              <Link to={`/phones/${phone.id}`}>
                <li key={phone.id} onClick={() => handlePhoneClick(phone)}>
                  {phone.name}
                </li>
              </Link>
            ))}
          </ul>


        </div>
      )}
    </div>
  )
}

export default Homepage;
