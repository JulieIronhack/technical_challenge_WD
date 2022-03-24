import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhoneDetails from "./pages/PhoneDetails"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage />} /> 
        <Route path="/Phone/:PhoneId" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
