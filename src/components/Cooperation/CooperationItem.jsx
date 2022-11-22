import clsx from "clsx";
import PropTypes from "prop-types";
import JoinButton from "../JoinButton";
import { H4 } from "../Typography";

export default function CooperationItem({ id, title, image, isReverse }) {
  return (
    <li
      className={clsx("mx-auto flex items-center justify-center gap-5", {
        "flex-row-reverse": isReverse,
      })}
      key={id}
    >
      <div className="w-2/6">
        <JoinButton href="google" className="mb-4" />
        <H4 className="text-center text-primary">{title}</H4>
      </div>
      <div className="w-2/6">
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
