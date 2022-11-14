import PropTypes from "prop-types";

export default function H2({ children, className }) {
  const classes = `text-[28px] font-bold leading-normal md:text-[60px] ${className}`;
  return <h2 className={classes}>{children}</h2>;
}

H2.defaultProps = {
  className: null,
};

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
