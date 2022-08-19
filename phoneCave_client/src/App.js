import { Route, Routes } from "react-router-dom";
import PhonePage from "./pages/PhonePage";
import "./App.css";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Phone Cave</h1>
      </header>
      <div className="Main">
        <PhonePage />
        <Routes>
          <Route path="/:phoneId" element={<PhoneDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
