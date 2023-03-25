import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import phonesDataJSON from '../data/phones.json'
import axios from 'axios';

import PhoneOne from '../assets/images/Galaxy_S7.png'
import PhoneTwo from '../assets/images/Honor_10.png'
import PhoneThree from '../assets/images/IPhone_7.png'
import PhoneFour from '../assets/images/Moto_G6.png'
import PhoneFive from '../assets/images/Nokia_7.1.jpg'
import PhoneSix from '../assets/images/P10_Lite.jpg'
import PhoneSeven from '../assets/images/Xiaomi_MI_A2.jpeg'
import PhoneEight from '../assets/images/ZenPhone_5.jpg'

const API_URL = "http://localhost:5005";


function PhoneDetails(){

    const [phone, setPhone] = useState(null);
    const { phoneId } = useParams();
    const [phones, setPhones] = useState(phonesDataJSON);

    const imagesArray=[PhoneOne, PhoneTwo, PhoneThree, PhoneFour, PhoneFive, PhoneSix, PhoneSeven, PhoneEight]

    const getPhone = () => {
        axios
          .get(`${API_URL}/api/phones/${phoneId}`)
          .then((response) => {
            const onePhone = response.data;
            setPhone(onePhone);
          })
          .catch((error) => console.log(error));
      };
      
      useEffect(()=> {
        getPhone();
      }, [] );

      const getAllPhones = () => {
  
      
        axios
          .get(`${API_URL}/api/phones`,)
          .then((response) => setPhones(response.data))
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        getAllPhones();
      }, [] );

      return(
          <div className='phoneDetails'>
          <img src={imagesArray[phoneId]} alt='phone' className="detailsPic"/>
          <div className='spec'>
            <h3>{phones[phoneId].name}</h3>
            <br/>
            {phones[phoneId].manufacturer}
            <br/>
            {phones[phoneId].description}
            <br/>
            {phones[phoneId].color}
            <br/>
            {phones[phoneId].price}
            <br/>
            {phones[phoneId].screen}
            <br/>
            {phones[phoneId].processor}
            <br/>
            {phones[phoneId].ram}
            </div>
            </div>
      )

}

export default PhoneDetails;