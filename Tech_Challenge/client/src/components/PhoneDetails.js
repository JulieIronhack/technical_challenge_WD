import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading/Loading";

const PhoneDetails = ({phoneDetails}) => {

    if(phoneDetails === null){ 
        return <Loading/>
    };


  return (
    <div className="d-flex flex-column justify-content-center m-2 col-12 col-md-8">
        <h1 className='text-center'>{phoneDetails.name}</h1>
        <div className="d-flex flex-md-nowrap flex-wrap col-11">
            <div className="col-md-4 col-12 d-flex justify-content-center">
                <img height={300} src={`/assets/images/${phoneDetails.imageFileName}`} alt="phoneImage" />
            </div>
            <section className='col-md-8 text-left'>
                <h3>Manufaturer: {phoneDetails.manufacturer}</h3>
                <h4>Description</h4>
                <p>{phoneDetails.description}</p>
                <p>Color: {phoneDetails.color}</p>
                <p>Screen Size: {phoneDetails.screen}</p>
                <p>Processor: {phoneDetails.processor}</p>
                <p>Ram: {phoneDetails.ram}</p>
                <h4>Price: ${phoneDetails.price}</h4>
            </section>
        </div>
        
        
    </div>
  )
}

export default PhoneDetails