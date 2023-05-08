import axios from "axios";
import { useEffect, useState } from "react";

export default function PhoneDetails(props) {
  const [phone, setPhone] = useState(null);

  const getOnePhone = () => {
    axios
      .get(`http://localhost:5005/api/phones/${props.id}`)
      .then((response) => {
        setPhone(response.data[0]);
        console.log(response.data);
      })
      .catch((error) => console.log("Error: ", error));
  };

  useEffect(() => {
    getOnePhone();
  }, [props.id]);
  return (
    <section className="phone-details">
      {phone && (
        <>
          <h2>{phone && phone.name}</h2>
          <p>
            By <span className="text-red">{phone && phone.manufacturer}</span>
          </p>
          <p>{phone.description}</p>
          <p>Price: {phone.price}$</p>
          <h3>Technical features</h3>
          <p>Color: {phone.color}</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>Ram: {phone.ram}</p>
        </>
      )}
    </section>
  );
}
