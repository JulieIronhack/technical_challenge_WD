import phonesService from "../../services/phone.service"
import { useEffect, useState } from "react"
import { Container } from 'react-bootstrap'
import PhonesList from "../../components/phone.list"


const PhonePage = () => {
    const [coasters, setCoasters] = useState([])



    useEffect(() => loadCoasters(), [])

    const loadCoasters = () => {
        phonesService
            .getAllPhones()
            .then(({ data }) => setCoasters(data))
            .then(err => console.log(err))
    }
    return (

        <Container>
            <h1>Listado</h1>
            <PhonesList coasters={coasters} />
        </Container>


    )
}

export default PhonePage