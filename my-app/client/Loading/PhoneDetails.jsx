    import axios from 'axios';
    import React, { useEffect } from 'react'
    import { useState } from 'react'
    import { useNavigate } from 'react-router-dom';
    import PulseLoader from "react-spinners/PulseLoader";
    import Button from 'react-bootstrap/Button';

    function PhonesDetails(props) {

    const navigate = useNavigate();
    const [phonesDetails, setPhonesDetails] = useState(null)
    const [showPhoneDetails, setShowPhoneDetails] = useState(false)
    const {id} = props

    useEffect(() => {
        getPhonesDetails();
    }, [])

    const getPhonesDetails = async () => {
        try {
        const response = await axios.get(`http://localhost:5005/api/phones/${id}`)
        setPhonesDetails(response.data);
        }
        catch (error) {
        console.log(error);
        navigate("/error")
        }
    }

    if (phonesDetails === null) {
        return (
        <div>
            <br />
            <h6>Loading phones...</h6>
            <br/>
            <PulseLoader />
        </div>
        )
    }

    const showDetails = () => {
        console.log("Probando mostrar detalles.");
        setShowPhoneDetails(!showPhoneDetails);
    }

    return (
        <div>

        <Button onClick={showDetails}>Show Details</Button>

        { showPhoneDetails === true &&
            <>
                <div className="phone-image"><img src={phonesDetails.imageFileName} width={150} alt="Phone"/></div>
                <div className="phone-manufacturer"><p><strong>Manufacturer:</strong> {phonesDetails.manufacturer}</p></div>
                <div className="phone-color"><p><strong>Color:</strong> {phonesDetails.color[0].toUpperCase()}{phonesDetails.color.slice(1)}</p></div>
                <div className="phone-screen"><p><strong>Screen:</strong> {phonesDetails.screen}</p></div>
                <div className="phone-processor"><p><strong>Processor:</strong> {phonesDetails.processor}</p></div>
                <div className="phone-ram"><p><strong>RAM:</strong> {phonesDetails.ram} GB</p></div>
                <div className="phone-description"><p><strong>Description:</strong> {phonesDetails.description}</p></div>
                <div className="phone-price"><p><strong>Price:</strong> {phonesDetails.price} €</p></div>
            </>
         }

        </div>
    )
    }

    export default PhonesDetails 