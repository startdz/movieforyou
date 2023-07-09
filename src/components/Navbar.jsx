import React from "react";
import propTypes from "prop-types";

const Navbar = ({ children, className }) => {
  return (
    <nav className={className}>
        {children}
    </nav>
  );
};

Navbar.propTypes = {
  children: propTypes.node,
  className: propTypes.string.isRequired,
};

export default Navbar;
