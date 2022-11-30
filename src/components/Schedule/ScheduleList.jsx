import propsTypes from "prop-types";
import ScheduleItem from "./ScheduleItem";
import ImageDateLine from "@/assets/main/date_line.png";
import ImageDateWeekLine from "@/assets/main/date_weekLine.png";

export default function ScheduleList({ items }) {
  return (
    <>
      <ul
        className="flex flex-wrap gap-10 bg-secondary pb-4
       lg:gap-0"
      >
        {items.map((item) => (
          <ScheduleItem
            key={item.id}
            className={item.className}
            image={item.image}
            title={item.title}
            timeline={item.timeline}
            description={item.description}
          />
        ))}
      </ul>
      <div className="relative -z-10 -mt-14 hidden justify-center lg:flex">
        <div className="absolute left-0 top-10 w-4/12">
          <img className="mx-auto w-8" src={ImageDateWeekLine} alt="" />
        </div>
        <div className="w-4/12">
          <img className="mx-auto w-8" src={ImageDateWeekLine} alt="" />
        </div>
        <div className="absolute right-0 top-10 w-4/12">
          <img className="mx-auto w-8" src={ImageDateWeekLine} alt="" />
        </div>
        <div className="absolute inset-x-0 -bottom-20">
          <img src={ImageDateLine} alt="" />
        </div>
      </div>
    </>
  );
}

ScheduleList.propTypes = {
  items: propsTypes.arrayOf(propsTypes.objectOf(propsTypes.any)).isRequired,
};
