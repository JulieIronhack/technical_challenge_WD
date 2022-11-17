import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhoneListPage from "./pages/PhoneListPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<PhoneListPage />} />
        <Route path='/phones/:phoneId' element={<PhoneDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
