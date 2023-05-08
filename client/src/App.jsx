import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoeDetail from "./routes/ShoeDetail";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoes" element={<h1>Shoes</h1>} />
          <Route path="/shoes/:id" element={<ShoeDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
