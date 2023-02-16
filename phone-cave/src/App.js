import './App.css';
import phonesArr from "./data/phones.json"
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';
import axios from 'axios';

function App() {

  const [phones, setPhones] = useState (phonesArr)

  useEffect(() => {
    axios
      .get(phonesArr)
      .then((result) => {
        setPhones(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/phones' element={<PhoneList phones={phones} />} />
        <Route path='/phones/:phoneId' element={<PhoneDetails phones={phones} />} />
      </Routes>

    </div>
  );
}

export default App;
