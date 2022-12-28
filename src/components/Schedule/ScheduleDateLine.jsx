import ImageDateWeekLine from "@/assets/main/date_weekLine.png";
import ImageDateLine from "@/assets/main/date_line.png";

export default function ScheduleDateLine() {
  return (
    <div className="-mt-8 hidden xl:top-0 xl:block">
      <ul className="schedule-date-line-points xl:flex xl:justify-center xl:gap-[12%]">
        <li className="relative w-[min(16.9169rem)]">
          <img
            className="mx-auto h-[8.75rem] w-8"
            src={ImageDateWeekLine}
            alt=""
          />
          <div className="mask absolute inset-0 bg-secondary" />
        </li>
        <li className="relative -mt-9 w-[min(16.9169rem)]">
          <img
            className="mx-auto h-[8.75rem] w-8"
            src={ImageDateWeekLine}
            alt=""
          />
          <div className="mask absolute inset-0 bg-secondary" />
        </li>
        <li className="relative w-[min(16.9169rem)]">
          <img
            className="mx-auto h-[8.75rem] w-8"
            src={ImageDateWeekLine}
            alt=""
          />
          <div className="mask absolute inset-0 bg-secondary" />
        </li>
      </ul>
      <div className="schedule-date-line relative bottom-14">
        <img src={ImageDateLine} alt="" />
        <div className="mask absolute inset-0 bg-secondary" />
      </div>
    </div>
  );
}
