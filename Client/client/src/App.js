
import './App.css';
import Phones from './components/Phones';
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage"

function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          <Route path="phones" element={<Phones /> } />
          </Routes>
      </div>
  );
}

export default App;
