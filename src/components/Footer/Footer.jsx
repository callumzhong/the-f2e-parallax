import JoinButton from "../JoinButton";
import { H5 } from "../Typography";
import RaceTrack from "./RaceTrack";

export function gsapAnimationHandler(gsap) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-section",
      markers: true,
      start: "top 40%",
      end: "top 10%",
      scrub: true,
    },
  });

  tl.to(".footer-section__race", {
    maxHeight: "33.25vh",
    maxWidth: "900px",
    duration: 10,
  });
}

export default function Footer() {
  return (
    <footer className="footer-section fixed inset-x-0 bottom-0 flex justify-center px-5">
      <div className="footer-section__race relative flex w-full justify-center pb-4 md:w-[45.44vw] lg:max-h-[52vh] lg:w-full lg:max-w-[1175px] lg:gap-6">
        <RaceTrack />
      </div>
      <div className="absolute right-4 bottom-0 hidden text-center lg:block">
        <H5 as="p" className="mb-6 text-primary">
          JOIN
        </H5>
        <JoinButton href="https://2022.thef2e.com/signup" isStay isAnimation />
      </div>
    </footer>
  );
}
