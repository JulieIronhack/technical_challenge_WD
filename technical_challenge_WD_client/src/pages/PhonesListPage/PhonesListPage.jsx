import { useState, useEffect } from "react"
import phoneService from "../../services/phone.service.js"
import { Container } from "react-bootstrap";
import PhonesList from "../../components/PhonesList/PhonesList.jsx";
import './PhonesListPage.css'

const PhonesListPage = () => {

    const [allPhones, setAllPhones] = useState([])

    useEffect(() => {
        phoneService
            .getAllPhones()
            .then(({ data }) => {
                setAllPhones(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div>
                <Container>
                    <div>
                        <h1>Phones List</h1>
                    </div>

                    <div>
                        <PhonesList />

                    </div>

                    {/* <div>
                        {
                            allPhones?.map(phone => {
                                return (
                                    <Col md={{ span: 4 }} key={phone._id}>
                                        <p>{phone.name}</p>
                                        <p>{phone.manufacturer}</p>
                                        <p>{phone.description}</p>
                                    </Col>
                                )
                            })
                        }

                    </div> */}


                </Container>
            </div>
        </>
    )
}

export default PhonesListPage