import { useState, useEffect } from 'react';
import { listPhones } from './services/base';
import './HomePage.scss';

const HomePage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    listPhones()
      .then(response => {
        setPhones(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(phones);

  return (
    <div>
      <h1>Phone Cave</h1>

      {phones.map(phone => (
        <div>
          <ul key={phone.id}>
            <li>
              {' '}
              <img
                src={require(`./../public/images/${phone.imageFileName}`)}
                alt={phone.name}
                style={{ width: 300 }}
              />
            </li>
            <li> {phone.name}</li>
            <li> {phone.description}</li>
            <li> {phone.color}</li>
            <li> Price: {phone.price}</li>
            <li> {phone.processor}</li>
            <li> RAM: {phone.ram}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
