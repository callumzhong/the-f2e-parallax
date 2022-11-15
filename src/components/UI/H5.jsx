import PropTypes from "prop-types";

export default function H5({ children, className }) {
  return (
    <h5
      className={`text-[18px] font-bold leading-relaxed md:text-[24px] ${className}`}
    >
      {children}
    </h5>
  );
}
H5.defaultProps = {
  className: null,
};

H5.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
