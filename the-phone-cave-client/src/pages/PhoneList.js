import { useState, useEffect } from "react";
import axios from "axios";
import PhoneCard from "../components/PhoneCard";


function PhoneList() {
  const [phoneList, setPhoneList] = useState([]);

  const getPhoneList = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/phones`)
      .then((response) => setPhoneList(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhoneList();
  }, []);

  return (
    <div>
        {phoneList.map((phoneElm) => (
          <PhoneCard key={phoneElm._id} {...phoneElm}/>
        ))}
    </div>
  );
}

export default PhoneList;
