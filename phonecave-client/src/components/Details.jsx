import React, { useEffect, useState } from "react";
import { getPhoneDetailsService } from "../services/phone.services";
import { useParams } from "react-router-dom";

function Details() {
  const { phoneId } = useParams();
  const [phoneDetails, setPhoneDetails] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  // To get phone list data calling BE
  const getData = async () => {
    try {
      const response = await getPhoneDetailsService(phoneId);
      setPhoneDetails(response.data);
      setIsFetching(false);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setErrorMessage(error.response.data.errorMessage);
      }
    }
  };

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-container">
      <h2>{phoneDetails.name}</h2>
      <img src={`../assets/images/${phoneDetails.imageFileName}`} alt={phoneDetails.name} />
      <div>
        <p>{phoneDetails.manufacturer}</p>
        <p>{phoneDetails.color}</p>
      </div>
      <p>{phoneDetails.description}</p>
      <p>{phoneDetails.price}</p>
      <div>
        <p>{phoneDetails.screen}</p>
        <p>{phoneDetails.processor}</p>
        <p>{phoneDetails.ram}</p>
      </div>
    </div>
  );
}

export default Details;
