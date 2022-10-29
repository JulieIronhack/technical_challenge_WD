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
    <div className="row row-cols-1 justify-content-center row-cols-sm-2 row-cols-md-3">
      {phones ? phones.map((phones) => (
        <div className="col mb-4" key={phones.id} >
          <PhoneItem {...phones} />
        </div>
      )) :
      <div className="full-height d-flex justify-content-center align-items-center">
        <img src="/assets/icons/loader/loader.svg" alt='loader'  className="m-5"></img>
        </div>
      }
    </div>
  )
}

export default PhonesListScreen