import gsap from "gsap";
import gaspTimelineAddHandler from "@/utils/gaspTimelineAddHandler";
import TitleSection from "../TitleSection";
import Content from "./Content";

const gsapConfig = {
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
  child: [
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
};

export function HandleOfTrophyAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#trophy-section",
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });
    gaspTimelineAddHandler({ tl, config: gsapConfig });
  });
}

export default function Trophy() {
  return (
    <section id="trophy-section" className="xl:h-screen">
      <TitleSection className="trophy-section__title mx-auto mb-10 h-[4.5rem] w-full xl:my-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        還有比賽等著你！
      </TitleSection>
      <div className="mx-auto px-5 pb-[3.75rem] md:w-[62.24vw] xl:w-[min(81.94vw,73.75rem)] 2xl:w-[75rem]">
        <Content />
      </div>
    </section>
  );
}
