import React from "react";
import { useParams } from "react-router-dom";

export default function PhoneDetails(props) {
  const { telephones } = props;
  const { phoneId } = useParams();

  let phoneDetails;
  if (telephones) {
    phoneDetails = telephones.find((phone) => phone.id === phoneId);
  }

  const renderPhoneDetails = (phoneDetails) => {
    return (
      <div>
        <p>{phoneDetails.manufacturer}</p>
        <p>{phoneDetails.description}</p>
      </div>
    );
  };

  return (
    <div className="ProjectDetails">
      {phoneDetails ? renderPhoneDetails(phoneDetails) : "loading..."}
    </div>
  );
}