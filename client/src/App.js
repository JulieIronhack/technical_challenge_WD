import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import Phones from "./pages/Phones";
import Error from "./pages/error/Error.jsx";
import NotFound from "./pages/error/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path={"/"} element={<Phones/>} />

        <Route path={"/error"} element={ <Error/> } />
        <Route path={"*"} element={ <NotFound/> } />
      </Routes>
    </div>
  );
}

export default App;
