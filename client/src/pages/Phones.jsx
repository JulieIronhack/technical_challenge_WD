import "../App.css";
import axios from "axios"
import PulseLoader from "react-spinners/PulseLoader";
import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import PhonesDetails from "../components/PhonesDetails";

function Phones() {

  const navigate = useNavigate()

  // Pasos para llamar a REST API
  // 1. Estados
  const [allPhones, setAllPhones] = useState(null)

  // 2. componentDidMount
  useEffect(() => {
    getPhones();
  }, [])

  // 3. Función que llama a la API
  const getPhones = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/phones`)
      setAllPhones(response.data);
    }
    catch (error) {
      navigate("/error")
    }
  }

  // 4. Spinner
  if (allPhones === null) {
    return (
      <div>
        <br />
        <h4>Loading phones...</h4>
        <PulseLoader />
      </div>
    )
  }
  

  return (
    <div className="App">
      <h1>Phones</h1>
      <br />

      {
        allPhones.map((eachPhone) => {
          return (
            <div key={eachPhone.id}>
              <hr />
              <div className="phone-image"><img src={eachPhone.imageFileName} width={320} alt="Phone"/></div>
              <div className="phone-name"><h3>{eachPhone.name}</h3></div>
              <div className="phone-manufacturer"><p><strong>Manufacturer:</strong> {eachPhone.manufacturer}</p></div>
              <PhonesDetails id={eachPhone.id}/>
              <br />
              <hr />
              
              <br />
            </div>
          )
        })
      }

    </div>
  );
}

export default Phones;
