import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function PhoneDetails() {
   
    const {id} = useParams()
    console.log(id)
    const [fetching, setFetching] = useState(true)
    const [phone, setPhone] = useState([])
    const {name, manufacturer, description, color, price, imageFileName, screen, processor, ram} = phone
    console.log(name)
    useEffect(() => {
      fetch(`http://localhost:5005/api/phones/${id}`)
      .then(data => {
        data.json()
        .then(phone => {
          setPhone(phone)
          setFetching(false)
        })
      })
      .catch("error en el details", console.log)
    },[id])

    

  return (
    <div className="col-7">
      {fetching ? (<h1>Loading ... </h1>) : 
          (<div className="details">
            <img src={`../images/${imageFileName}`} alt={name}/>
            <h1>{name}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Manufacturer</td>
                  <td>{manufacturer}</td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>
                    {description}
                  </td>
                </tr>
                <tr>
                  <td>color:</td>
                  <td>
                    {color}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>)}
    </div>
  )

}

export default PhoneDetails