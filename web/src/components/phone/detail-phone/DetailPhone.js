import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { useParams } from "react-router";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import { PhoneServices } from "../../../services";

export default function DetailPhone() {

  const [phone, setPhone] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const Phone = async () => {
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      await sleep(1500);
      const { data } = await PhoneServices.getPhones(id);
      setPhone(data);
    }

    Phone()
      .catch(error => console.error(error));
  }, [id])

  return (
    <div className="detail-phone container">
      <div className="h1 text-center my-5">
        Detalle del teléfono
      </div>
      {
        phone ? phone.map(phone => (
          <div key={phone.id} className="row">
            <div className="col-12 col-sm-6">
              <img className="w-100" src={`../assets/images/${phone.imageFileName}`} alt={phone.name}/>
            </div>
            <div className="col-12 col-sm-6">
              <h3 className="text-center">{phone.name}</h3>
              <p><MdIcons.MdPrecisionManufacturing /> {phone.manufacturer}</p>
              <p><GiIcons.GiProcessor /> {phone.processor}</p>
              <p><MdIcons.MdMobileScreenShare /> {phone.screen}</p>
              <p>{phone.description}</p>
            </div>
          </div>
        )) : 
        <div className="col-12 d-flex justify-content-center">
          <MoonLoader color="#36d7b7" />
        </div>
      }
    </div>
  )
}