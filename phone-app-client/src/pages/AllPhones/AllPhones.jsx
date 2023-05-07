import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import allPhonesData from "../../data/phones.json";
// import IPhone_7 from "../assets/images/IPhone_7.png""

import "./style.css";

const allPhones = () => {
  const [allPhones, setAllPhones] = useState([allPhonesData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(allPhones);
        setAllPhones(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {allPhones.length === 0 && <h1 className="loading">Loading ...</h1>}
      {allPhones.length > 0 &&
        allPhones.map((individualPhone, index) => (
          <div key={index} className="one-phone-ctn">
            {/* <div className="image-ctn">
              <Link to={`/phones/${individualPhone.id}`}>
                <img src={individualPhone.imageFileName} alt="" />
              </Link>
            </div> */}
            <div className="content-ctn">
              <h2>{individualPhone.name}</h2>
              <h4>{individualPhone.manufacturer}</h4>
              <h2>
                Price: <b>{individualPhone.price}</b>
              </h2>
              <Link to={`/phones/${individualPhone.id}`}>more details</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default allPhones;
