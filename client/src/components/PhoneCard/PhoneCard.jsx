import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PhoneCard.css'

const PhoneCard = ({ name, manufacturer, description, color, price, imageFileName, screen, processor, ram, id }) => {
    return (
        <Card className="PhoneCard">
            <Card.Img variant="top" src={imageFileName} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>{manufacturer}</p>
                <p>{description}</p>
                <p>{color}</p>
                <p>{price}</p>
                <p>{screen}</p>
                <p>{processor}</p>
                <p>{ram}</p>

                <Link to={`/phones/${id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">See Details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default PhoneCard