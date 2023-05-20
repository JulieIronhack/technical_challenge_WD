import React, { useEffect, useState } from 'react'
import PhonesItem from './phones-item/PhonesItem';
import { Link } from 'react-router-dom';

function PhonesList( { phones }) {
  const [view, setView] = useState(false)
  const [phoneDetail, setPhoneDetail] = useState();
 
  const handleClickView = (phone) => {
    setView(!view)
    setPhoneDetail(phone)
  }

  return (
    <div className='d-flex'>
      <div className='d-flex justify-content-center flex-wrap text-align-center'>
        {phones?.map((phone) => <Link onClick={() => handleClickView(phone)} style={{textDecoration: 'none', color: 'black'}}><div key={phone.id}><PhonesItem {...phone}/></div></Link>)}
      </div>
      <div>
        {!view ? (<div style={{width: '18rem'}}></div>) : (
          <div class="card mt-4 mx-4" style={{width: '18rem'}}>
            <div class="card-body">
            <h5 class="card-title">{phoneDetail.name}</h5>
            <p class="card-text">{phoneDetail.description}</p>
            <p class="card-text">Done By: {phoneDetail.manufacturer}</p>
            <p class="card-text">Screen: {phoneDetail.screen}</p>
            <p class="card-text">Processor: {phoneDetail.processor} - RAM: {phoneDetail.ram}</p>
            <p class="card-text"><b>Price: {phoneDetail.price}</b></p>
            </div>
          </div>
          )} 
      </div>    
    </div>  
  )
}

export default PhonesList