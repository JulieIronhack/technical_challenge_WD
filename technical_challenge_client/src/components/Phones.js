import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Phones() {
    const [phonesArr, setPhonesArr] = useState([]);
    //console.log("I'm in phones....")
    //console.log(process.env.REACT_APP_API_URL)
    const getPhones = () => {

        axios.get(`${process.env.REACT_APP_API_URL}/phones`)
            .then((response) => {
                //console.log(response.data);
                setPhonesArr(response.data);
            })
            .catch((error) => {
                console.log("Error getting data from backend...", error)

            })
    };

    useEffect(() => {
        getPhones();
    }, []);

    return (
        <div className="phones">

            
            {phonesArr.length > 0 && phonesArr.map((phone, index) => {
                return (
                    <div className="PhonesPage" key={phone.id}>

                        <h3>{phone.name}</h3>
                        <p>{phone.manufacturer}</p>
                        <img src={`../assets/images/${phone.imageFileName}`} alt={phone.imageFileName} />
                        <p>Price: {phone.price}$</p>
                        <Link to={`/phones/${phone.id}`} className="menu-item" > Details </Link>

                    </div>

                )
            })

            }


        </div>

    );
}

export default Phones;