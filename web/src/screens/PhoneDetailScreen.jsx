import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PhoneCardDetail from "../components/PhoneCardDetail";
import * as phoneService from "../services/phone-services";

function PhoneDetailScreen() {
  const [phone, setPhone] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    phoneService
      .getPhone(id)
      .then((phone) => setPhone(phone))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-4 m4">
        <PhoneCardDetail {...phone} />
      </div>
    </div>
  );
}

export default PhoneDetailScreen;
