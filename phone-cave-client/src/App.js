import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PhoneDetails from './components/PhoneDetails';
import PhoneList from './components/PhoneList';
import { getPhoneListService } from './services/phones.services';

function App() {

  const [phoneList, setPhoneList] = useState(null);
  const [isFetching, setIsFetching] = useState(true)



  useEffect(() => {
    handlePhoneList()
  }, [])

  const handlePhoneList = async() => {
    try {
      const response = await getPhoneListService()
      setPhoneList(response.data);
      setIsFetching(false)
    } catch (error) {
      console.log(error)
    }
  }



  if (isFetching) {
      return <p>Cargando...</p>;
    }
  return (
    <div className="App">
    <div>
    <PhoneList phoneList={phoneList} />
    </div>
    
    <Routes>
    <Route path=":id" element={<PhoneDetails/>} />
    </Routes>
    

    
    
    </div>

  );
}

export default App;
