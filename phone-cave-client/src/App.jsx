import './App.css'
import axios from 'axios';
import PhoneDetails from './components/PhoneDetails';
import HomePage from './components/HomePage';
import PhoneList from './components/PhoneList';
import { useState, useEffect } from 'react';
import { Routes, Route, useRoutes } from "react-router-dom";


function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetchPhones();
  }, []);

  const fetchPhones = () => {
    axios.get("http://localhost:5005/api/phones")
      .then(response => {
        setPhones(response.data);
      })
      .catch(e => console.log("error fetching phones from API", e));
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<PhoneList phones={phones} />} />
        <Route path='/phones/:phoneId' element={<PhoneDetails />} />
      </Routes>
    </div>
  )
}

export default App
