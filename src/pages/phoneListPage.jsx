import { useEffect, useState } from "react"
import PhoneList from "../components/PhoneList/phoneList"
import axios from 'axios'
import { Col, Row } from "react-bootstrap"
import PhoneDetail from "../components/PhoneDetail/phoneDetail"
import { Route, Routes } from "react-router"


const { default: Navigation } = require("../components/Navigation/navBar")

const PhoneListPage = () => {

    const [phones, setPhones] = useState([])
    const getPhonesData = () => {

        axios.get('phones.json')
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getPhonesData()
    }, [])


    return (
        <>
            <Navigation />
            <Row>
                <Col md={6}>
                    <PhoneList phones={phones} />
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
    )

}

export default PhoneListPage