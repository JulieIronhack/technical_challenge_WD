import React, { useEffect, useState } from 'react';
import phonesService from '../../../services/phones.js';
import PhoneItem from '../phone-item/PhoneItem';

function PhonesList() {

  const [phones, setPhones] = useState();

  useEffect(() => {
    phonesService.list()
      .then((phones) => {
        console.log('phones', phones);
        setPhones(phones);
      }).catch(console.error);
  }, []);

  if (!phones) {
    return (
      <div className=''>
        Loading...
      </div>
    );
  };

  return (
    <>
      {phones?.map((phone) => <PhoneItem key={phone.id} phone={phone} phoneId={phone.id} />)}
    </>
  );
}

export default PhonesList;