import React, { useEffect, useState } from 'react'
import phoneService from '../../services/phone'
import PhoneItem from './PhoneItem'
import PhoneDetail from './PhoneDetail'

function PhoneList() {

  const [phones, setPhones] = useState()

  useEffect(() => {
    phoneService.list()
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

export default PhoneList