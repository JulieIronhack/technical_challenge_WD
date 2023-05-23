import { Routes, Route } from "react-router-dom";
import PhoneList from "../pages/PhoneList";
import Home from "../pages/Home";
import PhoneDetail from "../pages/PhoneDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phones" element={<PhoneList />} />
      <Route path="/phones/:id" element={<PhoneDetail />} />
    </Routes>
  );
};

export default AppRouter;
