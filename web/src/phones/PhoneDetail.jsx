import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import phoneService from "../services/phoneService";

function PhoneDetail() {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPhone() {
      try {
        const newPhone = await phoneService.detail(phoneId);
        setPhone(newPhone.data);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate("/");
        }
      }
    }

    fetchPhone();
  }, [phoneId]);

  return <>{!phone ? <p>....Finding Phone</p> : <h1>{phone.name}</h1>}</>;
}

export default PhoneDetail;
