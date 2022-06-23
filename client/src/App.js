import React from "react";
import { Routes, Route } from "react-router-dom";
import Phones from "./pages/Phones";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Phones />}></Route>
    </Routes>
  );
}

export default App;
