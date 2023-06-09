import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detailspage() {
    const { phoneId } = useParams();
    const [phone, setPhone] = useState(null);

    const fetchPhone = async () => {
        try {
            const response = await axios.get(`http://localhost:5005/api/phones/${phoneId}`);
            if (response.status === 200) {
                setPhone(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPhone();
    }, []);

    return (
        <div>
            {phone && (
                <div>
                    <h2>Selected Phone</h2>
                    <p>Name: {phone.name}</p>
                    <p>Brand: {phone.brand}</p>
                    <p>Price: {phone.price}</p>
                </div>
            )}
        </div>
    );
}

export default Detailspage;