import PropTypes from "prop-types";

const Main = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};

Main.PropTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
};

export default Main;
