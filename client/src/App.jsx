import { Route, Routes } from "react-router-dom";
import PhoneList from "./components/PhoneList";
import PhoneDetail from "./components/PhoneDetail";
import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Error from "./components/Error";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PhoneList />} />
          <Route path="/phones/:id" element={<PhoneDetail />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
