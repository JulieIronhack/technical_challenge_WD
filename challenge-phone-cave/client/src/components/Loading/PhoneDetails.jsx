import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PhoneDetails = (props) => {
  const { phones } = props;
  const { id } = useParams();
  const [phoneInfo, setPhoneInfo] = useState({});

  useEffect(() => {
    const newPhoneInfo = phones.filter((phone) => {
      return +phone.id === +id;
    });
    setPhoneInfo({ ...newPhoneInfo[0] });
  }, [id, phones]);

  return (
    <div className="col-7">
      {phoneInfo && (
        <img
          src={`/images/${phoneInfo?.imageFileName}`}
          alt={phoneInfo?.name}
          height="300px"
        />
      )}
      <h1>{phoneInfo?.name}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Manufacturer</td>
            <td>{phoneInfo?.manufacturer}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>${phoneInfo?.price}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{phoneInfo?.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhoneDetails;
