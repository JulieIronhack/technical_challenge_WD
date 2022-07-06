import { useParams } from "react-router-dom";

const Phone = () => {
    const { _id } = useParams();

    return (
        <h1>PhoneId: {_id}</h1>
    );
};

export default Phone;