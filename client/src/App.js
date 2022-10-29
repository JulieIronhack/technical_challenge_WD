import './App.css';
import { Routes, Route } from "react-router-dom";
import { PhonesListScreen} from "./screens";



function App() {
  return (
    <Routes>
          <Route path="/" element={<PhonesListScreen/>} />
    </Routes>
  );
}

export default App;
