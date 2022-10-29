import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid justify-content-center">
          <Link to={"/phones"} className="text-decoration-none">
            <span className="navbar-brand mb-0 h1 fw-bold">The Phone Cave</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
