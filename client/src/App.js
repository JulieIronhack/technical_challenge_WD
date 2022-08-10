import './App.css';
import { Routes, Route } from "react-router-dom";
import AllPhones from './Pages/AllPhones';
import PhoneDetails from './Pages/PhoneDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPhones />}/>
        <Route path="/phones" element={<AllPhones />}/>
        <Route path="/phones/:phoneId" element={<PhoneDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
