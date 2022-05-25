import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import "./PhoneCard.css"

const PhoneCard = ({ _id, imageFileName, name, description, price }) => {

    return (
        <Link className="LinkPhone" to={`/phones/${_id}`}>
            <Card className="PhoneCard">
                <Card.Img className="image" variant="top" src={imageFileName} />
                <Card.Title className="text-title ">{name}</Card.Title>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
            </Card >
        </Link>
    )
}

export default PhoneCard