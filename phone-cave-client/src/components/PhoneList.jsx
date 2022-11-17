import NavBar from "./NavBar"
import { Link } from "react-router-dom";

function PhoneList(props) {
    return (
        <>
            <NavBar />
            <div>

                <h1>All Phones:</h1>

                {props.phones.map(phone => {
                    return (
                        <div className="box" key={phone.id} >
                            <h2>Name: {phone.name}</h2>
                            <p><img src={phone.image_url} alt="" className="phone-img" /> </p>


                            <Link to={`/phones/${phone.id}`}>More details</Link>
                        </div>
                    );
                })}



            </div>
        </>
    );
}

export default PhoneList;