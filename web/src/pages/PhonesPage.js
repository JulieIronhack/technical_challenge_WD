import React, { useState, useEffect } from 'react';
import phonesService from '../services/phones';
import PhoneDetails from '../components/PhoneDetails';
import PhoneList from '../components/PhoneList';
import Spinner from '../components/Spinner/Spinner';
import Galaxy_S7 from '../assets/images/Galaxy_S7.png';
import IPhone_7 from '../assets/images/IPhone_7.png';
import Honor_10 from '../assets/images/Honor_10.png';
import Moto_G6 from '../assets/images/Moto_G6.png';
import Nokia_7_1 from '../assets/images/Nokia_7.1.jpg';
import P10_Lite from '../assets/images/P10_Lite.jpg';
import Xiaomi_MI_A2 from '../assets/images/Xiaomi_MI_A2.jpeg';
import ZenPhone_5 from '../assets/images/ZenPhone_5.jpg';


function PhonesPage() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
  
        const response = await phonesService.list();
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };
  
    fetchPhones();
  }, []);

  const handlePhoneSelect = async (phoneId) => {
    try {
      const response = await phonesService.detail(phoneId);
      setSelectedPhone(response.data);
    } catch (error) {
      console.error('Error fetching phone details:', error);
    }
  };

  function getImagePath(imageFileName) {
    switch (imageFileName) {
      case 'Galaxy_S7.png':
        return Galaxy_S7;
      case 'IPhone_7.png':
        return IPhone_7;
      case 'Honor_10.png':
        return Honor_10;
      case 'Moto_G6.png':
        return Moto_G6;
      case 'Nokia_7.1.jpg':
        return Nokia_7_1;
      case 'P10_Lite.jpg':
        return P10_Lite;
      case 'Xiaomi_MI_A2.jpeg':
        return Xiaomi_MI_A2;
      case 'ZenPhone_5.jpg':
        return ZenPhone_5;
      default:
        return null;
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Phone Catalog</h1>
      {loading ? (
        <div className='mt-80'> 
        <Spinner />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <PhoneList phones={phones} onPhoneSelect={handlePhoneSelect} />
          <PhoneDetails selectedPhone={selectedPhone} getImagePath={getImagePath}/>
        </div>
      )}
    </div>
  );
}

export default PhonesPage;
