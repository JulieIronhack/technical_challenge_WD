import { Link } from "react-router-dom";

function PhoneCard({ name, imageFileName, _id }) {
  return (
    <div>
      <Link to={`/phones/${_id}`}>
        <div>
        <h3>I'm a phone</h3>
          <img src={imageFileName} alt="phone" />
          <h2>{name}</h2>
        </div>
      </Link>
    </div>
  );
}

export default PhoneCard;