import React from "react";
import { Link } from "react-router-dom";

function PhoneList({ id, name, manufacturer, imageFileName }) {
  return (
    <>
      <div className="card" style={{ width: 400 }}>
        <img
          src={`../../assets/images/${imageFileName}`}
          className="card-img-top align-self-center"
          alt={name}
          style={{ maxHeight: 200, width: 200 }}
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            {manufacturer} {name}
          </h5>
        </div>
        <Link to={`/phones/${id}`}>
            <button className="btn btn-success m-2 text-center text-decoration-none">
              I want it!
            </button>
        </Link>
      </div>
    </>
  );
}

export default PhoneList;
