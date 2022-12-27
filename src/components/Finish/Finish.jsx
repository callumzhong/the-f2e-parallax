import ImageFinish from "@/assets/main/finish.png";
import ImageFinishLineLeft from "@/assets/main/finishLine_l.png";
import ImageFinishLineRight from "@/assets/main/finishLine_r.png";

export default function Finish() {
  return (
    <section className="relative hidden h-screen xl:block">
      <img src={ImageFinish} alt="" />
      <div className="absolute bottom-[10.2188rem] z-20 flex overflow-hidden">
        <img className="w-[67.71vw]" src={ImageFinishLineLeft} alt="" />
        <img
          className="-ml-[14.375rem] w-[67.71vw]"
          src={ImageFinishLineRight}
          alt=""
        />
      </div>
    </section>
  );
}
