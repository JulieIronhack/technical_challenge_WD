import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Phone from "./pages/Phone";

const App = () => {
  return <>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/:_id" element={ <Phone /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  </>
};

export default App;