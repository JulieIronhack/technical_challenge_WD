import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneCard from "./PhoneCard";
import LoadingComponent from "./LoadingComponent";

const API_URL = "http://localhost:5005";

function AllPhones() {
  const [phoneData, setPhoneData] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) {
    <LoadingComponent />;
  } else {
    <p></p>;
  }
  const getAllPhones = () => {
    setLoading(true);
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => {
        setPhoneData(response.data);
        console.log("this is the response.data", response.data);
        setLoading(false);
      })
      .catch((error) =>
        console.log("THERE IS AN ERROR GETTING ALL THE PHONES", error)
      );
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div>
      <h1>All Phones</h1>

      {phoneData.map((phoneData) => (
        <PhoneCard key={phoneData.id} {...phoneData} id={phoneData.id} />
      ))}
    </div>
  );
}

export default AllPhones;
