import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PhoneList(props) {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        setPhones(props.phones);
    }, [props.phones]);

    return (
        <div>
            <div className="list-group">
                {phones.map(phone => {
                    return <Link to={`/phones/${phone.id}`}>{phone.name} </Link>
                })
                }
            </div>
        </div>
    )
}

export default PhoneList
