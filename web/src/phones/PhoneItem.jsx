import React from "react";
import { NavLink } from "react-router-dom";

function PhoneItem({ name, imageFileName, id }) {
  return (
    <div className="">
      <NavLink to={`/${id}`}>
        <h1 className="text-center text-blue-600/75 text-3xl">{name}</h1>
        <img
          className="rounded-t-lg m-7 object-cover w-full rounded-full h-[400px]  md:w-[400px] md:rounded-r-lg md:rounded-l-lg"
          src={`assets/images/${imageFileName}`}
          alt="phone"
        />
      </NavLink>
    </div>
  );
}

export default PhoneItem;
