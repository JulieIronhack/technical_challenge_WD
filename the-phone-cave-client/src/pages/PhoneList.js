import { useState, useEffect } from "react";
import axios from "axios";
import PhoneCard from "../components/PhoneCard";
import SpinnerComponent from "../components/Spinner";

function PhoneList() {
  const [phoneList, setPhoneList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPhoneList = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/phones`)
      .then((response) => setPhoneList(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhoneList();
  }, []);

//   if (loading) {
//     return <SpinnerComponent />;
//   }

  return (
    <div>
        {phoneList.map((phoneElm) => (
          <PhoneCard key={phoneElm._id} {...phoneElm} phoneDetails={phoneElm}/>
        ))}
    </div>
  );
}

export default PhoneList;
