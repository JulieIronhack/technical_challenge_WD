import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function PhonesList() {
  const [allPhones, setAllPhones] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      setAllPhones(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching === true) {
    return <h3>Searching...</h3>;
  }

  return (
    <div>
      <h1>List of Phones</h1>
      {allPhones.map((phone) => {
        return (
          <div key={phone.id} className="phone-list">
            <li>
              <NavLink to={`/phones/${phone.id}`}>{phone.name}</NavLink>
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default PhonesList;
