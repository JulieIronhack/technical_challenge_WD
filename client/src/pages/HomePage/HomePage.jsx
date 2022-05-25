import { Container } from 'react-bootstrap'
import PhonesList from '../../componentes/PhoneList/PhoneList'
import { useState } from "react"
import phoneService from '../../services/phone.services'



const IndexPage = () => {

    const [phones, setPhones] = useState([])
 
    const loadPhones = () => {
        phoneService
            .getAllPhones()
            .then(({ data }) => setPhones(data))
            .then(err => console.log(err))
    }

    return (
        <Container>
            <h1> Welcome to PhoneLand!</h1>
            <hr />
            <PhonesList phones={phones} />

          
        </Container>
    )
}

export default IndexPage