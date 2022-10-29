import React, { useEffect, useState } from "react";
import PhoneList from "../components/PhoneList";
import * as phoneService from "../services/phone-services";

function PhoneListScreen() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    phoneService
      .getPhones()
      .then((phones) => setPhones(phones))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {phones?.map((phone) => (
          <div className="col- m-3" key={phone.id}>
            <PhoneList {...phone} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneListScreen;
