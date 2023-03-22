import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

function PhoneDetails() {
  const [phone, setPhone] = useState({});

  const { id } = useParams();
  async function onePhone() {
    try {
      const response = await axios.get(`http://localhost:5005/phones/${id}`);
      setPhone(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    onePhone();
  }, [id]);

  return (
    <div>
      {phone ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`../images/${phone.imageFileName}`}
            style={{ width: "200px" }}
          />
          <Card.Body>
            <Card.Title>{phone.name}</Card.Title>
            <Card.Title>{phone.manufacturer}</Card.Title>
            <Card.Text>{phone.price}€</Card.Text>
            <Card.Text>{phone.description}</Card.Text>
            <Card.Text>
              <h3>Specs</h3>
              <p>Color: {phone.color}</p>
              <p>Screen: {phone.screen}</p>
              <p>Processor: {phone.processor}</p>
              <p>RAM: {phone.ram}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default PhoneDetails;
