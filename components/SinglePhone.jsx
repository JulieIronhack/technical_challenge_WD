import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function SinglePhone({ phones }) {
    const [singlePhone, setSinglePhone] = useState();
    const { phoneId } = useParams();
    console.log(phoneId);


    useEffect(() => {

        const phone = phones.find((phone) => {
            return phone.id === phoneId;


        });

        setSinglePhone(phone)
    }, [phoneId])

    console.log(singlePhone);

    if (!singlePhone) {
        return <p>Loading</p>
    }

    return (
        <>

            <h3>Name: {singlePhone.name}</h3>
       
        </>
    )
}

export default SinglePhone