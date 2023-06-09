import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PhoneDetailsPage = () => {
  const [phone, setPhone] = useState(null);
  const { phoneId } = useParams();

  const getPhone = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/phones/${phoneId}`
      );
      const onePhone = await response.data;
      setPhone(onePhone);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhone();
  }, [phoneId]);

  return (
    <div className="phone-detail">
      {phone && (
        <>
          <div className="detail-name">
            <img
              src={`/src/assets/images/${phone.imageFileName}`}
              alt={phone.name}
            />
            <h1>{phone.name}</h1>{" "}
            <p>
              <b>Manufacturer : </b>
              {phone.manufacturer}
            </p>
          </div>
          <div className="detail">
            <p>
              <b>Color : </b>
              {phone.color}
            </p>
            <p>
              <b>Screen : </b>
              {phone.screen}
            </p>
            <p>
              <b>Processor : </b>
              {phone.processor}
            </p>
            <p>
              <b>Ram : </b> {phone.ram}
            </p>
          </div>
          <hr />
          <h4>Description : </h4>
          <p>{phone.description}</p>
          <h3>
            <b>Price : </b>
            {phone.price},-
          </h3>
        </>
      )}
    </div>
  );
};

export default PhoneDetailsPage;
