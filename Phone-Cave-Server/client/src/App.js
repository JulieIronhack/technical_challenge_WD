import './App.css';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Phones from "./pages/Phones/Phones";
// import PhonesDetails from "./components/PhoneDetails/PhonesDetails";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/phones" element={<Phones/>}/>
        {/* <Route path="/phones/:id" element={<PhonesDetails/>}/> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
