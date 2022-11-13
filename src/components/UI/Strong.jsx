import PropTypes from "prop-types";

export default function Strong({ children }) {
  return (
    <strong className="text-[18px] font-bold leading-relaxed md:text-[24px]">
      {children}
    </strong>
  );
}

Strong.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
