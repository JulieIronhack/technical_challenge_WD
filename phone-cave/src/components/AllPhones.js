import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from './Spinner';

const API_URL = "http://localhost:5005";

function AllPhones() {
  const [isLoading, setIsLoading] = useState(false);
  const [phones, setPhones] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAllPhones = () => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/phones`)
      .then((response) => {
        setPhones(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <>
    <div className="container-fluid">
      <div className="row justify-content-center">
        {/* Start of search */}
        <div className="col-12 mb-2">
          <div className="input-group row justify-content-center">
            <div className="form-outline mt-2" style ={{width:"25%", display:"flex"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-light" viewBox="0 0 16 16" style={{marginTop:"2.5vw",marginRight:"1vw"}}>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              <input type="search" id="form1" className="form-control rounded" style={{marginTop:"2vw"}} placeholder = {"Search"} value={searchTerm} onChange={handleSearchTermChange} />
            </div>
          </div>
        </div>
        {/* End of search */}
      </div>
    </div>
    {/* start of cards */}
    <div className="container-fluid">
      <div className="row">
        {/* Start of phones column */}
        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-wrap justify-content-center">
        {isLoading ? (
          <Spinner /> 
        ) : (
          filteredPhones.map((phone) => {
            return (
              <Link to={`/phones/${phone.id}`} className="pop-card image-box" key={phone.id}>
              <div className="card-products border-success mt-0 mx-0 p-0">
                <h3 className="pop-text-heading fs-5 lh-base text-truncate">{phone.name}</h3>
                
                {phone.imageFileName ? (
                    <img src={require(`/public/images/${phone.imageFileName}`)} className="card-img-top card-img-top-bg-gradient m-0" alt={phone.imageFileName} />
                ) : (
                    <img src="https://res.cloudinary.com/dsw3axyzs/image/upload/v1673616382/lifehack-project/alzqyx6cfvtlys1lxegz.jpg" className="card-img-top ml-0 p-0" />
                )}
              </div>
              </Link>
            );
          })
          )}
        </div>
      </div>
    </div>
    </>
    
  );
}

export default AllPhones;
