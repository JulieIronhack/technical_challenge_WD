import React from "react";
import { Link } from "react-router-dom";

function PhoneCard({
  name,
  manufacturer,
  description,
  color,
  price,
  imageFileName,
  screen,
  processor,
  ram,
}) {
  return (
    <div>
      <h1>{name}</h1>

      <p>{description}</p>
      <h3>${price}</h3>
    </div>
  );
}

export default PhoneCard;
