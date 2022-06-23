import React, { useEffect, useState } from "react";
import { getPhonesService } from "../services/phone.services";
import Phone from "./Phone";

function Phones() {
  const [phoneList, setPhoneList] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [selectedPhone, setSelectedPhone] = useState(null);

  useEffect(() => {
    getPhones();
  }, []);

  const getPhones = async () => {
    const phones = await getPhonesService();
    setPhoneList(phones.data);
    setFetching(false);
  };

  const handlePhoneSelection = (id) => {
    //emergency fix. it is not sending the 0 unless it's a string
    setSelectedPhone(''+id);
  };

  if (fetching) return <p>...Loading</p>;
  else console.log(phoneList);

  return (
    <div className='row'>
      <div className="col-md">
      <ul className="list-group">
        {phoneList &&
          phoneList.map((element) => {
            const {
              id,
              name,
              manufacturer,
              description,
              color,
              price,
              imageFileName,
              screen,
              processor,
              ram,
            } = element;
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
                key={id}
                onClick={() => handlePhoneSelection(id)}
              >
                <div class="ms-2 me-auto">
                  <div class="fw-bold text-left">Name: {name}</div>
                  <div>Manufacturer: {manufacturer}</div>
                </div>
              </li>
            );
          })}
      </ul>
      </div>
      <div className="col-md">
      {selectedPhone && <Phone id={selectedPhone} />}
      </div>
    </div>
  );
}

export default Phones;
