import React from "react";
import favicon from "../imgs/favicon.png";

const Footer = () => {
  return (
    <>
      <nav className="navbar footer fixed-bottom  navbar-light bg-light mt-5">
        <div className="container  d-flex justify-content-center text-center">
          <a
            className="navbar-brand"
            href="https://api.nasa.gov/"
            aria-current="page"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<img className="footer-logo" alt="Nasa-Logo" src={favicon}></img>}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Footer;
