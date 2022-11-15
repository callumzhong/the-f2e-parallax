import PropTypes from "prop-types";

export default function H3({ children, className }) {
  return (
    <h3
      className={`text-[24px] font-bold leading-relaxed md:text-[44px] md:leading-normal ${className}`}
    >
      {children}
    </h3>
  );
}

H3.defaultProps = {
  className: null,
};

H3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
