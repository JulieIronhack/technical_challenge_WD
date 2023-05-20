import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import phoneService from '../../services/phone'

function PhoneDetail() {

  const location = useLocation()
  const [phone, setPhone] = useState()

  useEffect(() => {
    const phoneId = location.search.split('id=')[1]

    if (phoneId) {
      phoneService.detail(phoneId)
        .then((phone) => {
          setPhone(phone)
        })
    }

  }, [location.search])

  if (!phone && location.search) {
    return (
      <>        
        <h5>Loading...</h5>
      </>
    )
  } else if (!location.search) {
    return (
      <>
        <h2>
          Select some phone to view details!
        </h2>
      </>
    )
  }

  return (
    <>
      <div className="card mb-3">
        <div className='d-flex justify-content-center' style={{ height: '340px', width: 'inherit' }}>
          <img src={phone.imageUrl} className="card-img-top" style={{ height: '100%', width: 'auto' }} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{phone.name} by {phone.manufacturer}</h5>
          <p className="card-text">{phone.description}</p>
          <div className="card-text"><h6 className="text-body-secondary"><b>Price: </b> {phone.price}  €</h6></div>
        </div>
      </div>
    </>
  )
}

export default PhoneDetail