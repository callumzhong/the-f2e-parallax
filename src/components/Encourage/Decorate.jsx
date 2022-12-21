import ImageDecorate03 from "@/assets/bg/bg_decorate_03.png";
import ImageDecorate07 from "@/assets/bg/bg_decorate_07.png";

export default function Decorate() {
  return (
    <div className="-z-10 hidden w-screen overflow-hidden xl:ml-10 xl:flex xl:items-center xl:justify-center xl:gap-[27.625rem]">
      <img className="w-[23rem]" src={ImageDecorate03} alt="" />
      <img className="w-[28.125rem]" src={ImageDecorate07} alt="" />
    </div>
  );
}
