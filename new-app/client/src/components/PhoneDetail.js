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
    } catch (error) {
      console.log(error);
    }
  }, [params]);
  console.log("Let see data:", data);
  return (
    <div>
      <img width="50%" src={data.img} alt={data.name} />
      <h2>Phone Detail</h2>
      <h3>Name:</h3>
      <p>{data.name}</p>
      <h3>Manufacturer:</h3>
      <p>{data.manufacturer}</p>
      <h3>Description:</h3>
      <p>{data.description}</p>
      <h3>Color:</h3>
      <p>{data.color}</p>
      <h3>Price:</h3>
      <p>${data.price}</p>
      <h3>Screen:</h3>
      <p>{data.screen}</p>
      <h3>Processor:</h3>
      <p>{data.processor}</p>
      <h3>Ram:</h3>
      <p>{data.ram}</p>
    </div>
  );
}
