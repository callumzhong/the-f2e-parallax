import clsx from "clsx";
import PropTypes from "prop-types";
import classes from "./Title.module.css";

export default function Title({ children }) {
  return (
    <div
      className={clsx(
        `mt-6 mb-10 pt-3 pb-7 text-center text-2xl font-bold leading-normal text-primary`,
        classes.title
      )}
    >
      {children}
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
