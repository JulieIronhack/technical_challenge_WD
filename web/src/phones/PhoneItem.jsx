import React from "react";
import { NavLink } from "react-router-dom";

function PhoneItem({ name, imageFileName, id, description }) {
  return (
    <div>
      <NavLink to={`/${id}`}>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={imageFileName} alt="phone" />
      </NavLink>
    </div>
  );
}

export default PhoneItem;
