import axios from "axios";

import { useEffect, useState } from "react";

import { images } from "./assets/index";
import "./App.css";

function App() {
  const [phonesData, setPhonesData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5005/phones").then((res) => {
      const data = res.data;

      setPhonesData(data);
    });
  }, []);

  const handleSeeMore = async (phoneId) => {
    setShowModal(true);

    setShowLoadingSpinner(true);

    const request = await axios.get(`http://localhost:5005/phones/${phoneId}`);

    const phoneDetails = request.data;

    setTimeout(() => {
      setShowLoadingSpinner(false);
      setPhoneDetails(phoneDetails);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main className="app">
      <header className="header">
        <h1>The Phone Cave</h1>
      </header>
      <section className="phonesList">
        {phonesData &&
          phonesData.map((phone) => {
            return (
              <div key={phone.id} className="phonesList__card">
                <img
                  className="phonesList__card__img"
                  src={images[phone.imageFileName]}
                  alt={`${phone.name}`}
                />
                <h2>{phone.name}</h2>
                <p>{phone.price}€</p>
                <button onClick={() => handleSeeMore(phone.id)}>
                  See more
                </button>
              </div>
            );
          })}
      </section>
      {showModal && (
        <div className="phoneDetailsModal">
          {showLoadingSpinner && (
            <div className="phoneDetailsModal__loadingSpinner"></div>
          )}

          {!showLoadingSpinner && (
            <>
              <img
                className="phoneDetailsModal__img"
                src={images[phoneDetails.imageFileName]}
                alt={`${phoneDetails.name}`}
              />
              <h2>{phoneDetails.name}</h2>
              <small>{phoneDetails.manufacturer}</small>
              <p>{phoneDetails.description}</p>
              <p>Price: {phoneDetails.price}€</p>

              <h3>Technical details</h3>
              <p>Color: {phoneDetails.color}</p>
              <p>Screen: {phoneDetails.screen}</p>
              <p>Processor: {phoneDetails.processor}</p>
              <p>RAM: {phoneDetails.ram}</p>

              <button onClick={handleCloseModal}>Close</button>
            </>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
