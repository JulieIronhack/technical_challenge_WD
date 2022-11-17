import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/phones">
        <button>Phones</button>
      </Link>
    </nav>
  );
}

export default Navbar;