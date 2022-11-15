import clsx from "clsx";
import PropTypes from "prop-types";

export default function H4({ children, className }) {
  return (
    <h4
      className={clsx(
        `text-[20px] font-bold leading-relaxed md:text-[32px]`,
        className
      )}
    >
      {children}
    </h4>
  );
}

H4.defaultProps = {
  className: null,
};

H4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
