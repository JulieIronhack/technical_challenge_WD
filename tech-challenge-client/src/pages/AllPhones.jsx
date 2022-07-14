import { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllPhones = () => {
    const [phones, setPhones] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchPhones = async () => {
        const data = await axios.get('http://localhost:5005/api/phones')
        console.log(data)
        setPhones(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchPhones()
    }, [])

    return <>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <><p>List of all Phones</p>
        {phones.data.map(el => <div>
            <p>{el.name}</p> 
            <Link to={`/phones/${el.id}`}>Details</Link>
            </div>
        )}
        </>
        }
        
    </>
}

export default AllPhones