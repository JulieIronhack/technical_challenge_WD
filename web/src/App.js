
import { Route, Routes } from "react-router";
import PhonesList from './components/phones/PhonesList';
import PhonesDetail from './components/phones/PhonesDetail';
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
  <>
    <Navbar /> 
      <Routes>
          <Route path='/' element={<PhonesList />} />
          <Route path='/:phoneId' element={<PhonesDetail />} />
      </Routes>
  </>
  );
}

export default App;
