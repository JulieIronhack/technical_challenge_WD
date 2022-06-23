import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from 'react-spinners/DotLoader'
import PhoneDetailsComp from "../components/PhoneDetailsComp";

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
          <div className="phone flex flex-row flex-wrap justify-center items-center align-items-center h-full w-full">
            <div className='w-5/12 flex flex-col flex-wrap justify-end items-center align-items-center h-full w-full' >
              <img src={elem.imageFileName} alt={elem.name} srcSet="" width={500} className="text-right rounded-3xl" />
              <p className="phoneTitle"><span className="font-bold"> {elem.name}</span></p>
            </div>
            <div className='w-5/12 bg-gray-900 p-7 rounded-2xl text-white text-sm lg:text-xl md:text-md mb-1 mt-1'>
              <PhoneDetailsComp id={elem.id} />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Phones;
