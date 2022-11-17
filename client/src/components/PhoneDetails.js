import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const url = "http://localhost:5005";

function PhoneDetails() {
  const params = useParams();
  const [selectedPhoneDetails, setSelectedPhoneDetails] = useState({});

  const getPhoneDetails = () => {
    axios
      .get(`${url}/api/phones/${params.id}`, {})
      .then((response) => {
        setSelectedPhoneDetails(response.data);
        console.log(response.data);
      })
      .catch((error) =>
        console.log("error getting selected phone details", error)
      );
  };

  useEffect(() => {
    getPhoneDetails();
  }, []);

  return (
    <div>
      <div>
        <img src={require(`../images/${selectedPhoneDetails.imageFileName}`)} />
        <h5>Model {selectedPhoneDetails.name}</h5>
        <h5>Manufacturer {selectedPhoneDetails.manufacturer}</h5>
        <h5>Description {selectedPhoneDetails.description}</h5>
        <h5>Color {selectedPhoneDetails.color}</h5>
        <h5>Price {selectedPhoneDetails.price}</h5>
        <h5>Screen {selectedPhoneDetails.screen}</h5>
        <h5>Processor {selectedPhoneDetails.processor}</h5>
        <h5>RAM {selectedPhoneDetails.ram}</h5>
      </div>
    </div>
  );
}

export default PhoneDetails;
