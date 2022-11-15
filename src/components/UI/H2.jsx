import PropTypes from "prop-types";
import clsx from "clsx";

export default function H2({ children, className }) {
  return (
    <h2
      className={clsx(
        `text-[28px] font-bold leading-normal md:text-[60px]`,
        className
      )}
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
