import { useState, useEffect } from "react";
import axios from "axios";
import PhoneCard from "../components/PhoneCard";


function PhonePage() {
    const [phones, setPhones] = useState([]);

    const getAllPhones = () => { //4.Fetch all projects and update state variable
        axios
          .get(`${process.env.REACT_APP_API_URL}/api/phones`)
          .then((response) => setPhones(response.data))
          .catch((error) => console.log(error));
      };

      useEffect(() => { // 3. useEffect will execute getAllProjects()
        getAllPhones();
      }, [] );

      if(phones.length === 0){ // 2. Display this while we wait for the data from the API to load
        return <p>Loading...</p>
      }

    return (
        <div className="ProjectListPage">
        <div refreshProjects={getAllPhones}> </div>

        {phones.map((phone) => {
          return (
            <PhoneCard key={phone.id} id={phone.id} name={phone.name} manufacturer={phone.manufacturer} description={phone.description} color={phone.color} price={phone.price} imageFileName={phone.imageFileName} screen={phone.screen} processor={phone.processor} ram={phone.ram} />
           
          );
        })}     
       
    </div>
    );
  }
   
  export default PhonePage;