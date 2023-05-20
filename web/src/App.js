import './App.css';
import { Route, Routes } from "react-router-dom";
import PhonesPage from './pages/PhonesPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path='/phones' element={<PhonesPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
