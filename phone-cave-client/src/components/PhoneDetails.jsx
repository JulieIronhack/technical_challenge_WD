import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPhoneDetailsService } from '../services/phones.services'


function PhoneDetails() {

    const {id} = useParams()

    const [phoneDetails, setPhoneDetails] = useState(null);
    const [isFetching, setIsFetching] = useState(true)

    useEffect(()=> {
        handlePhoneDetails()
    }, [id])

    const handlePhoneDetails = async () => {
        const response = await getPhoneDetailsService(id)
        setPhoneDetails(response.data)
        console.log(phoneDetails)
        setIsFetching(false)
      }

      if (isFetching) {
        return <p>Cargando...</p>;
      }

  return (
    <div>
    <h1>Phone Details</h1>
    <div><img src={`/images/${phoneDetails.imageFileName}`} alt="" /></div>
    <div>
     <h3>{phoneDetails.name}</h3>
     <h5>{phoneDetails.price}$</h5>
     <p>{phoneDetails.description}</p>
     <ul>
     <h5>Details</h5>
     <p>{phoneDetails.processor}</p>
     <p>{phoneDetails.ram}</p>
     <p>{phoneDetails.screen}</p>

     </ul>
     

    </div>
    </div>
  )
}

export default PhoneDetails