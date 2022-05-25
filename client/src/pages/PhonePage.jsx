
import { useEffect, useState } from "react"
import phoneService from '../services/phone.services'


const PhonePage = () => {

    const [phones, setPhones] = useState([])


    useEffect(() => loadPhones(), [])

    const loadPhones = () => {
        phoneService
            .getPhones()
            .then(({ data }) => {

                setPhones(data)


            })
            .then(err => console.log(err))
    }

    return (
        <div className='spacer'>
            <div className='mb-3'>

                <div>
                    <h1>Phones Page</h1>

                    {phones.map(elm => {
                        return (
                            <h3>
                                {elm.name} - {elm.manufacturer} - {elm.description} - {elm.color} - {elm.price}
                            </h3>
                        )

                    })}



                </div>
            </div>


        </div>
    )
}

export default PhonePage



