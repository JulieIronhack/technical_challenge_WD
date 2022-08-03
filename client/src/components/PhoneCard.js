import React, { useEffect, useState } from "react";

function PhoneCard({
  id,
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
  const [image, setImage] = useState();

  useEffect(() => {
    const getImage = async () => {
      if (!imageFileName) return;
      let imageURL = await import(`../assets/images/${imageFileName}`);
      setImage(imageURL.default);
    };
    getImage();
  }, [imageFileName]);

  return (
    <div className="Phone">
      <a href={`/${id}`}>
        <h1>{name}</h1>
      </a>
      <img src={image} alt={name} />
      <h3>{manufacturer}</h3>
      <article>
        <b>About</b>: {description}
      </article>
      <p>
        <b>Color</b>: {color}
      </p>
      <p>
        <b>Price</b>: {price}$
      </p>
      <p>
        <b>Screen details</b>: {screen}
      </p>
      <p>
        <b>Processor details</b>: {processor}
      </p>
      <p>
        <b>RAM Memory</b>: {ram}
      </p>
    </div>
  );
}

export default PhoneCard;
