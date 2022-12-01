import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/phone/:phoneId" element= {<Details/>}/>
        </Routes>
          <Home />
      </header>
    </div>
  );
}

export default App;
