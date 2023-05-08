import {useState, useEffect} from "react";
import axios from "axios";
import PhoneCard from "../Components/PhoneCard";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";


function PhonesPage(){
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/api/getPhones`)
        .then((data) => { 
          console.log(data);
          setPhones(data?.data);
        })
        .catch((error) => console.log(error));
      }, []);

    return (
        <div className="PhonesPage">
            { phones.map((phone) => <PhoneCard key={phone._id} {...phone} /> )}
        </div>
    );
}


export default PhonesPage;