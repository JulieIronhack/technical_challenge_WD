import React from 'react'

function Navbar() {
  return (
    <div className="navBar">
        <p>Home</p>
        <div className="navIn">
        <input type="text" placeholder="Search something"></input>
        <p>Search</p>
        </div>
        <p>Logout</p>
      </div>
  )
}

export default Navbar