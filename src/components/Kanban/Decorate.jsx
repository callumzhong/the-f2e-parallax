import ImageReadyFrame from "@/assets/main/ready_frame.png";
import ImageReady1 from "@/assets/main/ready_1.png";
import ImageReady2 from "@/assets/main/ready_2.png";
import ImageReady3 from "@/assets/main/ready_3.png";
import ImageDecorate05 from "@/assets/bg/bg_decorate_05.png";
import ImageDecorate01 from "@/assets/bg/bg_decorate_01.png";

export default function Decorate() {
  return (
    <>
      <div className="absolute bottom-[69px] -z-10 w-screen overflow-hidden md:bottom-[41px] xl:inset-x-0 xl:bottom-auto xl:mx-auto xl:-mt-[49px]">
        <img
          className="relative -left-[22px] w-[113px] max-w-none md:w-[271.89px] xl:left-[137px] xl:w-[430px] 2xl:left-[7.39%]"
          src={ImageDecorate01}
          alt=""
        />
      </div>
      <div className="absolute bottom-[76px] -z-10  w-screen  overflow-hidden md:bottom-[57.84px] xl:inset-x-0 xl:bottom-auto xl:mx-auto xl:-mt-[17px]">
        <img
          className="relative -right-[35px] ml-auto w-[127px] max-w-none md:w-[305.49px] xl:w-[485px] 2xl:right-[4.73%]"
          src={ImageDecorate05}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 z-10 -mb-4 flex w-screen flex-col items-end xl:bottom-auto xl:mb-auto xl:-mt-10">
        <p className="hero-section__text mr-[38.82px] text-sm font-bold tracking-wider text-highlight xl:-top-10 xl:mr-[88px] xl:text-[32px] xl:leading-relaxed">
          READY?
        </p>
        <img
          className="right-0 bottom-0 z-10 w-[120px] xl:w-[275px]"
          src={ImageReadyFrame}
          alt=""
        />
        <img
          className="hero-section__ready3 absolute right-[84.35px] bottom-[13.09px] w-[21.38px] xl:right-[194px] xl:bottom-[30px] xl:w-[49px]"
          src={ImageReady3}
          alt=""
        />
        <img
          className="hero-section__ready2 absolute bottom-[13.09px] right-[56.29px] w-[21.38px] xl:right-[129px] xl:bottom-[30px] xl:w-[49px]"
          src={ImageReady2}
          alt=""
        />
        <img
          className="hero-section__ready1 absolute bottom-[13.09px] right-[27.93px] w-[21.38px] xl:right-[64px] xl:bottom-[30px] xl:w-[49px]"
          src={ImageReady1}
          alt=""
        />
      </div>
    </>
  );
}
