import PropTypes from "prop-types";

export default function H4({ children, className }) {
  const classes = `text-[20px] font-bold leading-relaxed md:text-[32px] ${className}`;
  return <h4 className={classes}>{children}</h4>;
}

H4.defaultProps = {
  className: null,
};

H4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
