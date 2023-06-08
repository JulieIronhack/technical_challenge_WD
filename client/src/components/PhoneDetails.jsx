import React from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";




function PhoneDetails() {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
  const [selectedPhone, selectPhone] = useState([]);
  const { phoneId } = useParams();

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/phones/${phoneId.toString()}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((result) => {
        selectPhone(result.data);
        console.log(selectedPhone)
      })
      .catch((err) => console.log("Error while retrieving phones:", err));
  }, []);


  return (

    <Card
      className="phone border-0 text-center"
      key={selectedPhone.id}
      style={{ width: "40rem" }}
    >
      {/* {selectedPhone.imageFileName === "" ? (
        <></>
      ) : (
        <img src={`../images/${selectedPhone.imageFileName}`} alt={selectedPhone.name} />
      )} */}

      <Card.Title>{selectedPhone.name}</Card.Title>
      {selectedPhone.description === "" ? (
        <></>
      ) : (
        <Card.Text>{selectedPhone.description}</Card.Text>
      )}
      {selectedPhone.manufacturer === "" ? (
        <></>
      ) : (
        <Card.Text>{selectedPhone.manufacturer}</Card.Text>
      )}

      {selectedPhone.price === 0 ? (
        <></>
      ) : (
        <Card.Footer>
          <small className="text-muted">
            {selectedPhone.price} | {selectedPhone.screen} | {selectedPhone.processor} | {selectedPhone.ram}
          </small>
        </Card.Footer>
      )}
      <Link to={`http://localhost:3000/phones`}>Back</Link>

    </Card>
  );
};

export default PhoneDetails;