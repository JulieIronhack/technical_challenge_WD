import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PhoneDetails = () => {
    const [onePhone, setSinglePhone] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { phone_id } = useParams()

    const fetchPhones = () => {
        const data = axios.get(`http://localhost:5005/api/${phone_id}`)
        setSinglePhone(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchPhones()
    }, [])

    return <>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <><h2 align='center'>Phone Details</h2>
            <div align='center'>
                <h1>{onePhone.name}</h1>
                <img src={require(`./../../../public/assets/images/${onePhone.data[0].imageFileName}`)} alt={onePhone.data[0].name} style={{ width: 200 }} />
                <p>Manufacturer: {onePhone.data[0].manufacturer}</p>
                <p style={{ width: 400 }}>Description: {onePhone.data[0].description}</p>
                <p>Color: {onePhone.data[0].color}</p>
                <p>Price: {onePhone.data[0].price} €</p>
                <p>Screen: {onePhone.data[0].screen}</p>
                <p>Processor: {onePhone.data[0].processor}</p>
                <p>RAM: {onePhone.data[0].ram} GB</p>
            </div>


        </>
        }

    </>
}

export default PhoneDetails