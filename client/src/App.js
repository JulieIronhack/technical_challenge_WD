import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import PhoneList from './components/PhoneList';
import PhoneDetails from './components/PhoneDetails';
function App() {
  return (
    <div className="main-app">

    <PhoneList />
    <Routes>
      <Route path='/:id' element={<PhoneDetails />} />
    </Routes>
    </div>
  );
}

export default App;
