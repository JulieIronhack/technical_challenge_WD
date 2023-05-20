import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhoneList from './PhoneList';
import PhoneDetails from './PhoneDetails';
import Spinner from './Spinner';
import Navbar from './Navbar';

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/phones');
        // console.log('Response:', response.data); // Log the response data
        setPhones(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching phone data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePhoneSelection = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <div className="App">
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {phones.length > 0 ? (
            <PhoneList phones={phones} onPhoneSelect={handlePhoneSelection} />
          ) : (
            <p>No phones available.</p>
          )}
          {selectedPhone && <PhoneDetails phone={selectedPhone} />}
        </>
      )}
    </div>
  );
}

export default App;
