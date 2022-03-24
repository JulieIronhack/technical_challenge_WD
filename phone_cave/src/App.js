
import './App.css';
import ListOfPhone from "./phones.json"
import Telephone from './component/Telephone';
import { useEffect, useState } from 'react';
import axios from "axios";


function App() {

  const phones = ListOfPhone
  
// const [ phones, setPhones ] = useState()

// useEffect(() => {
//   axios
//     .get(`http://localhost:3000/${ListofPhone}`)
//     .then((result) => {
//       console.log(result.data)
//       setPhones(result.data);
//     })
//     .catch();
// }, []);
  
  console.log(phones)



  return (
    <div className="App">
    
      <Telephone allPhones={phones}/>
    </div>
  );
}

export default App;
