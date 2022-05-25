import { Row, Col, Card } from "react-bootstrap"
import {Link} from "react-router-dom"


const PhoneList = ({ name, manufacturer, description, color, price, imageFileName, screen, processor, ram, id}) => {


    return (
        phones.length
            ?
            <Row>
                {
                    phones.map(phone => {
                        return (
                            <Card className="Card">
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

                                    <div className="d-grid gap-2">
                                        <Link to={`/getOnePhone/${id}`} className="btn btn-dark">Details</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Row>
            :
            <div></div>
    )
}

export default PhoneList