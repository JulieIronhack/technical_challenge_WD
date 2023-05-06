import { useState } from "react";
import "./App.css";
import PhoneList from "./components/PhoneList";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  const [phoneSelected, setPhoneSelected] = useState(null);

  const phoneSelectHandler = (phoneId) => {
    setPhoneSelected(phoneId);
  };

  const clearPhoneHandler = () => {
    setPhoneSelected(null);
  }
  return (
    <>
      <h1>Welcome to the Phone Cave</h1>
      {phoneSelected === null ? (
        <PhoneList onAction={phoneSelectHandler} />
      ) : (
        <PhoneDetails phoneId={phoneSelected} onClearPhone={clearPhoneHandler}/>
      )}
    </>
  );
}

export default App;
