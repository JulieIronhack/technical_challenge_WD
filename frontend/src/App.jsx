import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import PhoneList from "./components/PhoneList";
import { Routes, Route } from "react-router-dom";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    async function fetchPhones() {
      const response = await axios.get("http://localhost:5005/phones");
      console.log(response.data);
      setPhones(response.data);
    }
    fetchPhones();
  }, []);
  return (
    <div className="App">
      <PhoneList phones={phones} />
      <Routes>
        <Route path="/:id" element={<PhoneDetails phones={phones} />} />
      </Routes>
    </div>
  );
}

export default App;
