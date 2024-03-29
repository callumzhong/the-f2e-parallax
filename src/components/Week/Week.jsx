import { forwardRef } from "react";
import TitleSection from "../TitleSection/TitleSection";
import WeekList from "./WeekList";
import GSAPanimation from "../GSAPanimation";

const ForwardRefComponent = forwardRef(function Week(_, ref) {
  return (
    <section
      ref={ref}
      id="week-section"
      className="pb-[3.75rem] xl:min-h-screen"
    >
      <TitleSection className="week-section__title mb-1 h-[4.5rem] text-center xl:mt-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]  ">
        年度最強合作，三大主題來襲
      </TitleSection>
      <p className="week-section__subtitle mb-10 text-center text-mobile-h5 text-secondary-dark xl:mb-[6.25rem] xl:text-desktop-h5">
        各路廠商強強聯手
        <br />
        共同設計出接地氣的網頁互動挑戰關卡
      </p>
      <div className="mx-auto px-5 xl:w-[min(81.94vw,73.75rem)] 2xl:w-[min(74.9vw,89.875rem)]">
        <WeekList />
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
            target:
              ".week-list>li, .week-section__title, .week-section__subtitle",
            vars: {
              opacity: 0,
              display: "none",
            },
          },
          timeline: {
            scrollTrigger: {
              trigger: "#week-section",
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
                left: 194,
                top: 12,
              },
            },
            {
              target: ".footer-section__race",
              vars: {
                scale: 0.68,
              },
            },
            {
              target: ".footer-section__characters img",
              vars: [
                {
                  scale: 0.49,
                  bottom: 0,
                },
                {
                  scale: 0.35,
                  bottom: 39.82,
                },
                {
                  scale: 0.47,
                  bottom: 4.72,
                },
              ],
            },
            {
              target: ".week-section__title, .week-section__subtitle",
              vars: [
                {
                  display: "flex",
                  opacity: 1,
                },
                {
                  display: "block",
                  opacity: 1,
                },
              ],
            },
            {
              target: ".week-list>li:nth-child(1)",
              vars: {
                opacity: 1,
                display: "flex",
              },
              position: 1,
            },
            {
              target: ".week-list>li:nth-child(1)",
              vars: {
                opacity: 0.5,
              },
              position: 2.5,
            },
            {
              target: ".week-list>li:nth-child(2)",
              vars: {
                opacity: 1,
                display: "flex",
              },
              position: 2.5,
            },
            {
              target: ".week-list",
              vars: {
                y: -300,
              },
              position: 2.5,
            },
            {
              target: ".week-list>li:nth-child(1)",
              vars: {
                opacity: 0,
                display: "none",
              },
              position: 4,
            },
            {
              target: ".week-list>li:nth-child(2)",
              vars: {
                opacity: 0.5,
              },
              position: 4,
            },
            {
              target: ".week-list>li:nth-child(3)",
              vars: {
                opacity: 1,
                display: "flex",
              },
              position: 4,
            },
            {
              target: ".week-list",
              vars: {
                y: -600,
              },
              position: 5,
            },
            {
              target: ".week-list",
              vars: {
                opacity: 0,
                display: "none",
              },
              position: 6,
            },
            {
              target: ".week-section__title, .week-section__subtitle",
              vars: {
                opacity: 0,
                display: "none",
              },
              position: 6.5,
            },
            {
              target: ".footer-section__characters img",
              vars: [
                {
                  scale: 0.87,
                },
                {
                  scale: 0.68,
                  bottom: 50,
                },
                {
                  scale: 0.9,
                  bottom: 4,
                },
              ],
              position: 6.5,
            },
            {
              target: ".footer-section__race",
              vars: {
                scale: 0.93,
              },
              position: 6.5,
            },
          ],
        },
        {
          conditions: "(max-width:1279.98px)",
          default: [
            {
              target: ".week-section__title,.week-section__subtitle",
              vars: {
                opacity: 0,
                y: -100,
              },
            },
            {
              target: ".week-list li",
              vars: {
                opacity: 0,
              },
            },
          ],
          timeline: {
            scrollTrigger: {
              trigger: "#week-section",
              start: "top top",
              end: "+=1000",
              scrub: 1,
            },
          },
          animations: [
            {
              target: ".week-list li",
              vars: {
                opacity: 1,
              },
              position: [0, 1, 2],
            },
            {
              target: ".schedule-section__title",
              vars: {
                y: 0,
                opacity: 1,
              },
              position: 3,
            },
            {
              target: ".schedule-list li:nth-child(1)",
              vars: {
                opacity: 1,
              },
              position: 4,
            },
          ],
        },
      ]}
    />
  );
}
