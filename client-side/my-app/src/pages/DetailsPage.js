import React from "react";

export default function DetailsPage({ phone }) {
  console.log(phone);
  return (
    <div>
      {phone && (
        <div>
          {phone.name}€ {phone.price},-
        </div>
      )}
    </div>
  );
}
