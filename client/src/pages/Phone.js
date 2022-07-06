import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import phonesApi from "../utils/phonesApi";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PhoneDetails from "../components/PhoneDetails";

const Phone = () => {
    const { _id } = useParams();
    const [phone, setPhone] = useState({});
    useEffect(() => {setTimeout(async () => {
        const phoneData = await phonesApi.getPhoneDetails(_id);
        setPhone(phoneData);
    }, 1000)}, [_id]);

    return (
        <div>
            {(Object.keys(phone).length === 0) && <Loading />}
            {((Object.keys(phone).length > 0) && phone.status) && <Error {...phone} />}
            {((Object.keys(phone).length > 0) && !phone.status) && <PhoneDetails {...phone} />}
        </div>
    );
};

export default Phone;