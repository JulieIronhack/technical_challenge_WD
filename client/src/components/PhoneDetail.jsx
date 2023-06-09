import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PhoneDetail = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/phones/${id}`)
      .then((response) => {
        setPhone(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="phone-detail">
      <h2>{phone.name}</h2>
      <p>{phone.description}</p>
      <p>Price: ${phone.price}</p>
    </div>
  );
};

export default PhoneDetail;
