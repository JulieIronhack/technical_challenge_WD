  import React from "react";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Routes, Route } from "react-router-dom";
  import Phones from "./pages/Phones";
  import Error from "./pages/error/Error.jsx";
  import NotFound from "./pages/error/NotFound.jsx";
  // import routes from "./config/routes";

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