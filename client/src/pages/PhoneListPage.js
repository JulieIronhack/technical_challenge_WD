import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

const API_URL = "http://localhost:5005";

function PhoneListPage() {
  const [phones, setPhones] = useState([]);

  const getAllPhones = () => {
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => setPhones(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div className='ProjectListPage'>
      {phones.length === 0 ? (
        <SyncLoader
          size={15}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      ) : (
        phones.map((phone) => {
          return (
            <div className='card' key={phone.id}>
              <Link to={`/phones/${phone.id}`}>
                <h3>{phone.name}</h3>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default PhoneListPage;
