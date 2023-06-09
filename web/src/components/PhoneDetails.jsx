import React from 'react';

function PhoneDetails({ selectedPhone, getImagePath }) {
  if (!selectedPhone) {
    return null;
  }

  const { name, description, manufacturer, color, price, screen, processor, ram } = selectedPhone;

  return (
    <div className="md:w-2/3">
      <div className="flex flex-col md:flex-row">
        <img
          src={getImagePath(selectedPhone.imageFileName)}
          alt={selectedPhone.name}
          className="w-full md:w-1/2 mx-auto mb-4"
        />
        <div className="md:w-1/2 pl-4">
          <h2 className="text-2xl font-bold mb-2">Phone Details</h2>
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="mb-4">{description}</p>
          <p className='mb-2'>
            <span className="font-bold">Manufacturer:</span> {manufacturer}
          </p>
          <p className='mb-2'>
            <span className="font-bold">Color:</span> {color}
          </p>
          <p className='mb-2'>
            <span className="font-bold">Price:</span> {price}€
          </p>
          <p className='mb-2'>
            <span className="font-bold">Screen:</span> {screen}
          </p>
          <p className='mb-2'>
            <span className="font-bold">Processor:</span> {processor}
          </p>
          <p className='mb-2'>
            <span className="font-bold">RAM:</span> {ram} GB
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetails;
