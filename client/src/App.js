import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import PhoneList from './pages/PhoneList'
import PhoneDetails from './components/PhoneDetails.jsx';
import React from 'react';
import NotFound from './components/NotFound.jsx';
import { useState, useEffect } from "react";
import MyNavbar from './components/MyNavbar';
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner';
import Error from './pages/Error.jsx'






function App() {
  const [phonesList, setPhonesList] = useState([]) // for holding phones data fetched from Server
  const [fetchingPhones, setFetchingPhones] = useState(true) // useful for loading spinner feature


  const navigate = useNavigate() // navigation hook


  // useEffect(() => {
  //   getPhonesList()
  // }, []) 

  // const getPhonesList = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/phones`)

  //     // setTimeout to replicate a small 0.5 sec delay for the spinner
  //     setTimeout(() => {
  //       setPhonesList(response.data)
  //       setFetchingPhones(false)
  //     }, 500)
  //   } catch (err) {
  //     navigate("/error")
  //   }
  // }

  // if data is still being fetched, show a spinner
  // if (fetchingPhones) {
  //   return (
  //     <div className="App">
  //       <Spinner animation="border" variant="info" />
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <h1>Shop Phones</h1>
      <MyNavbar />
      <div className="routes">
        <Routes>
          <Route path='/phones' element={< PhoneList />} />
          <Route path='/phones/:phoneId' element={< PhoneDetails />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
