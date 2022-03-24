import "../App.css";
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PhoneDetails(prop) {

  const {PhoneId} = useParams();

  const [selectedPhone, setSelectedPhone] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5005/telephones')
      .then((result) => {
        result.data.forEach(element => {
          if (element.id == PhoneId)
          {
            setSelectedPhone(element)
          }
        })
      })
      .catch( (ex) => {
        console.log(ex)
      });
  }, []);

  return (
    <>
    <div className="list-group">
        <div><img src={"../" + selectedPhone.imageFileName}></img></div>
          <div></div> 
        <div className="name">{selectedPhone.name}</div>
        <div className="manufacturer">{selectedPhone.manufacturer}</div>
        <div className="description">{selectedPhone.description}</div>
        <div className="color">{selectedPhone.color}</div>
        <div className="price">{selectedPhone.price}</div>
        <div className="screen">{selectedPhone.screen}</div>
        <div className="processor">{selectedPhone.processor}</div>
        <div className="ram">{selectedPhone.ram}</div>
      </div>
    </>
  );
}

export default PhoneDetails;
