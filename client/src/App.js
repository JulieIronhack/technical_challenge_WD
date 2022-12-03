import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage/PhoneDetailsPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/all-phones" element={<HomePage />} />
        <Route path="/phone/:id" element={<PhoneDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
