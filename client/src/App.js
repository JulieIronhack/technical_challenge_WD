import './App.css';
import { Routes, Route } from "react-router-dom";

//Components
import NavbarTop from './components/NavbarTop';

//Pages
import Home from './pages/Home'
import PhonesList from './components/PhonesList';

//Errors
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import PhoneDetails from './pages/phones/PhoneDetails';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <PhonesList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<PhonesList />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
