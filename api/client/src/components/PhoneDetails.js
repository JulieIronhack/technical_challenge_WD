import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PhoneDetails = (props) => {
    const { phones } = props;
    const { id } = useParams();
    const [phoneDetails, setPhoneDetails] = useState({});

    useEffect(() => {
        const newPhoneDetails = phones.filter((phone) => {
            return +phone.id === +id;
        });
        setPhoneDetails({ ...newPhoneDetails[0] });
    }, [id, phones]);

    return (
        <div>
            {phoneDetails && (
                <img
                    src={`../../images/${phoneDetails?.imageFileName}`}
                    alt={phoneDetails?.name}
                />
            )}
            <h1>{phoneDetails.name}</h1>
            <p>Manufacturer: {phoneDetails?.manufacturer}</p>
            <p>Price: {phoneDetails?.price}</p>
            <p>Description: {phoneDetails?.description}</p>
        </div>
    );
};

export default PhoneDetails;