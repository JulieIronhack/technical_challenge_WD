import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";


const API_URL = process.env.REACT_APP_API_URL;



function App() {
const [phones, setPhones] = useState(null);

  function getAllPhones() {
  axios.get(`${API_URL}/api/phones`)
    .then((response) => { 
      console.log(response.data)
      setPhones(response.data)})
    .catch((error) => console.log(error));
  }
  useEffect(()=>{
        getAllPhones();
}, [])

  return (
    <div className="App">


<HomePage phones={phones}/>

 
    </div>
  );
}

export default App;
