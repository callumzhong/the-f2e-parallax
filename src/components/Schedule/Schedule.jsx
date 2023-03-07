import { forwardRef } from "react";
import TitleSection from "../TitleSection/TitleSection";
import ScheduleDateLine from "./ScheduleDateLine";
import ScheduleList from "./ScheduleList";
import GSAPanimation from "../GSAPanimation";

const ForwardRefComponent = forwardRef(function Schedule(_, ref) {
  return (
    <section ref={ref} id="schedule-section" className="xl:h-screen">
      <TitleSection className="schedule-section__title mx-auto mb-10 h-[4.5rem] w-full lg:hidden">
        重要時程
      </TitleSection>
      <div className="px-5 xl:mx-auto xl:mt-[min(7.81vh,5rem)] xl:px-0 2xl:w-[90rem]">
        <ScheduleList />
        <ScheduleDateLine />
      </div>
    </section>
  );
});

export default function Entry() {
  return (
    <GSAPanimation
      child={ForwardRefComponent}
      configs={[
        {
          conditions: "(min-width:1280px)",
          default: {
            target: ".schedule-list li",
            vars: {
              opacity: 0,
              y: 40,
            },
          },
          timeline: {
            scrollTrigger: {
              trigger: "#schedule-section",
              pin: true,
              start: "top top",
              end: "+=500",
              scrub: 1,
            },
          },
          animations: [
            {
              target: ".map-now",
              vars: {
                left: 225,
                top: 22,
              },
            },
            {
              target: ".schedule-date-line .mask",
              vars: {
                left: "100%",
              },
            },
            {
              target: ".map-now",
              vars: {
                left: 183,
                top: 62,
              },
              position: 0.5,
            },
            {
              target: ".schedule-date-line-points li .mask",
              vars: {
                height: 0,
              },
              position: [1, 2.5, 4],
            },
            {
              target: ".schedule-list li",
              vars: {
                opacity: 1,
                y: 0,
              },
              position: [1, 2.5, 4],
            },
            {
              target: ".schedule-list, .schedule-date-line-points",
              vars: {
                opacity: 0,
                y: -40,
              },
              position: 6,
            },
            {
              target: ".schedule-date-line",
              vars: {
                opacity: 0,
              },
              position: 6,
            },
          ],
        },
        {
          conditions: "(max-width:1279.98px)",
          default: [
            {
              target: ".schedule-section__title",
              vars: {
                opacity: 0,
                y: -100,
              },
            },
            {
              target: ".schedule-list li",
              vars: {
                opacity: 0,
              },
            },
          ],
          timeline: {
            scrollTrigger: {
              trigger: "#schedule-section",
              start: "top top",
              end: "+=800",
              scrub: 1,
            },
          },
          animations: [
            {
              target: ".schedule-list li:nth-child(2)",
              vars: {
                opacity: 1,
              },
              position: 0,
            },
            {
              target: ".schedule-list li:nth-child(3)",
              vars: {
                opacity: 1,
              },
              position: 1,
            },
            {
              target: ".encourage-section__text",
              vars: {
                scale: 1,
                y: 0,
                opacity: 1,
              },
              position: 2,
            },
          ],
        },
      ]}
    />
  );
}
