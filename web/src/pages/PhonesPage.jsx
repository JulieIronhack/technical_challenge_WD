import React from 'react';
import PhonesList from '../components/phone/phones-list/PhonesList';

function PhonesPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center pt-6'>
        <h1 className='text-3xl pb-6'>Phones list</h1>
        <PhonesList />
      </div>
    </>
  );
}

export default PhonesPage; 