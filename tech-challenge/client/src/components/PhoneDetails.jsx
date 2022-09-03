import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const PhoneDetails = () = {
    const [detailPhone, setDetailPhone] = useState({});
    const { id } = useParams();

    const getPhone = async () => {
        const { data } = await axios.get(`${API_URL}/phones/${id}`);
        setDetailPhone(data.phone);
      };
      useEffect(() => {
        getPhone();
      }, []);
}

export default PhoneDetails;