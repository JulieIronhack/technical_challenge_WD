import { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const PhoneDetails = () => {
    const [singlePhone, setSinglePhone] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    const fetchPhones = async () => {
        const data = await axios.get('http://localhost:5005/api/phones')
        await setSinglePhone(data.data[id])
        setIsLoading(false)
    }

    useEffect(() => {
        fetchPhones()
    }, [])

    return <>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <><p>Phone Details</p>
        <div>
            <h1>{singlePhone.name}</h1>
            <img src={`../assets/images/${singlePhone.imageFileName}`} alt={singlePhone.name}/>
            <p>Manufacturer: {singlePhone.manufacturer}</p>
            <p>Description: {singlePhone.description}</p>
            <p>Color: {singlePhone.color}</p>
            <p>Price: {singlePhone.price} €</p>
            <p>Screen: {singlePhone.screen}</p>
            <p>Processor: {singlePhone.processor}</p>
            <p>RAM: {singlePhone.ram}</p>
        </div>
        

        </>
        }
        
    </>
}

export default PhoneDetails