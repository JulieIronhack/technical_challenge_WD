import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { PhoneList } from './components/PhoneList';

function App() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    async function fetchPhones() {
      try {
        const API_BASE_URL = "http://localhost:5005/api";
        const response = await axios.get(API_BASE_URL + "/telephones");
        setPhones(response.data.telephones);
      } catch (error) {
        console.error(error);
      }
    }

    setTimeout(() => fetchPhones(), "2000")
  }, []);

  return (
    <div className='App'>
      <h1>Phone List</h1>
      {phones 
      ? <PhoneList phones={phones}/>
      : <h4>Loading Phone List...</h4>
      }
    </div>
  );
}

export default App;