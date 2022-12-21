import ImageDateWeekLine from "@/assets/main/date_weekLine.png";
import ImageDateLine from "@/assets/main/date_line.png";

export default function ScheduleDateLine() {
  return (
    <div className="-mt-8 hidden xl:top-0 xl:block">
      <ul className="xl:flex xl:justify-center xl:gap-[12%]">
        <li className="w-[min(16.9169rem)]">
          <img
            className="mx-auto h-[8.75rem] w-8"
            src={ImageDateWeekLine}
            alt=""
          />
        </li>
        <li className="-mt-9 w-[min(16.9169rem)]">
          <img
            className="mx-auto h-[8.75rem] w-8"
            src={ImageDateWeekLine}
            alt=""
          />
        </li>
        <li className="w-[min(16.9169rem)]">
          <img
            className="mx-auto h-[8.75rem] w-8"
            src={ImageDateWeekLine}
            alt=""
          />
        </li>
      </ul>
      <img
        className="relative inset-x-0 bottom-14"
        src={ImageDateLine}
        alt=""
      />
    </div>
  );
}
