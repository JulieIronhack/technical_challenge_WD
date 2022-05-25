import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import PhonesList from '../../components/PhonesList/PhonesList'
import phonesService from '../../services/phone.service'


const PhonesPage = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        loadPhones()
    }, [])

    const loadPhones = () => {
        phonesService
            .getAllPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))

    }

    return (
        <>
            <Container>
                <PhonesList phones={phones} />

            </Container>
        </>
    )
}

export default PhonesPage
