import React from 'react';

const PhoneDetail = ({ phone }) => {
  const imagePath = `assets/images/${phone.imageFileName}`;

  return (
    <div className="flex flex-col justify-center items-center text-white">
      <h2 className="text-4xl mt-2 md:mt-4">{phone.name}</h2>
      <img
        src={imagePath}
        alt={phone.name}
        className="h-48 w-auto rounded-3xl my-4"
      />
      <section className="text-center mx-4 text-sm font-light md:mx-[600px] md:grid md:grid-cols-2">
        <p className=" md:text-start mb-2">{phone.description}</p>
        <div className=" md:text-end">
          <p><span className="font-semibold">Manufacturer:</span> {phone.manufacturer}</p>
          <p><span className="font-semibold">Color:</span> {phone.color}</p>
          <p><span className="font-semibold">Screen:</span> {phone.screen}</p>
          <p><span className="font-semibold">Processor:</span> {phone.processor}</p>
          <p><span className="font-semibold">RAM:</span> {phone.ram} GB</p>
        </div>
      </section>
      <div className="border-2 bg-red-500 rounded-xl mt-3 py-2 px-4">
        <p><span className="font-semibold">Price:</span> ${phone.price}</p>
      </div>
    </div>
  );
};

export default PhoneDetail;
