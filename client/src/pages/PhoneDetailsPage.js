import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

const API_URL = "http://localhost:5005";

function PhoneDetailsPage() {
  const [phone, setPhone] = useState(null);
  const { phoneId } = useParams();

  // Helper function that makes a GET request to the API
  // and retrieves the phone by id
  const getPhone = () => {
    axios
      .get(`${API_URL}/api/phones/${phoneId}`)
      .then((response) => {
        const onePhone = response.data;
        setPhone(onePhone);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhone();
  }, []);

  return (
    <div className='ProjectDetails'>
      {phone ? (
        <>
          <h1>{phone.name}</h1>
          <p>{phone.manufacturer}</p>
          <p>{phone.description}</p>
          <p>{phone.color}</p>
          <p>{phone.price}</p>
          <img
            height={300}
            src={`/images/${phone.imageFileName}`}
            alt={phone.name}
          />
          <p>{phone.screen}</p>
          <p>{phone.processor}</p>
          <p>{phone.ram}</p>
        </>
      ) : (
        <SyncLoader
          size={15}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      )}
    </div>
  );
}

export default PhoneDetailsPage;
