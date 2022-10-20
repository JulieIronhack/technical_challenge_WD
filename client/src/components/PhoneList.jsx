import Spinner from './Spinner'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function PhoneList() {
  const [phonesList, setPhonesList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5005/phones')
    .then(phones => setPhonesList(phones.data))
  }, [])
  
  if (phonesList.length === 0) {
    return <Spinner />
  }

  return (
    <div className="phone-list">
      {phonesList.map(phone => {
        return (
          <div key={phone.id} className="phone-card">
            <p>{phone.name}</p>
            <p>${phone.price}</p>
            <Link to={`${phone.id}`}>Details</Link>
          </div>
        )
      })}
    </div>
  )
}