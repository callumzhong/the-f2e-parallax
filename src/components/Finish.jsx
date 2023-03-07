import { forwardRef } from "react";
import ImageFinish from "@/assets/main/finish.png";
import { Clouds } from "./Decorate";
import GSAPanimation from "./GSAPanimation";

const ForwardRefComponent = forwardRef(function Finish(_, ref) {
  return (
    <section
      ref={ref}
      id="finish-section"
      className="relative hidden xl:block xl:h-screen"
    >
      <img className="mx-auto h-full" src={ImageFinish} alt="" />
      <div className="absolute top-1/2">
        <Clouds />
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
              target: "#finish-section>img, .footer-section .line",
              vars: {
                opacity: 0,
              },
            },
            {
              target:
                "#finish-section .cloud-left > img, #finish-section .cloud-right > img",
              vars: [
                {
                  left: "-100%",
                },
                {
                  right: "-100%",
                },
              ],
            },
          ],
          timeline: {
            scrollTrigger: {
              trigger: "#finish-section",
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
                left: 29,
                top: 107,
              },
            },
            {
              target: ".map-finish",
              vars: {
                zIndex: 0,
              },
            },
            {
              target:
                "#finish-section .cloud-left img, #finish-section .cloud-right img",
              vars: [
                {
                  left: 0,
                },
                {
                  right: 0,
                },
              ],
            },
            {
              target: ".footer-section__race",
              vars: {
                scale: 1,
              },
              position: 2,
            },
            {
              target: "#finish-section>img, footer .line",
              vars: {
                opacity: 1,
              },
              position: 2,
            },
            {
              target: ".footer-section .line >img",
              vars: [
                {
                  skewY: -4,
                  x: -250,
                },
                {
                  skewY: 4,
                  x: 250,
                },
              ],
              position: 2,
            },
            {
              target: ".footer-section .line >img",
              vars: [
                {
                  x: -999,
                  opacity: 0,
                },
                {
                  x: 999,
                  opacity: 0,
                },
              ],
              position: 3,
            },
            {
              target:
                "#finish-section .cloud-left, #finish-section .cloud-right",
              vars: [
                {
                  scale: 0.75,
                },
                {
                  scale: 0.75,
                },
              ],
              position: 1.5,
            },
            {
              target:
                "#finish-section .cloud-left, #finish-section .cloud-right",
              vars: [
                {
                  scale: 0.7,
                  x: 60,
                  y: -10,
                },
                {
                  scale: 0.7,
                  x: -60,
                  y: -10,
                },
              ],
              position: 2,
            },
            {
              target:
                "#finish-section .cloud-left, #finish-section .cloud-right",
              vars: {
                scale: 0.3,
                opacity: 0,
                y: -40,
              },
              position: 3,
            },
            {
              target: ".footer-section__characters img",
              vars: [
                {
                  scale: 1,
                  bottom: 15,
                },
                {
                  scale: 1,
                  bottom: 26,
                },
                {
                  scale: 1,
                  bottom: 10,
                },
              ],
              position: 1.5,
            },
            {
              target: ".footer-section__characters img",
              vars: [
                {
                  scale: 1.2,
                  bottom: 0,
                },
                {
                  scale: 1.4,
                  bottom: 0,
                },
                {
                  scale: 1.3,
                  bottom: 0,
                },
              ],
              position: 2,
            },
            {
              target: ".footer-section__characters img",
              vars: [
                {
                  scale: 1.6,
                  bottom: 0,
                },
                {
                  scale: 1.9,
                  bottom: 0,
                },
                {
                  scale: 1.7,
                  bottom: 0,
                },
              ],
              position: 2.5,
            },
            {
              target: ".footer-section__characters img",
              vars: [
                {
                  scale: 1.9,
                  opacity: 0,
                },
                {
                  scale: 2.3,
                  opacity: 0,
                },
                {
                  scale: 2,
                  opacity: 0,
                },
              ],
              position: 4,
            },
            {
              target: "#finish-section>img",
              vars: {
                opacity: 0,
              },
              position: 4.5,
            },
          ],
        },
      ]}
    />
  );
}
