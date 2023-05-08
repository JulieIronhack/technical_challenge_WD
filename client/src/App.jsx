import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhoneDetail from "./routes/PhoneDetail";

function App() {
  return (
    <>
      <Header />
      <main className="w-screen min-h-screen flex flex-col justify-center items-center py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones/:id" element={<PhoneDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
