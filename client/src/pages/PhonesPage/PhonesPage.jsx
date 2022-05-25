import phoneService from "../../services/phones.services"
import { useEffect, useState } from "react"

const PhonesPage = () => {

    const [allPhones, setAllPhones] = useState([])

    useEffect(() => {
        loadPhones()
    }, [])

    const loadPhones = () => {
        phoneService
            .getAllPhones()
            .then(({ data }) => {
                setAllPhones(data)
                console.log(data)
            })

            .catch(err => console.log(err))

    }

    return (
        <div>
            {
                allPhones.map(phone => {
                    return (
                        <h2>{phone.name}</h2>
                    )
                })
            }

        </div>
    )
}

export default PhonesPage