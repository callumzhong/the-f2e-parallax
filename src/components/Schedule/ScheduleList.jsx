import propsTypes from "prop-types";
import ScheduleItem from "./ScheduleItem";

export default function ScheduleList({ items }) {
  console.log(items);
  return (
    <ul className="flex flex-wrap gap-10">
      {items.map((item) => (
        <ScheduleItem
          key={item.id}
          image={item.image}
          title={item.title}
          timeline={item.timeline}
          description={item.description}
        />
      ))}
    </ul>
  );
}

ScheduleList.propTypes = {
  items: propsTypes.arrayOf(propsTypes.objectOf(propsTypes.any)).isRequired,
};
