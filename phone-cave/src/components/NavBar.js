import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light alert-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/phones">
          The Phone Cave
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;