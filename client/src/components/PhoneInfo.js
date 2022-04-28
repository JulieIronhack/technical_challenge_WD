import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../consts";

export function PhoneInfo() {
  const [telephones, setTelephonesState] = useState();

  const getAllTelephones = () => {
    axios
      .get(`${API_BASE_URL}/telephones`)
      .then((response) => {
        setTelephonesState(response.data.telephones);
        // console.log(response.data.telephones);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllTelephones();
  }, []);

  return (
    <>
      <h2>We are in the home page</h2>
      <div className="Product__full__container_2">
        {telephones ? (
          telephones.map((phones) => {
            return (
              <div className="telephones__li-container" key={phones.id}>
                <h3>{phones.name}</h3>
              </div>
            );
          })
        ) : (
          <p> there is no data here, Sorry 😭</p>
        )}
      </div>
    </>
  );
}
