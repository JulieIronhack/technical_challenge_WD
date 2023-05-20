import React, { useEffect, useState } from 'react'
import phoneService from '../../services/phone'
import PhoneItem from './PhoneItem'
import { useLocation, useNavigate } from 'react-router-dom'
import PhoneDetail from './PhoneDetail'

function PhoneList() {

  const [phones, setPhones] = useState()
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect(() => {
    phoneService.list()
      .then((phones) => {
        setPhones(phones)
      })
  }, [])

  const handleClick = (phone) => {
    navigate(`${location.pathname}?id=${phone.id}`)
  }

  if (!phones) {
    return (
      <>
        <h5>Loading...</h5>
      </>
    )
  }

  return (
    <>
      {phones?.map((phone) => (
        <PhoneItem key={phone.id} phone={phone} onClick={() => {handleClick(phone)}} />
      )
      )}
    </>
  )
}

export default PhoneList