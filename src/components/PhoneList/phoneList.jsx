import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Loader from "../Loader/loader"
const PhoneList = ({ phones }) => {
    console.log(phones)
    return (
        <>

            {
                !phones ?
                    <Loader />
                    :
                    <>
                        <Row>
                            <Col md={6}>
                                {phones.map(phone => {
                                    return (
                                        <li key={phone.id}>
                                            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                                        </li>
                                    )
                                }
                                )}
                            </Col>
                            <Col md={6}>
                                <Routes>
                                    <Route path={`/phones/:id`} element={
                                        <PhoneDetail phones={phones} />
                                    } />

                                </Routes>
                            </Col>
                        </Row>

                    </>



            }

        </>
    )
}
export default PhoneList