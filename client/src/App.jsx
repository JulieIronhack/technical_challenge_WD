import "./App.css";
import { Routes, Route } from "react-router-dom";
import PhoneListPage from "./pages/PhoneListPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";

function App() {
  return (
    <div className="App">
      <PhoneListPage />

      <Routes>
        <Route path="/:phoneId" element={<PhoneDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
