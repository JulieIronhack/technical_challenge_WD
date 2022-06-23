import React from "react";
import { Routes, Route } from "react-router-dom";
import Phones from "./pages/Phones";
import PhoneDetails from "./pages/PhoneDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Phones />}></Route>
      <Route path="/:id" element={<PhoneDetails />}></Route>
    </Routes>
  );
}

export default App;
