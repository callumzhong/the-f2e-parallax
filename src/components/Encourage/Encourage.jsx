import gsap from "gsap";
import gaspTimelineAddHandler from "@/utils/gaspTimelineAddHandler";
import { Graffiti } from "../Decorate";

const gsapConfig = {
  default: [
    {
      target: "#encourage-section .graffiti-left",
      vars: {
        left: "-100%",
        bottom: "-35%",
      },
    },
    {
      target: "#encourage-section .graffiti-right",
      vars: {
        right: "-100%",
        bottom: "-35%",
      },
    },
    {
      target: ".encourage-section__text",
      vars: {
        scale: "1.5",
        y: -80,
        opacity: 0,
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
      target: ".footer-section__race",
      vars: {
        scale: 0.97,
      },
    },
    {
      target: ".footer-section__characters img",
      vars: [
        {
          scale: 1.16,
          bottom: -20,
        },
        {
          scale: 1.03,
          bottom: 23,
        },
        {
          scale: 1.15,
          bottom: -5,
        },
      ],
    },
    {
      target:
        "#encourage-section .graffiti-left, #encourage-section .graffiti-right",
      vars: [
        {
          left: "-20%",
          bottom: 0,
        },
        {
          right: "-20%",
          bottom: 0,
        },
      ],
    },
    {
      target: ".encourage-section__text",
      vars: {
        opacity: 1,
        scale: 1,
        y: 0,
      },
      position: 1,
    },

    {
      target:
        "#encourage-section .graffiti-left, #encourage-section .graffiti-right",
      vars: [
        {
          left: 0,
        },
        {
          right: 0,
        },
      ],
      position: 1,
    },
    {
      target:
        "#encourage-section .graffiti-left, #encourage-section .graffiti-right",
      vars: [
        {
          scale: 0.5,
          left: "40%",
          opacity: 0,
        },
        {
          scale: 0.5,
          right: "40%",
          opacity: 0,
        },
      ],
      position: 3,
    },
    {
      target: ".encourage-section__text",
      vars: {
        opacity: 0,
      },
      position: 3,
    },
  ],
};

const gsapMobileConfig = {
  default: [
    {
      target: ".encourage-section__text",
      vars: {
        opacity: 0,
        scale: 3,
        y: -300,
      },
    },
  ],
  child: [
    {
      target: ".trophy-section__title",
      vars: {
        opacity: 1,
        y: 0,
      },
    },
    {
      target: ".trophy-content >div",
      vars: {
        opacity: 1,
      },
      position: 1,
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
      position: 1,
    },
    {
      target: ".trophy-content__mask",
      vars: {
        keyframes: {},
      },
      position: 1.5,
    },
  ],
};

export function HandleOfEncourageAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#encourage-section",
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });
    gaspTimelineAddHandler({ tl, config: gsapConfig });
  });

  mm.add("(max-width:1279.98px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#encourage-section",
        start: "top top",
        end: "+=200",
        scrub: 1,
      },
    });
    gaspTimelineAddHandler({
      tl,
      config: gsapMobileConfig,
    });
  });
}

export default function Encourage() {
  return (
    <section
      id="encourage-section"
      className="relative overflow-hidden xl:h-screen"
    >
      <p className="encourage-section__text pt-[14.25rem] pb-[15.75rem] text-center text-mobile-h2 text-highlight xl:pb-0 xl:pt-[14.5rem] xl:text-desktop-h2">
        ????????????
        <br className="xl:hidden" />
        ???????????????????????????
      </p>
      <Graffiti />
    </section>
  );
}
