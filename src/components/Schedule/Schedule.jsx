import TitleSection from "../TitleSection/TitleSection";
import ScheduleList from "./ScheduleList";

export default function Schedule() {
  return (
    <section className="pb-[3.8037rem] xl:min-h-screen xl:pt-[min(3.91vh,2.5rem)] xl:pb-[19.875rem]">
      <TitleSection className="mb-1 h-[4.5rem] text-center xl:h-[min(14.75vh,9.4375rem)]  ">
        年度最強合作，三大主題來襲
      </TitleSection>
      <p className="mb-10 text-center text-mobile-h5 text-secondary-dark xl:mb-[6.25rem] xl:text-desktop-h5">
        各路廠商強強聯手
        <br />
        共同設計出接地氣的網頁互動挑戰關卡
      </p>
      <div className="mx-auto px-5 xl:w-[min(81.94vw,73.75rem)] 2xl:w-[min(74.9vw,89.875rem)]">
        <ScheduleList />
      </div>
    </section>
  );
}
