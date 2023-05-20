import React from 'react';

const PhoneList = ({ phones, loading, onPhoneClick }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-2 p-4 text-center md:grid-cols-2 md:px-40 md:gap-x-44 md:gap-y-10 md:mt-10">
      {phones.map((phone) => (
        <div
          key={phone.id}
          onClick={() => onPhoneClick(phone)}
          className="cursor-pointer border-2 rounded-md text-sm p-2 text-white"
        >
          <h3>{phone.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PhoneList;