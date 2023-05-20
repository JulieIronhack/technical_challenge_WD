import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhoneList from './components/phone-list/PhoneList';
import PhoneDetail from './components/phone-detail/PhoneDetail';

const App = () => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate loading for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 1000));

      try {
        const response = await axios.get('http://localhost:3001/phones');
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handlePhoneClick = (phone) => {
    setSelectedPhone(phone);
  };

  const handleLogoClick = () => {
    setSelectedPhone(null);
  }

  return (
    <main className="font-[Poppins] bg-slate-800 h-screen overflow-y-hidden">
      <header className="bg-blue-500 w-full h-12 flex justify-center items-center">
        <h2
          className="text-white text-xl cursor-pointer"
          onClick={handleLogoClick}
        >
          The Phone Cave</h2>
      </header>

      <section>
        <PhoneList
          phones={phones}
          loading={loading}
          onPhoneClick={handlePhoneClick}
        />
        {selectedPhone && (
          <PhoneDetail phone={selectedPhone} />
        )}
      </section>
    </main>
  );
};

export default App;
