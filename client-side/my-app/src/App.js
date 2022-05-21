import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import DetailsPage from "./pages/DetailsPage";
import "./Loader.css";

function App() {
  const [phones, setPhones] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [phoneDetails, setPhoneDetails] = useState();

  const fetchPhones = () => {
    axios
      .get("http://localhost:3000/telephones")
      .then((phones) => {
        //show spinner
        setTimeout(() => setPhones(phones.data), 2000);
      })
      .catch((e) => console.log("Error getting phones from API  ", e));
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  const handleButton = (phone) => {
    setPhoneDetails();
    setPhoneDetails(phone);
    setShowDetails(true);
  };

  return (
    <div className="App">
      <div className="loader-container">
        {!phones && <div className="loader"></div>}
      </div>
      <div className="phone-details">
        {showDetails && <DetailsPage phone={phoneDetails} />}
      </div>
      <div className="phone-list">
        {phones &&
          phones.map((phone) => {
            return (
              <div key={phone.id}>
                <div className="phone">
                  <div className="img-container">
                    <img
                      src={require(`./images/${phone.imageFileName}`)}
                      alt="phone"
                    />
                  </div>
                  <div className="phone-text">
                    <div className="name">{phone.name}</div>
                    <div className="man">{phone.manufacturer}</div>
                    <div className="price"> € {phone.price},-</div>
                    <button
                      onClick={() => {
                        handleButton(phone);
                      }}
                    >
                      Show more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
