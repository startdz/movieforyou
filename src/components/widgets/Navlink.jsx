import { Link } from "react-router-dom";
import { NavbarLinks } from "../../constants/var";

const Navlink = () => {
  return (
    <li>
      {NavbarLinks.map((link) => (
        <Link to={link.url} key={link.titleLink} className="mr-4">
          {link.titleLink}
        </Link>
      ))}
    </li>
  );
};

export default Navlink;
