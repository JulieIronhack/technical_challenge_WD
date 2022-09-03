import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllPhones from "./pages/AllPhones";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<AllPhones />} />
      </Routes>
    </>
  );
}

export default App;
