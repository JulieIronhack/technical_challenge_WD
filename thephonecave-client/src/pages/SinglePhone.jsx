import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function SinglePhone() {
  const [singlePhone, setSinglePhone] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/phones/${params.id}`
      );
      setSinglePhone(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching === true) {
    return <h3>Searching...</h3>;
  }

  return (
    <div id="phone-details">
      <h1>Details</h1>
      <h2>{singlePhone.name}</h2>
      <img
        src={`../images/${singlePhone.imageFileName}`}
        alt={`${singlePhone.name}`}
      />
      <p>{singlePhone.manufacturer}</p>
      <p>{singlePhone.description}</p>
      <span>{singlePhone.price}€</span>
      <br />
      <NavLink to="/phones">
        <button>Back</button>
      </NavLink>
    </div>
  );
}

export default SinglePhone;
