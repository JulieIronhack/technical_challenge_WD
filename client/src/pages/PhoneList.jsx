import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function PhoneList() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/`, {})
      .then((result) => {
        console.log(result.data);
        setPhones(result.data);
      })
      .catch((err) => console.log("Error while retrieving phones:", err));
  }, [API_URL]);


  return phones.map(
    ({
      id,
      name,
      imageFileName,

    }) => {
      return (
        <div>
            <img src={require(`../../public/images/${imageFileName}`)} alt={name} />
          <Link to={`/phone/${id}`}>{name}</Link>
        </div>
      );
    }
  );
}

export default PhoneList;
