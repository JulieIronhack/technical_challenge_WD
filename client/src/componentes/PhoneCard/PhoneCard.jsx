import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

const PhoneCard = ({ _id, imageFileName, name }) => {

    return (
        <Card className="PhoneCard">
            <Card.Img variant="top" src={imageFileName} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="d-grid gap-2">
                    <Link to={`/${_id}`} className="btn btn-dark">Ver detalles</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PhoneCard