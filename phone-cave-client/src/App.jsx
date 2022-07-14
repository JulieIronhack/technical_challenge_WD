import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PhonePage from "./PhonePage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/phones' element={<PhonePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
