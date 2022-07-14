import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhoneDetail from "./components/PhoneDetail";

function App() {
  return (
    <div className="App">
      <HomePage>
        <Routes>
          <Route path="/:phoneId" element={<PhoneDetail />}></Route>
        </Routes>
      </HomePage>
    </div>
  );
}

export default App;
