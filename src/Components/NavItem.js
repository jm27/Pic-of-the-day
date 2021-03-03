import React from "react";

const NavItem = ({ href, tooltip, children }) => {
  return (
    <>
      <li className="nav-item">
        <a
          className="nav-link "
          aria-current="page"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          data-toggle="tooltip"
          data-placement="bottom"
          style={{
            animationDelay: "0ms",
            animationDuration: "800ms",
            padding: "0",
          }}
          data-original-title={tooltip}
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default NavItem;
