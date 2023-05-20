import { useEffect, useState } from "react";
import phoneService from "../../src/services/phoneService";
import PhoneItem from "./PhoneItem";

function PhonesList() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    phoneService
      .list()
      .then((res) => setPhones(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Phones</h1>
      {phones.map((phone) => {
        return (
          <div key={phone.id}>
            <PhoneItem
              name={phone.name}
              imageFileName={phone.imageFileName}
              id={phone.id}
              description={phone.description}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PhonesList;
