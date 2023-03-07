import { forwardRef } from "react";
import TitleSection from "../TitleSection";
import Content from "./Content";
import GSAPanimation from "../GSAPanimation";

const ForwardRefComponent = forwardRef(function Trophy(_, ref) {
  return (
    <section ref={ref} id="trophy-section" className="xl:h-screen">
      <TitleSection className="trophy-section__title mx-auto mb-10 h-[4.5rem] w-full xl:my-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        還有比賽等著你！
      </TitleSection>
      <div className="mx-auto overflow-hidden px-5 pb-[3.75rem] md:w-[62.24vw] xl:w-[min(81.94vw,73.75rem)] 2xl:w-[75rem]">
        <Content />
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
          default: [
            {
              target: ".trophy-section__title",
              vars: {
                opacity: 0,
              },
            },
            {
              target: ".trophy-content",
              vars: {
                opacity: 0,
                x: -100,
              },
            },
          ],
          timeline: {
            scrollTrigger: {
              trigger: "#trophy-section",
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
                left: 150,
                top: 78,
              },
            },
            {
              target: ".map-now",
              vars: {
                left: 140,
                top: 30,
              },
              position: 0.25,
            },
            {
              target: ".map-now",
              vars: {
                left: 128,
                top: 87,
              },
              position: 0.5,
            },
            {
              target: ".footer-section__race",
              vars: {
                scale: 0.85,
              },
            },
            {
              target: ".footer-section__characters img",
              vars: [
                {
                  scale: 0.82,
                  bottom: -15,
                },
                {
                  scale: 0.57,
                  bottom: 20,
                },
                {
                  scale: 0.87,
                  bottom: -15,
                },
              ],
            },
            {
              target: ".trophy-section__title, .trophy-content",
              vars: [
                {
                  opacity: 1,
                },
                {
                  opacity: 1,
                  x: 0,
                },
              ],
            },
            {
              target: ".trophy-content__mask",
              vars: {
                keyframes: {
                  "0%": { rotate: 0 },
                  "50%": { rotate: 180 },
                  "100%": { rotate: 360 },
                },
              },
            },
            {
              target: ".trophy-content__mask",
              vars: {
                keyframes: {},
              },
              position: 0.5,
            },
            {
              target: ".trophy-section__title, .trophy-content",
              vars: [
                {
                  opacity: 0,
                },
                {
                  opacity: 0,
                  x: 100,
                },
              ],
              position: 2,
            },
            {
              target: ".trophy-content__mask",
              vars: {
                keyframes: {
                  "0%": { rotate: 0 },
                  "50%": { rotate: 180 },
                  "100%": { rotate: 360 },
                },
              },
              position: 2,
            },
          ],
        },
        {
          conditions: "(max-width:1279.98px)",
          default: [
            {
              target: ".trophy-section__title",
              vars: {
                opacity: 0,
                y: -100,
              },
            },
            {
              target: ".trophy-content >div, .trophy-content > ul",
              vars: [
                {
                  opacity: 0,
                },
                {
                  opacity: 0,
                  y: 100,
                },
              ],
            },
          ],
          timeline: {
            scrollTrigger: {
              trigger: "#trophy-section",
              start: "top top",
              end: "+=600",
              scrub: 1,
            },
          },
          animations: [
            {
              target: ".trophy-content > ul",
              vars: {
                opacity: 1,
                y: 0,
              },
            },
            {
              target: ".trophy-content__mask",
              vars: {
                keyframes: {
                  "0%": { rotate: 0 },
                  "50%": { rotate: -180 },
                  "100%": { rotate: -360 },
                },
              },
            },
            {
              target: ".sponsor-section__title",
              vars: {
                opacity: 1,
                y: 0,
              },
              position: 1,
            },
            {
              target: ".sponsor-list li:nth-child(1)",
              vars: {
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
