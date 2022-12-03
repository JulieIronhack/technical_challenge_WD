import "./HomePage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import phoneService from "../../services/phone.service";
import Loading from "../../components/Loading/Loading";

function HomePage() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    phoneService
      .getAllPhones()
      .then((response) => {
        setPhones(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {/* Header */}
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">The Phone Cave</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              Welcome to the shop !
            </p>
          </div>
        </div>
      </header>
      {/* Section */}
      <div className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row justify-content-center gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-3 row-cols-xl-4">
            {phones.map((phone) => {
              return (
                <div className="col mb-5">
                  <div className="card h-100">
                    {/* Product image */}
                    <img
                      className="card-img-top"
                      src={`./images/${phone.imageFileName}`}
                      alt="phone-img"
                    />
                    {/* Product details */}
                    <div className="card-body p-4">
                      <div className="card-title text-center">
                        {/* Product name */}
                        <h4 className="fw-bolder">{phone.name}</h4>
                        {/* Product price */}
                        <h5 className="text-muted">€ {phone.price}</h5>
                      </div>
                    </div>
                    {/* Product actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Link
                          className="btn btn-outline-dark mt-auto"
                          to={`/phone/${phone.id}`}
                        >
                          More details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
