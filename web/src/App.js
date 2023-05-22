import './App.css';
import { Route, Routes } from 'react-router-dom';
import PhonesPage from './pages/PhonesPage';
import PhonePage from './pages/PhonePage';


function App() {
  return (
    <>
      <Routes>
         <Route path='/phones' element={<PhonesPage />} />
         <Route path='/phones/:phoneId' element={<PhonePage />} />
       </Routes>
    </>
  );
}

export default App;
