import PropTypes from "prop-types";
import { H4 } from "../Typography";

export default function Title({ children }) {
  return (
    <H4 className="mb-2 text-primary md:text-[20px] xl:text-[24px]">
      {children}
    </H4>
  );
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
