import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/phones")
      .then((response) => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="phone-list-container">
      <ul className="phone-list">
        {phones.map((phone) => (
          <li key={phone.id}>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
