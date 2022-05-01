import React from "react";
import { API_BASE_URL } from "../consts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function PhoneDetail() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function fetchPhone() {
        const { data } = await axios.get(
          API_BASE_URL + "/telephones/" + params.id
        );
        setData(data);
      }
      fetchPhone();
    } catch (error) {}
  }, [params]);
  console.log("Let see data:", data);
  return (
    <div>
      <h2>Phone Detail</h2>
      <h5>Name:</h5>
      <p>{data.name}</p>
      <h5>Manufacturer:</h5>
      <p>{data.manufacturer}</p>
      <h5>Description:</h5>
      <p>{data.description}</p>
      <h5>Color:</h5>
      <p>{data.color}</p>
      <h5>Price:</h5>
      <p>{data.price}</p>
      <h5>Screen:</h5>
      <p>{data.screen}</p>
      <h5>Processor:</h5>
      <p>{data.processor}</p>
      <h5>Ram:</h5>
      <p>{data.ram}</p>
    </div>
  );
}
