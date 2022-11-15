import PropTypes from "prop-types";

export default function H2({ children, className }) {
  return (
    <h2
      className={`text-[28px] font-bold leading-normal md:text-[60px] ${className}`}
    >
      {children}
    </h2>
  );
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
