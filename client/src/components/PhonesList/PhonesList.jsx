import { Row, Col } from 'react-bootstrap'
import PhoneCard from '../PhoneCard/PhoneCard'

const PhonesList = ({ phones }) => {

    return (
        <Row>
            {phones.map(phone => {
                console.log(phone)
                return <Col md={4} key={phone.id}> <PhoneCard {...phone} /> </Col>
            })}
        </Row>
    )
}

export default PhonesList