import React from "react";
import { Link } from "react-router-dom";

function PhoneList({ phones }) {
  return (
    <div>
      {phones.map((phone) => (
        <div key={phone.id}>
          <Link to={`/${phone.id}`}>
            <h4>{phone.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PhoneList;
