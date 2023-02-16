import { Link } from "react-router-dom";
import "./components.css/Navbar.css";

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
