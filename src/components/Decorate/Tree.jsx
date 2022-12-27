import ImageDecorate08 from "@/assets/bg/bg_decorate_08.png";
import ImageDecorate04 from "@/assets/bg/bg_decorate_04.png";

export default function Tree() {
  return (
    <div className="relative -z-20 flex justify-between">
      <img
        className="-mt-16 h-[min(53.52vh,34.25rem)]"
        src={ImageDecorate04}
        alt=""
      />
      <img
        className="-mt-10 h-[min(50.98vh,32.625rem)]"
        src={ImageDecorate08}
        alt=""
      />
    </div>
  );
}
