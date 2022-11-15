import PropTypes from "prop-types";
import clsx from "clsx";

export default function H1({ children, className }) {
  return (
    <h1
      className={clsx(
        `text-[20px] font-bold leading-normal md:text-[32px]`,
        className
      )}
    >
      {children}
    </h1>
  );
}

H1.defaultProps = {
  className: null,
};

H1.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
