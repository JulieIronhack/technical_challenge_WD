import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    async function fetchPhones() {
      try {
        const response = await axios.get('http://localhost:4000/phones');
        setPhones([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPhones();
  }, []);

  console.log(phones);
  return (
    <div className='container mt-3'>
      <div className='row'>
        {phones.map((phone) => (
          <div
            key={phone._id}
            className='col-12 col-sm-12 col-md-6 col-lg-3 mt-2'
          >
            <div
              className='card mt-3'
              style={{ width: '100%', height: '100%' }}
            >
              <img
                src={require(`../images/${phone.imageFileName}`)}
                className='card-img-top'
                alt={phone.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className='card-body d-flex flex-column justify-content-between'>
                <div>
                  <h5 className='card-title text-dark'>
                    {new Intl.NumberFormat('de-DE', {
                      style: 'currency',
                      currency: 'EUR',
                    }).format(phone.price)}
                  </h5>
                  <p className='card-text'>{phone.name}</p>
                </div>
                <Link
                  to={`/phones/${phone._id}`}
                  className='btn btn-dark text-white'
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
