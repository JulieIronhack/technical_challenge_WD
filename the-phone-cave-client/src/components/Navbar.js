import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">
        <button className="navbarButton">Home</button>
      </Link>

      <Link to="/phones">
        <button className="navbarButton">All Phones</button>
      </Link>
    </>
  );
}

export default Navbar;
