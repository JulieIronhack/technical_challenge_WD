import "./PhoneDetailsPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import phoneService from "../../services/phone.service";
import Loading from "../../components/Loading/Loading";

function PhoneDetailsPage() {
  const [phone, setPhone] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { phoneId } = useParams();

  useEffect(() => {
    phoneService
      .getPhoneDetails()
      .then((response) => {
        setPhone(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [phoneId]);

  return (
    <div>
      <h1>Phone Details</h1>
      {isLoading && <Loading />}
      <div>
        <p>{phone.name}</p>
        <p>{phone.manufacturer}</p>
        <p>{phone.description}</p>
        <p>{phone.color}</p>
        <p>{phone.price}</p>
        <p>{phone.processor}</p>
        <p>{phone.ram}</p>
      </div>
    </div>
  );
}

export default PhoneDetailsPage;
