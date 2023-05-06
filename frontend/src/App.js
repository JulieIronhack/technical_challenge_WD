import AllPhones from "./components/AllPhones";
import SinglePhone from "./components/SinglePhone";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPhones />} />
        <Route path="/api/phones/:phoneId" element={<SinglePhone />} />
      </Routes>
    </div>
  );
}

export default App;
