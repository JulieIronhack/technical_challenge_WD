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
                <div className="phonesList__card__container">
                  <h2 className="phonesList__card__header">{phone.name}</h2>
                  <p className="phonesList__card__price">{phone.price}€</p>
                  <button
                    className="phonesList__card__btn"
                    onClick={() => handleSeeMore(phone.id)}
                  >
                    See more
                  </button>
                </div>
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
              <h2 className="phoneDetailsModal__header">{phoneDetails.name}</h2>
              <small className="phoneDetailsModal__manufacturer">
                {phoneDetails.manufacturer}
              </small>
              <p className="phoneDetailsModal__description">
                {phoneDetails.description}
              </p>
              <p className="phoneDetailsModal__price">
                Price: {phoneDetails.price}€
              </p>

              <div className="phoneDetailsModal__technicalDetails">
                <h3 className="phoneDetailsModal__technicalDetails__header">
                  Technical details
                </h3>
                <p>Color: {phoneDetails.color}</p>
                <p>Screen: {phoneDetails.screen}</p>
                <p>Processor: {phoneDetails.processor}</p>
                <p>RAM: {phoneDetails.ram}</p>
              </div>

              <button
                className="phoneDetailsModal__closeBtn"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
