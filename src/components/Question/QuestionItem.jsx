import PropTypes from "prop-types";
import { H4 } from "../Typography";

export default function QuestionItem({ id, title, image }) {
  return (
    <li key={id}>
      <H4 className="text-center text-highlight">{title}</H4>
      <picture>
        {image.largePath && (
          <source
            media={`(min-width:${image.largeMedia}px)`}
            srcSet={image.largePath}
          />
        )}
        <img src={image.path} alt="" />
      </picture>
    </li>
  );
}

QuestionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    largePath: PropTypes.string,
    largeMedia: PropTypes.number,
    path: PropTypes.string.isRequired,
  }).isRequired,
};
