import React, { useState, useEffect } from "react";
import '../App.css'
import axios from "axios";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Landing() {
    const [phones, setPhones] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    const fetchData = async () => {
      const response = await axios.get("http://localhost:5005/phones");
      setPhones(response.data);
      console.log(response.data)      
      console.log(isLoading)
    };

    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    function handleClick (id) {
        navigate(`/phones/${id}`)
    }
    
    useEffect(() => {   
      fetchData();   
    }, []);
  
    return (
      <div>
       {!isLoading  ? 
        <div className="fullReturn">
        <Navbar/>             
        <div className="general fullReturn2">
       {phones.map((phone) => {                                
        return (
            <div>
        <div className="frontContainer">
        {console.log(phone)}
        <div className="imgContainer">
        <img className="frontImage" src={phone.imageFileName}/>
        </div>
        <div className="frontText">
        <h3 className="frontPhone">{phone.manufacturer} {phone.name}</h3> 
        <button className="frontButton" onClick={() => handleClick(phone.id)}>View Details</button>     
        </div>
        </div>
        </div>
        )
       }) }
       </div>  
       </div> 
       :
       <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
       }   
      </div>
    )
  }


export default Landing