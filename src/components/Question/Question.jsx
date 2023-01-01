import gsap from "gsap";
import gaspTimelineAddHandler from "@/utils/gaspTimelineAddHandler";
import TitleSection from "../TitleSection";
import QuestionList from "./QuestionList";

const gsapConfig = {
  default: [
    {
      target: ".footer-section__race .flower",
      vars: {
        y: 200,
        scale: 1.2,
        opacity: 0,
        display: "none",
      },
    },
    {
      target: ".question-list>li:nth-child(2), .question-section__title",
      vars: {
        opacity: 0,
      },
    },
    {
      target: ".question-list>li:nth-child(1)",
      vars: {
        x: -20,
        opacity: 0,
      },
    },
    {
      target: ".question-list>li:nth-child(3)",
      vars: {
        x: 20,
        opacity: 0,
      },
    },
  ],
  child: [
    {
      target: ".map-now",
      vars: {
        left: 44,
        top: 2,
      },
    },
    {
      target: ".footer-section__race",
      vars: {
        scale: 0.77,
      },
    },
    {
      target: ".footer-section__characters img",
      vars: {
        scale: 0.61,
      },
    },
    {
      target: ".question-section__title",
      vars: {
        opacity: 1,
      },
    },
    {
      target: ".footer-section__race .flower",
      vars: {
        display: "flex",
        y: -30,
        opacity: 1,
      },
    },
    {
      target: ".question-list li",
      vars: [
        {
          x: 0,
          opacity: 1,
          display: "block",
        },
        {
          opacity: 1,
          display: "block",
        },
        {
          x: 0,
          opacity: 1,
          display: "block",
        },
      ],
      position: [1.5, 3, 4.5],
    },
    {
      target: ".footer-section__race .flower",
      vars: {
        y: -40,
        scale: 0.8,
      },
      position: 1.5,
    },
    {
      target: ".footer-section__race .flower",
      vars: {
        y: -50,
        scale: 0.6,
      },
      position: 3,
    },
    {
      target: ".footer-section__race .flower",
      vars: {
        y: -60,
        scale: 0.2,
        opacity: 0,
        display: "none",
      },
      position: 4.5,
    },
    {
      target: "#question-section *",
      vars: {
        display: "none",
        opacity: 0,
      },
      position: 5,
    },
    {
      target: ".footer-section__race",
      vars: {
        scale: 0.97,
      },
      position: 5.5,
    },
    {
      target: ".footer-section__characters img",
      vars: [
        {
          scale: 1.01,
          bottom: 3,
        },
        {
          scale: 0.89,
          bottom: 23,
        },
        {
          scale: 1,
          bottom: 12,
        },
      ],
      position: 5.5,
    },
  ],
};

const gsapMobileConfig = {
  default: [
    {
      target: ".question-list li",
      vars: {
        opacity: 0,
      },
    },
    {
      target: ".question-list > li:nth-child(1)",
      vars: {
        x: -200,
        y: -200,
      },
    },
    {
      target: ".question-list > li:nth-child(2)",
      vars: {
        y: -200,
      },
    },
    {
      target: ".question-list > li:nth-child(3)",
      vars: {
        y: -200,
        x: 200,
      },
    },
  ],
  child: [
    {
      target: ".question-list > li:nth-child(1)",
      vars: {
        x: 0,
        y: 0,
        opacity: 1,
      },
    },
    {
      target: ".question-list > li:nth-child(2)",
      vars: {
        y: 0,
        opacity: 1,
      },
      position: 1.5,
    },
    {
      target: ".question-list > li:nth-child(3)",
      vars: {
        y: 0,
        x: 0,
        opacity: 1,
      },
      position: 2,
    },
    {
      target: ".cooperation-section__title,.cooperation-section__subtitle",
      vars: {
        opacity: 1,
        y: 0,
      },
      position: 3,
    },
    {
      target: ".cooperation-list > li:nth-child(1)",
      vars: {
        x: 0,
        y: 0,
        opacity: 1,
      },
      position: 4,
    },
  ],
};

export function HandleOfQuestionAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#question-section",
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
        trigger: "#question-section",
        start: "top top",
        end: "+=800",
        scrub: 1,
      },
    });
    gaspTimelineAddHandler({
      tl,
      config: gsapMobileConfig,
    });
  });
}

export default function Question() {
  return (
    <section
      id="question-section"
      className="relative pb-[3.75rem] xl:h-screen xl:pb-0"
    >
      <TitleSection className="question-section__title mx-auto mb-10 h-[4.5rem] w-full xl:my-[min(3.91vh,2.5rem)] xl:h-[min(14.75vh,9.4375rem)]">
        你是否也有以下困擾？
      </TitleSection>
      <div className="mx-auto px-5 md:max-w-[29.75rem] xl:max-w-none xl:pl-5 xl:pr-[0.625rem] 2xl:max-w-[90rem]">
        <QuestionList />
      </div>
    </section>
  );
}
