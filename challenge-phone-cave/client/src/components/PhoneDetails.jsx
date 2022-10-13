import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";

const API_URL = "http://localhost:5005";

const PhoneDetails = (props) => {
  const { phones } = props;
  const { id } = useParams();
  const [phoneInfo, setPhoneInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/phones/${id}`)
      .then((res) => {
        setPhoneInfo(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, [id, phones]);

  return (
    <div className="col-12 col-md-7">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {phoneInfo && (
            <div>
              <img
                src={`/images/${phoneInfo?.imageFileName}`}
                alt={phoneInfo?.name}
                height="200px"
              />
            </div>
          )}
          <h1>{phoneInfo?.name}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Manufacturer</td>
                <td>{phoneInfo?.manufacturer}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>${phoneInfo?.price}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{phoneInfo?.description}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default PhoneDetails;
