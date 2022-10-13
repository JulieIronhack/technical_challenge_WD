
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Description from './pages/Description';
import Home from './pages/Home';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phones/:id" element={<Description />} />
    </Routes>
  );
}

export default App;
