import ImageDecorate08 from "@/assets/bg/bg_decorate_08.png";
import ImageDecorate04 from "@/assets/bg/bg_decorate_04.png";

export default function Tree() {
  return (
    <div className="absolute -inset-x-28 -bottom-6 -z-20 hidden justify-between xl:flex">
      <img
        className="tree-left h-[min(53.52vh,34.25rem)] origin-bottom-right"
        src={ImageDecorate04}
        alt=""
      />
      <img
        className="tree-right h-[min(50.98vh,32.625rem)] origin-bottom-left"
        src={ImageDecorate08}
        alt=""
      />
    </div>
  );
}
