import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:5005"

function AllPhones(){
    const [phones, setPhones] = useState([]);

    const getAllPhones = () =>{
        axios.get(`${API_URL}/api/phones`)
        .then(response => setPhones(response.data))
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
        getAllPhones()
    }, []);
    return(
        <div className="allPhones">
            {phones.map((phone =>{
                return(
                    <div className="PhoneCard" key={phone.id}>
                        <h3>{phone.name}</h3>
                        <Link to={`/phones/${phone.id}`}>View Details</Link> 
                    </div>
                )
            }))}
        </div>
    )
}

export default AllPhones;