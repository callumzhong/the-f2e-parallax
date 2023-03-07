import gsap from "gsap";
import { useEffect } from "react";
import { gsapToHandler } from "@/components/GSAPanimation";
import Characters from "./Characters";
import FinishLine from "./FinishLine";
import Join from "./Join";
import Map from "./Map";
import RaceTrack from "./RaceTrack";

const gsapConfig = [
  {
    target: ".footer-section__characters img",
    vars: [
      {
        left: -50,
      },
      {
        left: 50,
      },
      {
        left: 50,
      },
    ],
  },
  {
    target: ".footer-section__characters img",
    vars: { left: 0 },
  },
];

export default function Footer() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    const mouseHandler = (e) => {
      mm.add("(min-width:1280px)", () => {
        let isRight = false;
        const centerPosition = Math.floor(window.innerWidth / 2);
        const { clientX } = e;
        // right
        isRight = clientX > centerPosition;

        if (isRight) {
          gsapToHandler({
            target: gsapConfig[0].target,
            vars: gsapConfig[0].vars,
          });
        } else {
          gsapToHandler({
            target: gsapConfig[1].target,
            vars: gsapConfig[1].vars,
          });
        }
      });
      mm.add("(max-width:1279.98px)", () => {
        gsapToHandler({
          target: gsapConfig[1].target,
          vars: gsapConfig[1].vars,
        });
      });
    };
    window.addEventListener("mousemove", mouseHandler);
  }, []);
  return (
    <footer className="footer-section fixed inset-x-0 bottom-0 z-10">
      <Map />
      <RaceTrack />
      <Characters />
      <Join />
      <FinishLine />
    </footer>
  );
}
