import { useEffect, useState } from "react";
import axios from "axios";
import PhonesDetails from "../../components/PhonesDetails/PhonesDetails";
import Loading from "../../components/Loading/Loading"
import './phones.css'

function Phones() {
    const [phones, setPhones] = useState(undefined);
    const [selectedPhone, setSelectedPhone] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [phoneLoading, setPhoneLoading] = useState(false)

    // get info of all phones
    useEffect(() => {
        setSelectedPhone(undefined)

        axios.get('http://localhost:5005/phones').then((data) => {
            setPhones(data.data)
        }).catch((err) => { console.log("Error: ", err) }).finally(() => setIsLoading(false))
    }, [])

    // to simulate loading
    const resetLoadingStatus = setTimeout(() => {
        setPhoneLoading(false)
    }, 2000)


    // get details of single phone
    async function handleSelectPhone(e) {
        setPhoneLoading(true)
        const id = e.target.value

        await axios.get(`http://localhost:5005/phones/${id}`).then((phone) => {
            setSelectedPhone(phone.data)
        }).catch(err => console.log(err)).finally(() => resetLoadingStatus)
    }

    // display loading while getting data from server
    if (isLoading) {
        return (<Loading />)
    }

    return (
        <div className="phones">
            <h2>Available phones</h2>
            <div className="phone-nav">
                {phones.map((phone) => {
                    return <button className="phone-btn" value={phone.id} key={phone.id} onClick={handleSelectPhone}>{phone.name}</button>
                })}
            </div>
            {phoneLoading ? <Loading /> : ""}
            {selectedPhone ?
                <PhonesDetails props={selectedPhone} />

                : "-- select a phone for details --"
            }
        </div>
    )
}

export default Phones;