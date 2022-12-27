import ImageReadyFrame from "@/assets/main/ready_frame.png";
import ImageReady1 from "@/assets/main/ready_1.png";
import ImageReady2 from "@/assets/main/ready_2.png";
import ImageReady3 from "@/assets/main/ready_3.png";

export default function ReadyFrame() {
  return (
    <div className="absolute bottom-0 z-10 -mb-4 flex w-screen flex-col items-end xl:bottom-auto xl:mb-auto xl:-mt-10">
      <p className="hero-section__text mr-[2.4263rem] text-sm font-bold tracking-wider text-highlight xl:-top-10 xl:mr-[5.5rem] xl:text-[2rem] xl:leading-[2.8125rem]">
        READY?
      </p>
      <img
        className="right-0 bottom-0 z-10 w-[7.5rem] xl:w-[17.1875rem]"
        src={ImageReadyFrame}
        alt=""
      />
      <img
        className="hero-section__ready3 absolute right-[5.2719rem] bottom-[0.8181rem] w-[1.3362rem] xl:right-[12.125rem] xl:bottom-[1.875rem] xl:w-[3.0625rem]"
        src={ImageReady3}
        alt=""
      />
      <img
        className="hero-section__ready2 absolute bottom-[0.8181rem] right-[3.5181rem] w-[1.3362rem] xl:right-[8.0625rem] xl:bottom-[1.875rem] xl:w-[3.0625rem]"
        src={ImageReady2}
        alt=""
      />
      <img
        className="hero-section__ready1 absolute bottom-[0.8181rem] right-[1.7456rem] w-[1.3362rem] xl:right-[4rem] xl:bottom-[1.875rem] xl:w-[3.0625rem]"
        src={ImageReady1}
        alt=""
      />
    </div>
  );
}
