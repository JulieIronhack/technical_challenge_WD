import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";

const API_URL = "http://localhost:5005/api"


export default function PhonesPage () {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios
        .get(`${API_URL}/phones`)
        .then((res) => {
            console.log('res.data ', res.data)
            setPhones(res.data.phones)
        })
        .catch((error) => console.log(error));
    },[])


        return (
            <div>
                <h3>List with phones:</h3>
    
                {phones.map((phone) => (
                    <div key={phone.id}>
                        <img src={phone.imageFileName} alt="phoneImage"/>
                        <h3>{phone.name}</h3>
                        <p>{phone.manufacturer}</p>
                    </div>
                ))}
            </div>
        )

}