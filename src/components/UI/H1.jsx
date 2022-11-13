import PropTypes from "prop-types";

export default function H1({ children }) {
  return (
    <h1 className="text-[20px] font-bold leading-normal md:text-[32px]">
      {children}
    </h1>
  );
}

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
