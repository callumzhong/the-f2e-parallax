import gsap from "gsap";
import TitleSection from "../TitleSection/TitleSection";
import SponsorList from "./SponsorList";
import gaspTimelineAddHandler from "@/utils/gaspTimelineAddHandler";

const gsapConfig = {
  default: [
    {
      target: ".footer-section__race .tree-left",
      vars: {
        scale: 1.5,
        opacity: 0,
        x: -200,
        y: 200,
        display: "none",
      },
    },
    {
      target: ".footer-section__race .tree-right",
      vars: {
        scale: 1.5,
        opacity: 0,
        x: 200,
        y: 200,
        display: "none",
      },
    },
    {
      target: ".sponsor-section__title",
      vars: {
        opacity: 0,
      },
      display: "none",
    },
    {
      target: ".sponsor-list li",
      vars: {
        opacity: 0,
        y: 60,
        display: "none",
      },
    },
  ],
  child: [
    {
      target: ".map-now",
      vars: {
        left: 83,
        top: 122,
      },
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
          scale: 0.92,
          bottom: -25,
        },
        {
          scale: 0.65,
          bottom: 40,
        },
        {
          scale: 0.69,
          bottom: 15,
        },
      ],
    },
    {
      target:
        ".footer-section__race .tree-left, .footer-section__race .tree-right",
      vars: {
        display: "block",
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      },
      position: 0.5,
    },
    {
      target: ".sponsor-section__title",
      vars: {
        opacity: 1,
        display: "flex",
      },
      position: 0.5,
    },
    {
      target: ".sponsor-list li",
      vars: {
        opacity: 1,
        display: "block",
        y: 0,
      },
      position: [1.5, 2, 2.5],
    },
    {
      target: ".sponsor-section__title",
      vars: {
        opacity: 0,
        display: "none",
      },
      position: 5,
    },
    {
      target: ".sponsor-list li",
      vars: {
        opacity: 0,
        y: 30,
        display: "none",
      },
      position: 5,
    },
    {
      target:
        ".footer-section__race .tree-left, .footer-section__race .tree-right",
      vars: [
        {
          scale: 0.7,
          opacity: 0,
          display: "none",
          x: 200,
          y: -50,
        },
        {
          scale: 0.7,
          opacity: 0,
          display: "none",
          x: -200,
          y: -50,
        },
      ],
      position: 5,
    },
  ],
};
export function HandleOfSponsorAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sponsor-section",
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });

    gaspTimelineAddHandler({ tl, config: gsapConfig });
  });
}

export default function Sponsor() {
  return (
    <section id="sponsor-section" className="overflow-hidden xl:h-screen">
      <TitleSection className="sponsor-section__title mx-auto mb-10 h-[4.5rem] w-full xl:mt-10 xl:mb-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        贊助單位
      </TitleSection>
      <div className="relative mx-auto xl:w-[min(83.06vw,74.75rem)]">
        <SponsorList />
      </div>
    </section>
  );
}
