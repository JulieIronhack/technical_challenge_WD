import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function Phone({ id, setSelectedPhone }) {
  const [phone, setPhone] = useState("");

  const getPhone = (id) => {
    axios
      .get(`${API_URL}/api/phones/${id}`)
      .then((response) => setPhone(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhone(id);
  }, []);

  return (
    <div className="phoneDetails">
      <Link className="hide" onClick={() => setSelectedPhone(null)}>
        Hide -{" "}
      </Link>
      <p>{phone.description}</p>
      <p className="techDetails">Technical details:</p>
      <ul>
        <li>Color: {phone.color}</li>
        <li>Screen: {phone.screen}</li>
        <li>Processor: {phone.processor}</li>
        <li>Ram:{phone.ram} </li>
      </ul>
    </div>
  );
}

export default Phone;
