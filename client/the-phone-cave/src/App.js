import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import PhoneDetail from './pages/PhoneDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/phones/:_id' element={<PhoneDetail />} />
    </Routes>
  );
}

export default App;
