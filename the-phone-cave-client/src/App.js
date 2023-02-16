import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PhoneDetails from "./components/PhoneDetails";
import Homepage from "./pages/Homepage";
import PhoneList from "./pages/PhoneList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/phones" element={<PhoneList />} />
        <Route path="/phones/:phoneId" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
