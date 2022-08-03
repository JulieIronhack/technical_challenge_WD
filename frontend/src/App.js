import "./App.css";
import PhoneList from "./components/PhoneList";
import { useState } from "react";
import Phone from "./components/Phone";
import useFetch from "./hooks/useFetch";

function App() {
  const url = "http://localhost:8080/phones";
  const [phoneId, setPhoneId] = useState();
  const data = useFetch(url);
  const handleShowDetails = (id) => {
    setPhoneId(id);
  };

  return (
    <div className="App">
      <PhoneList phoneList={data} showDetails={handleShowDetails} />
      {phoneId && <Phone phoneId={phoneId} />}
    </div>
  );
}

export default App;
