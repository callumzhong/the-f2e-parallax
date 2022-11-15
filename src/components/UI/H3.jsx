import PropTypes from "prop-types";
import clsx from "clsx";

export default function H3({ children, className }) {
  return (
    <h3
      className={clsx(
        `text-[24px] font-bold leading-relaxed md:text-[44px] md:leading-normal`,
        className
      )}
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
