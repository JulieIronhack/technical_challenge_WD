import React, { useEffect, useState } from 'react'


function PhonesList() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    setPhones([{ name: 'name'}])

  }, []);

  return (
    <>
    <h1>PhoneList</h1>
      {phones.map((phone) => (
        <div key={phone.id}>{phone.name}</div>
      ))}
    </>
  )
}

export default PhonesList