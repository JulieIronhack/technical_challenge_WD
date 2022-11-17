import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect, useContext } from "react";

function PhonesListPage() {
  const [phones, setPhones] = useState([]);

  const url = "http://localhost:5005";
  const getAllPhones = () => {
    axios
      .get(`${url}/api/phones`, {})
      .then((response) => {
        setPhones(response.data);
        //   setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  //   const showDetails = () =>{
  //     return <PhoneDetails />
  //   }

  return (
    <div className="">
      {phones.map((phone) => {
        return (
          <div>
            <Link to={`/phones/${phone._id}`}>
              <img src={require(`../images/${phone.imageFileName}`)} />
              <p>{phone.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PhonesListPage;
