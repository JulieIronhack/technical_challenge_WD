import { useState, useEffect } from "react";
import phonesApi from "../utils/phonesApi";
import Loading from "../components/Loading";

const Home = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {setTimeout(async () => {
        const phonesData = await phonesApi.getAllPhones();
        setPhones(await phonesData);
    }, 2500)}, []);

    return (
        <div>
            {(phones.length === 0) && <Loading />}
            {((phones.length > 0) && phones[0].error) && <h1>Error</h1>}
            {((phones.length > 0) && !phones[0].error) && phones.map(phone => <h1 key={phone._id}>{phone.name}</h1>)}
        </div>
    )
};

export default Home;