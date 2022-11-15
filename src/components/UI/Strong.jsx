import PropTypes from "prop-types";
import clsx from "clsx";

export default function Strong({ children, className }) {
  return (
    <strong
      className={clsx(
        `text-[18px] font-bold leading-relaxed md:text-[24px]`,
        className
      )}
    >
      {children}
    </strong>
  );
}
Strong.defaultProps = {
  className: null,
};

Strong.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
