import './App.css';
import React from 'react';

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
