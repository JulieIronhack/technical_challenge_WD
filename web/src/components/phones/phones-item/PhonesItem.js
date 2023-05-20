import React from 'react'
import { Link } from 'react-router-dom'
import Galaxy from '../../../assets/images/Galaxy_S7.png'
import Honor from '../../../assets/images/Honor_10.png'
import Iphone from '../../../assets/images/IPhone_7.png'
import Moto from '../../../assets/images/Moto_G6.png'
import Nokia from '../../../assets/images/Nokia_7.1.jpg'
import P10 from '../../../assets/images/P10_Lite.jpg'
import Xiaomi from '../../../assets/images/Xiaomi_MI_A2.jpeg'
import Zen from '../../../assets/images/ZenPhone_5.jpg'

function PhonesItem({ name, description, imageFileName }) {

  switch (imageFileName) {
    case "IPhone_7.png":
      imageFileName = Iphone;
      break;
    case "Galaxy_S7.png":
      imageFileName = Galaxy;
      break;
    case "Honor_10.png":
      imageFileName = Honor;
      break;
    case "P10_Lite.jpg":
      imageFileName = P10;
      break;
    case "Nokia_7.1.jpg":
      imageFileName = Nokia;
      break;
    case "ZenPhone_5.jpg":
      imageFileName = Zen;
      break;  
    case "Xiaomi_MI_A2.jpeg":
      imageFileName = Xiaomi;
      break;  
    case "Moto_G6.png":
      imageFileName = Moto;
      break; 
    default:  
  }

  return (
    <div class="card mt-4 mx-4" style={{width: '18rem'}}>
      <img src={imageFileName} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
      </div>
    </div>
  )
}

export default PhonesItem