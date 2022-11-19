import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function PhoneDetails() {
    const [phone, setPhone] = useState([]);
    const { id } = useParams();

    const getPhone = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/phones/${id}`)
            .then((response) => {
                console.log(response.data);
                setPhone(response.data);
            })
            .catch((error) => {
                console.log("Error getting data from backend...", error)

            })
    };

    useEffect(() => {
        getPhone();
    }, []);

    return (
        <div className="phone">

            <header>
                <h1>Phone Details</h1>

            </header>
            {phone[0] && <div className="PhoneDetails">
                <div>
                    <img src={`../assets/images/${phone[0].imageFileName}`} alt={phone[0].imageFileName} />
                </div>
                <div className="details">
                    <h3>{phone[0].name}</h3>
                    <p>{phone[0].manufacturer}</p>

                    <p>Color: {phone[0].color}</p>
                    <p>Description: {phone[0].description}</p>
                    <p>It has {phone[0].screen} screen</p>
                    <p>Processor: {phone[0].processor}</p>
                    <p>RAM: {phone[0].ram} GB</p>
                    <p>Price: {phone[0].price}$</p>
                    <Link to={`/phones`} className="menu-item" > Back </Link>
                </div>
            </div>}

        </div>

    );
}

export default PhoneDetails;