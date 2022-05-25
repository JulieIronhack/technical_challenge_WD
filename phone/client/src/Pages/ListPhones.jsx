import { useEffect, useState } from "react";
import phonesService from "../services/phones.service";
import { Col, Row } from 'react-bootstrap'

const ListPhones = () => {

    const [phonesData, setPhonesData] = useState([])

    useEffect(() => {
        loadPhones()
    }, [])

    const loadPhones = () => {

        phonesService
            .getAllPhones()
            .then(({ data }) => {
                setPhonesData(data)
            })
            .catch(err => console.log(err))

    }

    return (
        <Container fluid className='phonecard'>
            <Row>
                {
                    <>
                        <Col lg={8}>

                            <PhoneList phones={phones} />

                        </Col>

                    </>

                }
            </Row>



        </Container>
    )
}

export default ListPhones


