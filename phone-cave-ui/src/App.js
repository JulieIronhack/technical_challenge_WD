import React , {useState, useEffect} from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import {BeatLoader} from 'react-spinners';
import './App.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

function App() {
 const [phones, setPhones] = useState([]);
 const [selectedPhone, setSelectedPhone] = useState(null);
const [loading, setLoading] = useState(false);

// This code fetches phone data from the API and sets it in the state.
useEffect(() => {
  setLoading(true);
  axios.get('http://localhost:3000/phones')
    .then(response => {
      setPhones(response.data);
      setLoading(false);
      console.log('Phones data:', response.data);
    })
    .catch(error => {
      console.log('Error fetching phones;', error);
      setLoading(false);
    });
}, []);

const selectPhone = (id) => {
  if (selectedPhone && selectedPhone.id === id) {
    setSelectedPhone(null);
  } else {
    const phone = phones.find(phone => phone.id === id);
    setSelectedPhone(phone);
  }
};

return (
  <div className="App">
    <header className="header">
      <h1 className="title">IronPhones</h1>
    </header>
    {loading ? (
      <div className="spinner">
        <BeatLoader color="#36D7B7" loading={loading} css={override} size={15} />
      </div>
    ) : (
      <div className="phone-container">
        <div className="phone-list">
          <h2 className="phone-list-title">Phones</h2>
          <div className="phone-grid">
            {phones.map(phone => (
              <div key={phone.id} className="phone-card" onClick={() => selectPhone(phone.id)}>
<img src={`/images/${phone.imageFileName}`} alt={phone.name} className="phone-image" />
                <div className="phone-details">
                  <h3 className="phone-name">{phone.name}</h3>
                  <p className="phone-price">Price: ${phone.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedPhone && (
          <div className="phone-details">
            <h2 className="phone-details-title">{selectedPhone.name}</h2>
            <div className="phone-details-content">
              <div className="phone-details-image">
              <img src={`/images/${selectedPhone.imageFileName}`} alt={selectedPhone.name} />
              </div>
              <div className="phone-details-info">
                <p className="phone-manufacturer">Manufacturer: {selectedPhone.manufacturer}</p>
                <p className="phone-price">Price: ${selectedPhone.price}</p>
                <p className="phone-color">Color: {selectedPhone.color}</p>
                <p className="phone-screen">Screen: {selectedPhone.screen}</p>
                <p className="phone-processor">Processor: {selectedPhone.processor}</p>
                <p className="phone-ram">RAM: {selectedPhone.ram}GB</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )}
  </div>
);

}

export default App;