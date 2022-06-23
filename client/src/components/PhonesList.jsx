import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Spinner, Card } from "react-bootstrap";
import axios from "axios";

function PhonesList() {
  const navigate = useNavigate();
  const [listPhones, setListPhones] = useState(null);

  useEffect(() => {
    getAllPhones();
  }, []);

  const getAllPhones = async () => {
    try {
      const allPhones = await axios.get("http://localhost:5005/api/phones"); // Call axios for get list all phones
      setListPhones(allPhones.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (!listPhones) {
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
      <h1>PhonesList</h1>
      <div className="phoneList">
        {listPhones.map((eachPhone) => {
          return (
            <Card className="foodDet" border="dark" style={{ width: "12rem" }}>
              <Card.Header>
                <Link className="list-client" to={`/phones/${eachPhone._id}`}>
                  {eachPhone.name}
                </Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Link className="list-client" to={`/phones/${eachPhone._id}`}>
                    <img
                      src={eachPhone.imageFileName}
                      width={"70px"}
                      alt={eachPhone.name}
                    />
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default PhonesList;
