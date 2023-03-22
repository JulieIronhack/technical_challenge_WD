import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpinnerComponent from "./Spinner";
import Card from "react-bootstrap/Card";

function PhoneDetails() {
  const [phone, setPhone] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    async function fetchPhone() {
      const response = await axios.get(`http://localhost:5005/phones/${id}`);
      setPhone(response.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    fetchPhone();
  }, [id]);
  return (
    <div className="details-ctn">
      {isLoading ? (
        <SpinnerComponent />
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={`../assets/images/${phone.imageFileName}`}
          />
          <Card.Body>
            <Card.Title>{phone.name}</Card.Title>
            <Card.Text>
              <h5>{phone.manufacturer}</h5>
              <h6>{phone.description}</h6>
              <Card.Body className="text-start">
                <p>Color: {phone.color}</p>
                <p>Price: {phone.price}</p>
                <p>Screen: {phone.screen}</p>
                <p>Processor: {phone.processor}</p>
                <p>RAM: {phone.ram}</p>
              </Card.Body>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default PhoneDetails;
