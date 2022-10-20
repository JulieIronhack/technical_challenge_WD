import { Link } from "react-router-dom";

function PhoneCard ( { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } ) {
  
    return (
      <div>
        <Link to={`/projects/${id}`}>
          <h3>{name}</h3>
        </Link>
        <a href={`/phones/${id}`}>
        {imageFileName && <img alt="phone" src={`/images/${imageFileName}`} height="200" />}
        </a>
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
   
  export default PhoneCard;