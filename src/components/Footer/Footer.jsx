import Join from "./Join";
import Map, { mapAnimationHandler } from "./Map";
import RaceTrack, { raceAnimationHandler } from "./RaceTrack";

export function footerAnimationHandler(gsap) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-section",
      markers: true,
      start: "top 40%",
      end: "top 10%",
      scrub: true,
    },
  });
  raceAnimationHandler(tl);
  mapAnimationHandler(tl);
}

export default function Footer() {
  return (
    <footer className="footer-section fixed inset-x-0 bottom-0 flex justify-center px-5">
      <RaceTrack />
      <Join />
      <Map />
    </footer>
  );
}
