import React, { useEffect, useState } from 'react'
import {PhoneItem} from '../../../components/'
import {getPhones} from '../../../services/the-phone-cave-api.js'
function PhonesListScreen() {
const [phones, setPhones] = useState(null)

  useEffect(()=>{
    getPhones()
    .then(phoneList => setPhones(phoneList))
    .catch(error => console.error(error))
  },[])


if (!phones) {
  return (
    <>
      {/* <AddressBar to="/" address="...loading"/> */}
      <div className="full-height d-flex justify-content-center align-Categoriess-center ">
      <img src="/assets/icons/loader/loader.svg" alt='loader'  className="m-5"></img>
      </div>
    </>
  );
}


  return (
    <div className="container mt-5 mb-5 p-1  ">
      <h1 className='text-center'>The Phone Cave</h1>
      <p className='text-center'>Welcome to our page!, enjoy it and we hope that you find what you need 😄</p>
      <div className="row row-cols-1 justify-content-center row-cols-sm-1 row-cols-md-1 row-cols-lg-2  row-cols-xl-3 mt-5  p-5 p-sm-5 p-md-5 p-lg-1 p-xl-1 shadow">
        {phones ? phones.map((phones) => (
            <PhoneItem {...phones} key={phones.id} />
        )) :
        <div className="full-height d-flex justify-content-center align-items-center ">
          <img src="/assets/icons/loader/loader.svg" alt='loader'  className="m-5"></img>
          </div>
        }
        <p className='text-center py-5'> Developed by LuisEUM</p>
      </div>
    </div>
  )
}

export default PhonesListScreen