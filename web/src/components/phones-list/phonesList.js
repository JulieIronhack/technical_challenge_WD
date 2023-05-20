import React, { useEffect, useState } from 'react'
import phonesService from '../../services/phones'
import PhoneItem from '../phone-item/phoneItem'


function PhonesList() {
  const [phones, setPhones] = useState()

  useEffect(() => {
    phonesService.list()
      .then((phones) => {
        console.log('phones ', phones)
        setPhones(phones)
      })
  }, [])

  if (!phones) {
    return (
      <>
        Loading...
      </>
    )
  }

  return (
    <>
      {phones?.map((phone) => (
        <PhoneItem key={phone.id} phone={phone} />
      )
      )}
    </>
  )
}

export default PhonesList