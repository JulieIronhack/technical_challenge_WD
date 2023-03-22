import React, { useState, useEffect} from "react";
import '../App.css'
import axios from "axios";
import { Routes, Route, Navigate, useNavigate, useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Details() {
    const [phones, setPhones] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    let { id } = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        console.log("HERE ID", id)
      const response = await axios.get(`http://localhost:5005/phones/${id}`);
      setPhones(response.data);
      console.log(response.data)      
      console.log(isLoading)
    };

    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    function handleClick (id) {
        navigate(`/phones`)
    }
    
    useEffect(() => {   
      fetchData();   
    }, []);
  
    return (
      <div>       
       {!isLoading  ? 
        <div className="fullReturn">
        <Navbar/>
        {phones.map((phone) => {      
        return (
        <div className="backContainer">
        {console.log(phone)}
        <img className="backImg" src={`../${phone.imageFileName}`} />   
        <h3 className="backTitle">{phone.manufacturer} {phone.name}</h3> 
        <p className="description">{phone.description}</p>
        <p>Color: {phone.color}</p>
        <p>Price: {phone.price}</p>
        <p>Processor: {phone.processor}</p>
        <p>Ram: {phone.ram}</p>
        <p>Screen: {phone.screen}</p>
        <div>
        <button className="backButton" onClick={() => handleClick()}>Back</button>     
        </div>
        </div>
        )
       })}   
       </div> 
       :
       <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
       }   
      </div>
    )
}

export default Details