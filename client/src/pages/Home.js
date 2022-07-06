import { useState, useEffect } from "react";
import phonesApi from "../utils/phonesApi";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PhoneCard from "../components/PhoneCard";

const Home = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {setTimeout(async () => {
        const phonesData = await phonesApi.getAllPhones();
        setPhones(await phonesData);
    }, 1000)}, []);

    return (
        <div>
            {(phones.length === 0) && <Loading />}
            {((phones.length > 0) && phones[0].status) && <Error {...phones[0]} />}
            {((phones.length > 0) && !phones[0].status) && phones.map(phone => <PhoneCard key={phone._id} {...phone} />)}
        </div>
    )
};

export default Home;