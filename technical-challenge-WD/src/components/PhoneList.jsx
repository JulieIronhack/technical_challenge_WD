import { useEffect, useState } from "react";
import axios from "axios";

const PhoneDetails = () => {
  const [phones, setPhones] = useState([]);

  // Fetch all phone data
  useEffect(() => {
    axios
      .get("http://localhost:5000/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => {
        console.error("Error fetching phone data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Phone List</h2>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>{phone.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneDetails;
