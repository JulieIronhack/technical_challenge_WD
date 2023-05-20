import React from 'react'
import PhonesList from '../components/phones-list//phonesList'
import PhoneItem from '../components/phone-item/phoneItem'

function Main() {
  return (
    <>
      <div className='dashboard-container container-fluid m-0'>
        <div className='row'>
          <div className='col-3'>
            <PhonesList />
          </div>
          <div className='col'>
            <PhoneItem />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main