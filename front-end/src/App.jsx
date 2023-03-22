import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import PhoneDetails from './components/PhoneDetails';
import { useState , useEffect} from 'react'
import DisplayPhone from './components/DisplayPhone';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function App() {
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
    <div className="App">
        <div>
              <div style={{display:'flex' , gap:'30px'}}>
              <div>
                  <h1>PHONES</h1>
                    {phones.map(phone => {return (<DisplayPhone phone={phone} />)})}
              </div>
              <Routes>
              <Route path="/phones/:id" element={<PhoneDetails />} />
              </Routes>
              </div>
          </div>
    </div>

  )
}

export default App
