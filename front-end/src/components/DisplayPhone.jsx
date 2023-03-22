import React from 'react'
import { Link } from 'react-router-dom'

function DisplayPhone({phone}) {
  return (
    <div>
        <Link to={`/phones/${phone.name}`}>
        <h1>{phone.name}</h1>
        <div><img src={phone.imageFileName} style={{width:'200px'}}></img></div>
        </Link>
    </div>
  )
}

export default DisplayPhone