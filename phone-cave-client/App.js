import './App.css';
import { Routes, Route } from 'react-router-dom';
import PhonesPage from './Pages/PhonesPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route
          path='/getPhones'
          element={<PhonesPage phonesPage= {phones}/>}
        />
        <Route path='/getPhones/:phoneId' element={<PhoneDetailsPage />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;