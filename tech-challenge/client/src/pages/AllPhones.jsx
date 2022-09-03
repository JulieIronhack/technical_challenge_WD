import React, { useEffect, useState } from "react"
import axios from "axios"
import LoadingComponent from "../components/Loading"
import { Link } from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllPhones = async () => {
        const response = await axios.get(`${API_URL}/phones`)
        setPhones(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getAllPhones()
    }, []);

    return (
        <>
            {isLoading &&
                <LoadingComponent />
            }
            {
                phones.map((phone) => {
                    return (
                        <Link to={`/phones/${phone._id}`}>
                        <p>{phone.name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Phones