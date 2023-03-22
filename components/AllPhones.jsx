import React from 'react'
import { Link } from 'react-router-dom'


function AllPhones({ phones}) {

  return (
    <>
      <h3>All Phones</h3>
   
      {phones.map((phone) => {
        return (
          <div key={phone.id} style={{ border: "1px solid black", margin: "30px", padding: "20px" }}  >
            <img src={`./assets/images/${phone.imageFileName}`} alt={phone.name} style={{ width: 70 }} />
            <h2>{phone.name}</h2>
            <h4>{phone.tagline}</h4>
            <h6>{phone.contributed_by}</h6>
            <Link to={`/phones/${phone.id}`}>View Phone Details</Link>
          </div>
        )
      })}
    </>
  )
}

export default AllPhones