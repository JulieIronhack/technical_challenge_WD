import React from "react";

function PhoneCardDetail({
  name,
  manufacturer,
  description,
  color,
  price,
  imageFileName,
  screen,
  processor,
  ram,
}) {
  return (
    <div className="card mb-3" style={{ maxWidth: 500 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`../../assets/images/${imageFileName}`}
            className="img-fluid rounded-start my-5"
            alt={name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-center">
              {manufacturer} {name}
            </h5>
            <br />
            <p className="card-text fw-light">{description}</p>
            <br />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Color: {color}</li>
              <li className="list-group-item">Screen: {screen}</li>
              <li className="list-group-item">Processor: {processor}</li>
              <li className="list-group-item">Ram: {ram}</li>
            </ul>
            <br />
            <h6 className="card-text text-center fw-bold mb-3">
              Price: {price} €
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneCardDetail;
