import './App.css';
import { Routes, Route } from "react-router-dom";
import PhoneList from './pages/PhoneList'
import PhoneDetails from './components/PhoneDetails.jsx';

function App() {
  return (
    <div className="App">
      <h1>Phones</h1>
      <Routes>
        <Route path='/phones' element={< PhoneList />} />
        <Route path='/phones/:phoneId' element={< PhoneDetails />} />

      </Routes>
    </div>
  );
}

export default App;