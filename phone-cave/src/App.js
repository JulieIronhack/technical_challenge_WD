import './App.css';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllPhones from './components/AllPhones';
import PhoneDetails from './components/PhoneDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllPhones />
      <Routes>
        <Route path="/phones/:phoneId" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
