import ImageFinishLineLeft from "@/assets/main/finishLine_l.png";
import ImageFinishLineRight from "@/assets/main/finishLine_r.png";

export default function FinishLine() {
  return (
    <div className="line absolute inset-0 bottom-[10.2188rem] flex overflow-hidden">
      <img
        className="relative top-10 -left-[5rem] w-[67.71vw]"
        src={ImageFinishLineLeft}
        alt=""
      />
      <img
        className="relative top-10 -left-[14.375rem] w-[67.71vw]"
        src={ImageFinishLineRight}
        alt=""
      />
    </div>
  );
}
