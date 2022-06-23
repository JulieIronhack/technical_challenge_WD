import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Spinner } from "react-bootstrap";

import axios from "axios";

function PhoneDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [phoneDetails, setPhoneDetails] = useState("");

  useEffect(() => {
    getPhoneDetails();
  }, []);

  const getPhoneDetails = async () => {
    try {
      const phoneDetails = await axios.get(
        `http://localhost:5005/api/phones/${id}` //Call axios for get details by id
      );
      setPhoneDetails(phoneDetails.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!phoneDetails) {
    return (
      <Button variant="success" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }

  return (
    <div>
      <p>
        PhoneDetails:
        <strong> {phoneDetails.name} </strong>
      </p>
      <img src={phoneDetails.imageFileName} alt="" />
      <div className="card-phone">
        <Card className="foodDet" border="dark" style={{ width: "12rem" }}>
          <Card.Header>{phoneDetails.name}</Card.Header>
          <Card.Body>
            <Card.Text>
              <img
                src={phoneDetails.imageFileName}
                width={"70px"}
                alt={phoneDetails.name}
              />
            </Card.Text>
            <Card.Text>
              <p>Processor:</p>
              {phoneDetails.processor}
            </Card.Text>
            <Card.Text>
              <p>Ram:</p>
              {phoneDetails.ram}
            </Card.Text>
          </Card.Body>
        </Card>

        <Link className="link-btn" to={"/phones"}>
          <Button variant="success" to={"/phones"}>
            Volver
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PhoneDetails;
