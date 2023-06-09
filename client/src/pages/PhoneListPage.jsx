import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PhoneListPage = () => {
  const [phones, setPhones] = useState();

  const getAllPhones = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/phones`
      );
      const data = await response.data;
      if (response.status === 200) {
        setPhones(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="phone-list">
      <h1>Phones</h1>
      {phones &&
        phones.map((phone) => {
          return (
            <div key={phone._id} className="card">
              <Link to={`/${phone._id}`}>
                <img
                  src={`/src/assets/images/${phone.imageFileName}`}
                  alt={phone.name}
                />
                <div className="container">
                  <div className="title">
                    <h3>{phone.name}</h3>
                    <p>{phone.manufacturer}</p>
                  </div>
                  <p>
                    Price : <b>{phone.price},-</b>
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default PhoneListPage;
