import './App.css';
import React, { useEffect, useState } from 'react';
import phoneService from './services/phone.service';
import PhonesList from './components/PhonesList';
import PhoneDetails from './components/PhoneDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [phonesData, setPhonesData] = useState([]);

  useEffect(() => {
    const getPhonesData = async () => {
      try {
        const res = await phoneService.getAll();
        setPhonesData(res.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    getPhonesData();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to The Phone Cave</h1>
      <div className='phones-content'>
        <PhonesList phones={phonesData}/>
        <Routes>
          <Route path="/:id" element={<PhoneDetails phones={phonesData}/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
