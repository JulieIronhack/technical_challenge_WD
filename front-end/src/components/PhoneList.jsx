import React from "react";
import { Link } from "react-router-dom";
import PhoneDetail from "./PhoneDetail";

const PhoneList = ({ phones }) => {
  return (
    <div className="layout">
      <div className="list">
        <h2>Our Phones</h2>
        <div>
          {phones.map((phone) => {
            return (
              <Link to={`${phone._id}`}>
                <div className="card" key={phone.id}>
                  <h3>{phone.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="detail">
        <PhoneDetail />
      </div>
    </div>
  );
};

export default PhoneList;
