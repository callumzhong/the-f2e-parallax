import TitleSection from "../TitleSection/TitleSection";
import ScheduleDateLine from "./ScheduleDateLine";
import ScheduleList from "./ScheduleList";

export default function Schedule() {
  return (
    <section className="xl:min-h-screen xl:pb-[19.875rem]">
      <TitleSection className="mx-auto mb-10 h-[4.5rem] w-full lg:hidden">
        重要時程
      </TitleSection>
      <div className="px-5 xl:mx-auto xl:px-0 2xl:w-[90rem]">
        <ScheduleList />
        <ScheduleDateLine />
      </div>
    </section>
  );
}
