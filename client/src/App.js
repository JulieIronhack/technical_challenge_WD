import "./App.css";
import { Routes, Route } from "react-router-dom";
import PhoneList from "./pages/PhoneList";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  return (
    <div className="App">
      <h1>Phones</h1>
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
