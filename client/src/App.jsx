import axios from "axios";

import { useEffect, useState } from "react";

import { images } from "./assets/index";
import "./App.css";
import { Modal } from "./components/Modal";

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
          <Modal
            showLoadingSpinner={showLoadingSpinner}
            phoneDetails={phoneDetails}
            onCloseModal={handleCloseModal}
          />
        </div>
      )}
    </main>
  );
}

export default App;
