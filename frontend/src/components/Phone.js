import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function Phone({ phoneId }) {
  const url = `http://localhost:8080/phones/${phoneId}`;
  const phone = useFetch(url);
  const [finalPhone, setFinalPhone] = useState();
  useEffect(() => {
    if (!phone) return;
    (async () => {
      const data = await import(`../assets/images/${phone.imageFileName}`);
      setFinalPhone({ ...phone, img: data });
    })();
  }, [phone]);
  if (!finalPhone) return <span>Loading...</span>;
  console.log(finalPhone)
  return (
    <div>
      <h2>{finalPhone.name}</h2>
      <p>{finalPhone.manufacturer}</p>
      <p>{finalPhone.description}</p>
      <p>{finalPhone.color}</p>
      <p>{finalPhone.price}</p>
      <p>{finalPhone.screen}</p>
      <p>{finalPhone.processor}</p>
      <p>{finalPhone.ram}</p>
      <p>{finalPhone.imageFileName}</p>
      <img src={finalPhone.img.default} width="200px" height="200px"></img>
    </div>
  );
}

export default Phone;
