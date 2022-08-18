import { useEffect, useState } from "react";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import { useParams } from "react-router-dom";

export default function PhoneDetails() {
  const [phone, setPhone] = useState(null);

  const { phoneId } = useParams();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/phones/" + phoneId)
      .then((response) => {
        setPhone(response.data);
      })
      .catch((error) => console.log(error));
  }, [phoneId]);

  return (
    <section className="PhoneDetails">
      {!phone ? (
        <BounceLoader />
      ) : (
        <>
          <h2>{phone.name}</h2>
          <h3>{phone.manufacturer}</h3>
          <p>{phone.description}</p>
          <img
            src={require(`../assets/images/${phone.imageFileName}`)}
            alt=""
          />
          <p>Color: {phone.color}</p>
          <p>Scrren: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>RAM: {phone.ram}</p>
          <p>Price: {phone.price}</p>
        </>
      )}
    </section>
  );
}
