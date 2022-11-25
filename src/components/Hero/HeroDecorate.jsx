import ImageReadyFrame from "@/assets/main/ready_frame.png";
import ImageReady1 from "@/assets/main/ready_1.png";
import ImageReady2 from "@/assets/main/ready_2.png";
import ImageReady3 from "@/assets/main/ready_3.png";

export default function HeroDecorate() {
  return (
    <>
      <div className="absolute top-2/3 -left-6 -z-10 -mt-14 h-[73px] w-[113px] -translate-y-1/2 bg-decorate_01 bg-cover lg:left-24 lg:h-[280px] lg:w-[430px]" />
      <div className="absolute top-2/3 right-0 -z-10 -mt-14 h-[73px] w-[113px] -translate-y-1/2 bg-decorate_05 bg-cover lg:-right-6 lg:h-[255px] lg:w-[485px]" />
      <div className="absolute top-3/4 right-0 -mt-4 -translate-y-1/2 lg:top-[60%]">
        <p className="hero-section__text absolute inset-x-0 -top-5 -ml-3 text-center text-sm font-bold tracking-wider text-highlight lg:-top-10 lg:text-[32px] lg:leading-relaxed">
          READY?
        </p>
        <img
          className="relative z-10 w-[120px] lg:w-[275px]"
          src={ImageReadyFrame}
          alt=""
        />
        <img
          className="hero-section__ready1 absolute top-[14px] right-7 w-5 lg:right-[62px] lg:top-[36px] lg:w-[48px]"
          src={ImageReady1}
          alt=""
        />
        <img
          className="hero-section__ready2 absolute top-[14px] right-14 w-5 lg:top-[34px] lg:right-[128px] lg:w-[48px]"
          src={ImageReady2}
          alt=""
        />
        <img
          className="hero-section__ready3 absolute left-[15px] top-[14px] w-[21px] lg:top-[34px] lg:left-[36px] lg:w-[48px] "
          src={ImageReady3}
          alt=""
        />
      </div>
    </>
  );
}
