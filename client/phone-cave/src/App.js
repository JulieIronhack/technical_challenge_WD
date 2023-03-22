
import './App.css';
import { Routes, Route } from "react-router-dom";
import AllPhonesPage from './pages/AllPhonesPage';
import PhoneDetails from './components/PhoneDetails';
//import phoneData from './../../phones.json';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/phones" element={<AllPhonesPage/>} />
      <Route path="/phones/:id" element={<PhoneDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
