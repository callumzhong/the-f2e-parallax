import PropTypes from "prop-types";

export default function H4({ children }) {
  return (
    <h4 className="text-[20px] font-bold leading-relaxed md:text-[32px]">
      {children}
    </h4>
  );
}

H4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
