import { Row, Col } from "react-bootstrap"
import PhoneCard from "../PhoneCard/PhoneCard"
import Loader from "../Loader/Loader"

const PhonesList = ({ phones }) => {

    return (
        phones.length
            ?
            <Row>
                {
                    phones.map(phone => {
                        return (
                            <Col md={{ span: 4 }} key={phone._id}>
                                <PhoneCard {...phone} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default PhonesList