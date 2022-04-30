import TelephoneList from "./components/TelephoneList";
import TelephoneDetails from "./components/TelephoneDetails";

import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
          <Routes>
            <Route path="/telephones" element={<TelephoneList />} />
            <Route path="/telephones/:phoneId" element={<TelephoneDetails />} />
          </Routes>
    </div>
  );
}

export default App;
