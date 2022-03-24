import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [phones, setPhones] = useState([]);

  const fetchPhones = () => {
    axios
      .get("localhost:3000/telephones")
      .then((phones) => {
        setPhones(phones.data);
      })
      .catch((e) => console.log("Error getting phones", e));
  };

  console.log(phones);

  useEffect(() => {
    fetchPhones();
  }, []);

  return <div className="App"></div>;
}

export default App;
