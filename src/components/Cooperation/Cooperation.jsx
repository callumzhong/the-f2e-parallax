import gsap from "gsap";
import gaspTimelineAddHandler from "@/utils/gaspTimelineAddHandler";
import TitleSection from "../TitleSection/TitleSection";
import CooperationList from "./CooperationList";

const gsapConfig = {
  default: [
    {
      target: ".cooperation-section__title, .cooperation-section__subtitle",
      vars: {
        opacity: 0,
      },
    },
    {
      target: ".cooperation-list",
      vars: {
        opacity: 0,
        y: 50,
        display: "none",
      },
    },
  ],
  child: [
    {
      target: ".map-now",
      vars: {
        left: 80,
        top: 0,
      },
    },
    {
      target: ".cooperation-section__title, .cooperation-section__subtitle",
      vars: {
        opacity: 1,
      },
    },
    {
      target: ".map-now",
      vars: {
        left: 114,
        top: 12,
      },
      position: 0.5,
    },
    {
      target: ".cooperation-list",
      vars: {
        opacity: 1,
        y: 0,
        display: "flex",
      },
      position: 1.5,
    },
    {
      target: ".cooperation-section__title, .cooperation-section__subtitle",
      vars: {
        opacity: 0,
      },
      position: 5,
    },
    {
      target: ".cooperation-list",
      vars: {
        opacity: 0,
        y: 50,
        display: "none",
      },
      position: 5,
    },
  ],
};

export function HandleOfCooperationAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cooperation-section",
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });

    gaspTimelineAddHandler({ tl, config: gsapConfig });
  });
}
export default function Cooperation() {
  return (
    <section
      id="cooperation-section"
      className="pb-[3.75rem] xl:h-screen xl:pb-0"
    >
      <TitleSection className="cooperation-section__title mb-1 h-[4.5rem] w-full text-center xl:mb-0 xl:mt-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        本屆主題：互動式網頁設計？
      </TitleSection>
      <p className="cooperation-section__subtitle mb-10 text-center text-mobile-h5 text-secondary-dark md:text-desktop-h5 xl:mb-[min(3.81vh,2.4375rem)] xl:font-normal 2xl:font-bold">
        以下兩個角色進行攜手合作
      </p>
      <div className="mx-auto px-5 md:w-[62.24vw] xl:w-[min(81.94vw,73.75rem)]">
        <CooperationList />
      </div>
    </section>
  );
}
