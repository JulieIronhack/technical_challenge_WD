import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../consts";

export function Phones() {
  const [phones, setPhones ] = useState();
  const [currentPhone, setCurrentPhone ] = useState();

  useEffect(() => {
    async function fetchPhoneData() {
        try {
            const response = await axios.get(API_BASE_URL + "/telephones");
            console.log(response)
            setPhones(response.data);
        }
        catch (err) {
            console.log(err)
        }
    }

    fetchPhoneData();
  }, []);

  const handleDetails = (phoneID) => {
      const phoneToShow = phones.find(phone => phone.id === phoneID)
      setCurrentPhone(phoneToShow);
  }

  return (
    <div>
        <div className="list">
            <ul>
                {phones && 
                phones.map((phone) => {
                    return (
                        <li key={phone.id}>
                            <button onClick={ handleDetails(phone.id) }>phone.name</button>
                        </li>
                    )})}
            </ul>
        </div>

        <div className="phoneDetails">
            
        </div>
    </div>
  );
}
