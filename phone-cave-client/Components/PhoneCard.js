import { Link } from "react-router-dom";

function PhoneCard ({ name, manufacturer, description, colour, price, imageFileName, screen, processor, ram}) {

return (
    <div className="PhoneCard card">
        <Link to = {`/phones/${_id}`}>
        </Link>
        <h4>Name:</h4>
        <p>{name}</p>
        <h4>Manufacturer:</h4>
        <p>{manufacturer}</p>
        <h4>Description:</h4>
        <p>{description}</p>
        <h4>Colour:</h4>
        <p>{colour}</p>
        <h4>Price:</h4>
        <p>{price}</p>
        <h4>Image:</h4>
        <p>{imageFileName}</p>
        <h4>Screen:</h4>
        <p>{screen}</p>
        <h4>Processor:</h4>
        <p>{processor}</p>
        <h4>RAM:</h4>
        <p>{ram}</p>
    </div>
);
}

export default PhoneCard;