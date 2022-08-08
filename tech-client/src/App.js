import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Spinner } from 'react-bootstrap'

function App() {

  const [phonesList, setPhonesList] = useState([])
  const [fetchingPhones, setFetchingPhones] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    getPhonesList()
  }, [])

  const getPhonesList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/phones`)

      setTimeout(() => {
        setPhonesList(response.data)
        setFetchingPhones(false)
      }, 1000)
    } catch (err) {
      navigate('/error')
    }
  }
  return (
    <>
      {

        fetchingPhones ?

          <div>
            <Spinner animation='border' variant='info' />
          </div>
          :
          <div className="App">


            <MyNavBar phonesList={phonesList} />

            <div id='page'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/phone-details/:phoneId' element={<PhoneDetails phonesList={phonesList} />} />
                <Route path='/error' element={<Error />} />
                <Route path='*' element={<NotFound />} />



              </Routes>
            </div>
          </div>
      }
    </>

  );
}

export default App;
