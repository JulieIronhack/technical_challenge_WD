import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const url = "http://localhost:3000/data/phones";

const PhonePage = () => {
  const [phones, setPhones] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setPhones(result);
        console.log(result);
      }, []);

    return (
      <div>
        <h1>phone detail </h1>
        <div>
          <ul>
            {phones.map((phones) => (
              <div>
                <p>{phones.name}</p>
                <p>{phones.description}</p>
              </div>
            ))}
            ;
          </ul>
        </div>
      </div>
    );
  });
};
export default PhonePage;
