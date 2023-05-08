import axios from "axios";
import { useEffect, useState } from "react";
import Galaxy_S7 from "../assets/images/Galaxy_S7.png";
import Honor_10 from "../assets/images/Honor_10.png";
import IPhone_7 from "../assets/images/IPhone_7.png";
import Moto_G6 from "../assets/images/Moto_G6.png";
import Nokia_71 from "../assets/images/Nokia_71.jpg";
import P10_Lite from "../assets/images/P10_Lite.jpg";
import Xiaomi_MI_A2 from "../assets/images/Xiaomi_MI_A2.jpeg";
import ZenPhone_5 from "../assets/images/ZenPhone_5.jpg";
import PhoneDetails from "../components/PhoneDetails";

function Phones() {
  const [phones, setPhones] = useState();
  const [detailsCheck, setDetailsCheck] = useState(false);
  const [phoneId, setPhoneId] = useState("");
  const phoneimg = (image) => {
    switch (image) {
      case "Galaxy_S7":
        return <img src={Galaxy_S7} alt="Galaxy_S7" />;
      case "Honor_10":
        return <img src={Honor_10} alt="Honor_10" />;
      case "IPhone_7":
        return <img src={IPhone_7} alt="IPhone_7" />;
      case "Moto_G6":
        return <img src={Moto_G6} alt="Moto_G6" />;
      case "Nokia_7_1":
        return <img src={Nokia_71} alt="Nokia_71" />;
      case "P10_Lite":
        return <img src={P10_Lite} alt="P10_Lite" />;
      case "Xiaomi_MI_A2":
        return <img src={Xiaomi_MI_A2} alt="Xiaomi_MI_A2" />;
      case "ZenPhone_5":
        return <img src={ZenPhone_5} alt="ZenPhone_5" />;
      default:
        break;
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/phones")
      .then((response) => {
        setPhones(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return (
      <>
      <h1>Phones</h1>
      {detailsCheck && <PhoneDetails id={phoneId} />}
      {phones &&
        phones.map((phone) => {
          const nameImg = phone.imageFileName.slice(
            0,
            phone.imageFileName.indexOf(".")
          );
          return (
            <>
              <div
                onClick={() =>{
                  setPhoneId(phone.id)
                    detailsCheck
                      ? setDetailsCheck(false)
                      : setDetailsCheck(true)
                }
                }
              >
                <h1>{phone.name}</h1>
                {phoneimg(nameImg)}
              </div>
            </>
          );
        })}
    </>
  );
}
export default Phones;
