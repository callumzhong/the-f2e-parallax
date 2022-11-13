import PropTypes from "prop-types";

export default function H5({ children }) {
  return (
    <h5 className="text-[18px] font-bold leading-relaxed md:text-[24px]">
      {children}
    </h5>
  );
}

H5.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
