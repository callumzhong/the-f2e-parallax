import ImageDecorate09 from "@/assets/bg/bg_decorate_09.png";

export default function Flowers() {
  return (
    <div className="flower absolute -inset-x-5 bottom-0 -z-10 hidden xl:mx-auto xl:flex xl:items-center xl:justify-between">
      <img
        className="flower-left -mb-10 w-[9.375rem] origin-bottom rotate-[24deg]"
        src={ImageDecorate09}
        alt=""
      />
      <img
        className="flower-right -mb-10 w-[9.375rem] rotate-[-24deg]"
        src={ImageDecorate09}
        alt=""
      />
    </div>
  );
}
