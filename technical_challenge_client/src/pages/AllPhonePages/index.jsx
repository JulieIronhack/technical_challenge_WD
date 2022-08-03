import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllPhones = () => {
    const [phones, setPhones] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchPhones = () => {
        const data = axios.get('http://localhost:5005/api/allPhones')
        setPhones(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchPhones()
    }, [])

    return <>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <><h1 align='center'>List of all Phones</h1>
            {phones.data.map(phone => <div align='center'>
                <p>{phone.name}</p>
                <Link to={`/phones/${phone.phone_id}`}>Details</Link>
            </div>
            )}
        </>
        }

    </>
}

export default AllPhones