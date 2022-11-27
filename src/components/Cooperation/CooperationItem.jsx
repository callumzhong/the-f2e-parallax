import clsx from "clsx";
import PropTypes from "prop-types";
import JoinButton from "../JoinButton";
import { H4 } from "../Typography";

export default function CooperationItem({ id, title, image, isReverse }) {
  return (
    <li
      className={clsx("mx-auto flex items-center gap-5", {
        "flex-row-reverse": isReverse,
      })}
      key={id}
    >
      <div className="w-1/2 lg:w-full">
        <JoinButton href="google" className="mb-4" />
        <H4 className="whitespace-nowrap text-center text-primary">{title}</H4>
      </div>
      <div className="w-1/2 lg:hidden">
        <img src={image.path} alt="" />
      </div>
    </li>
  );
}

CooperationItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  isReverse: PropTypes.bool.isRequired,
};
