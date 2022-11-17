import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import "./App.css";
import PhoneList from "./components/phoneList";
import axios from "axios";
import { Divider } from "antd";
import PhoneDetails from "./components/phoneDetails";

function App() {
  const [phoneList, setPhoneList] = useState(null);
  const [phoneId, setPhoneId] = useState(null);

  useEffect(() => {
    fetchPhones();
  }, []);

  async function fetchPhones() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/phones`)
      .then((response) => {
        if (response.data) setPhoneList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      {phoneId ? (
        <>
          <Divider>Phone Details</Divider>
          <PhoneDetails id={phoneId}></PhoneDetails>{" "}
        </>
      ) : (
        <h2>Please select a phone for more details</h2>
      )}

      <Divider>Phone List</Divider>
      <PhoneList phones={phoneList} setPhone={setPhoneId}></PhoneList>
    </div>
  );
}

export default App;
