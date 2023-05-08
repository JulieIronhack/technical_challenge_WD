import Galaxy_S7 from "../assets/Galaxy_S7.png";
import Honor_10 from "../assets/Honor_10.png";
import IPhone_7 from "../assets/IPhone_7.png";
import Moto_G6 from "../assets/Moto_G6.png";
import Nokia_7_1 from "../assets/Nokia_7_1.jpg";
import P10_Lite from "../assets/P10_Lite.jpg";
import Xiaomi_MI_A2 from "../assets/Xiaomi_MI_A2.jpeg";
import ZenPhone_5 from "../assets/ZenPhone_5.jpg";
import Phone from "../components/Phone";

export default function Phones(props) {
  const displayPhoneImage = (image) => {
    switch (image.slice(0, image.indexOf("."))) {
      case "Galaxy_S7":
        return <img src={Galaxy_S7} alt="Galaxy_S7" />;
      case "Honor_10":
        return <img src={Honor_10} alt="Honor_10" />;
      case "IPhone_7":
        return <img src={IPhone_7} alt="IPhone_7" />;
      case "Moto_G6":
        return <img src={Moto_G6} alt="Moto_G6" />;
      case "Nokia_7_1":
        return <img src={Nokia_7_1} alt="Nokia_7_1" />;
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

  return (
    <>
      <article className="all-phones">
        {props.phones
          ? props.phones.map((phone) => (
              <div
              className="one-phone"
                onClick={() => {
                  props.setDisplayPhoneDetails(true);
                  props.setId(phone.id);
                }}
              >
                <Phone key={phone.id} phone={phone} image={displayPhoneImage} />
              </div>
            ))
          : "loading..."}
      </article>
    </>
  );
}
