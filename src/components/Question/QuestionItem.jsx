import PropTypes from "prop-types";
import H4 from "../UI/H4";

export default function QuestionItem({ items }) {
  return (
    <ul className="flex flex-col gap-4 px-5">
      {items.map((item) => (
        <li key={item.id}>
          <H4 className="text-center text-highlight">{item.title}</H4>
          <picture>
            {item.largePath && (
              <source
                media={`(min-width:${item.image.largeMedia}px)`}
                srcSet={item.image.largePath}
              />
            )}

            <img src={item.image.path} alt="" />
          </picture>
        </li>
      ))}
    </ul>
  );
}

QuestionItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.node.isRequired,
    })
  ).isRequired,
};
