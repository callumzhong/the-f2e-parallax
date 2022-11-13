import PropTypes from "prop-types";

export default function H3({ children }) {
  return (
    <h3 className="text-[24px] font-bold leading-relaxed md:text-[44px] md:leading-normal">
      {children}
    </h3>
  );
}

H3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
