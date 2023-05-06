import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Phone from "../components/Phone";
import { Link } from "react-router-dom";
// import imagesFile from "../images";

const API_URL = "http://localhost:5005";

function HomePage() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const [images, setImages] = useState(imagesFile)

  const getPhones = () => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => {
        setPhones(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <div>
      <h1>Our Phones</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        phones && (
          <div className="phonesWrapper">
            {phones.map((onePhone) => {
              return (
                <div key={onePhone.id} className="phoneContainer">
                  <div className="phoneDiv">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/${onePhone.imageFileName}`
                      }
                      alt={onePhone.name}
                      className="image"
                    />
                    <div className="phoneText">
                      <p className="name">{onePhone.name}</p>
                      <p className="manufacturer">{onePhone.manufacturer}</p>
                      <p className="price">{onePhone.price},00 €</p>
                      <Link onClick={() => setSelectedPhone(onePhone._id)} className="phoneName">
                        More +
                      </Link>
                    </div>
                  </div>
                  {onePhone._id === selectedPhone && (
                    <Phone
                      className="phoneDetails"
                      id={onePhone._id}
                      setSelectedPhone={setSelectedPhone}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

export default HomePage;
