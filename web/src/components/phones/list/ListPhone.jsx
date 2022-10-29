import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPhones } from "../../../services/PhonesSevices";
import DetailPhone from "../detail/DetailPhone";

function ListPhone() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    getPhones
      .then(phones => setPhones(phones))
      .catch(error => console.error(error));
  },[])

  return (
    <div className="row row-cols-12 row-cols-sm-6 row-cols-md-3">
      {phones.map((phone) => (
        <div className="col" key={phone.id}>
          <DetailPhone {...phone} />
        </div>
      ))}
    </div>
  )
}

export default ListPhone;