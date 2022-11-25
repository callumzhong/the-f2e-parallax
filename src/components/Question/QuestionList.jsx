import PropTypes from "prop-types";
import QuestionItem from "./QuestionItem";

export default function QuestionList({ items }) {
  return (
    <ul className="mx-auto flex flex-col flex-wrap items-center gap-4 px-5 md:w-[61.97%] lg:w-full lg:flex-row lg:gap-0">
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
