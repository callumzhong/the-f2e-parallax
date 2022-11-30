import clsx from "clsx";
import propTypes from "prop-types";
import Button from "../Button";
import { H2 } from "../Typography";

export default function ScheduleItem({
  className,
  title,
  timeline,
  image,
  description,
}) {
  return (
    <li className={clsx("relative w-full text-center lg:w-4/12", className)}>
      {image.type === "PATH" ? (
        <img className="mx-auto mb-2 w-[140px]" src={image.path} alt="" />
      ) : (
        image.element
      )}
      <H2 className="mb-3 text-highlight">{title}</H2>
      <Button className="mb-3" color="primary" size="lg">
        {timeline}
      </Button>
      {description}
    </li>
  );
}

ScheduleItem.defaultProps = {
  className: null,
};

ScheduleItem.propTypes = {
  title: propTypes.string.isRequired,
  timeline: propTypes.string.isRequired,
  className: propTypes.string,
  image: propTypes.shape({
    type: propTypes.oneOf(["PATH", "ELEMENT"]),
    path: propTypes.string,
    element: propTypes.node,
  }).isRequired,
  description: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};
