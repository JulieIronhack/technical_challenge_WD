import React from "react";
import { Routes, Route } from "react-router-dom";
import { PhoneDetail } from "./components/PhoneDetail";
import { PhoneList } from "./components/PhoneList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/telephones" element={<PhoneList />}>
          <Route path="/telephones/:id" element={<PhoneDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
