import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_URL = "http://localhost:5005";

const PhoneDetail = () => {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState();
  console.log(phone);

  const getPhone = () => {
    axios
      .get(`${API_URL}/${phoneId}`)
      .then((response) => setPhone(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhone();
  });

  return <div>Phone Details</div>;
};

export default PhoneDetail;
