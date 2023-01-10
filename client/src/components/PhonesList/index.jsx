import React from 'react'
import { Link } from 'react-router-dom';

const PhonesList = (props) => {
  const { phones } = props;
  return (
    <div>
      <ul>
        {phones.map(phone => {
          return (
            <li key={phone.id}>
              <Link to={`/${phone.id}`}>{phone.name}</Link>
            </li>
          )}
        )}
      </ul>
    </div>
  )
}

export default PhonesList