import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PhoneList from "../components/PhoneList";
import PhoneDetail from "../components/PhoneDetail";
const API_URL = "http://localhost:5005";

const HomePage = () => {
  const [phones, setPhones] = useState([]);

  const getAllPhones = () => {
    axios
      .get(`${API_URL}/phones`)
      .then((response) => setPhones(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div>
      <h1>The Phone Cave</h1>
      <div className="columns">
        <PhoneList phones={phones} />
      </div>
    </div>
  );
};

export default HomePage;
