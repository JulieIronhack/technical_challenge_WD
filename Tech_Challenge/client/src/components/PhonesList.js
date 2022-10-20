// import { useState, useEffect } from "react";
// import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import Loading from "../components/Loading/Loading";
import { Button } from "react-bootstrap";

const PhonesList = ({phones, setPhoneSelected}) => {
    
    if(phones.length === 0){ 
        return <Loading/>
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center col-12 col-md-4">
        <h1 className='mx-2'>Phones List</h1>
        <div className="d-flex flex-md-column flex-wrap justify-content-center align-items-center col-12">
            {phones.map(phone=>{
                    return <Button key={uuidv4()} variant='outline-primary' size='md' className='mx-md-4 my-md-2 col-md-8 col-6' onClick={()=>setPhoneSelected(phone.id)}>
                    {phone.name}
                </Button>
            })}
        </div>
        
            
        
        </div>
    )
}

export default PhonesList