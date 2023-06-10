import { useState } from "react";
import "./App.css";
import PhoneList from "./components/PhoneList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PhoneList />
    </>
  );
}

export default App;
