import PhonesList from "./phones/PhonesList";
import "./App.css";
import { Route, Routes } from "react-router";
import PhoneDetail from "./phones/PhoneDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhonesList />} />
      <Route path="/:phoneId" element={<PhoneDetail />} />
    </Routes>
  );
}

export default App;
