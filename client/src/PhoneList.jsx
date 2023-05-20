import React, { useState } from 'react';
import './PhoneList.css';
import PhoneDetails from './PhoneDetails';

const PhoneList = ({ phones }) => {
  const [selectedPhoneIndex, setSelectedPhoneIndex] = useState(null);
  const imageRoutePrefix = './assets/images/';

  const handlePhoneClick = (index) => {
    if (selectedPhoneIndex === index) {
      setSelectedPhoneIndex(null);
    } else {
      setSelectedPhoneIndex(index);
    }
  };

  return (
    <div className={`phone-list ${selectedPhoneIndex !== null ? 'grid--big-columns' : ''}`}>
      {phones.map((phone, index) => (
        <div
          className={`phone-card ${selectedPhoneIndex === index ? 'card--expanded' : ''}`}
          key={phone.id}
          onClick={() => handlePhoneClick(index)}
        >
          <div className="phone-card-inner">
            <img
              className={`phone-image ${selectedPhoneIndex === index ? 'shrink' : ''}`}
              src={imageRoutePrefix + phone.imageFileName}
              alt={phone.name}
            />
            <h3 className="phone-name">{phone.name}</h3>
            {selectedPhoneIndex === index && <PhoneDetails phone={phone} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneList;
