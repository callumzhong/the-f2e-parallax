import PropTypes from "prop-types";
import CooperationItem from "./CooperationItem";

export default function CooperationList({ items }) {
  return (
    <ul className="mx-auto flex flex-col gap-5 px-5 md:w-[61.97%] md:px-0">
      {items.map((item, idx) => (
        <CooperationItem
          key={item.id}
          isReverse={idx % 2 === 0}
          id={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </ul>
  );
}

CooperationList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
