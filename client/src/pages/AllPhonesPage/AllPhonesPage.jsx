import { Container, Modal, Button } from 'react-bootstrap'
import { useContext, useEffect, useState } from "react"
import PhonesService from '../../services/phone.service'
import PhoneList from '../../components/PhoneList/PhoneList'


const AllPhonesPage = () => {

    const [phones, setPhones] = useState([])

    useEffect(() => loadPhones(), [])

    const loadPhones = () => {
        PhonesService
            .getAllPhones()
            .then(({ data }) => {
                setPhones(data)
                console.log('holita', data)
            })
            .then(err => console.log(err))
    }

    return (
        <>{

            phones.map(phone =>{
                return (
                    <p>{phones.name}</p>
            )
            })
        }
        </>
    )
}

export default AllPhonesPage