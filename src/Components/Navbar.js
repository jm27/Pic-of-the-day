import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ brand, children }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container  d-flex justify-content-between">
          <Link className="navbar-brand" to="/">
            {brand}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children}</ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
