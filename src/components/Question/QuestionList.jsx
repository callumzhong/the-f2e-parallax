import PropTypes from "prop-types";
import QuestionItem from "./QuestionItem";

export default function QuestionList({ items }) {
  return (
    <ul className="flex flex-col gap-4 px-5">
      {items.map((item) => (
        <QuestionItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </ul>
  );
}

QuestionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
