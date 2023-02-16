import './App.css';
import phones from "./data/phones.json"
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';

function App() {

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
