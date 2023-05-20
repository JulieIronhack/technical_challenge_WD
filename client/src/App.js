import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import GalaxyS7 from "./assets/images/Galaxy_S7.png";
import Honor10 from "./assets/images/Honor_10.png";
import IPhone7 from "./assets/images/IPhone_7.png";
import MotoG6 from "./assets/images/Moto_G6.png";
import Nokia71 from "./assets/images/Nokia_7.1.jpg";
import P10Lite from "./assets/images/P10_Lite.jpg";
import XiaomiA2 from "./assets/images/Xiaomi_MI_A2.jpeg";
import ZenPhone5 from "./assets/images/ZenPhone_5.jpg";

const App = () => {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/phones")
      .then((response) => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handlePhoneClick = (phone) => {
    setSelectedPhone(phone);
  };

  const getImageSource = (imageFileName) => {
    switch (imageFileName) {
      case "Galaxy_S7.png":
        return GalaxyS7;
      case "Honor_10.png":
        return Honor10;
      case "IPhone_7.png":
        return IPhone7;
      case "Moto_G6.png":
        return MotoG6;
      case "Nokia_7.1.jpg":
        return Nokia71;
      case "P10_Lite.jpg":
        return P10Lite;
      case "Xiaomi_MI_A2.jpeg":
        return XiaomiA2;
      case "ZenPhone_5.jpg":
        return ZenPhone5;
      default:
        return "";
    }
  };

  return (
    <div className="container">
      <h1>Phone Catalog</h1>
      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div>
          <ul className="phone-list">
            {phones.map((phone) => (
              <li
                key={phone.id}
                className={`phone-item ${
                  selectedPhone === phone ? "selected" : ""
                }`}
                onClick={() => handlePhoneClick(phone)}
              >
                {phone.name}
              </li>
            ))}
          </ul>
          {selectedPhone && (
            <div className={`phone-details ${selectedPhone ? "show" : ""}`}>
              <h2>{selectedPhone.name}</h2>
              <img
                src={getImageSource(selectedPhone.imageFileName)}
                alt={selectedPhone.name}
                className={selectedPhone ? "show" : "hide"}
                key={selectedPhone.id}
              />
              <p>{selectedPhone.description}</p>
              <p>
                <strong>Manufacturer:</strong> {selectedPhone.manufacturer}
              </p>
              <p>
                <strong>Color:</strong> {selectedPhone.color}
              </p>
              <p>
                <strong>Price:</strong> ${selectedPhone.price}
              </p>
              <p>
                <strong>Screen:</strong> {selectedPhone.screen}
              </p>
              <p>
                <strong>Processor:</strong> {selectedPhone.processor}
              </p>
              <p>
                <strong>RAM:</strong> {selectedPhone.ram} GB
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
