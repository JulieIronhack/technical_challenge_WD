import { useEffect, useState } from "react";
import axios from "axios";
import PhonesDetails from "../../components/PhonesDetails/PhonesDetails";
import Loading from "../../components/Loading/Loading"

function Phones() {
    const [phones, setPhones] = useState(undefined);
    const [selectedPhone, setSelectedPhone] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setSelectedPhone(undefined)

        axios.get('http://localhost:5005/phones').then((data) => {
            console.log(data)
            setPhones(data.data)
        }).catch((err) => { console.log("Error: ", err) }).finally(() => setIsLoading(false))
    }, [])

    async function handleSelectPhone(e) {
        setIsLoading(true)
        // console.log("element: ", e.target.value)
        const id = e.target.value

        await axios.get(`http://localhost:5005/phones/${id}`).then((phone) => {
            setSelectedPhone(phone.data)
            // console.log("Result from backend: ", phone)
        }).catch(err => console.log(err)).finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return (<Loading />)
    }

    return (
        <div>
            <h2>All phones</h2>
            <ul>
                {phones.map((phone) => {
                    return <button value={phone.id} key={phone.id} onClick={handleSelectPhone}>{phone.name}</button>
                })}
            </ul>
            {selectedPhone ?
                <PhonesDetails props={selectedPhone} />

                : ""
            }
        </div>
    )
}

export default Phones;