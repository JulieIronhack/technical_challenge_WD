import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Phones } from './Components/Phones';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Phones/>} />
      </Routes>
    </>
  );
}

export default App;
