import './App.css';
import { Route, Routes } from 'react-router-dom'
import AllPhones from './pages/AllPhones.jsx'
import PhoneDetails from './pages/PhoneDetails.jsx'

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<AllPhones />} />
      <Route path='/phones/:id' element={<PhoneDetails />} />
    </Routes>
  </>
    
  );
}

export default App;
