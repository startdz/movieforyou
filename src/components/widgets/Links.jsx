import propTypes from "prop-types";

const Links = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

Links.propTypes = {
  children: propTypes.node,
  className: propTypes.string.isRequired,
};

export default Links;
