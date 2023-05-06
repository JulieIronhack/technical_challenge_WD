import AllPhones from "./pages/AllPhones/AllPhones";
import PhoneDetails from "./pages/PhoneDetails/PhoneDetails";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phones" element={<AllPhones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
