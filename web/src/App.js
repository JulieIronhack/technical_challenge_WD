import { Route, Routes } from "react-router-dom";
import PhoneListScreen from "./screens/PhoneListScreen";
import PhoneDetailScreen from "./screens/PhoneDetailScreen";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/phones" element={<PhoneListScreen />} />
        <Route path="/phones/:id" element={<PhoneDetailScreen />} />
      </Routes>
    </>
  );
}

export default App;
