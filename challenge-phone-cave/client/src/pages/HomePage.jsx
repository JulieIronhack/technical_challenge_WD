import "../App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import PhonesList from "../components/Loading/PhonesList";
import PhoneDetails from "../components/Loading/PhoneDetails";

const API_URL = "http://localhost:5005";

function HomePage() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/phones`)
      .then((res) => setPhones(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <PhonesList phones={phones} />
          <Routes>
            <Route
              path="/phones/:id"
              element={<PhoneDetails phones={phones} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
