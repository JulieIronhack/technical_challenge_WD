import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from './Spinner';

const API_URL = "http://localhost:5005";

function PhoneDetails() {
  const [phone, setPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { phoneId } = useParams();

  useEffect(() => {
    const getPhone = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/api/phone/${phoneId}`);
        const data = await response.json();
        setPhone(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPhone();
  }, [phoneId]);
  
  return (
    <>
    {isLoading ? (
    <Spinner /> 
    ) : (
      <div className="container-fluid">
        <div className="m-3">
          {phone && (
            <div className="row g-0">
              <div className="col-md-4 mt-3 ms-1">
                <img src={require(`/public/images/${phone.imageFileName}`)} className="rounded-3 ratio card-product-details-img shadow border-success" alt={phone.name} />
              </div>
              <div className="col-md-7 p-5">
                <div className="card-body light-grey rounded-3">
                  <h1 className="product-heading">{phone.name}</h1>
                  <p className="card-text"><small className="text-dark">{phone.manufacturer}</small></p>
                  <p className="card-text">
                    {phone.description}
                  </p>
                  <div className="card-text-left">
                    Color: <span className="capitalize">{phone.color}</span><br />
                    Retail Price: {phone.price} &euro;<br />
                    Screen: {phone.screen}<br />
                    Processor: {phone.processor}<br />
                    Memory / RAM: {phone.ram}GB
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
      )}
    </>
  );
}

export default PhoneDetails;
