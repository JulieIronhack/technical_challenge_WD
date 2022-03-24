import "../App.css";
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function HomePage() {

  const [selectedPhones, setSelectedPhones] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5005/telephones')
      .then((result) => {
        console.log(result.data);
        setSelectedPhones(result.data);
      })
      .catch( (ex) => {
        console.log(ex)
      });
  }, []);

  return (
    <>
    <div className="list-group">
      {
        selectedPhones.map( (element, index) => {
          return (
            <>
              <NavLink key={index} className="list-group-item list-group-item-action" to={`/Phone/${element.id}`}>
                <div><img src={element.imageFileName}></img></div></NavLink>
                  <div></div> 
                <div className="name">{element.name}</div>
                <div className="manufacturer">{element.manufacturer}</div>
                <div className="description">{element.description}</div>
                <div className="color">{element.color}</div>
                <div className="price">{element.price}</div>
                <div className="screen">{element.screen}</div>
                <div className="processor">{element.processor}</div>
                <div className="ram">{element.ram}</div>

                <hr/>
            </>
          )
        })
      }
      </div>
    </>
  );
}

export default HomePage;
