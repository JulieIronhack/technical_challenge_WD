import "../App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import PhonesList from "../components/PhonesList";
import PhoneDetails from "../components/PhoneDetails";
import Navbar from "../components/Navbar";
import LoadingComponent from "../components/LoadingComponent";

const API_URL = "http://localhost:5005";

function HomePage() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/phones`)
      .then((res) => {
        setPhones(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Navbar />
          <div className="container">
            <div className="row">
              <Routes>
                <Route
                  path="/phones/:id"
                  element={<PhoneDetails phones={phones} />}
                />
              </Routes>
              <PhonesList phones={phones} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
