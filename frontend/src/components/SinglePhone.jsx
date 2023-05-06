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
          <h1>{phoneData.name}</h1>
        </div>
      )}
    </div>
  );
}

export default SinglePhone;
