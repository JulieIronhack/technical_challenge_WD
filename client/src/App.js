import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import PhoneDetails from "./pages/PhoneDetails";
function App() {

  return (
    <div className="App">

       <Navbar />
       <div className="container layout">
       <HomePage />
       
      <Routes>
      <Route path="/:id" element={<PhoneDetails />} />
      </Routes>
    </div>

  </div>  
  );
}

export default App;
