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
        <h1 className='text-center mb-10 pt-10 font-bold text-[32px] '>List of Phones</h1>
      <div className='mb-20 pb-5 text-center flex-col items-center justify-center'>
        {phones.map((phone => <div><PhoneItem phone={phone} key={phone.id} phoneId={phone.id} /></div>))}
      </div>
    </>
  );
}

export default PhonesList




