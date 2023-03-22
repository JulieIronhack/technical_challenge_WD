import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    async function fetchPhones() {
      const response = await axios.get("http://localhost:5005/phones");
      console.log(response.data);
      setPhones(response.data);
    }
    fetchPhones();
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
