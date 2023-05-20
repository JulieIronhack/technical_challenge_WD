import { Routes, Route } from "react-router-dom";
import PhoneList from "../pages/PhoneList";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phones" element={<PhoneList />} />
    </Routes>
  );
};

export default AppRouter;
