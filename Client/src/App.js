import './App.css';
import { Route, Routes } from "react-router-dom";
import Phones from './pages/Phones.js';
import PhoneDetails from './components/PhoneDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/phones" element={<Phones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
