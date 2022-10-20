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
        setPhoneImg(Buffer.from(response.data, 'binary').toString('base64'))
      })
      
    .catch(err => console.log(err))

  }, [id])
  
  if (phoneDetails === null) return 'loading'

  return(
    <div className="phone-details">
      <h2>{phoneDetails.name}</h2>
      <h3>Maker: {phoneDetails.manufacturer}</h3>
      <p>{phoneDetails.description}</p>
      <p>Color: {phoneDetails.color}</p>
      <p>Screen: {phoneDetails.screen}</p>
      <p>Processor: {phoneDetails.processor}</p>
      <p>Ram: {phoneDetails.ram} GB</p>
      <img src={`data:image/*;base64,${phoneImg}`} alt="phone" />
    </div>
  )
}