import gsap from "gsap";
import TitleSection from "../TitleSection/TitleSection";
import ScheduleDateLine from "./ScheduleDateLine";
import ScheduleList from "./ScheduleList";

export function HandleOfScheduleAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    gsap.set(".schedule-list li", {
      opacity: 0,
      y: 40,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#schedule-section",
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });

    tl.addLabel("start")
      .to(
        ".footer-section .map-now",
        {
          left: 225,
          top: 22,
        },
        "start"
      )
      .to(
        ".schedule-date-line .mask",
        {
          left: "100%",
        },
        "start"
      )
      .to(
        ".schedule-date-line-points li:nth-child(1) .mask",
        { height: 0 },
        "start+=1"
      )
      .to(
        ".footer-section .map-now",
        {
          left: 183,
          top: 62,
        },
        "start+=1"
      )
      .to(".schedule-list li:nth-child(1)", { opacity: 1, y: 0 }, "start+=1")
      .to(
        ".schedule-date-line-points li:nth-child(2) .mask",
        { height: 0 },
        "start+=2.5"
      )
      .to(".schedule-list li:nth-child(2)", { opacity: 1, y: 0 }, "start+=2.5")
      .to(
        ".schedule-date-line-points li:nth-child(3) .mask",
        { height: 0 },
        "start+=4"
      )
      .to(".schedule-list li:nth-child(3)", { opacity: 1, y: 0 }, "start+=4")
      .to(".schedule-list", { opacity: 0, y: -40 }, "start+=6")
      .to(".schedule-date-line-points", { opacity: 0, y: -40 }, "start+=6")
      .to(".schedule-date-line", { opacity: 0 }, "start+=6");
  });
}

export default function Schedule() {
  return (
    <section
      id="schedule-section"
      className="xl:min-h-screen xl:pb-[19.875rem]"
    >
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
