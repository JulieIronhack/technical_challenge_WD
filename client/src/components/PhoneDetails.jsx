import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";


function PhoneDetails() {
  const [phoneSelected, selectPhone] = useState([]);
  const { phoneId } = useParams();
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";


  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/phones/${phoneId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((result) => {

        selectPhone(result.data);
      })
      .catch((err) => console.log("Error while retrieving specific phone:", err));
  }, []);


  return (
    <Card
      className="phone border-0"
      key={phoneSelected.id}
      style={{ width: "40rem" }}
    >
      {phoneSelected.imageFileName === "" ? (
        <></>
      ) : (
        <img src={require(`../images/${phoneSelected.imageFileName}`)} alt={phoneSelected.name} style={{ width: "20rem" }} />
      )}

      <Card.Title>{phoneSelected.name}</Card.Title>
      {phoneSelected.description === "" ? (
        <></>
      ) : (
        <Card.Text>{phoneSelected.description}</Card.Text>
      )}
      {phoneSelected.manufacturer === "" ? (
        <></>
      ) : (
        <Card.Text>{phoneSelected.manufacturer}</Card.Text>
      )}

      {phoneSelected.price === 0 ? (
        <></>
      ) : (
        <Card.Footer>
          <small className="text-muted">
            {phoneSelected.price} | {phoneSelected.screen} | {phoneSelected.processor} | {phoneSelected.ram}
          </small>
        </Card.Footer>

      )}
    </Card>
  );
};

export default PhoneDetails;