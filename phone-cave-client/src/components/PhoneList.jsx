import React from "react";
import { Link } from "react-router-dom";

function PhoneList({phoneList}) {

  return (
  <div>
    <h1>Phone List</h1>
    <ul>
        {phoneList.map((eachPhone) => {
            return <li key={eachPhone.id + eachPhone.name}> <Link to={`/${eachPhone.id}`}>{eachPhone.name}</Link></li>
        })}
    </ul>
    </div>
  )
}

export default PhoneList;
