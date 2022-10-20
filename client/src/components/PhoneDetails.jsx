import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Buffer} from 'buffer'

export default function PhoneDetails() {
  const {id} = useParams()
  const [phoneDetails, setPhoneDetails] = useState(null)
  const [phoneImg, setPhoneImg] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5005/phones/'+id)
    .then(phone => setPhoneDetails(phone.data))
    .catch(err => console.log(err))

    axios.get('http://localhost:5005/phones/'+id+ '/image', {
      responseType:"arraybuffer"
    })
    .then(response =>
      {
        console.log(response)
        setPhoneImg(Buffer.from(response.data, 'binary').toString('base64'))
      })
      
    .catch(err => console.log(err))

  }, [id])
  
  if (phoneDetails === null) return 'loading'

  return(
    <div className="phone-details">
      <p>{phoneDetails.name}</p>
      <p>{phoneDetails.manufacturer}</p>
      <p>{phoneDetails.description}</p>
      <p>{phoneDetails.color}</p>
      <img src={`data:image/*;base64,${phoneImg}`} alt="phone" />
    </div>
  )
}