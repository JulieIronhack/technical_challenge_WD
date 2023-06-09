import { Route, Routes, Link } from "react-router-dom";
import PhoneList from "./components/PhoneList";
import PhoneDetail from "./components/PhoneDetail";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* We could also create links to individual phones here if needed */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/phones/:id" element={<PhoneDetail />} />
      </Routes>
    </div>
  );
}

export default App;
