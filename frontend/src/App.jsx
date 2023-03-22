import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import PhoneCard from "./components/PhoneCard";
import PhoneDetails from "./components/PhoneDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  const [phones, setPhones] = useState([]);

  async function allPhones() {
    try {
      const response = await axios.get("http://localhost:5005/phones");
      setPhones(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    allPhones();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhoneCard phones={phones} />}/>
        <Route path="/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
