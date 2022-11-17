import React from 'react';
import { Link } from 'react-router-dom';

const PhonesList = (props) => {
    const { phones } = props;
    return (
        <div>
            {phones?.map((phone) => {
                return (
                    <Link
                        key={phone.id}
                        to={`/api/phones/${phone.id}`}
                    >
                        <img
                            src={`../../images/${phone.imageFileName}`}
                            alt={phone.name}
                        />
                        <p>{phone.name}</p>
                    </Link>
                );
            })}
        </div>
    )
}

export default PhonesList;