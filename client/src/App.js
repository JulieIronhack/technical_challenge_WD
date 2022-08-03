import "./App.css";
import { Route, Routes } from "react-router-dom";

import AllPhonesPage from "./pages/AllPhonesPage";
import PhoneCard from "./components/PhoneCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AllPhonesPage />} />
        <Route exact path="/:id" element={<PhoneCard />} />
      </Routes>
    </div>
  );
}

export default App;
