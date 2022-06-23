import logo from "../logo.svg";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from 'react-spinners/DotLoader'
import { Link } from "react-router-dom";

function Phones() {
  const [phoneInfo, setPhoneInfo] = useState(null);

  useEffect(() => {
    getPhoneInfo();
  }, [])

  const getPhoneInfo = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones/");
      setPhoneInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-white">
      {phoneInfo === null && <div className="App flex flex-row flex-wrap justify-center items-center align-items-center h-full w-full"><DotLoader /></div>}
      {phoneInfo !== null && phoneInfo.map(elem => {
        return (
          <Link to={`/${elem.id}`} key={elem._id}>
            <div className="phone flex flex-row flex-wrap justify-center items-center align-items-center h-full w-full">
              <div className='w-5/12 flex flex-row flex-wrap justify-end items-center align-items-center h-full w-full'>
                <img src={elem.imageFileName} alt={elem.name} srcSet="" width={500} className="text-right rounded-3xl" />
              </div>
              <div className='w-5/12 bg-gray-900 p-7 rounded-2xl text-white'>
                <p className="phoneTitle"><span className="font-bold">Phone name:</span> {elem.name}</p>
                <p className="manufacturer"><span className="font-bold">Manufacturer:</span> {elem.manufacturer}</p>
                <p className="description"><span className="font-bold">Description:</span> {elem.description}</p>
                <p className="color"><span className="font-bold">Color:</span> {elem.color}</p>
                <p className="price"><span className="font-bold">Price:</span> {elem.price}€</p>
                <p className="screen"><span className="font-bold">Screen:</span> {elem.screen}</p>
                <p className="processor"><span className="font-bold">Processor:</span> {elem.processor}</p>
                <p className="ram"><span className="font-bold">Ram:</span> {elem.ram}GB</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default Phones;
