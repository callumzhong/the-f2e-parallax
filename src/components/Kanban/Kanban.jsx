import Button from "../Button";
import { Clouds, ReadyFrame } from "../Decorate";
import Banner from "./Banner";
import KanbanList from "./KanbanList";

export function HandleOfKanbanAnimation(gsap) {
  const mm = gsap.matchMedia();
  mm.add("(min-width:1280px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#kanban-section",
        markers: true,
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
      },
    });
    tl.addLabel("start")
      // 雲縮小往內飄進來
      .to(
        ".cloud-left",
        {
          scale: 0.75,
        },
        "start"
      )
      .to(
        ".cloud-right",
        {
          scale: 0.75,
        },
        "start"
      )
      // 隱藏紅綠燈文字, 只顯示紅燈
      .to(
        ".ready-frame__text",
        {
          opacity: 0,
        },
        "start"
      )
      .to(
        ".ready-frame__center",
        {
          opacity: 0,
        },
        "start"
      )
      .to(
        ".ready-frame__right",
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
        "start+=0.5"
      )
      .to(
        ".cloud-left",
        {
          x: 60,
          y: -10,
        },
        "start+=0.5"
      )
      .to(
        ".cloud-right",
        {
          x: -60,
          y: -10,
        },
        "start+=0.5"
      )
      .to(
        ".ready-frame__left",
        {
          opacity: 0,
        },
        "start+=0.5"
      )
      .to(
        ".ready-frame__center",
        {
          opacity: 1,
        },
        "start+=0.5"
      )
      // part-3
      // 隱藏雲朵, 切換紅綠燈
      .to(
        ".cloud-left",
        {
          scale: 0.3,
          opacity: 0,
        },
        "start+=1"
      )
      .to(
        ".cloud-right",
        {
          scale: 0.3,
          opacity: 0,
        },
        "start+=1"
      )
      .to(
        ".ready-frame__center",
        {
          opacity: 0,
        },
        "start+=1"
      )
      .to(
        ".ready-frame__right",
        {
          opacity: 1,
        },
        "start+=1"
      )
      .to(
        ".ready-frame__text",
        {
          opacity: 1,
        },
        "start+=1"
      )
      // part-4
      // 隱藏其餘區塊
      .to(".kanban-content", { opacity: 0 }, "start+=1.5")
      .to("#kanban-section", { opacity: 0 }, "start+=2");
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
