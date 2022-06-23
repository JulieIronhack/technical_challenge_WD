import React, { useEffect, useState } from "react";
import { getPhoneService } from "../services/phone.services";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Phone({ id }) {
  const [phone, setPhone] = useState(null);
  const [fetching, setFetching] = useState(null);
  let name, manufacturer, description, color, price, imageFileName, screen, processor, ram
  useEffect(() => {
    getPhone(id);
  }, [id]);

  const getPhone = async (id) => {
    setFetching(true);
    const phone = await getPhoneService(id);
    setPhone(phone.data);
    setTimeout(() => {
        setFetching(false);
      }, 2000);
  };

  if(fetching===null) return <p>Select a phone to view more details</p>
  else if (fetching === true) return <ClipLoader color={color} loading={fetching} css={override} size={150} />
  

  return (

<div className="card text-left">
  <img src={phone.imageFileName} class="card-img-top" alt={phone.name}/>
  <div className="card-body">
    <h5 className="card-title">{phone.name}</h5>
    <p className="card-text">{phone.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Color: {phone.color}</li>
    <li className="list-group-item">Price: {phone.price}</li>
    <li className="list-group-item">Screen: {phone.screen}</li>
    <li className="list-group-item">Processor: {phone.processor}</li>
    <li className="list-group-item">Ram: {phone.ram}</li>
  </ul>
</div>
    
  );
}

export default Phone;
