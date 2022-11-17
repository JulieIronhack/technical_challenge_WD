import "./HomePage.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import PhoneDetails from '../../components/PhoneDetails';
import PhonesList from '../../components/PhonesList';
import { Routes, Route } from 'react-router-dom';

const API_URL = "http://localhost:5005";


function HomePage() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/phones`)
      .then((res) => setPhones(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <PhonesList phones={phones} />
      <Routes>
        <Route
          path="/api/phones/:id"
          element={<PhoneDetails phones={phones} />}
          />
      </Routes>
    </div>
  );
}

export default HomePage;