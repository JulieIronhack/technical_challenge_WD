import React from "react";
import { useState, useEffect } from "react";
import { getAllPhonesService } from "../services/phone.services";
import PhoneCard from "../components/PhoneCard";

function AllPhonesPage() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllPhones = async () => {
    try {
      const response = await getAllPhonesService();
      setPhones(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className="AllPhonesPage">
      {loading && <div>Loading...</div>}
      {!loading &&
        phones?.map((phone) => <PhoneCard key={phone._id} {...phone} />)}
    </div>
  );
}

export default AllPhonesPage;
