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
      <h1 className="text-4xl text-center mt-10 text-red-600/75">
        The Phone Cave
      </h1>
      {phones.map((phone) => {
        return (
          <div
            key={phone.id}
            className="flex justify-center content-center mt-40 flex-wrap "
          >
            <PhoneItem
              name={phone.name}
              imageFileName={phone.imageFileName}
              id={phone.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PhonesList;
