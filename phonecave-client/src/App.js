import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/phones/:phoneId/details" element={ <Details />} />
      </Routes>
    </div>
  );
}

export default App;
