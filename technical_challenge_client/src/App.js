
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Phones from "./components/Phones";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />

      </Routes>
    </div>
  );
}

export default App;
