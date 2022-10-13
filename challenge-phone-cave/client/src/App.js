import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App w-100">
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
