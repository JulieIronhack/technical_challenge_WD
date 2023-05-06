import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";


function PhoneDetails() {
  const [phoneSelected, setPhone] = useState([]);
  const { phoneId } = useParams();
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";



  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/phones/${phoneId.toString()}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((result) => {
        console.log(result)
        setPhone(result.data);
      })
      .catch((err) => console.log("Error while retrieving specific phone:", err));
  }, [phoneId]);



  return (
    phoneSelected.map((p) => {
      <Card
        className="phone border-0"
        key={p.id}
        style={{ width: "40rem" }}
      >
        {p.imageFileName.length === 0 ? (
          <></>
        ) : (
          <img src={require(`../images/${p.imageFileName}`)} alt={p.name} style={{ width: "20rem" }} />
        )}

        <Card.Title>{p.name}</Card.Title>
        {p.description.length === 0 ? (
          <></>
        ) : (
          <Card.Text>{p.description}</Card.Text>
        )}
        {p.manufacturer.length === 0 ? (
          <></>
        ) : (
          <Card.Text>{p.manufacturer}</Card.Text>
        )}

        {p.price === 0 ? (
          <></>
        ) : (
          <Card.Footer>
            <small className="text-muted">
              {p.price} | {p.screen} | {p.processor} | {p.ram}
            </small>
          </Card.Footer>

        )}

      </Card>
    })
  );
};

export default PhoneDetails;