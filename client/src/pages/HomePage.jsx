import { useState, useEffect } from 'react';
import { listPhones } from '../services/base';

const HomePage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    listPhones().then(data => {
      setPhones(data);
    });
  }, []);

  return (
    <div>
      <h1>Hello World</h1>

      {phones.map(phone => (
        <div>
          <ul key={phone.id}>
            <li>
              {' '}
              <img src={phone.imageFileName} alt={phone.name} />
            </li>
            <li> Phone: {phone.name}</li>
            <li> Description: {phone.description}</li>
            <li> Color: {phone.color}</li>
            <li> Price: {phone.price}</li>
            <li> Processor: {phone.processsor}</li>
            <li> RAM: {phone.ram}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
