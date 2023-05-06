import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005/api";

function SinglePhone() {
  const [phoneData, setPhoneData] = useState(null);
  const { phoneId } = useParams();

  const getSinglePhone = () => {
    axios
      .get(`${API_URL}/phones/${phoneId}`)
      .then((response) => {
        const onePhone = response.data;
        setPhoneData(onePhone);
      })
      .catch((error) => {
        console.log("there is an error with the single phone", error);
      });
  };

  useEffect(() => {
    getSinglePhone();
  }, []);
  return (
    <div>
      {phoneData && (
        <div>
          <h1>Single Phone information</h1>
          <h3>{phoneData.name}</h3>
          <img
            src={require(`../../assets/images/${phoneData.imageFileName}`)}
            alt="name"
          />
        </div>
      )}
    </div>
  );
}

export default SinglePhone;
