import React from 'react'
import PhoneList from '../components/phone/PhoneList'
import PhoneDetail from '../components/phone/PhoneDetail'

function PhonesDashboardPage() {
  return (
    <>
      <div className='dashboard-container container-fluid m-0'>
        <div className='row'>
          <div className='col-3'>
            <PhoneList />
          </div>
          <div className='col'>
            <PhoneDetail />
          </div>
        </div>
      </div>
    </>
  )
}

export default PhonesDashboardPage