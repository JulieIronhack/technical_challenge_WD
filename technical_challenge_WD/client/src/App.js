import './App.css';
import Navbar from "./components/Navbar/Navbar";

import PhoneListPage from "./pages/PhoneList";
import PhoneDetailsPage from "./pages/PhoneDetails"
import AboutPage from './pages/About';
import NotFoundPage from "./pages/NotFoundPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
      <Route exact path="/" element={<PhoneListPage />} />
      <Route exact path="/phones" element={<PhoneListPage />} />
      <Route exact path="/phones/:phoneId" element={<PhoneDetailsPage />} />
      <Route exact path="/about" element={<AboutPage/>} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
