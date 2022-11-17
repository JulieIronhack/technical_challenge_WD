import './App.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import PhoneListPage  from "./pages/PhoneListPage";
import PhoneDetailsPage  from "./pages/PhoneDetailsPage";


function App() {

  const [phones, setPhones] = useState([]);

  const getAllPhones = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/phones`)
      .then((response) => setPhones(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="App">
      <Routes>
      <Route
          path='/phones'
          element={<PhoneListPage phonesList= {phones}/>}
        />
        <Route path='/phones/:phoneId' element={<PhoneDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
