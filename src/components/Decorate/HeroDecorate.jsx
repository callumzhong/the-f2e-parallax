import ImageReadyFrame from "@/assets/main/ready_frame.png";

import ImageReady1 from "@/assets/main/ready_1.png";
import ImageReady2 from "@/assets/main/ready_2.png";
import ImageReady3 from "@/assets/main/ready_3.png";

export default function HeroDecorate() {
  return (
    <>
      <div className="absolute top-2/3 -left-6 -mt-14 h-[73px] w-[113px] -translate-y-1/2 bg-decorate_01 bg-cover" />
      <div className="absolute top-2/3 right-0 -mt-14 h-[73px] w-[113px] -translate-y-1/2 bg-decorate_05 bg-cover" />
      <div className="absolute top-3/4 right-0 -mt-4 -translate-y-1/2">
        <p className="absolute -top-5 left-6 text-sm font-bold tracking-wider text-highlight">
          READY?
        </p>
        <img className="relative z-10 w-[120px]" src={ImageReadyFrame} alt="" />
        <img
          className="absolute top-[14px] right-7 w-5"
          src={ImageReady1}
          alt=""
        />
        <img
          className="absolute top-[14px] right-14 w-5"
          src={ImageReady2}
          alt=""
        />
        <img
          className="absolute left-[15px] top-[14px] w-[21px]"
          src={ImageReady3}
          alt=""
        />
      </div>
    </>
  );
}
