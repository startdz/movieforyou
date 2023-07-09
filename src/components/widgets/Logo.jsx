import React from "react";
import propsTypes, { string } from "prop-types";
import { NavbarLogo } from "../../constants/var";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={NavbarLogo.url}>
      <img src={NavbarLogo.src} alt={NavbarLogo.src} className={"w-28"} />
    </Link>
  );
};

export default Logo;
