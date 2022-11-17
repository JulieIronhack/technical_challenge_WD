import { Routes, Route } from "react-router-dom";
import "./App.css";
import PhonesListPage from "./pages/PhonesListPage";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phones" element={<PhonesListPage />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
