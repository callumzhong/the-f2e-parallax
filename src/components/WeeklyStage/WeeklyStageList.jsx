import PropTypes from "prop-types";
import WeeklyStageItem from "./WeeklyStageItem";

export default function WeeklyStageList({ items }) {
  return (
    <ul className="flex flex-col gap-11">
      {items.map((item) => (
        <WeeklyStageItem
          key={item.id}
          image={item.image}
          master={item.master}
          subTitle={item.subTitle}
          title={item.title}
          url={item.url}
          weekly={item.weekly}
        />
      ))}
    </ul>
  );
}

WeeklyStageList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
