// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PhoneInfo } from "./components/PhoneInfo";

function App() {
  return (
    <>
      <h1>Hey im the App.js page</h1>

      <Routes>
        <Route path="/" element={<PhoneInfo />} />
      </Routes>
    </>
  );
}

export default App;
