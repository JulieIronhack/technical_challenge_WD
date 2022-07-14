import { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const PhoneDetails = () => {
    const [singlePhone, setSinglePhone] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    const fetchPhones = async () => {
        const data = await axios.get(`http://localhost:5005/api/phones/${id}`)
        await setSinglePhone(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchPhones()
    }, [])

    return <>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <><h2 align='center'>Phone Details</h2>
        <div align='center'>
            <h1>{singlePhone.name}</h1>
            <img src={require(`../assets/images/${singlePhone.data[0].imageFileName}`)} alt={singlePhone.data[0].name} style={{width: 200}}/>
            <p>Manufacturer: {singlePhone.data[0].manufacturer}</p>
            <p style={{width: 400}}>Description: {singlePhone.data[0].description}</p>
            <p>Color: {singlePhone.data[0].color}</p>
            <p>Price: {singlePhone.data[0].price} €</p>
            <p>Screen: {singlePhone.data[0].screen}</p>
            <p>Processor: {singlePhone.data[0].processor}</p>
            <p>RAM: {singlePhone.data[0].ram} GB</p>
        </div>
        

        </>
        }
        
    </>
}

export default PhoneDetails