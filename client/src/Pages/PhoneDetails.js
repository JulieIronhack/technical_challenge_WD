import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API_URL = "http://localhost:5005"

function PhoneDetails(){
    const { phoneId } = useParams()
    const [ phone, setPhone ] = useState("")
    useEffect(()=>{
        axios.get(`${API_URL}/api/phones/${phoneId}`)
        .then(response=>{
            setPhone(response.data)
        })
    }, [])
    return(
        <div className="detailphone">
            <h1>{phone.name}</h1>
            <h3>Manufactured by: {phone.manufacturer}</h3>
            <p>{phone.description}</p>
            <p>Color: {phone.color}</p>
            <p>Price: ${phone.price}</p>
            {phone.imageFileName &&
            <img src={require(`../assets/images/${phone.imageFileName}`)} alt='phone'/>
            }
            <p>{phone.screen}</p>
        </div>
    )
}
export default PhoneDetails;