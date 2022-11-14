import PropTypes from "prop-types";

export default function H1({ children, className }) {
  const classes = `text-[20px] font-bold leading-normal md:text-[32px] ${className}`;
  return <h1 className={classes}>{children}</h1>;
}

H1.defaultProps = {
  className: null,
};

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
