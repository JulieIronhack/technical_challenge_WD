import logo from './logo.svg';
import './App.css';
import PhonesPage from './pages/PhonesPage';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhonesPage />} />
      </Routes>
    </div>

  );
}

export default App;
