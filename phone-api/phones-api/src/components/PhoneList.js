import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import iPhone7 from '../assets/images/IPhone_7.png';
import galaxyS7 from '../assets/images/Galaxy_S7.png';
import honor10 from '../assets/images/Honor_10.png';
import p10Lite from '../assets/images/P10_Lite.jpg';
import nokia71 from '../assets/images/Nokia_7.1.jpg';
import zenPhone5 from '../assets/images/ZenPhone_5.jpg';
import miA2 from '../assets/images/Xiaomi_MI_A2.jpeg';
import motoG6 from '../assets/images/Moto_G6.png';

const phoneImages = {
  'IPhone_7.png': iPhone7,
  'Galaxy_S7.png': galaxyS7,
  'Honor_10.png': honor10,
  'P10_Lite.jpg': p10Lite,
  'Nokia_7.1.jpg': nokia71,
  'ZenPhone_5.jpg': zenPhone5,
  'Xiaomi_MI_A2.jpeg': miA2,
  'Moto_G6.png': motoG6,
};

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('/phones').then(response => {
      setPhones(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Phone List</h1>

      {loading && <p>Loading...</p>}

      {!loading && (
        <ul>
          {phones.map(phone => (
            <li key={phone.id}>
              <Link to={`/phones/${phone.id}`}>
                <h2>{phone.name}</h2>
                <img src={phoneImages[phone.imageFileName]} alt={phone.name} />
                <p>{phone.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhoneList;