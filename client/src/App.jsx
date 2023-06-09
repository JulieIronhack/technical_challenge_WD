import React, { useState, useEffect } from 'react';
import Homepage from './pages/homepage';

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Detailspage from './pages/Detailspage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/phones/:id' element={<Detailspage />} />
    </Routes>
  )
}

export default App
