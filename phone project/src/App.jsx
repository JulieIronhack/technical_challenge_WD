import React, { useState, useEffect } from "react";
import './App.css'
import axios from "axios";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

function App() {
  const [phones, setPhones] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5005/phones");
    setPhones(response.data);
    console.log(response.data)
    setIsLoading(false)
    console.log(isLoading)
  };
  
  useEffect(() => {   
    fetchData();   
  }, []);

  return (
    <div className="App">    
     <Routes>
     <Route path="/phones" element={<Landing />} />
     <Route path="/phones/:id" element={<Details />} />
     </Routes>
     <div className="fadeOut"></div>
    </div>
  )
}

export default App
