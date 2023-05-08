import "./App.css";
import Phones from "./pages/Phones.js";
import { useEffect, useState } from "react";
import axios from "axios";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  const [phones, setPhones] = useState(null);
  const [displayPhoneDetails, setDisplayPhoneDetails] = useState(false);
  const [id,setId] = useState("")

  const getAllPhones = () => {
    axios
      .get("http://localhost:5005/api/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => console.log("Error: ", error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);
  return (
    <div className="body">
      <header>
        <h1>Phones!</h1>
      </header>
      <div className="container">
        <Phones
          phones={phones}
          setPhones={setPhones}
          setDisplayPhoneDetails={setDisplayPhoneDetails}
          setId={setId}
        />
        {displayPhoneDetails && <PhoneDetails id={id} displayPhoneDetails={displayPhoneDetails}/>}
      </div>
    </div>
  );
}

export default App;
