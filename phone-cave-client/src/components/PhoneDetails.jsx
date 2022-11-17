import NavBar from "./NavBar"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PhoneDetails() {
    const { phoneId } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetchPhoneDetails();
    }, []);

    const fetchPhoneDetails = () => {
        axios.get(`http://localhost:5005/api/phones/${phoneId}`)
            .then(response => {
                setDetails(response.data);
            })
            .catch(e => console.log("error getting phone details from API", e));
    }



    return (
        <>
            <NavBar />
            <h1>Phone Details</h1>

            <div className="box" key={details._id} >
                <h2>Name: {details.name}</h2>
                <p><img src={`../assets/images/${details.imageFileName}`} alt="Phone Details" className="phone-img" /> </p>
                <p>Description: {details.description}</p>
            </div>

        </>
    );
}

export default PhoneDetails;