import { Link } from "react-router-dom";
import { Card, Col } from 'antd';

import PhoneOne from '../assets/images/Galaxy_S7.png'
import PhoneTwo from '../assets/images/Honor_10.png'
import PhoneThree from '../assets/images/IPhone_7.png'
import PhoneFour from '../assets/images/Moto_G6.png'
import PhoneFive from '../assets/images/Nokia_7.1.jpg'
import PhoneSix from '../assets/images/P10_Lite.jpg'
import PhoneSeven from '../assets/images/Xiaomi_MI_A2.jpeg'
import PhoneEight from '../assets/images/ZenPhone_5.jpg'


function PhoneCard ( { name, id } ) {

const imagesArray=[PhoneOne, PhoneTwo, PhoneThree, PhoneFour, PhoneFive, PhoneSix, PhoneSeven, PhoneEight]

  return (
    <div>
      <Col id='table' style={{ padding: 0 }}>
      <Link to={`/phones/${id}`}>
        <Card className="phoneCard" >
        <h3 className="phoneName">{name}</h3>
        <img src={imagesArray[id]} alt='phone' className="cardPic"/>
      </Card>
      </Link>
      </Col>
      </div>
  );
}

export default PhoneCard;