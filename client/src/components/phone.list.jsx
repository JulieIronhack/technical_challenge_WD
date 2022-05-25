import { Col } from "react-bootstrap"

const PhonesList = ({ phones }) => {

    return (

        <>

            phones.length

            {
                phones.map(coaster => {
                    return (
                        <Col md={{ span: 4 }} key={phones._id}>

                        </Col>
                    )
                })
            }



        </>

    )
}

export default PhonesList