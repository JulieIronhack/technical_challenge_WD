import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Phone = () => {
  const [phones, setPhones] = useState();

  useEffect(() => {
    axios.get("../../data/phones.json").then((response) => {
      setPhones(response);
      console.log(response);
    });
  }, []);

  return (
    <div>
      <h1>phone detail </h1>
      <div>
        {phones.map((phone) => {
          return (
            <li key={phone.id}>
              <p>{phone.name}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Phone;
