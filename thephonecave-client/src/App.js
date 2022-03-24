import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Phoneslist from "./components/Phoneslist";
import PhoneDetails from "./components/PhoneDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [telephones, setTelephones] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5005/telephones`)
      .then((response) => {
        console.log(response.data)
        setTelephones(response.data);
      })
      .catch((err) => console.log("error getting telephones from api", err));
  }, []);

  return (
    <div className="App">
    <h1>The Phone Cave</h1>
      <Phoneslist telephones={telephones}/>


      <Routes>
        <Route path="/telephones" element={<Phoneslist telephones={telephones} /> }/>
        <Route path="/telephones/:phoneId" element={<PhoneDetails telephones={telephones}/>}/>
      </Routes>
    </div>
  );
}

export default App;
