
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPhones from "./pages/AllPhones";
import SinglePhone from "./pages/SinglePhone";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<AllPhones/>}/>
        <Route path='/:id' element={<SinglePhone/>}/>
      </Routes>
    </div>
  );
}

export default App;
