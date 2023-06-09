import './App.css';
import { Route, Routes } from "react-router-dom";
import PhonesPage from './pages/PhonesPage';
import HomePage from './pages/HomePage';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/phones' element={<PhonesPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
