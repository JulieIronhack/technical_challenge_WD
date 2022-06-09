import './App.css';
import axios from "axios";
import { useState, useEffect } from "react"
import { NavLink, Route, Routes } from "react-router-dom";
import {useRoutes} from "react-router-dom";
import PhoneList from './pages/phones.list';
import Details from './pages/phoneDetails';
function App() {


  const [phones, setPhones] = useState(null);

  useEffect(() => {
    getPhones();
  }, []);

  const getPhones = () => {

    axios.get(`${process.env.REACT_APP_API_URL}/phones`)
      .then((response) => {
        setPhones(response.data);
      })
      .catch((e) => console.log("error getting phones from API...", e))
  };

  return (
    <div className="App">
      <h1>Look at our phones</h1>
      <NavLink to="/phones" >Check phones</NavLink>
      <Routes>
        <Route path='/phones' element={ <PhoneList phones={phones} />}   />
      </Routes>
     
    </div>
  );
}

export default App;
