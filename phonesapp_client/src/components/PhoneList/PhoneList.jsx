import { useEffect, useState } from 'react'
import phonesService from '../../services/phones.services'
import { Container, Row, Col } from 'react-bootstrap'
import Spinner from '../Spinner/Spinner'

const PhoneList = () => {

    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        loadPhones()
    }, [])

    const loadPhones = () => {
        setLoading(true)
        phonesService
            .getAllPhones()
            .then(({ data }) => {
                setLoading(false)
                setPhones(data)
            })
    }

    return (
        <Container>
            <Row>
                <h2>Phone list</h2>

                {
                    !loading
                        ?
                        phones.map(phone =>

                            <Col md={{ span: 3 }} key={phones.id}>
                                <p>{phone.name}</p>

                            </Col>

                        )
                        :
                        <Spinner />
                }

            </Row >
        </Container >

    )


}

export default PhoneList