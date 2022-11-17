import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function PhoneDetailsPage(props) {
  const [phone, setPhone] = useState(null);
  const { phoneId } = useParams();

  const getPhone = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/phones/${phoneId}`)
      .then((response) => {
        const onePhone = response.data;
        setPhone(onePhone);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getPhone();
  }, []);

  return (
    <>
      {phone && (
        <>
          <div
            className="card mb-3"
            style={{ maxWidth: "1000px", margin: "10rem auto" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`../images/${phone.imageFileName}`}
                  className="img-fluid rounded-start"
                  alt={phone.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{phone.name}</h3>
                  <div className="d-flex flex-column align-items-start">
                    <p className="card-text">{phone.description}</p>
                    <p className="card-text">Color: {phone.color}</p>
                    <p className="card-text">Price: {phone.price}$</p>
                    <p className="card-text">Screen: {phone.screen}</p>
                    <p className="card-text">Processor: {phone.processor}</p>
                    <p className="card-text">Ram: {phone.ram}</p>
                  </div>
                  <Button
                    className="button"
                    as={Link}
                    to={`/phones`}
                    variant="primary"
                    size="sm"
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PhoneDetailsPage;
