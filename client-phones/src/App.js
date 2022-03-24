import Home from "./components/Home";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url = "http://localhost:3005/telephones";
  const [phonesArr, setPhonesArr] = useState([]);

  useEffect(() => {
    console.log("phonesArr:", phonesArr); // empty array!
    axios.get(url).then((res) => {
      setPhonesArr(res.data.phonesArr);
    });
  }, []);

  return (
    <div className="Phones">
      <h1>Our Phones</h1>
      <ul>
        {phonesArr.map((phone) => (
          <li key={phone.id}>{phone.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
