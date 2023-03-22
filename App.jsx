import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllPhones from './components/AllPhones'
import SinglePhone from './components/SinglePhone'
import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [phones, setPhones] = useState([])
  const fetchData = async () => {
    const response = await axios.get('./dataX/phones.json');
    setPhones(response.data);
  }
  useEffect(() => {
    fetchData();
  }, [])
  useEffect(() => {
    console.log(phones)
  }, [phones])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<AllPhones phones={phones}/>} />
        <Route path='/phones/:phoneId' element={<SinglePhone phones={phones} />} />
      </Routes>
    </div>
  )
}
export default App