import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import DisplayPhone from '../components/DisplayPhone';
import { useParams } from 'react-router-dom'




function LandingPage() {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    const phoneName = useParams().id


    const fetchPhones = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_HOST}/phones`);
          setPhones(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchPhones();
      }, []);
    



  return (
    <div>
        <h1>PHONES</h1>
        {phones.map(phone => {
            return (<DisplayPhone phone={phone} />)
        })}
    </div>
  )
}

export default LandingPage