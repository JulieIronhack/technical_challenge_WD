import { useEffect, useState } from "react";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import { NavLink } from "react-router-dom";

export default function PhonePage() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="Phones">
      {!phones ? (
        <BounceLoader />
      ) : (
        <div className="PhoneList">
          {phones.map((phone) => {
            return (
              <NavLink
                className="PhoneLink"
                key={phone._id}
                to={`${phone._id}`}
              >
                <span className="Brand">{phone.manufacturer}</span>
                <span>{phone.name}</span>
              </NavLink>
            );
          })}
        </div>
      )}

    </section>
  );
}
