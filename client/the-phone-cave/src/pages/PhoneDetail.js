import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PhoneDetail() {
  const [phone, setPhone] = useState({
    name: '',
    manufacturer: '',
    description: '',
    color: '',
    price: 0,
    imageFileName: '',
    screen: '',
    processor: '',
    ram: 0,
  });

  const { _id } = useParams();

  useEffect(() => {
    async function fetchPhone() {
      try {
        const response = await axios.get(`http://localhost:4000/phones/${_id}`);

        setPhone({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }

    fetchPhone();

    console.log(phone, 'after fetch');
  }, []);

  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = phone;

  return (
    <div className='container container-fluid d-flex flex-column align-items-center mt-3 px-0'>
      {!phone && (
        <div class='spinner-border' role='status'>
          {/* <span class='sr-only'>Loading...</span> */}
        </div>
      )}

      <div
        className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center my-2 px-3 mx-1 border bg-white'
        // style={{ maxWidth: "600px" }}
      >
        <img
          className='card-img-top img-fluid my-3'
          src={imageFileName && require(`../images/${imageFileName}`)}
          alt={name}
          style={{ maxWidth: '500px', maxHeight: '500px', objectFit: 'cover' }}
        />
        <div className='card-body d-flex flex-column justify-content-between'>
          <div className=''>
            <div className='d-flex align-items-baseline justify-content-between'>
              <h1 className='display-1'>{name}</h1>
              <h4 className='text-muted'>{manufacturer}</h4>
            </div>
            <h2 className='display-3'>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }).format(price)}
            </h2>
          </div>
          <div>
            <p>{description}</p>
            <p>Color: {color}</p>
            <p>Screen: {screen}</p>
            <p>Processor: {processor}</p>
            <p>Ram: {ram}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetail;
