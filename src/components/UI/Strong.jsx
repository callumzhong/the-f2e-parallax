import PropTypes from "prop-types";

export default function Strong({ children, className }) {
  const classes = `text-[18px] font-bold leading-relaxed md:text-[24px] ${className}`;

  return <strong className={classes}>{children}</strong>;
}
Strong.defaultProps = {
  className: null,
};

Strong.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
