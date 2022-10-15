
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhonesPage from './pages/PhonesPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<PhonesPage />} />
      </Routes>

    </div>
  );
}

export default App;
