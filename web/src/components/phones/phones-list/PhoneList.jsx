import React, { useEffect, useState } from 'react';
import phonesService from '../../../services/phones';
import PhoneDetail from '../phones-detail/PhoneDetail';

export default function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [phoneDetail, setPhoneDetail] = useState(null)

  useEffect(() => {
    phonesService.list()
      .then((phones) => setPhones(phones))
      .catch(error => console.error(error))
  }, []);

  const handleClick = (id) => {
    phonesService.detail(id)
      .then((phone) => setPhoneDetail(phone))
  }

  return (
    <>
      <h1>Phones List</h1>
      <ul>
        {phones.map((phone) => <li onClick={() => handleClick(phone.id)} key={phone.id}>{phone.name}</li>)}
      </ul>
      {phoneDetail && <PhoneDetail phone={phoneDetail} />}
    </>
  )
}
