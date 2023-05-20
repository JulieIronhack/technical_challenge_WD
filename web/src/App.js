import { Route, Routes } from "react-router-dom";
import PhonesList from "./components/phones/PhonesList";
import { useEffect, useState } from "react";
import phonesService from './services/phones'


function App() {
  const [phones, setPhones] = useState();

  useEffect(() => {
    phonesService.list()
      .then((phones) => {
        setPhones(phones)
      })
      .catch(error => console.error(error))
  }, [])
  console.log(phones)

  return (
    <div className="App">
      <Routes>
        <Route path='/phones' element={<PhonesList phones={phones} />} />
      </Routes>
    </div>
  );
}

export default App;
