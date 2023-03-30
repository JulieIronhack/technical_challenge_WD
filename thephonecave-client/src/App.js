import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import PhonesList from "./pages/PhonesList";
import SinglePhone from "./pages/SinglePhone";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/phones" replace={true} />} />
        <Route path="/phones" element={<PhonesList />} />
        <Route path="/phones/:id" element={<SinglePhone />} />
      </Routes>
    </div>
  );
}

export default App;
