import gsap from "gsap";
import Button from "../Button";
import { Clouds, ReadyFrame } from "../Decorate";
import Banner from "./Banner";
import KanbanList from "./KanbanList";

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
    tl.addLabel("start")
      // 雲縮小往內飄進來
      .to(
        ".cloud-left, .cloud-right",
        {
          scale: 0.75,
        },
        "start"
      )
      // 隱藏紅綠燈文字, 只顯示紅燈
      .to(
        ".ready-frame__text, .ready-frame__center, .ready-frame__right",
        {
          opacity: 0,
        },
        "start"
      )
      // part 2
      // 雲往中間飄 start
      .set(
        ".ready-frame__text",
        {
          text: "GO!!",
        },
        "start+=1.5"
      )
      .to(
        ".cloud-left, .cloud-right",
        {
          x: gsap.utils.wrap([60, -60]),
          y: -10,
        },
        "start+=1.5"
      )
      .to(
        ".ready-frame__left, .ready-frame__center",
        {
          opacity: gsap.utils.wrap([0, 1]),
        },
        "start+=1.5"
      )
      // part-3
      // 隱藏雲朵, 切換紅綠燈
      .to(
        ".cloud-left, .cloud-right",
        {
          scale: 0.3,
          opacity: 0,
        },
        "start+=3"
      )
      .to(
        ".ready-frame__center, .ready-frame__right",
        {
          opacity: gsap.utils.wrap([0, 1, 1]),
        },
        "start+=3"
      )
      .to(
        ".ready-frame__text",
        {
          opacity: 1,
        },
        "start+=3"
      )
      // part-4
      // 隱藏其餘區塊
      .to(".kanban-content", { opacity: 0 }, "start+=4")
      .to("#kanban-section", { opacity: 0 }, "start+=4.5");
  });
}

export default function Kanban() {
  return (
    <section id="kanban-section" className="mx-auto min-h-screen">
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
