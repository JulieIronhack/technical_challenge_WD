import React, { useEffect, useState } from "react";

function PhoneList({ phoneList, showDetails }) {
  const [finalList, setFinalList] = useState();
  useEffect(() => {
    if (!phoneList) return;
    (async () => {
      console.log(phoneList);
      const data = [];
      for (const phone of phoneList) {
        let placeholder = await import(
          `../assets/images/${phone.imageFileName}`
        );
        data.push({ ...phone, img: placeholder });
      }
      setFinalList(data);
    })();
  }, [phoneList]);


  return (
    <div>
      {finalList &&
        finalList.map((phone) => {
          return (
            <button onClick={()=>showDetails(phone.id)}>
              <h2>{phone.name}</h2>
              <p>{phone.manufacturer}</p>
              <p>{phone.description}</p>
              <p>{phone.color}</p>
              <p>{phone.price}</p>
              <p>{phone.screen}</p>
              <p>{phone.processor}</p>
              <p>{phone.ram}</p>
              <p>{phone.imageFileName}</p>
              <img src={phone.img.default} width="200px" height="200px"></img>
            </button>
          );
        })}
    </div>
  );
}

export default PhoneList;
