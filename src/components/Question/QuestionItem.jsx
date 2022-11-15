import PropTypes from "prop-types";
import H4 from "../UI/H4";

export default function QuestionItem({ items }) {
  return (
    <ul className="flex flex-col gap-4 px-5">
      {items.map((item) => (
        <li key={item.id}>
          <H4 className="text-center text-highlight">{item.title}</H4>
          {item.image}
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
