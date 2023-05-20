import React from 'react';

const PhoneDetail = ({ phone }) => {
  const imagePath = `assets/images/${phone.imageFileName}`;

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <h2 className="text-4xl mt-2">{phone.name}</h2>
      <img
        src={imagePath}
        alt={phone.name}
        className="h-48 w-auto rounded-3xl my-4"
      />
      <section className="text-center mx-4 text-sm font-light md:mx-[600px] md:font-normal md:grid md:grid-cols-2">
        <p className=" md:text-start">{phone.description}</p>
        <div className=" md:text-end">
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Color: {phone.color}</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>RAM: {phone.ram} GB</p>
        </div>
      </section>
      <div className="border-2 bg-red-500 rounded-xl mt-3 py-2 px-4">
        <p>Price: ${phone.price}</p>
      </div>
    </div>
  );
};

export default PhoneDetail;
