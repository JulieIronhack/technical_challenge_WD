import React, { useEffect, useState } from 'react';
import * as phonesService from '../../../services/phones';
import PhoneItem from '../phones-item/PhoneItem';

function PhonesList() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    phonesService.list()
      .then((phones) => {
        setPhones(phones);
      }).catch(console.error);
  }, []);

  return (
    <>
      <div className='mb-20 pb-5 text-center flex-col items-center justify-center'>
        {phones.map((phone => <div><PhoneItem phone={phone} key={phone.id} phoneId={phone.id} /></div>))}
      </div>
    </>
  );
}

export default PhonesList




