import PropTypes from "prop-types";

export default function H2({ children }) {
  return (
    <h2 className="text-[28px] font-bold leading-normal md:text-[60px]">
      {children}
    </h2>
  );
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
