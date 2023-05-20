import React, { useState, useEffect } from 'react';
import phonesService from '../services/phones';
import Galaxy_S7 from '../assets/images/Galaxy_S7.png';
import IPhone_7 from '../assets/images/IPhone_7.png';
import Honor_10 from '../assets/images/Honor_10.png';
import Moto_G6 from '../assets/images/Moto_G6.png';
import Nokia_7_1 from '../assets/images/Nokia_7_1.jpg';
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
        const response = await phonesService.list();
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

    fetchPhones();
  }, []);

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
      case 'Nokia_7_1.jpg':
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
  

  const handlePhoneSelect = async (phoneId) => {
    try {
      const response = await phonesService.detail(phoneId);
      setSelectedPhone(response.data);
    } catch (error) {
      console.error('Error fetching phone details:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Phone Catalog</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex">
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-2">Phone List</h2>
            <ul>
              {phones.map((phone) => (
                <li
                  key={phone.id}
                  className="cursor-pointer mb-2 text-blue-500 border rounded px-3 mx-5 py-2"
                  onClick={() => handlePhoneSelect(phone.id)}
                >
                  {phone.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/3">
            {selectedPhone && (
              <div className="flex">
                <img
                  src={getImagePath(selectedPhone.imageFileName)}
                  alt={selectedPhone.name}
                  className="w-1/2 max-w-xs mx-auto mb-4"
                />
                <div className="w-1/2 pl-4">
                  <h2 className="text-2xl font-bold mb-2">Phone Details</h2>
                  <h3 className="text-xl font-bold mb-2">{selectedPhone.name}</h3>
                  <p className="mb-4">{selectedPhone.description}</p>
                  <p>
                    <span className="font-bold">Manufacturer:</span> {selectedPhone.manufacturer}
                  </p>
                  <p>
                    <span className="font-bold">Color:</span> {selectedPhone.color}
                  </p>
                  <p>
                    <span className="font-bold">Price:</span> {selectedPhone.price}€
                  </p>
                  <p>
                    <span className="font-bold">Screen:</span> {selectedPhone.screen}
                  </p>
                  <p>
                    <span className="font-bold">Processor:</span> {selectedPhone.processor}
                  </p>
                  <p>
                    <span className="font-bold">RAM:</span> {selectedPhone.ram} GB
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PhonesPage;