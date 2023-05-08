import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import { Routes, Route } from "react-router-dom";
// import PhoneDetails from '../components/PhoneDetails';


function PhoneList() {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
    const [phones, setPhones] = useState([]);


    useEffect(() => {
       

        axios
            .get(`${API_URL}/phones`, {
               
            })
            .then((result) => {
                console.log("1111111111",result.data)
                setPhones(result.data);
            })
            .catch((err) => console.log("Error while retrieving phones:", err));
    }, []);


    return (
        <>
      <h1>List of Phones</h1>
      {phones.map((phone) => {
        return (
          <div key={phone.id} className="phone-list">
            <img src="" alt="" srcset="" />
            <li>
              <NavLink to={`/phones/${phone.id}`}>{phone.name}</NavLink>
              </li>
    </div>
    )
})}
     </>
    )
    
}

export default PhoneList;