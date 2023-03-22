import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Spinner from "../components/Spinner";
import PhoneCard from "../components/PhoneCard";

const AllPhones = () => {
  const [phones, setPhones] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getPhones = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      setPhones(response.data);
      setisLoading(false);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getPhones();
  }, []);

  return !isLoading ? (
    <>
      {phones.map((phone) => {
        {
          console.log(phone);
        }
        return (
          <div key={phone.id}>
            <PhoneCard
              name={phone.name}
              description={phone.description}
              imgSrc={phone.imageFileName}
              id={phone.id}
            />
          </div>
        );
      })}
    </>
  ) : (
    <Spinner />
  );
};

export default AllPhones;
