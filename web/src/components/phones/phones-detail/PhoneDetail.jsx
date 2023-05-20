import React, { useEffect, useState } from 'react'
import * as phonesService from '../../../services/phones';
import { Link, useParams } from 'react-router-dom';

function PhoneDetail() {
  const [phoneDetail, setPhoneDetail] = useState([])
  const { phoneId } = useParams()


  useEffect(() => {
    phonesService.detail(phoneId)
      .then((phoneDetail) => {
        setPhoneDetail(phoneDetail)
        console.log(phoneDetail)
      }).catch(console.error)
  }, [phoneId])


  return (
    <>
       <div>
       {phoneDetail.length > 0 ? 
       (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3 text-center">
        <img class="rounded-t-lg" src={`/images/${phoneDetail[0].imageFileName}`} alt="phoneImage" />
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{phoneDetail[0].name}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {phoneDetail[0].description}€</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Color: {phoneDetail[0].color}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Screen: {phoneDetail[0].screen}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Processor: {phoneDetail[0].processor}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ram: {phoneDetail[0].ram}</p>
          <Link to={`/phones`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Back
          </Link>
         
        </div>
      </div>
       )
      
       : 'Loading...'}
       </div>
  
    </>
  )
}

export default PhoneDetail