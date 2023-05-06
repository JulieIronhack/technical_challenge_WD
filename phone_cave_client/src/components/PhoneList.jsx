import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function PhoneList({ onAction }) {
  const [phoneList, setPhoneList] = useState([]);
  useEffect(() => {
    const getAllPhones = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/phones`
      );
      setPhoneList(response.data);
    };
    const loadApi = setTimeout(getAllPhones, 700);
    return () => clearTimeout(loadApi)
  }, []);
  return (
    <>
      <h2>Check out these Phones!</h2>
      <ul>
        {phoneList.length !== 0 ? (
          phoneList.map((phone) => (
            <ul key={phone.id} onClick={onAction.bind(null, phone.id)}>
              {phone.name}
            </ul>
          ))
        ) : (
          <div id="loader"></div>
        )}
      </ul>
    </>
  );
}

PhoneList.propTypes = {
  onAction: PropTypes.func.isRequired,
};
