import { useEffect, useState } from "react";
import { getTelephones } from "../services/api-service";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants";

const TelephoneList = () => {
  const [telephoneList, setTelephoneList] = useState();

  
  useEffect(() => {
    getTelephones().then((response) => {
      setTelephoneList(response.data);
    });
  }, []);  

  return (
    <>
    {telephoneList && (
      <div className="text-center p-5">
        {telephoneList.map(phone => (
          <div className="border-bottom" key={phone._id}>
            <Link
              style={{ display: "block", margin: "1rem 0", textDecoration: "none", color: "black"}}
              to={`/telephones/${phone.id}`}
              key={phone._id}
            >
              <div className="d-flex">
                <img className="align-self-center" src={`${BASE_URL}/${phone.imageFileName}`} 
                  alt={phone._id} 
                  width="50"
                />
                <div className="col">
                  <h4 className="p-2">
                    {phone.name}
                  </h4>
                  <span style={{fontSize: 10, fontWeight: 'bold'}} className="p-2">Price:</span>
                  <div style={{color: 'gray', fontWeight: 'bold'}} className="p-2">
                    {phone.price}
                  </div> 
                  <span style={{fontSize: 10, fontWeight: 'bold'}} className="p-2">{phone.manufacturer}</span>
                </div>  
              </div>
            </Link>
          </div>
        ))}
      </div>)}
    </>    
  );  
}  

export default TelephoneList;