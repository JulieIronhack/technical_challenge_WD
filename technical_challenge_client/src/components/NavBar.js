// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

// import RadiumLink from 
function Navbar(props) {

  return (
    <div className="nav">
      
        <Link  to="/" className="menu-item" > Home </Link>
        <Link  to="/phones" className="menu-item" > Show Phones </Link>
        
    </div>

  );
}

export default Navbar;