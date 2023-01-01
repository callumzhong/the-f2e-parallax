import gsap from "gsap";
import gaspTimelineAddHandler from "@/utils/gaspTimelineAddHandler";
import Button from "../Button";
import { Clouds, ReadyFrame } from "../Decorate";
import Banner from "./Banner";
import KanbanList from "./KanbanList";

const gsapConfig = {
  child: [
    {
      target: "#kanban-section .cloud-left, #kanban-section .cloud-right",
      vars: {
        scale: 0.75,
      },
    },
    {
      target: "#kanban-section .cloud-left, #kanban-section .cloud-right",
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
      position: 1.5,
    },
    {
      target: "#kanban-section .cloud-left, #kanban-section .cloud-right",
      vars: {
        scale: 0.3,
        opacity: 0,
        y: -40,
      },
      position: 2,
    },
    {
      target: ".ready-frame__text, .ready-frame__center, .ready-frame__right",
      vars: {
        opacity: 0,
      },
    },
    {
      type: "set",
      target: ".ready-frame__text",
      vars: {
        text: "GO!!",
      },
      position: 1.5,
    },
    {
      target: ".ready-frame__left, .ready-frame__center",
      vars: [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      position: 1.5,
    },
    {
      target: ".ready-frame__center, .ready-frame__right",
      vars: [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      position: 3,
    },
    {
      target: ".ready-frame__text",
      vars: {
        opacity: 1,
      },
      position: 3,
    },
    {
      target: ".kanban-content",
      vars: {
        display: "none",
        opacity: 0,
      },
      position: 4,
    },
    {
      target: "#kanban-section",
      vars: {
        display: "none",
        opacity: 0,
      },
      position: 4.5,
    },
  ],
};
const gsapMobileConfig = {
  default: [
    {
      target: ".question-section__title",
      vars: {
        y: 100,
        opacity: 0,
      },
    },
    {
      target: ".footer-section .join",
      vars: {
        opacity: 0,
        display: "none",
      },
    },
  ],
  child: [
    {
      target: ".ready-frame",
      vars: {
        opacity: 0,
      },
    },
    {
      target: ".footer-section__race",
      vars: {
        scale: 0.47,
      },
      position: 1,
    },
    {
      target: ".footer-section__characters",
      vars: {
        scale: 0.47,
      },
      position: 1,
    },
    {
      target: ".footer-section .join",
      vars: {
        display: "block",
        opacity: 1,
      },
      position: 1,
    },
    {
      target: ".question-section__title",
      vars: {
        opacity: 1,
        y: 0,
      },
      position: 1,
    },
    {
      target: ".question-list > li:nth-child(1)",
      vars: {
        x: 0,
        y: 0,
        opacity: 1,
      },
      position: 2,
    },
  ],
};

export function HandleOfKanbanAnimation() {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#kanban-section",
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
        trigger: "#kanban-section",
        start: "top top",
        end: "+=300",
        scrub: 1,
      },
    });
    gaspTimelineAddHandler({
      tl,
      config: gsapMobileConfig,
    });
  });
}

export default function Kanban() {
  return (
    <section id="kanban-section" className="h-screen">
      <Banner />
      <Button
        color="highlight"
        className="mx-auto mb-5 w-max px-[0.9375rem] py-1 xl:-mt-6 xl:mb-[min(6.25vh,4rem)] xl:py-2 xl:px-10"
      >
        <h1 className="text-mobile-h1 xl:text-desktop-h1">互動式網頁設計</h1>
      </Button>
      <div className="kanban-content relative mx-auto">
        <KanbanList />
        <Clouds>
          <ReadyFrame />
        </Clouds>
      </div>
    </section>
  );
}
