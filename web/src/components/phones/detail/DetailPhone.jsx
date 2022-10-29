
import React from "react";

function DetailPhone ( { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } ) {

    return (
      <div>
        <img className='w-100 rounded-1' src={`/images/${imageFileName}`}  alt={name} />
        <h5>{manufacturer}</h5>
        <p style={{ maxWidth: "400px" }}>{description} </p>
        <p>color: {color}</p>
        <p>price: {price}</p>
        <p>screen: {screen}</p>
        <p>processor: {processor}</p>
        <p>ram: {ram}</p>
      </div>
    );
  }

  export default DetailPhone;