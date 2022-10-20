import { useState, useEffect } from "react";
import axios from "axios";

import PhoneDetails from "../../components/PhoneDetails";
import PhonesList from "../../components/PhonesList";
import "./HomePage.css";


function HomePage() {
  const [phones, setPhones] = useState([]);
  const [phoneSelected, setPhoneSelected] = useState(null)

  const getAllPhones = () => { 
      axios
          .get(`http://localhost:5005/phones`)
          .then((response) => setPhones(response.data))
          .catch((error) => console.log(error));
  };
   
  useEffect(() => { 
      getAllPhones();
  }, [] );

  const [phoneDetails, setPhoneDetails] = useState(null)

  const getPhoneDetails = () => { 
      axios
          .get(`http://localhost:5005/phones/${phoneSelected}`)
          .then((response) => setPhoneDetails(response.data))
          .catch((error) => console.log(error));
  };

  useEffect(() => { 
    getPhoneDetails();
}, [phoneSelected] );

  return (
    <div className='container-fluid'>
      <div className='d-flex flex-row flex-md-nowrap flex-wrap'>
        <PhonesList phones={phones} setPhoneSelected={setPhoneSelected}/>
        <PhoneDetails phoneDetails={phoneDetails}/>
      </div>
      
    </div>
  );
}

export default HomePage;