import { useState, useEffect } from "react";
import axios from 'axios'
import phonesDataJSON from '../data/phones.json'
import {  Row  } from 'antd';
import ClipLoader from "react-spinners/ClipLoader";

import PhoneCard from "../components/PhoneCard";

const API_URL = "http://localhost:5005";

function PhoneListPage({ id }) {

    const [phones, setPhones] = useState(phonesDataJSON);
    const [loading, setLoading] = useState(true);

    const getAllPhones = () => {
  
      
      axios
        .get(`${API_URL}/api/phones`,)
        .then((response) => setPhones(response.data))
        .then(setLoading(false))
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      getAllPhones();
    }, [] );
  
  
    return (
      
      <div className={"PhoneListPage "}>
        
  <h2>All Phones</h2>
  
<div className="phoneList">

{loading ? <ClipLoader color="#36d7b7" /> : null}
    
  {phones.map((phone) => {
        return <Row style={{ width: '100%',  justifyContent: 'center'  }} className='cardList'>
            <PhoneCard key={phone.id} {...phone} className='phoneCard'/>
            </Row>
      })}
      
      </div>


      </div>
    );
  }
  
  export default PhoneListPage;
  