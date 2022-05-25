import { Row, Col } from "react-bootstrap"
// import PhoneCard from "../PhoneCard/PhoneCard"
import './PhonesList.css'

const PhonesList = ({ phones }) => {

    return (
        <div>
            <>
                <Row>
                    {
                        phones?.map(phone => {
                            return (
                                // <Col md={{ span: 4 }} key={phone._id}>
                                //     <PhoneCard {...phone} />

                                <Col md={{ span: 4 }} key={phone._id}>
                                    {
                                        phones?.map(phone => {
                                            return (
                                                <Col md={{ span: 4 }} key={phone._id}>
                                                    <p>{phone.name}</p>
                                                    <p>{phone.manufacturer}</p>
                                                    <p>{phone.description}</p>
                                                </Col>
                                            )
                                        })
                                    }
                                </Col>
                            )
                        })
                    }
                </Row>
            </>
        </div >
    )
}

export default PhonesList