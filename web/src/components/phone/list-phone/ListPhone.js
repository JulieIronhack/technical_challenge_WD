import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import { PhoneServices } from "../../../services";

import "./ListPhone.css";

export default function ListPhone() {

  const [phones, setPhones] = useState(null);

  useEffect(() => {
    const Phones = async () => {
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      await sleep(2000);
      const { data } = await PhoneServices.getPhones();
      setPhones(data);
    }

    Phones()
      .catch(error => console.error(error));
  },[])

  return (
    <div className="list-phone container">
      <div className="h1 text-center my-5">
        Lista de teléfonos
      </div>
      <div className="row">
      {
        phones ? phones.map(phone => (
          <Link key={phone.id} to={`/phones/${phone.id}`} className="col-12 col-sm-6 col-md-4 col-lg-3 p-1">
            <div className="card element-list-phone">
              <div className="card-body">
                <img src={`./assets/images/${phone.imageFileName}`} alt={phone.name}/>
                <h5 className="card-title text-center">{phone.name}</h5>
                <p className="card-text"><MdIcons.MdPrecisionManufacturing /> {phone.manufacturer}</p>
                <p className="card-text"><GiIcons.GiProcessor /> {phone.processor}</p>
                <p className="card-text"><MdIcons.MdMobileScreenShare /> {phone.screen}</p>
              </div>
            </div>
          </Link>
        )) : 
        <div className="col-12 d-flex justify-content-center">
          <MoonLoader color="#36d7b7" />
        </div>
      }
      </div>
    </div>
  )
}